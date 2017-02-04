import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../service.service";
import {CategoryService} from "../category.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private categoryService: CategoryService,
              private serviceService: ServiceService) { }

  ngOnInit() {
    this.categoryService.getAll()
      .subscribe((response) => {
        console.log(response);
      })
  }

}
