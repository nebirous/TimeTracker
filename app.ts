import dotenv from "dotenv";
import Server from "./models/config/server";
import db from './models';
import express from 'express';
const app =  express();

const port = process.env.PORT || 8000;

// Configuration
dotenv.config();

// const server = new Server();
// server.listen(); 

app.get('/', (req, res) => {
    db.User.findAll({
        include: {
            model: db.Project
        }
    }).then((result: object) => res.json(result)).catch((err: object) => console.error(err));
})

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`) 
    })
})


