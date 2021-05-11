'use strict';
import { Model } from 'sequelize';

interface UserAttributes {
  userId: number;
  name: string;
  email: string;
  password: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    
    userId!: number;
    name!: string;
    email!: string;
    password!: string;

    static associate(models: any) {
      // define association here
      User.belongsToMany(models.Project, {
        through: 'UserAssignments'
      });
      User.hasMany(models.Time, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  };
  User.init({
    userId: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
    });
  return User;
};