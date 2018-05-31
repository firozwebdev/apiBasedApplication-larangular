import { AuthService } from './../auth.service';

import {  HttpClient } from '@angular/common/http';

import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../token.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() loggingIn: boolean;
  public form = {
    email: null,
    password: null,
  };
  public error = null;
  
  constructor( private http: HttpClient, 
    private router: Router, 
    private Token: TokenService, 
    private auth: AuthService) { }

  ngOnInit() {
  }

  handleError(error){
    this.error = error.error.error;
    
  }

  onSubmit() {
    return this.http.post('http://localhost:8000/api/login', this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),
    );
  }

  handleResponse(data){
    this.Token.set(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/films');
  }


}
