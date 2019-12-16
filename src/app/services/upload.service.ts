import { Injectable } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage'
import { FileItem } from '../models/file.item';
@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private afStorage:AngularFireStorage ) {
   
   }
   public UploadsFiles(archivos:FileItem[]){
      const file=archivos[0];
      const filePath:string=`img/${file.nombreArchivo}`;
      const task= this.afStorage.upload(filePath,file);
  }
}
