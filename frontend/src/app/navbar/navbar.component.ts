import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn: boolean;
  constructor(private auth: AuthService, private router: Router, private Token: TokenService ) { }

  ngOnInit() {
    this.auth.authStatus.subscribe( value => this.loggedIn = value);
  }
  logout(event: MouseEvent){
    event.preventDefault();
    this.auth.changeAuthStatus(false);
    this.Token.removeToken();
    this.router.navigateByUrl('/login');
  }
  

}
