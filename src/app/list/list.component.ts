import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../service.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private serviceService: ServiceService) { }

  ngOnInit() {

  }

}
