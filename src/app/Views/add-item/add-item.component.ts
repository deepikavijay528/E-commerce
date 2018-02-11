import { Component, OnInit } from '@angular/core';
import {Form} from '@angular/forms';

import { FirebaseApp } from 'angularfire2';

import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  name:string;
  address:string;
  contact:string;
  user:any;
  image:any;
  constructor(private db: AngularFireDatabase,@Inject(FirebaseApp) firebaseApp: any) { }

  ngOnInit() {
    this.user = {
      name: '',
      address:'',
      contact:'',
      image:''
    };
  }
  onUploadFinished(event){
console.log("event",event);
this.user.image=event.src;
let storageRef = FirebaseApp.storage().ref();
// Create a timestamp as filename
const filename = Math.floor(Date.now() / 1000);

// Create a reference to 'images/todays-date.jpg'
const imageRef = storageRef.child(`images/${filename}.jpg`);

imageRef.putString(this.user.image, FirebaseApp.storage.StringFormat.DATA_URL).then((snapshot)=> {
 // Do something here when the data is succesfully uploaded!
 console.log(snapshot);
});


  }


  

  save(value,valid){
    console.log(value);
    const itemRef = this.db.object('UserDetail');
    itemRef.set({ name: value.name,});
   // this.usedetail.push({'user':this.user.email,'password':this.user.password,'address':this.user.address,'contact':this.user.contact});
   // this.rt.navigate(['home',{'user':this.user.email,'password':this.user.password,'address':this.user.address,'contact':this.user.contact}]);

  }
}
