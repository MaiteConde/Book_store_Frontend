import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public errorMsg:string;
  public successMsg:string;
  

  constructor(public userService:UserService, public router:Router) { }

  ngOnInit(): void {
  }
  register(registerForm:NgForm){
    if(registerForm.valid){
      const user =registerForm.value;
      this.userService.signup(user)
      .subscribe(
        (res:HttpResponse<object>)=>{
          this.successMsg=res['message'];
          setTimeout(() => {
            this.router.navigate(['login'])
          }, 2000);
      },
      (error:HttpErrorResponse)=>{
        this.errorMsg=error['error']['message'];
        setTimeout(() =>  this.errorMsg="" , 2000);
      }
    )
    }
  }
}