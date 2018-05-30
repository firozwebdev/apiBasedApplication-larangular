
import {  HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null,
  };
  public error = null;
  constructor( private http: HttpClient, private router: Router) { }

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
    this.set(data.access_token);
    if(this.isValid()){
      this.router.navigateByUrl('/films');
    }else{
      this.router.navigateByUrl('/');
    }
    
    
  }
  set(token) {
    localStorage.setItem('token', token);
  }
  get(){
    return localStorage.getItem('token');
  }
  remove(){
    localStorage.removeItem('token');
  }
  isValid(){
    const token = this.get();
    if(token){
      const payload = this.payload(token);
      if(payload){
        return payload.iss === 'http://localhost:8000/api/login' ? true : false;
      }
    }
    return false;
  }

  payload(token){
    const payload = token.split('.')[1];
    return this.decode(payload); 
  }
  decode(payload){
    return JSON.parse(atob(payload));
  }
  loggedIn(){
    return this.isValid();
  }

}
