import express from "express";
import userRoutes from "../routes/user";
import timesRoutes from "../routes/time";
import indexRoutes from "../routes/index";
import cors from "cors";

import db from "../db/connection";

class Server {

    private app: express.Application;
    private port: string;
    private apiPaths = {
        users: '/users',
        times: '/times',
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT  || '8000';

        this.dbConnection();
        this.middlewares();

        //Define routes
        this.routes();
    }
    
    async dbConnection(){
        try{
            await db.authenticate();
            console.log('Database online');
        }catch (error){
            throw new Error(error)
        }
    }

    middlewares(){

        // CORS
        this.app.use(cors());

        // Lectura del body
        this.app.use(express.json());
        
        // Public
        this.app.use(express.static('public'));

    }

    routes(){
        this.app.use(this.apiPaths.users, userRoutes)
        this.app.use(this.apiPaths.times, timesRoutes);
        this.app.use('/index', indexRoutes);
    }

    listen(){
        this.app.listen(this.port, ()=> {
            console.log('Servidor corriendo en puerto '+ this.port);
        });
    }

}

export default Server