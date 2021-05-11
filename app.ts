import dotenv from "dotenv";
import Server from "./models/config/server";
import db from './models';

// Configuration
dotenv.config();

const server = new Server();
db.sequelize.sync().then(() => {
    server.listen(); 
})
