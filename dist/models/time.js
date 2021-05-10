"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var _1 = require(".");
var user_1 = __importDefault(require("./user"));
var project_1 = __importDefault(require("./project"));
;
var Time = _1.sequelize.define('Time', {
    id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: sequelize_1.DataTypes.UUID,
        unique: true,
    },
    startTime: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    },
    endTime: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    },
    day: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE,
    },
    userId: {
        allowNull: false,
        type: sequelize_1.DataTypes.UUID,
    },
    projectId: {
        allowNull: false,
        type: sequelize_1.DataTypes.UUID,
    },
});
Time.belongsTo(user_1.default, {
    foreignKey: 'userId',
    as: 'user'
});
Time.belongsTo(project_1.default, {
    foreignKey: 'projectId',
    as: 'project'
});
exports.default = Time;
//# sourceMappingURL=time.js.map