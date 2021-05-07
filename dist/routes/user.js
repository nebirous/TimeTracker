"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userController_1 = require("../controllers/userController");
var router = express_1.Router();
router.get('/new', function (req, res) {
    res.send('Form');
});
// API
router.get('/api', userController_1.getUsers);
router.get('/api/:id', userController_1.getUser);
router.post('/api', userController_1.postUser);
router.put('/api/:id', userController_1.putUser);
router.delete('/api/:id', userController_1.deleteUser);
exports.default = router;
//# sourceMappingURL=user.js.map