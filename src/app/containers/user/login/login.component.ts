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
  constructor(public userService:UserService, public router: Router) { }

  ngOnInit(): void {
  }
  login(loginForm:NgForm){
    if(loginForm.valid){
      const user =loginForm.value;
      this.userService.log(user)
      .subscribe(
        (res:HttpResponse<object>)=>{
          this.message=res['message'];
        setTimeout(() => this.message="", 2500);
      },
      err=>console.error(err)
    )
    }
  }
}
