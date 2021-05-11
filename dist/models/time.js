'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Time extends sequelize_1.Model {
        static associate(models) {
        }
    }
    ;
    Time.init({
        timeId: {
            allowNull: false,
            autoIncrement: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
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
        }
    }, {
        sequelize,
        modelName: 'Time',
    });
    return Time;
};
//# sourceMappingURL=time.js.map