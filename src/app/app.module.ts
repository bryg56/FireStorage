import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CargaComponent } from './components/carga/carga.component';
import { PhotosComponent } from './components/photos/photos.component';
import { appRouting } from './app.routes';
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';
import { environment } from '../environments/environment';
import {AngularFireModule} from '@angular/fire'
import {AngularFireStorageModule} from '@angular/fire/storage'


@NgModule({
  declarations: [
    AppComponent,
    CargaComponent,
    PhotosComponent,
    NgDropFilesDirective
  ],
  imports: [
    BrowserModule,
    appRouting,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
