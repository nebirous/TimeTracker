"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var connection_1 = __importDefault(require("../db/connection"));
var Time = connection_1.default.define('time', {
    startTime: {
        type: sequelize_1.DataTypes.TIME
    },
    endTime: {
        type: sequelize_1.DataTypes.TIME
    },
    day: {
        type: sequelize_1.DataTypes.STRING
    },
});
exports.default = Time;
//# sourceMappingURL=time.js.map