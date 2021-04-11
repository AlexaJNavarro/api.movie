import {Router} from 'express'
import {MovieController} from '../controllers/movie.controler'

const routerMovie = Router()
routerMovie
    .get("/",MovieController.getAll)
    .post("/",MovieController.create)
    .delete("/:ID",MovieController.delete)
    .get("/:ID", MovieController.getById)
    .put("/:ID",MovieController.update)

export default routerMovie