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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule, FormsModule,
  ],
  providers: [RegisterService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
