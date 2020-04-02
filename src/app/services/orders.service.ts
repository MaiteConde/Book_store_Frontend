import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  public orders:object[];
  constructor(public httpClient: HttpClient, public userService: UserService) { }
  //   getOrders():Observable<any>{
  //     return this.httpClient.get(`http://localhost:3000/users/`)
  //   }
  getOrdersByUser(token): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/orders/user`,{
      headers:{
        authorization:token
      }
    })
  }
  setOrders(orders){
    this.orders=orders
  }
}

