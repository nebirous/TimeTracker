import { DataTypes, Model, Optional } from "sequelize";
import db from "../db/connection";
import { sequelize } from '.';
import User from './user';
import Project from './project';

interface TimeAttributes {
    id: string;
    startTime: string;
    endTime: string;
    day: Date;
    userId: string;
    projectId: string;
  };
  

    interface TimeCreationAttributes extends Optional<TimeAttributes, 'id'> {}
  
    interface TimeInstance extends Model<TimeAttributes, TimeCreationAttributes>, TimeAttributes {
        createdAt?: Date;
        updatedAt?: Date;
      }
    


    const Time = sequelize.define<TimeInstance>('Time',
    {
        id: {
            allowNull: false,
            autoIncrement: false,
            primaryKey: true,
            type: DataTypes.UUID,
            unique: true,
        },
        startTime: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
        endTime: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
        day: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        userId: {
            allowNull: false,
            type: DataTypes.UUID,
        },
        projectId: {
            allowNull: false,
            type: DataTypes.UUID,
        },
    }
    );

    Time.belongsTo(User, {
        foreignKey: 'userId',
        as: 'user'
    });

    Time.belongsTo(Project, {
        foreignKey: 'projectId',
        as: 'project'
      });

    export default Time;