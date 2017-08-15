import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterComponent } from './register/register.component';
import { NewlandingComponent } from './newlanding/newlanding.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProfileComponent } from './profile/profile.component';
import { TestComponent } from './test/test.component';

import { RegisterService } from './register/register.service';
import { LandingPageService } from './landing-page/landing-page.service'
import { UserHomeService } from './user-home/user-home.service'
import { NewlandingService } from './newlanding/newlanding.service'

// import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { CarouselModule } from 'angular4-carousel';
// import { PostcreationComponent } from './src/app/postcreation/postcreation.component';
import { FileUploadModule } from 'ng2-file-upload';
import { TestService } from './test/test.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    UserHomeComponent,
    LandingPageComponent,
    ProfileComponent,
    TestComponent,
    NewlandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule, FormsModule,
    CarouselModule,
    FileUploadModule,
    // AnimateOnScrollModule,
  ],
  providers: [RegisterService, LandingPageService, UserHomeService, TestService, NewlandingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
