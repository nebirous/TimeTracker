"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
router.get('/', function (req, res) {
    res.render('index');
});
exports.default = router;
//# sourceMappingURL=index.js.map