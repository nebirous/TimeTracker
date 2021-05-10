import { DataTypes, Model, UUIDV4 } from "sequelize";
import db from "../db/connection";

const User = db.define('user', {
    name:{
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    }, 
    password:{
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.BOOLEAN
    }
});

export default User;