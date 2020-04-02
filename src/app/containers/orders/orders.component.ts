import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})

export class OrdersComponent implements OnInit {

  constructor(public ordersService:OrdersService, public userService:UserService) { }
  public panelOpenState;
  public users;
  public books;
  public book;
  public order;
  public user;
  
  ngOnInit(): void {
    const token:string=localStorage.getItem('authToken');
    this.ordersService.getOrdersByUser(token)
    .subscribe (orders =>this.ordersService.setOrders(orders));
  }



}
