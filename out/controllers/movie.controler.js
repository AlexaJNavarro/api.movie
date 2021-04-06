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
exports.MovieController = void 0;
const movie_model_1 = require("../models/movie.model");
class MovieController {
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const movie = yield movie_model_1.ModelMovie.getAll();
            console.log(movie);
            return res.status(200).json(movie);
        });
    }
    static getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ID = Number(req.params.ID);
            const movie = yield movie_model_1.ModelMovie.getById(ID);
            console.log(movie);
            return res.status(200).json(movie);
        });
    }
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            const movie = yield movie_model_1.ModelMovie.create(data);
            console.log(movie);
            return res.status(200).json(movie);
        });
    }
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ID = Number(req.params.ID);
            const movie = yield movie_model_1.ModelMovie.delete(ID);
            console.log(movie);
            return res.status(200).json(movie);
        });
    }
    static update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ID = Number(req.params.ID);
            const dataMovie = req.body;
            const movie = yield movie_model_1.ModelMovie.update(ID, dataMovie);
            console.log(movie);
            return res.status(200).json(movie);
        });
    }
}
exports.MovieController = MovieController;
