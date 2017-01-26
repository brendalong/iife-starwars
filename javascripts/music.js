var StarWars = (function(orginalStarWars){

	let thememusic = ["Imperial Attack", "Princess Leia's Theme", "Cantina Band"];

	orginalStarWars.getSongs = function(){
		let songlist = thememusic;
		console.log("Party Play List: ", thememusic.toString());
	}

	orginalStarWars.addSong = function(what){
		thememusic.push(what);
	}

	return orginalStarWars;

})();

// })(Starwars || {});