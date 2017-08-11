import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { RegisterComponent } from './register/register.component'
import { LandingPageComponent } from './landing-page/landing-page.component'
import { UserHomeComponent } from './user-home/user-home.component'
import { ProfileComponent } from './profile/profile.component'
import { TestComponent } from './test/test.component'
import { NewlandingComponent } from './newlanding/newlanding.component'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {path: '', component: NewlandingComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'landing', component: LandingPageComponent},
  {path: 'home', component: UserHomeComponent },
  {path: 'profile', component:ProfileComponent},
  {path: 'test', component:TestComponent},
  {path:'newlanding', component: NewlandingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
