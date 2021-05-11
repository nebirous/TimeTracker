"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const models_1 = __importDefault(require("./models"));
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 8000;
// Configuration
dotenv_1.default.config();
// const server = new Server();
// server.listen(); 
app.get('/', (req, res) => {
    models_1.default.User.findAll({
        include: {
            model: models_1.default.Project
        }
    }).then((result) => res.json(result)).catch((err) => console.error(err));
});
models_1.default.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`);
    });
});
//# sourceMappingURL=app.js.map