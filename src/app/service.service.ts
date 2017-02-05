import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Service} from "./service";

declare var _;

@Injectable()
export class ServiceService {

  constructor(private apiService: ApiService) {
  }

  public getAll() {
    return this.apiService.get(`v1/services`)
      .map((res) => {
        let response = res.json();
        let categories = _.map(response, (item) => {
          return new Service(item.id, item.name);
        });
        return categories;
      });
  }

}
