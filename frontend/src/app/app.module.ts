import { FilmComponent } from './film/film.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import {  HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';



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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
