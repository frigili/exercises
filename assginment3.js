function replaceAll(string, search, replace) {
    return string.split(search).join(replace);
}

// defin the ablity to replace by index
String.prototype.replaceAt = function (index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }

    return this.substring(0, index) + replacement + this.substring(index + 1);
}

var readlineSync = require('readline-sync');

var j, i;
//choss random word from array
var wordLi = ["red", "blue", "green", "yellow"];
var randWord = wordLi[Math.floor(Math.random() * wordLi.length)];

var lenWord = randWord.length;

// repalce all the word by *
var replaceWord = replaceAll(randWord, /[a-zA-Z]/gi, "*");

console.log("You have 10 guesses " + '\n' + "The word is: " + replaceWord);
var gues = readlineSync.question("What is guess?");

for (i = 0; i < 10; i++) //ask for 10 time aboout the guess
{
    // check if the guess is not letter. if is not he will ask him to guess again
	while (!gues.match(/^[a-zA-Z]/)) 
    {
        gues = readlineSync.question("You enter an invalid guess " + '\n' + "Pleas enter a letter -What is guess?");
    }

	gues = gues.toLowerCase();
    
    //loop that replace the same lather 
    for (j = 0; j < lenWord; j++) {
       
		var j = randWord.indexOf(gues, j);
		if(j == -1){
			break;
		}
        // replace letter by flow by index
        replaceWord = replaceWord.replaceAt(j, gues);
    }
	
    if (replaceWord.indexOf("*") == -1) {
        console.log("Wow you are good");
        break;
    }
    var guessLeft = 9 - i;
    gues = readlineSync.question("You have" + guessLeft + " guesses" + '\n' + "The word is: " + '\n' + replaceWord + '\n' + "What is guess?");
}