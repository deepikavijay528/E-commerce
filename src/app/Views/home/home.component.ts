import { Component, OnInit,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AddItemComponent } from '../add-item/add-item.component';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  animal: string;
  name: string;
  product: Observable<any[]>;
  constructor(public dialog: MatDialog,db: AngularFireDatabase) {
    this.product = db.list('Products').valueChanges();
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(AddItemComponent, {
      width: '800px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  ngOnInit() {
  }
}
