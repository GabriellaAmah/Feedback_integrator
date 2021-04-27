import http from 'http';
import app from './app';
import dotenv from 'dotenv';
import ServerHandler from './utils/serverHandler';
import "reflect-metadata";
import {createConnection} from 'typeorm';

dotenv.config()

const server = http.createServer(app)
const port = process.env.PORT || 3000


createConnection().then(async connection => {
    server.listen(port)
}).catch(error => {
    console.log(error)
    process.exit(1)
})

server.on('error', ServerHandler.onError)
server.on('listening', ServerHandler.onListen)

