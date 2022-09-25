"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
var Veiculo = /** @class */ (function () {
    function Veiculo(typeVehiculo, amountOfPassengers, isMotorized, isEletric, isAmphibian) {
        this.typeVehiculo = typeVehiculo;
        this.amountOfPassengers = amountOfPassengers;
        this.isMotorized = isMotorized;
        this.isEletric = isEletric;
        this.isAmphibian = isAmphibian;
    }
    Veiculo.prototype.toWalk = function () {
        console.log("".concat(this.typeVehiculo, " come\u00E7ou a andar !"));
    };
    return Veiculo;
}());
exports.Veiculo = Veiculo;
