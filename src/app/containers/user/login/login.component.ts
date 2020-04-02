import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public message:string;
  public successMsg: string;
  public errorMsg;
  constructor(public userService:UserService, public router: Router) { }

  ngOnInit(): void {
  }
  login(loginForm:NgForm){
    if(loginForm.valid){
      const user =loginForm.value;
      this.userService.log(user)
      .subscribe(
        (res:HttpResponse<object>)=>{
          const admins =['superAdmin','admin','dios'];
          const redirectRoute = admins.includes(res['user']['role']) ? '/add':'/';
          this.successMsg=res['message'];
          this.userService.setUser(res['user']);
         
          this.userService.setToken(res['token']);
        
          localStorage.setItem('authToken',res['token']);
          
          setTimeout(() => this.router.navigate([redirectRoute]) , 2500);
      },
      (error: HttpErrorResponse) => {
        this.errorMsg = error.error.message;
        setTimeout(() => this.errorMsg ="", 2500);
      }
      )}}
}
