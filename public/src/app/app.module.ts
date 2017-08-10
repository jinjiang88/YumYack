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
// import { PostcreationComponent } from './src/app/postcreation/postcreation.component';

import { ProfileComponent } from './profile/profile.component';





import { TestComponent } from './test/test.component';

import { FileUploadModule } from 'ng2-file-upload';
import { TestService } from './test/test.service';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    UserHomeComponent,
    LandingPageComponent,
    ProfileComponent,
  



   
    
   

    TestComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule, FormsModule,
    CarouselModule,


   
    


    FileUploadModule,

  ],
  providers: [RegisterService, LandingPageService, UserHomeService, TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
