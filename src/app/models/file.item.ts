export class FileItem{
    public archivo:File;
    public nombreArchivo:string;
    public url:string;
    public upload:boolean;
    public progress:number;
    size: number;
    constructor(archivo:File){
        this.archivo=archivo;
        this.nombreArchivo=archivo.name;
        this.size=archivo.size;
        this.upload=false;
        this.progress=0;
    }
}
