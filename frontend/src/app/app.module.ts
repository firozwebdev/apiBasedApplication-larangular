import { FilmComponent } from './film/film.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import {  HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';
import { CreteFilmComponent } from './crete-film/crete-film.component';



const appRoutes: Routes = [
  
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'films',
    component: FilmComponent
  },
  {
    path: 'create-film',
    component: CreteFilmComponent
  },
  
];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FilmComponent,
    CreteFilmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [AuthService, TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
