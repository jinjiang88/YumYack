import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'

import {RegisterComponent } from './register/register.component'
import { LandingPageComponent } from './landing-page/landing-page.component'
import { TestpageComponent } from './testpage/testpage.component'
const routes: Routes = [
  {path: '', pathMatch: 'full', component: LandingPageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'landing', component: LandingPageComponent},
  {path: 'test', component: TestpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
