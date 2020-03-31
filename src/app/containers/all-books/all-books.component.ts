import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent implements OnInit {

  constructor(public homeService:HomeService) { }
  public books;
    ngOnInit(): void {
    this.homeService.getAllBooks(this.books)
    .subscribe(
      res => {
        this.books = res;
      },
      error => console.error(error)
    );
  };

}
