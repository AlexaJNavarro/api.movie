import {DB} from '../connection'
import {MovieInterface} from '../interface/movie.interface'

export class ModelMovie{
    static async getAll(){
        const response = await DB.query('select * from Movies')
        return response[0]
    }

    static async getById(ID: number){
        const response= await DB.query('select * from Movies where id=?',ID)
        return response[0]
    }

    static async create(dataMovie: MovieInterface){
        const response = await DB.query('insert into Movies set ? ', dataMovie)
        return response[0]
    }

    static async delete(ID:number){
        const response = await DB.query('delete from Movies where id=?', ID)
        return response[0]
    }

    static async update(ID: number, dataMovie: MovieInterface){
        const response = await DB.query('update Movies set ? where id=?', [dataMovie,ID])
        return response[0]

    }

}