import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public homeService: HomeService) { }
public authors;
public book;
public author;
  ngOnInit(): void {
  this.homeService.getAuthor(this.authors)
  .subscribe(
    res => {
      this.authors = res;
    },
    error => console.error(error)
  );
};
}
  


