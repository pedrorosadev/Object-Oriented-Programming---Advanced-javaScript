"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patient = void 0;
var Patient = /** @class */ (function () {
    function Patient() {
    }
    Patient.prototype.accident = function (name, age, birthDate, address, description) {
        this.name = name;
        this.age = age;
        this.birthDate = birthDate;
        this.address = address;
        this.description = description;
        console.clear();
        console.log('========== Ficha do Paciente ==========\n');
        console.log("Nome do Paciente: ".concat(name, "\nIdade: ").concat(age, " anos\nData de Nascimento: ").concat(birthDate, "\nEndere\u00E7o: ").concat(address, "\nDescri\u00E7\u00E3o: ").concat(description));
    };
    return Patient;
}());
exports.Patient = Patient;
