import {Server} from './server'
import dotenv from 'dotenv'
(async ()=>{
    dotenv.config()
    console.log(process.env.PORT)
    const server = new Server()
    server.Middleware()
    server.Setting()
    server.Routes()
    await server.Listening()
})()