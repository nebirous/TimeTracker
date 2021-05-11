"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pojectController_1 = require("../controllers/pojectController");
const router = express_1.Router();
router.get('/api/:idProject', pojectController_1.getProjects);
router.get('/api/:id', pojectController_1.getProject);
router.post('/api/', pojectController_1.postProject);
router.put('/api/:id', pojectController_1.putProject);
router.delete('/api/:id', pojectController_1.deleteProject);
exports.default = router;
//# sourceMappingURL=project.js.map