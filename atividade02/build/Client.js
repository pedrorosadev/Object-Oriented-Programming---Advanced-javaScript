"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var Client = /** @class */ (function () {
    function Client(name, age, cpf, rg) {
        this.name = name;
        this.age = age;
        this.cpf = cpf;
        this.rg = rg;
    }
    Object.defineProperty(Client.prototype, "readCPF", {
        get: function () {
            return this.cpf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "readRG", {
        get: function () {
            return this.rg;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "readDocumentValidator", {
        get: function () {
            //CPF: 123.456.789-10
            //RG: 12.345.678-9
            if (this.cpf.length == 14 && this.rg.length == 12) {
                return console.log('Documento Validado !');
            }
            else {
                return console.log('Favor, insira o documento correto.');
            }
        },
        enumerable: false,
        configurable: true
    });
    return Client;
}());
exports.Client = Client;
