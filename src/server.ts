import {Application} from 'express'
import express from 'express'
import cors from 'cors'
import routerMovie from './routes/movie.route'
import morgan from 'morgan'

export class Server{
    private app: Application

    constructor(){
        this.app= express()
    }

    Middleware(){
        this.app.use(morgan('dev'))
    }

    Routes(){
        this.app.use('/movies',routerMovie)
    }

    Setting(){
        this.app.use(express.json())
        this.app.use(cors())
    }

    Listening(){
        this.app.listen(process.env.PORT)
        console.log(`Puerto: ${process.env.PORT}`)
    }

}