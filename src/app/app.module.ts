import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from "./auth-guard.service";
import {AppRoutingModule} from "./app-routing.module";
import {AuthService} from "./auth.service";
import { ListComponent } from './list/list.component';
import { NavComponent } from './nav/nav.component';
import {ApiService} from "./api.service";
import {ServiceService} from "./service.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuardService,
    AuthService,
    ApiService,
    ServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
