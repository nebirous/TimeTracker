import dotenv from "dotenv";
import Server from "./config/server";

// Configuration
dotenv.config();

const server = new Server();
server.listen(); 