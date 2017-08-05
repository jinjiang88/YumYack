import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

const APP_ROUTES: Routes = [
    { path: '', component: AppComponent },
    { path: 'index', component: LoginComponent},
];
export const routing = RouterModule.forRoot(APP_ROUTES);