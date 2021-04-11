import {Request, response, Response} from 'express' 
import {ModelMovie} from '../models/movie.model'
import {MovieInterface} from '../interface/movie.interface'
import {Answer} from '../helper/answer' 

export class MovieController{
    static async getAll(req:Request, res: Response): Promise<Response>{
        // try {
            const movie = await ModelMovie.getAll()
            const response = new Answer('Message','Consulta exitosa',false,movie) 
            return res.status(200).json(movie)
            
        // } catch (error) {
        //     const response = new Answer('Error',error,true,null)
        //     return res.status(401).json(response)
        // }
        
    }

    static async getById(req: Request, res: Response): Promise<Response>{
        // try {
            const ID = Number(req.params.ID)
            const movie= await ModelMovie.getById(ID)
            const response= new Answer('Message','Consulta exitosa',false,movie)
            return res.status(200).json(movie)

        // } catch (error) {
        //     const response= new Answer('Error',error,true,null)
        //     return res.status(401).json(response)
        // }
        
    }

    static async create(req: Request, res:Response):Promise<Response>{
        // try {
            const data:MovieInterface = req.body
            const movie= await ModelMovie.create(data)
            const response= new Answer('Message','Se guardo el registro',false,movie)
            return res.status(201).json(movie)

        // } catch (error) {
        //     const response = new Answer('Error',error,true,null)
        //     return res.status(400).json(response)
            
        // }
        
    }

    static async delete(req: Request, res: Response):Promise<Response>{
        // try {
            const ID = Number(req.params.ID)
            const movie = await ModelMovie.delete(ID)
            const response = new Answer('Message', 'Se elimino correctamente',false, movie)
            return res.status(200).json(movie)

        // } catch (error) {
        //     const responese = new Answer('Error', error,true,null)
        //     return res.status(400).json(response)
            
        // }
        
    }

    static async update(req: Request, res: Response): Promise<Response>{
        // try {
            const ID = Number(req.params.ID)
            const dataMovie:MovieInterface = req.body
            const movie = await ModelMovie.update(ID, dataMovie)
            const response = new Answer('Message','Se actualizo correctamente el registro',false,movie)
            return res.status(200).json(movie)
        // } catch (error) {
        //     const response = new Answer('Error',error,true,null)
        //     return res.status(400).json(response)
        // }

    }

}