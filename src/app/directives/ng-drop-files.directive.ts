import { Directive, HostListener, Output,EventEmitter, Input } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';
import { FileItem } from '../models/file.item';
// import { EventEmitter } from 'events';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Input() archivosUpload:Array<FileItem> =[];

  constructor() { }
  @Output()mouseOnElement:EventEmitter<boolean>=new EventEmitter();
  @HostListener('dragover',['$event'])
  public onDragEnter(event:Event){
    // console.log(event);
    this.mouseOnElement.emit(true);
    this._prevenirDefault(event);

  }
  @HostListener('dragleave',['$event'])
  public outDragEvent(event:Event){
    this.mouseOnElement.emit(false);
    this._prevenirDefault(event);
  }
  @HostListener('drop',['$event'])
  public onDrop(event){
    const fileTransfer=event.dataTransfer;
    console.log(fileTransfer);
    this._extraerArchivo(fileTransfer.files);
    this._prevenirDefault(event);

  }
  private _extraerArchivo(archivoLista:FileList){
    console.log(archivoLista)
    console.log(Object.getOwnPropertyNames(archivoLista));
    for(const propiedad in Object.getOwnPropertyNames(archivoLista)){
      console.log(propiedad);
      const archivoTemporal:File=archivoLista[propiedad];
      const nuevoArchivo=new FileItem(archivoTemporal);
      this.archivosUpload.push(nuevoArchivo);
      console.log(this.archivosUpload);

    }
  }
  private _prevenirDefault(event:Event){
    event.preventDefault();
    event.stopPropagation();
  }
}
