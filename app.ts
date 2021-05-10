import dotenv from "dotenv";
import Server from "./config/server";
import db from './models/index.js';

// Configuration
dotenv.config();

const server = new Server();
db.sequelize.sync().then(() => {
    server.listen(); 
})
