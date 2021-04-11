"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Answer = void 0;
class Answer {
    constructor(typeMessage, message, error, data) {
        this.typeMessage = typeMessage;
        this.message = message;
        this.error = error;
        this.data = data;
    }
}
exports.Answer = Answer;
