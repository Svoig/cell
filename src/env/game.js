"use strict";

const Game = function(x,y) {

	const self = this;

	this.genCoors = function() {
		const spacesObj = {};
		for(let i=0; i<x; i++) {
			
			for(let j=0; j<y; j++) {
				const coorString = "" + i + "," + j;
				spacesObj[coorString] = {
					coor: [i,j],
					isOccupied: false,
					occupants: {}
				};
			}
		}
		return spacesObj;
	}

	this.grid = {
		x: x,
		y: y,
		coors: self.genCoors()
	},

	//Maximum units equals half of smallest dimension
	this.maxUnits = x > y ? y / 2 : x / 2;

	this.units = {};

	return this;
}

module.exports = Game;