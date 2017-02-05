import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../service.service";
import {CategoryService} from "../category.service";
import {Category} from "../category";
import {Service} from "../service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  private categories: Category[];
  private services: Service[];

  constructor(private categoryService: CategoryService,
              private serviceService: ServiceService) { }

  ngOnInit() {
    this.categoryService.getAll()
      .subscribe((response: Category[]) => {
        this.categories = response;
      })

    this.serviceService.getAll()
      .subscribe((response: Service[]) => {
        this.services = response;
      })
  }

  public toggleCategory(id) {
    this.categoryService.toggleCategory(id);
  }

  public isCategoryActive(id) {
    return this.categoryService.isActive(id);
  }

}
