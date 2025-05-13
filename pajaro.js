"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pajaro = void 0;
var pajaro = /** @class */ (function () {
    function pajaro(pNombre, pPelaje, pPatas, pColor) {
        this.nombre = pNombre;
        this.pelaje = pPelaje;
        this.patas = pPatas;
        this.color = pColor;
    }
    pajaro.prototype.hacerSonido = function () {
        console.log("El pajaro dice pi pi");
    };
    pajaro.prototype.mover = function () {
        console.log("El pajaro vuela de rama en rama");
    };
    return pajaro;
}());
exports.pajaro = pajaro;
