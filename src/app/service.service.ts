import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {ReplaySubject} from "rxjs";
import {Service} from "./service";

declare var _;

@Injectable()
export class ServiceService {

  constructor(private apiService: ApiService) {
  }

  public getAll() {
    // return this.apiService.get(`v1/public/services`)
    let response = new ReplaySubject();
    let apiResponse = [
      {id: 1, name: 'Back Office'},
      {id: 2, name: 'Brand'}
    ];
    let services = _.map(apiResponse, (item) => {
      return new Service(item.id, item.name);
    });
    response.next(services);
    return response;
  }

}
