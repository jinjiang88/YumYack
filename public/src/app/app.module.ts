import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterComponent } from './register/register.component';


import { RegisterService } from './register/register.service';
import { UserHomeComponent } from './user-home/user-home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingPageService } from './landing-page/landing-page.service'
import { UserHomeService } from './user-home/user-home.service'

import { CarouselModule } from 'angular4-carousel';
import { ProfileComponent } from './profile/profile.component';
import { TestComponent } from './test/test.component';

import { FileUploadModule } from 'ng2-file-upload';
import { TestService } from './test/test.service';

import { LoginComponent } from './login/login.component';
import { FriendslistComponent } from './friendslist/friendslist.component';
import { FriendslistService } from './friendslist/friendslist.service';
import { LoginService } from './login/login.service';
import { FindfriendsComponent } from './findfriends/findfriends.component';
import { FindfriendsService } from './findfriends/findfriends.service';

import { UserPostsComponent } from './user-posts/user-posts.component';




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    UserHomeComponent,
    LandingPageComponent,
    ProfileComponent,

    TestComponent,
    LoginComponent,
    FriendslistComponent,
    FindfriendsComponent

  



   
    
   





   
    
   

    UserPostsComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule, FormsModule,
    CarouselModule,
    FileUploadModule,
  ],
  providers: [RegisterService, LandingPageService, UserHomeService, TestService, FriendslistService, LoginService, FindfriendsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
