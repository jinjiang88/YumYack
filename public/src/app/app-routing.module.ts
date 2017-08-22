import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { NewlandingComponent } from './newlanding/newlanding.component'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


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
import { FriendspostsComponent } from './friendsposts/friendsposts.component';
import { PostviewComponent } from './postview/postview.component';
import { PostcreationComponent } from './postcreation/postcreation.component';
import { UserPostsComponent } from './user-posts/user-posts.component'
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfilepicComponent } from './profilepic/profilepic.component';



const routes: Routes = [
 
  {path: '', component: NewlandingComponent}, //home page for unregistered users
  {path: 'register', component: RegisterComponent},//register page
  {path: 'landing', component: LandingPageComponent},//old landing page (unused)
  {path: 'home', component: UserHomeComponent },//user hub controller
  {path: 'profile', component:ProfileComponent},//old profile component (unused)
  {path: 'create', component:TestComponent},
  {path: 'login', component: LoginComponent},
  {path: 'friendslist', component: FriendslistComponent},
  {path: 'search', component: FindfriendsComponent},
  {path: 'test', component:TestComponent},
  {path:'newlanding', component: NewlandingComponent},
  {path: 'posts', component:UserPostsComponent},
  {path: 'view/:id', component:ViewComponent},
  {path: 'friendsposts', component:FriendspostsComponent},
  {path: 'postview/:id', component:PostviewComponent},
  {path: 'postcreation', component:PostcreationComponent},
  {path: 'editprofile', component:EditProfileComponent},
  {path: 'preprofile', component:ProfilepicComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
