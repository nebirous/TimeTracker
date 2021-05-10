"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var _1 = require(".");
var time_1 = __importDefault(require("./time"));
var user_1 = __importDefault(require("./user"));
;
var Project = _1.sequelize.define('Project', {
    id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: sequelize_1.DataTypes.UUID,
        unique: true,
    },
    projectName: {
        allowNull: true,
        type: sequelize_1.DataTypes.TEXT,
    },
    projectDescription: {
        allowNull: true,
        type: sequelize_1.DataTypes.TEXT,
    },
    users: {
        allowNull: true,
        type: sequelize_1.DataTypes.UUID,
    },
    times: {
        allowNull: true,
        type: sequelize_1.DataTypes.UUID,
    }
});
Project.hasMany(time_1.default, {
    sourceKey: 'id',
    foreignKey: 'ProjectId',
    as: 'times'
});
Project.hasMany(user_1.default, {
    sourceKey: 'id',
    foreignKey: 'Projects',
    as: 'user'
});
exports.default = Project;
//# sourceMappingURL=project.js.map