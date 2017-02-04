import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {ReplaySubject} from "rxjs";
import {Category} from "./category";

declare var _;

@Injectable()
export class CategoryService {

  constructor(private apiService: ApiService) {

  }

  public getAll() {
    // return this.apiService.get(`v1/public/categories`);
    let response = new ReplaySubject();
    let apiResponse = [
      {id: 1, name: 'Back Office'},
      {id: 2, name: 'Brand'}
    ];
    let categories = _.map(apiResponse, (item) => {
      return new Category(item.id, item.name);
    });
    response.next(categories);
    return response;
  }

}
