import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {ReplaySubject} from "rxjs";
import {Category} from "./category";

declare var _;

@Injectable()
export class CategoryService {

  private activeCategories = [];

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

  public toggleCategory(id: number) {
    if (_.includes(this.activeCategories, id)) {
      _.remove(this.activeCategories, catId => catId === id);
    } else {
      this.activeCategories.push(id);
    }
  }

  public isActive(id: number): boolean {
    return _.includes(this.activeCategories, id)
  }

}
