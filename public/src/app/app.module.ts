import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './../../login/login.component';
import { RegisterComponent } from './register/register.component';

import {LoginService } from './login.service'
import { RegisterService } from './register/register.service';
import { UserHomeComponent } from './user-home/user-home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingPageService } from './landing-page/landing-page.service'
import { UserHomeService } from './user-home/user-home.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserHomeComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule, FormsModule,
  ],
  providers: [RegisterService, LoginService, LandingPageService, UserHomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
