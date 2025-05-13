import { Animal } from "./interfaz";
import { gato } from "./gato";
import { pajaro } from "./pajaro";
import { perro } from "./perro";

export class fabricaDeAnimales{
    public crearAnimales(tipo:string,atributos:any): Animal {
        if (tipo == "gato"){
            return new gato(atributos.nombre,atributos.pelaje,atributos.patas,atributos.raza);
        } else if (tipo == "pajaro"){
            return new pajaro(atributos.nombre,atributos.pelaje,atributos.patas,atributos.color);
        } else if (tipo == "perro"){
            return new perro(atributos.nombre,atributos.pelaje,atributos.patas,atributos.raza);
        }else{
            throw new Error ("El animal ingresado no esta en la lista"); 
        }
    }
};






















