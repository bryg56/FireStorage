import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CargaComponent } from './components/carga/carga.component';
import { PhotosComponent } from './components/photos/photos.component';
import { appRouting } from './app.routes';
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';


@NgModule({
  declarations: [
    AppComponent,
    CargaComponent,
    PhotosComponent,
    NgDropFilesDirective
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
