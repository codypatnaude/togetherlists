"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
function api() {
    var router = express_1.Router();
    router.use('/list/:id', function (req, res, next) {
        console.log("Someone is requesting a list");
        res.send("You requested list " + req.params.id);
    });
    return router;
}
exports.api = api;
