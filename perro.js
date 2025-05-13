"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.perro = void 0;
var perro = /** @class */ (function () {
    function perro(pNombre, pPelaje, pPatas, pRaza) {
        this.nombre = pNombre;
        this.pelaje = pPelaje;
        this.patas = pPatas;
        this.raza = pRaza;
    }
    perro.prototype.hacerSonido = function () {
        console.log("El perro dice guau guau");
    };
    perro.prototype.mover = function () {
        console.log("El perro corre libremente");
    };
    return perro;
}());
exports.perro = perro;
