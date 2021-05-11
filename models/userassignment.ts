'use strict';
import { Model } from "sequelize";
module.exports = (sequelize:any, DataTypes: any) => {
  interface UserAssignmentAttributes {
    projectId: number;
    userId: string;
  }

  class UserAssignment extends Model<UserAssignmentAttributes> implements UserAssignmentAttributes {
    projectId!: number;
    userId!: string;

    static associate(models: any) {
      // define association here
      
    }
  };
  UserAssignment.init({
    projectId: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Projects',
        key: 'projectId'
      }
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Users',
        key: 'userId'
      }
    },
  }, {
    sequelize,
    modelName: 'UserAssignment',
    });
  return UserAssignment;
};