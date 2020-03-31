import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(public httpClient: HttpClient) { }
  insert(book:object):Observable<any>{
    return this.httpClient.post('http://localhost:3000/books',book);
  }
  getGenres():Observable<any>{
    return this.httpClient.get('http://localhost:3000/genres')
  }

  getAuthors():Observable<any>{
    return this.httpClient.get('http://localhost:3000/authors')
  }

}

