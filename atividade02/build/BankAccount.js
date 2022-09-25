"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
var Client_1 = require("./Client");
var BankAccount = /** @class */ (function (_super) {
    __extends(BankAccount, _super);
    function BankAccount(name, age, cpf, rg, accountNumber, sale) {
        var _this = _super.call(this, name, age, cpf, rg) || this;
        _this.accountNumber = accountNumber;
        _this.sale = sale;
        return _this;
    }
    BankAccount.prototype.login = function () {
        console.clear();
        console.log("========= Confira seus dados =========\n\nOl\u00E1 ".concat(this.name, ", Seja bem vindo !\n"));
        console.log("N\u00FAmero da Conta Banc\u00E1ria: ".concat(this.accountNumber, "\nCPF: ").concat(this.readCPF, "\nRG: ").concat(this.readRG, "\n\nSaldo Dispon\u00EDvel: R$ ").concat(this.sale));
    };
    return BankAccount;
}(Client_1.Client));
exports.BankAccount = BankAccount;
