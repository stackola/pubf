/// <reference path="./types/socket.d.ts" />

import Ball from "./Ball";
var b:Ball = new Ball();


var socket = io.connect("http://localhost:5000");
socket.on("test",function(){
	console.log("okokokokokk");
});