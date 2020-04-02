import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public userService:UserService, public ordersService:OrdersService) { }
  public user;
  ngOnInit(): void {
    const token = localStorage.getItem('authToken');
    if(token){//si hay token
      
      //tratamos de obtener la info del user a partir del token
      this.userService.getUserInfo(token)
      .subscribe(
        res=>{
        
        },
        error=>{
          console.log(error)
          localStorage.removeItem('authToken')
          }
        )
    }
    this.ordersService.getOrdersByUser(token)
    .subscribe (orders =>this.ordersService.setOrders(orders));
  }
  }


