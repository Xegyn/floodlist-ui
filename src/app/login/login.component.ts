import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private email: string;
  private password: string;
  private authError: boolean = false;

  constructor(public authService: AuthService,
              public router: Router) { }

  ngOnInit() {
  }

  public login() {
    this.authError = false;
    this.authService.login(this.email, this.password)
      .subscribe(null, (error) => {
        if (error.status == 401) {
          this.authError = true;
        }
      });
  }

}
