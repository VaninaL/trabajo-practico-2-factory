import { Animal } from "./interfaz";

export class pajaro implements Animal{
    private nombre:string;
    private pelaje:string;
    private patas:number;
    private color:string;

constructor(pNombre:string,pPelaje:string,pPatas:number,pColor:string){
    this.nombre = pNombre;
    this.pelaje = pPelaje;
    this.patas = pPatas;
    this.color = pColor;
}

public hacerSonido(){
    console.log("El pajaro dice pi pi");
}
public mover(){
    console.log("El pajaro vuela de rama en rama");
}
}