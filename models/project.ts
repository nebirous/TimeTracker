import { DataTypes, Model, Optional } from "sequelize";
import db from "../db/connection";
import { sequelize } from '.';
import Time from './time';
import User from './user';

interface ProjectAttributes {
    id: string;
    projectName: string;
    projectDescription: string;
    users: string,
    times: string
  };
  

    interface ProjectCreationAttributes extends Optional<ProjectAttributes, 'id'> {}
  
    interface ProjectInstance extends Model<ProjectAttributes, ProjectCreationAttributes>, ProjectAttributes {
        createdAt?: Date;
        updatedAt?: Date;
      }
    


    const Project = sequelize.define<ProjectInstance>('Project',
    {
        id: {
            allowNull: false,
            autoIncrement: false,
            primaryKey: true,
            type: DataTypes.UUID,
            unique: true,
        },
        projectName: {
            allowNull: true,
            type: DataTypes.TEXT,
        },
        projectDescription: {
            allowNull: true,
            type: DataTypes.TEXT,
        },
        users: {
            allowNull: true,
            type: DataTypes.UUID,
        },
        times: {
            allowNull: true,
            type: DataTypes.UUID,
        }
    }
    );

    Project.hasMany(Time, {
        sourceKey: 'id',
        foreignKey: 'ProjectId',
        as: 'times'
      });

    Project.hasMany(User, {
        sourceKey: 'id',
        foreignKey: 'Projects',
        as: 'user'
    });
    
    export default Project;