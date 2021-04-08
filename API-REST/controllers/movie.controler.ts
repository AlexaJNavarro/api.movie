import {Request, Response} from 'express' 
import {ModelMovie} from '../models/movie.model'
import {MovieInterface} from '../interface/movie.interface' 

export class MovieController{
    static async getAll(req:Request, res: Response): Promise<Response>{
        const movie = await ModelMovie.getAll()
        console.log(movie)
        return res.status(200).json(movie)
    }

    static async getById(req: Request, res: Response): Promise<Response>{
        const ID = Number(req.params.ID)
        const movie= await ModelMovie.getById(ID)
        console.log(movie)
        return res.status(200).json(movie)
    }

    static async create(req: Request, res:Response):Promise<Response>{
        const data:MovieInterface = req.body
        const movie= await ModelMovie.create(data)
        console.log(movie)
        return res.status(201).json(movie)
    }

    static async delete(req: Request, res: Response):Promise<Response>{
        const ID = Number(req.params.ID)
        const movie = await ModelMovie.delete(ID)
        console.log(movie)
        return res.status(200).json(movie)
    }

    static async update(req: Request, res: Response): Promise<Response>{
        const ID = Number(req.params.ID)
        const dataMovie:MovieInterface = req.body
        const movie = await ModelMovie.update(ID, dataMovie)
        console.log(movie)
        return res.status(200).json(movie)

    }

}