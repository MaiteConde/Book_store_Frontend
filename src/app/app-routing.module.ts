import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { LoginComponent } from './containers/user/login/login.component';
import { SignupComponent } from './containers/user/signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { identifierModuleUrl } from '@angular/compiler';
import { BookComponent } from './containers/book/book.component';
import { AddBookComponent } from './containers/add-book/add-book.component';
import { HarryComponent } from './containers/harry/harry.component';
import { AllBooksComponent } from './containers/all-books/all-books.component';
import { OrdersComponent } from './containers/orders/orders.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'book/:id', component:BookComponent},
  {path:'books/harry', component:HarryComponent},
  {path:'add', component:AddBookComponent},
  {path:'books', component:AllBooksComponent},
  {path:'orders', component:OrdersComponent},
  {path:'**',component:NotFoundComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
