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
const answer_1 = require("../helper/answer");
class MovieController {
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // try {
            const movie = yield movie_model_1.ModelMovie.getAll();
            const response = new answer_1.Answer('Message', 'Consulta exitosa', false, movie);
            return res.status(200).json(movie);
            // } catch (error) {
            //     const response = new Answer('Error',error,true,null)
            //     return res.status(401).json(response)
            // }
        });
    }
    static getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // try {
            const ID = Number(req.params.ID);
            const movie = yield movie_model_1.ModelMovie.getById(ID);
            const response = new answer_1.Answer('Message', 'Consulta exitosa', false, movie);
            return res.status(200).json(movie);
            // } catch (error) {
            //     const response= new Answer('Error',error,true,null)
            //     return res.status(401).json(response)
            // }
        });
    }
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // try {
            const data = req.body;
            const movie = yield movie_model_1.ModelMovie.create(data);
            const response = new answer_1.Answer('Message', 'Se guardo el registro', false, movie);
            return res.status(201).json(movie);
            // } catch (error) {
            //     const response = new Answer('Error',error,true,null)
            //     return res.status(400).json(response)
            // }
        });
    }
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // try {
            const ID = Number(req.params.ID);
            const movie = yield movie_model_1.ModelMovie.delete(ID);
            const response = new answer_1.Answer('Message', 'Se elimino correctamente', false, movie);
            return res.status(200).json(movie);
            // } catch (error) {
            //     const responese = new Answer('Error', error,true,null)
            //     return res.status(400).json(response)
            // }
        });
    }
    static update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // try {
            const ID = Number(req.params.ID);
            const dataMovie = req.body;
            const movie = yield movie_model_1.ModelMovie.update(ID, dataMovie);
            const response = new answer_1.Answer('Message', 'Se actualizo correctamente el registro', false, movie);
            return res.status(200).json(movie);
            // } catch (error) {
            //     const response = new Answer('Error',error,true,null)
            //     return res.status(400).json(response)
            // }
        });
    }
}
exports.MovieController = MovieController;
