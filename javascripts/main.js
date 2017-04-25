console.log("hello main.js");

//use main to setup buttons and triggers for functionality
//setup IIFE files for specific functions and private variables.

//check for the StarWars Object
let button = document.getElementById("btn-checkobject");
button.addEventListener("click", introduceStarWars);


//get the players on the light side
let lightbtn = document.getElementById("btn-lightlist");
lightbtn.addEventListener("click", StarWars.getPlayer);

//get the players on the dark side
let darkbtn = document.getElementById("btn-darklist");
darkbtn.addEventListener("click", StarWars.getEvil);


/* get the resistance location - must pass who is asking. 
Only light side should get an answer
*/
let locbtn = document.getElementById("btn-getRLocation");
locbtn.addEventListener("click", function(){
	StarWars.getLocation(locbtn.getAttribute("whoIsIt"));
});

let locbtn2 = document.getElementById("btn-getRLocation2");
locbtn2.addEventListener("click", function(){
	StarWars.getLocation(locbtn2.getAttribute("whoIsIt"));
});


//remove a jedi
let obiDies = document.getElementById("btn-removeobiwan");
obiDies.addEventListener("click", function(){
	//a jedi is removed by death or going to dark side
	StarWars.removeJedi("Obi-Wan Kenobi");
});

//what happens when jedi is removed, dead or turn to dark side.
let removeJedi = document.getElementById("btn-removeanakin");
removeJedi.addEventListener("click", function(){
	console.log("this", this);
	//a jedi is removed by death or going to dark side
	//if dark side, also gets a new name
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

	}else if (whichselected == 1){
		StarWars.setPlayer(newPlayerName);
		
	}else if (whichselected == 2){
		StarWars.setEvil(newPlayerName);
		
	}
});


function introduceStarWars() {
	console.log("StarWars IIFE", StarWars);
}
