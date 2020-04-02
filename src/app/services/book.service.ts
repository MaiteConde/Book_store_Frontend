import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  public books;
  constructor(public httpClient: HttpClient, public userService: UserService, public router: Router) { }


  insert(book: object): Observable<any> {
    return this.httpClient.post('http://localhost:3000/books', book,
    {headers:
      {authorization: this.userService.token} });
  }
  getGenres(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/genres');
  }

  getAuthors(): Observable<any>{
    return this.httpClient.get('http://localhost:3000/authors');
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(`http://localhost:3000/books/${id}`, 
    {headers:
      {authorization: this.userService.token} })
  }
}

