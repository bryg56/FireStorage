import { Directive, HostListener, Output,EventEmitter } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';
// import { EventEmitter } from 'events';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {



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
    this._extraerArchivo(fileTransfer);
    this._prevenirDefault(event);

  }
  private _extraerArchivo(archivoLista:FileList){
    console.log(archivoLista.item)
  }
  private _prevenirDefault(event:Event){
    event.preventDefault();
    event.stopPropagation();
  }
}
