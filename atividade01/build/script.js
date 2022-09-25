"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Patinete_1 = require("./Patinete");
try {
    var patinete = new Patinete_1.Patinete('Patinete', 1, false, true, false, 120);
    console.log("Tipo do Ve\u00EDculo: ".concat(patinete.typeVehiculo, "\nQuantidade de Passageiros: ").concat(patinete.amountOfPassengers, "\n\u00C9 mec\u00E2nico: ").concat(patinete.isMotorized, "\n\u00C9 el\u00E9trico: ").concat(patinete.isEletric, "\n\u00C9 anf\u00EDbio: ").concat(patinete.isAmphibian, "\n"));
    patinete.toWalk();
}
catch (error) {
    console.log("Aviso !\nErro: ".concat(error));
}
