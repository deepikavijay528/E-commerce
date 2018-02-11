import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Views/home/home.component';
import { LoginComponent } from './Views/login/login.component';
import { SignupComponent } from './Views/signup/signup.component';
import { AddItemComponent } from './Views/add-item/add-item.component';
const appRoutes: Routes = [
  { path: 'signup',component: SignupComponent},
   { path: 'login', component: LoginComponent},
   { path: 'home', component: HomeComponent},
   { path: 'additem', component: AddItemComponent},
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
