import {Server} from './server'
(async ()=>{
    const server = new Server()
    server.Setting()
    server.Routes()
    await server.Listening()
})()