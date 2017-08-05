"use strict";
exports.__esModule = true;
var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
http.listen(process.env.PORT || 5000, function () {
    console.log('listening on *:5000');
});
app.use(express.static('public'));
var SocketManager_1 = require("./model/SocketManager");
var io = require('socket.io')(http);
var sm = new SocketManager_1["default"](io);
