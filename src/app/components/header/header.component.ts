import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public admins =['superAdmin','admin','dios'];
  constructor(public userService:UserService, public router:Router) { }

  ngOnInit(): void {
  }
  onClickMe(){
    localStorage.removeItem('authToken') 
    this.userService.setUser({});
    this.router.navigate([''])
  }
  

}
