
$( document ).ready(function() {

var words = [ "squirtle", "bulbasaur", "charizard", "pikachu", "meowth", "pidgey", "clefairy", "hitmonchan", "poliwhirl", "grimer", "dewgong", "flareon", "nidorino", "omanyte", "voltorb"];
var pokemon = ["assets/images/squirtle.jpg", "assets/images/bulbasaur.jpg", "assets/images/charizard.jpg", "assets/images/pikachu.jpg", "assets/images/meowth.jpg", "assets/images/pidgey.jpg", "assets/images/clefairy.jpg", "assets/images/hitmonchan.jpg", "assets/images/poliwhirl.jpg", "assets/images/grimer.jpg", "assets/images/dewgong.jpg",  "assets/images/flareon.jpg",  "assets/images/nidorino.jpg",  "assets/images/omanyte.jpg",  "assets/images/voltorb.jpg"]
var pokemonSolved = ["assets/images/squirtleSolved.jpg", "assets/images/bulbasaurSolved.jpg", "assets/images/charizardSolved.jpg", "assets/images/pikachuSolved.jpg", "assets/images/meowthSolved.jpg", "assets/images/pidgeySolved.jpg", "assets/images/clefairySolved.jpg", "assets/images/hitmonchanSolved.jpg", "assets/images/poliwhirlSolved.jpg", "assets/images/grimerSolved.jpg", "assets/images/dewgongSolved.jpg", "assets/images/flareonSolved.jpg", "assets/images/nidorinoSolved.jpg", "assets/images/omanyteSolved.jpg", "assets/images/voltorbSolved.jpg" ]
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
console.log(alphabet)

// Wins counter, Lives start at 10, 
var wins = 0;

var lives = 10;
// This will contain the guesses of the user
var guesses = [];
//This will contain the word randomly generated but replaced with "_"
var answerArray = [];

//Pick a random word from Array// 
var word = words[Math.floor(Math.random()* words.length)];


//Set up answer Array with _____
var answerArray = [];
for (var i = 0; i < word.length; i++) {

	//Replace all letters in word with "_"
	answerArray[i] = "_";
}
console.log(answerArray)

//Game reset 
function gameReset() {
	//Pick a random word from words array
	word = words[Math.floor(Math.random()* words.length)];
	for (var i = 0; i < word.length; i++) {
	//Replace all letters in word with "_"
	answerArray[i] = "_";
	}

}

//Audio Function 

function introAudio() {
	var intro = new Audio("assets/audio/poke-who.wav").play();
}

function loseAudio() {
	var end = new Audio("assets/audio/teamrocket.mp3").play();
}

// function themeSong () {
// 	var theme = new Audio("assets/audio/theme.mp3").play();
// 	theme.volume = 1;
	
// }

function setHalfVolume() {
    var myAudio = document.getElementById("audio1");  
    myAudio.volume = 0.3; //Changed this to 0.5 or 50% volume since the function is called Set Half Volume ;)
}
//Load Images       Need to figure out how to switch between images
function loadImage () {
	$("#image").html("<img class='poke' src='"+pokemonSolved[words.indexOf(word)]+"'>")
}

function loadImageSolved () {
	$("#image").html("<img src='"+pokemonSolved[words.indexOf(word)]+"'>")
}

// function audioOff() {
// 	$("#audioOff").on("click", function() {
// 		theme.pause();
// 	})
// }



setHalfVolume();
introAudio();
// audioOff();
// fucntion to write contentst to the page. 
function loadDocumentContents () {

			$("#game").html("<img class='pokedex' src='assets/images/pokedex.png'>"+"<div class='text'><p>Guess a letter to begin!</p>"+
					"<p>Wins: "+ wins +"</p>"+
					"<p>Lives: "+ lives +"</p>"+
					// writes the word with dashes and removes the commas and adds a space
					"<p>Pokemon: "+ answerArray.join(" ") +"</p>"+
					// writes letters guessed to page 
					"<p>Guessed Letters: "+ guesses.join(" ") +"</p></div>");


		loadImage();
	}

			
// var html = "<h3>Press any key to play!</h3>"+
// 					"<p>Wins: "+ wins +"</p>"+
// 					"<p>Lives: "+ lives +"</p>"+
// 					// writes the word with dashes and removes the commas and adds a space
// 					"<p>Word: "+ answerArray.join(" ") +"</p>"+
// 					// writes letters guessed to page 
// 					"<p>Guessed Letters: "+ guesses.join(" ") +"</p>"
// 			document.querySelector("#game").innerHTML = html;


loadDocumentContents();
	




document.onkeyup = function(event) {
	var userGuess = event.key;


			// the usersGuess will be limited to letters the in alphabet array. 
			if (alphabet.indexOf(userGuess) > -1) {

					// if the userGuess is not in the guesses array 
					if (guesses.indexOf(userGuess) === -1) {
						//push the letters guessed to the guesses array
						guesses.push(userGuess);

							//indexOfGuess is the words index in relation to the userguess
						var indexOfGuess = word.indexOf(userGuess);
						//if the userguess index is -1, it means that letter guessed is not in the word
						if(indexOfGuess === -1) {
							lives--;

						}
						//while all letters guessed that are in the word
						while (indexOfGuess >= 0) {
							//replace the letter guessed in the Answer
							answerArray[indexOfGuess] = userGuess;
							indexOfGuess = word.indexOf(userGuess, indexOfGuess + 1);

						}
						
					}
						//if the answerArray does not "_" the you win
					if (answerArray.includes("_") === false) {
						

					
						wins++;
						guesses = [];
						answerArray = [];
						gameReset();

						loadImageSolved();
						

						introAudio();
					
					}

					if (lives === 0) {
						var playAgain = alert("No more guesses left, would you like to play again?")
						if (playAgain = true) {
						guesses = [];
						answerArray = [];
						wins = 0;
						lives= 10;
						gameReset();
						loadDocumentContents();
					}
					}

	loadDocumentContents();
	

	} 
}

});
	//Select the game area and replace all commas in word with spaces


// 	var html = document.getElementById("word");
// 	html.innerHTML = answerArray.join(" ");

// 	var el = document.getElementById("letters");
// 		el.innerHTML = guesses.join(" ");

// 	document.onkeyup = function(event) {
// 		var guess = event.key;

// 		var index = word.indexOf(guess)
// 		console.log(index);


// 		if (guesses.indexOf(guess) === -1){

// 			guesses.push(guess);

// 			var el = document.getElementById("letters");
// 				el.innerHTML = guesses.join(" ");
// }





		



	

		





		
		








 