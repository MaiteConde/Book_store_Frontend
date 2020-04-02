import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  constructor(public userService:UserService){}

  ngOnInit(){
    //buscamos el token en el localStorage
    const token = localStorage.getItem('authToken');
    if(token){//si hay token
      
      //tratamos de obtener la info del user a partir del token
      this.userService.getUserInfo(token)
      .subscribe(
        res=>{
          //guardamos en la propiedad user del userService la información del user que viene en la respuesta
          this.userService.setUser(res);
          //guardamos el token como propiedad del userService
          this.userService.setToken(token);
        },
        error=>{
          console.log(error)
          localStorage.removeItem('authToken')
          }
        )
    }
  }
}


