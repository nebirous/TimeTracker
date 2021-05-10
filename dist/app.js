"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var server_1 = __importDefault(require("./config/server"));
var intex_js_1 = __importDefault(require("./models/intex.js"));
// Configuration
dotenv_1.default.config();
var server = new server_1.default();
intex_js_1.default.sequelize.sync().then(function () {
    server.listen();
});
//# sourceMappingURL=app.js.map