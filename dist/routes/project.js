"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var pojectController_1 = require("../controllers/pojectController");
var router = express_1.Router();
router.get('/api/:idUser', pojectController_1.getProjects);
router.get('/api/:id', pojectController_1.getProject);
router.post('/api/', pojectController_1.postProject);
router.put('/api/:id', pojectController_1.putProject);
router.delete('/api/:id', pojectController_1.deleteProject);
exports.default = router;
//# sourceMappingURL=project.js.map