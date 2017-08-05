"use strict";
exports.__esModule = true;
/// <reference path="./types/socket.d.ts" />
var Ball_1 = require("./Ball");
var b = new Ball_1["default"]();
var socket = io.connect("http://localhost:5000");
socket.on("test", function () {
    console.log("okokokokokk");
});
