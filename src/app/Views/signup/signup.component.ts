import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Form} from '@angular/forms';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email:string;
  password:any;
  address:string;
  name:string;
  user:any;
  constructor(private rt:Router ,private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.user = {
      name:'',
      email: '',
      password: '',
      address:'',
      
    };
   }
   onClick(value,valid){
     this.afAuth.auth.createUserWithEmailAndPassword(value.email, value.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
   }


}
