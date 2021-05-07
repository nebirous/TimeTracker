import { DataTypes, Model, UUIDV4 } from "sequelize";
import db from "../db/connection";

interface UserAttributes{
    id: string;
    name: string;
    email: string;
    password: string;
    //projects: project;
    //status: boolean;
}
module.exports = (sequelize: any, DataTypes: any) => {
    class User extends Model<UserAttributes> implements UserAttributes {
        id!: string;
        name!: string;
        email!: string;
        password!: string;
        static associate(models: any){

        }
    };
    User.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }

    })
}
// const User = db.define('user', {
//     name:{
//         type: DataTypes.STRING
//     },
//     email: {
//         type: DataTypes.STRING
//     }, 
//     password:{
//         type: DataTypes.STRING
//     },
//     status: {
//         type: DataTypes.BOOLEAN
//     }
// });

export default User;