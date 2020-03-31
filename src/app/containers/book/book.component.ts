import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { HomeService } from '../../services/home.service';



@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
public book;
  constructor(private route: ActivatedRoute,
    private homeService: HomeService,
    private location: Location) { }

  ngOnInit(): void {
    const id= +this.route.snapshot.paramMap.get('id');
    this.homeService.getBook(id).subscribe(book =>this.book=book)
  }

}
