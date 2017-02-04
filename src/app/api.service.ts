import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {environment} from "../environments/environment";

@Injectable()
export class ApiService {

  constructor(private http: Http) {

  }

  public get(url: string) {
    return this.http.get(`${environment.apiServer}/${url}`);
  }

}
