import { DataTypes, Model, Optional } from "sequelize";
import db from "../db/connection";
import { sequelize } from '.';
import Time from './time';
import Project from "./project";

interface UserAttributes {
    id: string;
    userName: string;
    mail: string;
    password: string;
    projects: string;
  };
  

    interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}
  
    interface UserInstance extends Model<UserAttributes, UserCreationAttributes>, UserAttributes {
        createdAt?: Date;
        updatedAt?: Date;
      }
    


    const User = sequelize.define<UserInstance>('User',
    {
        id: {
            allowNull: false,
            autoIncrement: false,
            primaryKey: true,
            type: DataTypes.UUID,
            unique: true,
        },
        userName: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
        mail: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
        password: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
        projects: {
            allowNull: true,
            type: DataTypes.UUID,
        }
    }
    );

    User.hasMany(Time, {
        sourceKey: 'id',
        foreignKey: 'userId',
        as: 'times'
      });

    User.hasMany(Project, {
        sourceKey: 'id',
        foreignKey: 'users',
        as: 'projects'
      });

    export default User;