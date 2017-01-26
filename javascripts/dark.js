"use strict";

console.log("hello dark side");

var StarWars = (function(){
	var location = "The Unknown Regions";
	var keyplayers = ["Count Dooku", "Darth Maul","General Grievous", "Greedo", "Jango Fett", "Darth Sidious"];

	return { //this is an object with 2 methods(properties)
		getEvil: function(){
			console.log("Evil list of players", keyplayers);
			return keyplayers;
		},

		setEvil: function(who){
			keyplayers.push(who);
			console.log("keyplayers", keyplayers);
		}

	}

})();

// turned to dark side: Kylo Ren from Ben Solo and Darth Vader from Anakin Skywalker