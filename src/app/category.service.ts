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
    return this.apiService.get(`v1/categories`)
      .map((res) => {
        let response = res.json();
        let categories = _.map(response, (item) => {
          return new Category(item.id, item.name);
        });
        return categories;
      });
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
