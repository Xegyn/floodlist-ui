import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {ReplaySubject} from "rxjs";

@Injectable()
export class CategoryService {

  constructor(private apiService: ApiService) {

  }

  public getAll() {
    // return this.apiService.get(`v1/public/categories`);
    let response = new ReplaySubject();
    response.next([]);
    return response;
  }

}
