import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../service.service";
import {CategoryService} from "../category.service";
import {Category} from "../category";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  private categories: Category[];

  constructor(private categoryService: CategoryService,
              private serviceService: ServiceService) { }

  ngOnInit() {
    this.categoryService.getAll()
      .subscribe((response: Category[]) => {
        this.categories = response;
      })
  }

  public toggleCategory(id) {
    this.categoryService.toggleCategory(id);
  }

  public isCategoryActive(id) {
    return this.categoryService.isActive(id);
  }

}
