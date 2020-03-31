import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { NgForOf } from '@angular/common';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  
  constructor(public bookService: BookService , public router:Router) { }
  public message;
  public genres:Array<object>;
  public GenreyId;
  public authors;
  public AuthorId;
  public book;
  ngOnInit(){
    this.bookService.getGenres()
    .subscribe(
      res=>this.genres=res,
      error=>console.log(error)
    )
    this.bookService.getAuthors()
    .subscribe(
      res=>this.authors=res,
      error=>console.log(error)
    )
  }
  
 addBook(addBookForm:NgForm) {
  if(addBookForm.valid){
    const book =addBookForm.value;
    this.bookService.insert(book)
    .subscribe(
      (res:HttpResponse<object>)=>{
        this.message=res['message'];
        setTimeout(() => {
          this.router.navigate(['login'])
        }, 2000);
    },
    err=>console.error(err)
  )
  }
 }

  

}
