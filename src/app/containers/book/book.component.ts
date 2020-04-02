import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { HomeService } from '../../services/home.service';
import { UserService } from 'src/app/services/user.service';
import { BookService } from 'src/app/services/book.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
public book;
public review;
public message;
  constructor(private route: ActivatedRoute,
    private homeService: HomeService,
    public bookService: BookService,
    private location: Location, public userService:UserService, public router:Router) { }
    public admins =['superAdmin','admin','dios'];

  ngOnInit(): void {
    const id= +this.route.snapshot.paramMap.get('id');
    this.homeService.getBook(id).subscribe(book =>this.book=book)
  }

  deleteBook(book){
    const id= +this.route.snapshot.paramMap.get('id');
    this.bookService.delete(id)
    .subscribe(book=>{this.book=book;
      this.router.navigate(['/books'])},
   err=>console.error(err))
  }
public input: string
  postReview(reviewForm:NgForm) {
    const review = {
      BookId: +this.route.snapshot.paramMap.get('id'),
      UserId: this.userService['user']['id'],
      review: this.input
    }
    console.log(review)
    this.homeService.review(review)
    .subscribe (
      (res:HttpResponse<object>)=>{
        const bookId = +this.route.snapshot.paramMap.get('id')
                this.homeService.getBook(bookId)
                .subscribe (res=>{this.book=res},
                  err=>console.error(err))

            },

            
    )}
}

// register(registerForm:NgForm){
//   if(registerForm.valid){
//     const user =registerForm.value;
// //     this.userService.signup(user)
//     .subscribe(
//       (res:HttpResponse<object>)=>{
//         this.successMsg=res['message'];
//         setTimeout(() => {
//           this.router.navigate(['login'])
//         }, 2000);
//     },
//     (error:HttpErrorResponse)=>{
//       this.errorMsg=error['error']['message'];
//       setTimeout(() =>  this.errorMsg="" , 2000);