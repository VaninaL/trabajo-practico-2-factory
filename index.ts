import { fabricaDeAnimales } from "./fabrica";

let fabrica = new fabricaDeAnimales();

try{
    let miGato = fabrica.crearAnimales("gato",{nombre:"michu",pelaje:"pelos",patas:4,raza:"siames"});
    console.log(miGato);
    miGato.hacerSonido();
    miGato.mover();
}catch(error){
    console.log(error.name + "" + error.message);
}
try{
    let mipajaro = fabrica.crearAnimales("pajaro",{nombre:"lolo",pelaje:"plumas",patas:2,color:"naranja"});
    console.log(mipajaro);
    mipajaro.hacerSonido();
    mipajaro.mover();
}catch(error){
    console.log(error.name + "" + error.message);
}
try{
    let miperro = fabrica.crearAnimales("perro",{nombre:"tobi",pelaje:"pelos",patas:4,raza:"golden"});
    console.log(miperro);
    miperro.hacerSonido();
    miperro.mover();
}catch(error){
    console.log(error.name + "" + error.message);
}
try{
    let mipez = fabrica.crearAnimales("pez",{nombre:"nemo",pelaje:"escamas",patas:0,raza:"tropical"});
    console.log(mipez);
    mipez.hacerSonido();
    mipez.mover();
}catch(error){
    console.log(error.name + ": " + error.message);
}



