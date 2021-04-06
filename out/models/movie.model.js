"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelMovie = void 0;
const connection_1 = require("../connection");
class ModelMovie {
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield connection_1.DB.query('select * from Movies');
            return response[0];
        });
    }
    static getById(ID) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield connection_1.DB.query('select * from Movies where id=?', ID);
            return response[0];
        });
    }
    static create(dataMovie) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield connection_1.DB.query('insert into Movies set ? ', dataMovie);
            return response[0];
        });
    }
    static delete(ID) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield connection_1.DB.query('delete from Movies where id=?', ID);
            return response[0];
        });
    }
    static update(ID, dataMovie) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield connection_1.DB.query('update Movies set ? where id=?', [dataMovie, ID]);
            return response[0];
        });
    }
}
exports.ModelMovie = ModelMovie;
