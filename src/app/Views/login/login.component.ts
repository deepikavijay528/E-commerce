import { Component, OnInit } from '@angular/core';
import {Form} from '@angular/forms';
import {Router} from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent
 implements OnInit {
  login:any;
  email:string;
  password:string;
  constructor(private rt:Router,private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.login={
      email:'',
      password:'',
    }
  }
  loginUser(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  signin(value,valid){
    firebase.auth().signInWithEmailAndPassword(value.email, value.password).then(success => {
      this.rt.navigate(['signup']);
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }
  redirect(){
    console.log("checj");
    this.rt.navigate(['signup',{}]);
  }
}
