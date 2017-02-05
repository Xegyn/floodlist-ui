import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {environment} from "../environments/environment";

@Injectable()
export class ApiService {

  private token: string;

  constructor(private http: Http) {
    this.token = window.sessionStorage.getItem('token');
  }

  public get(url: string) {
    let headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    };
    return this.http.get(`${environment.apiServer}/${url}`, {headers: new Headers(headers) });
  }

  public setToken(token: string) {
    this.token = token;
    window.sessionStorage.setItem('token', token);
  }

}
