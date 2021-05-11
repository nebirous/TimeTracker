'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
module.exports = function (sequelize, DataTypes) {
    var Time = /** @class */ (function (_super) {
        __extends(Time, _super);
        function Time() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Time.associate = function (models) {
        };
        return Time;
    }(sequelize_1.Model));
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
        sequelize: sequelize,
        modelName: 'Time',
    });
    return Time;
};
//# sourceMappingURL=time.js.map