import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";

@Injectable()
export class ServiceService {

  constructor(private apiService: ApiService) {
  }

  public getAll() {
    return this.apiService.get(`v1/public/services`);
  }

}
