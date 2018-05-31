import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {

  constructor() { }
  set(token) {
    localStorage.setItem('token', token);
  }
  get(){
    return localStorage.getItem('token');
  }
  removeToken(){
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
