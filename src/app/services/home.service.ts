import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(public httpClient:HttpClient) { }
public books;
  getAllBooks(books:object):Observable<any>{
   return this.httpClient.get('http://localhost:3000/books')
  }
 getBook (id:number):Observable<any>{
   return this.httpClient.get(`http://localhost:3000/books/${id}`)
 }
 getByName (name:string):Observable<any> {
   return this.httpClient.get(`http://localhost:3000/books/name/harry`)
 }
 getAuthor (name:string):Observable<any> {
  return this.httpClient.get(`http://localhost:3000/authors/name/agatha`)
}
review(review:object):Observable<any>{
  return this.httpClient.post('http://localhost:3000/reviews', review)
}

}