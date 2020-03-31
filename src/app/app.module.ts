import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginComponent } from './containers/user/login/login.component';
import { SignupComponent } from './containers/user/signup/signup.component';
import { HomeComponent } from './containers/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { BookComponent } from './containers/book/book.component';
import { AddBookComponent } from './containers/add-book/add-book.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HarryComponent } from './containers/harry/harry.component';
import { AllBooksComponent } from './containers/all-books/all-books.component';
import { MatSelectModule } from '@angular/material/select';


// import { DemoMaterialModule } from './material-module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
    BookComponent,
    AddBookComponent,
    HarryComponent,
    AllBooksComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule,
    FormsModule
    // DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
