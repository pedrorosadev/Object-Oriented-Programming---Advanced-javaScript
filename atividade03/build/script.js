"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Patient_1 = require("./Patient");
try {
    var patient = new Patient_1.Patient();
    patient.accident('Pedro', 20, '19/09/2002', 'São Luís de Gonzaga, 125', 'Relato: Paciente sofreu um acidente andando de moto na avenida brasil.');
}
catch (error) {
    console.log("Algo de errado n\u00E3o est\u00E1 certo... Tente novamente mais tarde :(\n".concat(error));
}
