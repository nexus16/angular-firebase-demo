import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
@Component({
  moduleId: module.id,
  selector: 'angular2-firebase-app',
  templateUrl: 'angular2-firebase.component.html',
  styleUrls: ['angular2-firebase.component.css']
})
export class Angular2FirebaseAppComponent {
  title = 'angular2-firebase works!';

  items: FirebaseListObservable<any[]>;
  constructor(private af: AngularFire ){
  	this.items = af.database.list('/items');
  }

}
