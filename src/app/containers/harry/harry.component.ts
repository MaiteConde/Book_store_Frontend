import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-harry',
  templateUrl: './harry.component.html',
  styleUrls: ['./harry.component.scss']
})
export class HarryComponent implements OnInit {

  constructor(public homeService:HomeService) { }
  public books;
  ngOnInit(): void {
  this.homeService.getByName(this.books)
  .subscribe(
    res => {
      this.books = res;
    },
    error => console.error(error)
  );
};
}
