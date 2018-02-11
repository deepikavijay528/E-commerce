import { Component, OnInit } from '@angular/core';
import {Form} from '@angular/forms';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';
import * as firebase from 'firebase/app';
import 'firebase/storage';
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
  firebasestorage:any;
  

  constructor(private db: AngularFireDatabase,firebaseApp: FirebaseApp) {
    this.firebasestorage=firebaseApp.storage();
   }

  ngOnInit() {
    this.user = {
      name: '',
      address:'',
      contact:'',
      image:'',
      imageurl:''
    };
  }
  onUploadFinished(event){
console.log("event",event);
this.user.image=event.src;
let storageRef = this.firebasestorage.ref();
// Create a timestamp as filename
const filename = Math.floor(Date.now() / 1000);

// Create a reference to 'images/todays-date.jpg'
const imageRef = storageRef.child(`images/${filename}.jpg`);

imageRef.putString(this.user.image, 'data_url').then((snapshot)=> {
 // Do something here when the data is succesfully uploaded!
 this.user.imageurl=snapshot.downloadURL;
});


  }


  

  save(value,valid){
    console.log(value);
    const itemRef = this.db.list('Products');
    itemRef.push({ name: value.name,image:this.user.imageurl,address:value.address,contact:value.contact});
    
    
      
    
  
   // this.usedetail.push({'user':this.user.email,'password':this.user.password,'address':this.user.address,'contact':this.user.contact});
   // this.rt.navigate(['home',{'user':this.user.email,'password':this.user.password,'address':this.user.address,'contact':this.user.contact}]);

  }
}
