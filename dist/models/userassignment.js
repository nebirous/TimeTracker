'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class UserAssignment extends sequelize_1.Model {
        static associate(models) {
            // define association here
        }
    }
    ;
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
//# sourceMappingURL=userassignment.js.map