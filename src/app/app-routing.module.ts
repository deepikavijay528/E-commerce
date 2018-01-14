import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './Views/login/login.component';
import { SignupComponent } from './Views/signup/signup.component';
const appRoutes: Routes = [
  { path: 'signup',component: SignupComponent},
   { path: 'login', component: LoginComponent },
   { path: '',redirectTo: '/login',pathMatch: 'full'}
 ];
@NgModule({
  
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
