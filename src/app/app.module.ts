import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment'
import { AppComponent } from './app.component';
import { LoginComponent } from './Views/login/login.component';
import { SignupComponent } from './Views/signup/signup.component';
import { AppRoutingModule } from './/app-routing.module';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HomeComponent } from './Views/home/home.component';
import {MatDialogModule,MatDialog,MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddItemComponent } from './Views/add-item/add-item.component';
import {MatSelectModule} from '@angular/material/select';
import { ImageUploadModule } from "angular2-image-upload";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDialogModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ImageUploadModule.forRoot()
  ],
  providers: [MatDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
