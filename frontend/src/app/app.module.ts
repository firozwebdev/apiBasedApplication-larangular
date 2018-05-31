import { FilmComponent } from './film/film.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import {  HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';



const appRoutes: Routes = [
  
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'films',
    component: FilmComponent
  },
  
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FilmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [AuthService, TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
