import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Angular2FirebaseAppComponent, environment } from './app/';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './app/firebase.config';

if (environment.production) {
  enableProdMode();
}

bootstrap(Angular2FirebaseAppComponent,[
	AngularFireModule.initializeApp(firebaseConfig),
	]);
