import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProfileComponent } from './profile/profile.component';

import { RegisterService } from './register/register.service';
import { LandingPageService } from './landing-page/landing-page.service'
import { UserHomeService } from './user-home/user-home.service'

import { CarouselModule } from 'angular4-carousel';
import { TestComponent } from './test/test.component';
// import { FileSelectDirective, FileDropDirective, FileUploadModule } from 'ng2-file-upload';
import { FileUploadModule } from 'ng2-file-upload';

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
    // FileSelectDirective, 
    // FileDropDirective, 
    FileUploadModule,
  ],
  providers: [RegisterService, LandingPageService, UserHomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
