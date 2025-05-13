"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fabricaDeAnimales = void 0;
var gato_1 = require("./gato");
var pajaro_1 = require("./pajaro");
var perro_1 = require("./perro");
var fabricaDeAnimales = /** @class */ (function () {
    function fabricaDeAnimales() {
    }
    fabricaDeAnimales.prototype.crearAnimales = function (tipo, atributos) {
        if (tipo == "gato") {
            return new gato_1.gato(atributos.nombre, atributos.pelaje, atributos.patas, atributos.raza);
        }
        else if (tipo == "pajaro") {
            return new pajaro_1.pajaro(atributos.nombre, atributos.pelaje, atributos.patas, atributos.color);
        }
        else if (tipo == "perro") {
            return new perro_1.perro(atributos.nombre, atributos.pelaje, atributos.patas, atributos.raza);
        }
        else {
            throw new Error("El animal ingresado no esta en la lista");
        }
    };
    return fabricaDeAnimales;
}());
exports.fabricaDeAnimales = fabricaDeAnimales;
;
