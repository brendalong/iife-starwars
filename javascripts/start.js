console.log("hello start.js");

var resistanceLocation = "D'Qar";

let getLocation = document.getElementById("btn-getLocation");
getLocation.addEventListener("click", function(){
	console.log("Hey Darth, we are located at:", resistanceLocation);
});

//Not good, Darth Vader should not be able to simply request the location

//Use IIFE to create private variables.
//Gives ability to modularize code into meaninful sections