import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  public authenticated: boolean;

  constructor() { }

  public login() {
    this.authenticated = true;
  }

  public logout() {
    this.authenticated = false;
  }

}
