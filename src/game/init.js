"use strict";
const Cell = require("../cell/Cell.js");
const Game = require("../env/game.js");

const activeGame = new Game(100,100);

const player = new Cell(activeGame);
player.spawn();

for (let i=0; i<50; i++) {
	const player = new Cell(activeGame);
	player.spawn();
}

for (let i=0; i<activeGame.units.length; i++) {
	console.log("Unit ", i, ": ", activeGame.units[i]);
}