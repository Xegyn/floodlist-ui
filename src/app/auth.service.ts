import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable()
export class AuthService {

  public authenticated: boolean;

  constructor(private router: Router) {
    this.authenticated = window.sessionStorage.getItem('authenticated') == 'true';
  }

  public login() {
    this.authenticated = true;
    window.sessionStorage.setItem('authenticated', 'true');
    this.router.navigate(['/list']);
  }

  public logout() {
    this.authenticated = false;
    window.sessionStorage.setItem('authenticated', 'false');
    this.router.navigate(['/login']);
  }

}
