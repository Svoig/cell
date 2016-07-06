"use strict";

const express = require("express");
const app = express();
const request = require("request");

const Cell = require("./cell/Cell.js");
const Game = require("./env/game.js");

app.use(express.static(__dirname + "/../public"));

app.get("/", function(req, res, next) {
	res.sendFile("index.html");
});

app.get("/spawn", function(req, res, next) {

	const activeGame = new Game(100,100);

	const player = new Cell(activeGame);
	player.spawn();

	for (let i=0; i<50; i++) {
		const player = new Cell(activeGame);
		player.spawn();
	}


});




const port = (process.env.PORT || 8000);

app.listen(port, function() {
	console.log("Cell is running on http://localhost:", port);
});