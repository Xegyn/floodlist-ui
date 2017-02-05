import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {Http, Headers} from "@angular/http";
import {environment} from "../environments/environment";
import {ApiService} from "./api.service";

@Injectable()
export class AuthService {

  public authenticated: boolean;

  constructor(private router: Router,
              private http: Http,
              private apiService: ApiService) {
    this.authenticated = window.sessionStorage.getItem('authenticated') == 'true';
  }

  public login(email, password) {
    let params = {
      grant_type: 'password',
      username: email,
      password: password
    };
    let headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    let request = this.http.post(
      `${environment.apiServer}/oauth/token`,
      JSON.stringify(params),
      {headers: new Headers(headers)}
    )
      .map((res) => {
        let response = res.json();
        this.apiService.setToken(response.access_token);
        this.setAuthenticated(true);
        this.router.navigate(['/list']);
      });

    return request;
  }

  public logout() {
    this.setAuthenticated(false);
    this.router.navigate(['/login']);
  }

  public setAuthenticated(authenticated: boolean) {
    this.authenticated = authenticated;
    window.sessionStorage.setItem('authenticated', authenticated.toString());
  }
}
