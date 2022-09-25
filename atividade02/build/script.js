"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BankAccount_1 = require("./BankAccount");
try {
    var bankAccount = new BankAccount_1.BankAccount('Pedro', 20, '123.456.789-1', '12.345.678-', 123456, 1500);
    console.log(bankAccount.readDocumentValidator);
    console.log(bankAccount.login());
}
catch (error) {
    console.log("Algo inesperado ocorreu... Tente Novamente mais tarde !\n".concat(error));
}
