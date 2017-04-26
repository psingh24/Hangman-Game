//Array of words
window.onload = function() {

var words = [ "hello"];
var alphabet = 'abcdefghijklmnopqrstuvwxy'.split('');

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


//Game reset 
function gameReset() {
	//Pick a random word from words array
	word = words[Math.floor(Math.random()* words.length)];
	for (var i = 0; i < word.length; i++) {
	//Replace all letters in word with "_"
	answerArray[i] = "_";
	}

}

// fucntion to write contentst to the page. 
function loadDocumentContents () {
		var html = "<h3>Press any key to play!</h3>"+
					"<p>Wins: "+ wins +"</p>"+
					"<p>Lives: "+ lives +"</p>"+
					// writes the word with dashes and removes the commas and adds a space
					"<p>Word: "+ answerArray.join(" ") +"</p>"+
					// writes letters guessed to page 
					"<p>Guessed Letters: "+ guesses.join(" ") +"</p>"
			document.querySelector("#game").innerHTML = html;
}

loadDocumentContents();

console.log(word);
document.onkeyup = function(event) {
	var userGuess = event.key;

			// the usersGuess will be limited to letters the in alphabet array. 
			if (alphabet.indexOf(userGuess) > -1) {

					// if the userGuess is not in the guesses array 
					if (guesses.indexOf(userGuess) === -1) {
						guesses.push(userGuess);


						var indexOfGuess = word.indexOf(userGuess);

						if(indexOfGuess === -1) {
							lives--;

						}
						while (indexOfGuess >= 0) {
							answerArray[indexOfGuess] = userGuess;
							indexOfGuess = word.indexOf(userGuess, indexOfGuess + 1);
						}
						
					}

					if (answerArray.includes("_") === false) {
						

					
						wins++;
						guesses = [];
						answerArray = [];
						gameReset();
						loadDocumentContents();
					
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

}
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




		



	

		





		
		








 