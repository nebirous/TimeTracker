"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var projectController_1 = require("../controllers/projectController");
var router = express_1.Router();
router.get('/api/:idUser', projectController_1.getProjects);
router.get('/api/:id', projectController_1.getProject);
router.post('/api/', projectController_1.postProject);
router.put('/api/:id', projectController_1.putProject);
router.delete('/api/:id', projectController_1.deleteProject);
exports.default = router;
//# sourceMappingURL=project.js.map