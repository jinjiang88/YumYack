import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { ProfileComponent } from './profile/profile.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { FriendslistComponent} from './friendslist/friendslist.component'
import { FindfriendsComponent } from './findfriends/findfriends.component';
import { ViewComponent } from './view/view.component';




import { UserPostsComponent } from './user-posts/user-posts.component'


const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'landing', component: LandingPageComponent},
  {path: 'home', component: UserHomeComponent },
  {path: 'profile', component:ProfileComponent},

  {path: 'create', component:TestComponent},
  {path: 'login', component: LoginComponent},
  {path: 'friendslist', component: FriendslistComponent},
  {path: 'search', component: FindfriendsComponent},

  {path: 'test', component:TestComponent},
  {path: 'posts', component:UserPostsComponent},
  {path: 'view/:id', component:ViewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
