import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { RegisterComponent } from './register/register.component'
import { LandingPageComponent } from './landing-page/landing-page.component'
import { UserHomeComponent } from './user-home/user-home.component'
import { ProfileComponent } from './profile/profile.component'

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'landing', component: LandingPageComponent},
  {path: 'home', component: UserHomeComponent },
  {path: 'profile', component:ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
