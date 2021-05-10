"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var _1 = require(".");
var time_1 = __importDefault(require("./time"));
var project_1 = __importDefault(require("./project"));
;
var User = _1.sequelize.define('User', {
    id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: sequelize_1.DataTypes.UUID,
        unique: true,
    },
    userName: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    },
    mail: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    },
    password: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    },
    projects: {
        allowNull: true,
        type: sequelize_1.DataTypes.UUID,
    }
});
User.hasMany(time_1.default, {
    sourceKey: 'id',
    foreignKey: 'userId',
    as: 'times'
});
User.hasMany(project_1.default, {
    sourceKey: 'id',
    foreignKey: 'users',
    as: 'projects'
});
exports.default = User;
//# sourceMappingURL=user.js.map