console.log("hello iife");

let button = document.getElementById("btn-checkobject");
button.addEventListener("click", introduceStarWars);

let lightbtn = document.getElementById("btn-lightlist");
lightbtn.addEventListener("click", StarWars.getPlayer);

let darkbtn = document.getElementById("btn-darklist");
darkbtn.addEventListener("click", StarWars.getEvil);

let locbtn = document.getElementById("btn-getRLocation");
locbtn.addEventListener("click", function(){
	StarWars.getLocation("Count Dooku");
});

let obiDies = document.getElementById("btn-removeobiwan");
obiDies.addEventListener("click", function(){
	//a jedi is removed by death or going to dark side
	StarWars.removeJedi("Obi-Wan Kenobi");
});

let removeJedi = document.getElementById("btn-removeanakin");
removeJedi.addEventListener("click", function(){
	console.log("this", this);
	//a jedi is removed by death or going to dark side
	StarWars.removeJedi("Anakin Skywalker", "Darth Vader");
});





let addPlayer = document.getElementById("btn-signup");
addPlayer.addEventListener("click", function(){
	
	var newPlayerName = document.getElementById("newperson").value;
	//which side
	var whichselected;
	var radios = document.getElementsByName('whichside');
	for (var i = 0, length = radios.length; i < length; i++) {
		// 1 = good, 2 = evil, 0 = jedi
	    if (radios[i].checked) {
	        whichselected = radios[i].value;
	        break;
	    }
	}
	console.log("whichselected", whichselected);
	if (whichselected == 0){
		StarWars.addJedi(newPlayerName);
		console.log("new jedi list", StarWars.getJedi())

	}else if (whichselected == 1){
		console.log("one");
		StarWars.setPlayer(newPlayerName);
		console.log("new player list", StarWars.getPlayer())
	}else if (whichselected == 2){
		StarWars.setEvil(newPlayerName);
		console.log("new evil list", StarWars.getEvil())
	}
});




function introduceStarWars() {
	console.log("StarWars IIFE", StarWars);
}
