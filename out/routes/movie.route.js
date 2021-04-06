"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const movie_controler_1 = require("../controllers/movie.controler");
const routerMovie = express_1.Router();
routerMovie
    .get("/", movie_controler_1.MovieController.getAll)
    .post("/", movie_controler_1.MovieController.create)
    .delete("/:ID", movie_controler_1.MovieController.delete)
    .get("/:ID", movie_controler_1.MovieController.getById)
    .put("/:ID", movie_controler_1.MovieController.update);
exports.default = routerMovie;
