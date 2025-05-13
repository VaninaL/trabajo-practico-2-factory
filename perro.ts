import { Animal } from "./interfaz";

export class perro implements Animal{
    private nombre:string;
    private pelaje:string;
    private patas:number;
    private raza:string;

constructor(pNombre:string,pPelaje:string,pPatas:number,pRaza:string){
    this.nombre = pNombre;
    this.pelaje = pPelaje;
    this.patas = pPatas;
    this.raza = pRaza;
}

public hacerSonido(){
    console.log("El perro dice guau guau");
}
public mover(){
    console.log("El perro corre libremente");
}
}