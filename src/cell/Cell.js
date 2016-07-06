"use strict";
const Cell = function(game, params) {

	const self = this;

	this.init = function() {
		self.id = self.genId();
	}
	
	this.genId = function() {
		let rand;
		do 
			rand = Math.floor(Math.random() * game.maxUnits);

		while (game.units[rand]);

		return rand;
		
	}

	this.randPoint = function() {
		const gameX = game.grid.x;
		const gameY = game.grid.y;

		const randPoint = [
			Math.floor(Math.random() * gameX),
			Math.floor(Math.random() * gameY)
		];

		console.log("randPoint made: ", randPoint);

		return randPoint;

	};

	this.spawn = function() {

		if(!self.id) self.init();

		let currentRandPoint;
		let randString;
		do
			(function() {
				currentRandPoint = self.randPoint();
				console.log("Cell trying ", currentRandPoint);
				randString = "" + currentRandPoint[0] + "," + currentRandPoint[1];
			})();

		while (game.grid.coors[randString].isOccupied == true);

		game.units["Cell" + self.id] = self;
		game.grid.coors[randString].isOccupied = true;
		game.grid.coors[randString].occupants = self;

	};
}

module.exports = Cell;