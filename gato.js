"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gato = void 0;
var gato = /** @class */ (function () {
    function gato(pNombre, pPelaje, pPatas, pRaza) {
        this.nombre = pNombre;
        this.pelaje = pPelaje;
        this.patas = pPatas;
        this.raza = pRaza;
    }
    gato.prototype.hacerSonido = function () {
        console.log("El gato dice miuauuuu");
    };
    gato.prototype.mover = function () {
        console.log("El gato camina por los techos");
    };
    return gato;
}());
exports.gato = gato;
