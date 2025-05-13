"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fabrica_1 = require("./fabrica");
var fabrica = new fabrica_1.fabricaDeAnimales();
try {
    var miGato = fabrica.crearAnimales("gato", { nombre: "michu", pelaje: "pelos", patas: 4, raza: "siames" });
    console.log(miGato);
    miGato.hacerSonido();
    miGato.mover();
}
catch (error) {
    console.log(error.name + "" + error.message);
}
try {
    var mipajaro = fabrica.crearAnimales("pajaro", { nombre: "lolo", pelaje: "plumas", patas: 2, color: "naranja" });
    console.log(mipajaro);
    mipajaro.hacerSonido();
    mipajaro.mover();
}
catch (error) {
    console.log(error.name + "" + error.message);
}
try {
    var miperro = fabrica.crearAnimales("perro", { nombre: "tobi", pelaje: "pelos", patas: 4, raza: "golden" });
    console.log(miperro);
    miperro.hacerSonido();
    miperro.mover();
}
catch (error) {
    console.log(error.name + "" + error.message);
}
try {
    var mipez = fabrica.crearAnimales("pez", { nombre: "nemo", pelaje: "escamas", patas: 0, raza: "tropical" });
    console.log(mipez);
    mipez.hacerSonido();
    mipez.mover();
}
catch (error) {
    console.log(error.name + ": " + error.message);
}
