import { Component, OnInit, OnChanges } from '@angular/core';
import { FileItem } from '../../models/file.item';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnChanges {
  
  public onElement:boolean=false;
  public ArchivosPadre: FileItem[]=[]
  constructor(private _uploadService:UploadService) { }

  guardarImagenes(){
    this._uploadService.UploadsFiles(this.ArchivosPadre);
  }

}
