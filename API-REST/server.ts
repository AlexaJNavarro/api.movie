import {Application} from 'express'
import express from 'express'
import cors from 'cors'
import routerMovie from './routes/movie.route'

export class Server{
    private app: Application

    constructor(){
        this.app= express()
    }

    Routes(){
        this.app.use('/movies',routerMovie)
    }

    Setting(){
        this.app.use(express.json())
        this.app.use(cors())
    }

    Listening(){
        this.app.listen(8080)
        console.log('puerto: 8080')
    }

}