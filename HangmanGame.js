var beginning = "javascript is loaded"
console.log(beginning);




var choices = [
    ["k", "o", "b", "e", "b", "r", "y", "a", 'n', "t"],
    ["y", "a", "o", "m", "i", "n", "g"],
    ["r", "e", "b", "o", "u", "n", "d"],
    ["s", "l", "a", "m", "d", "u", "n", "k"],
    ["t", "e", "c", "h", "n", "i", "c", "a", "l", "f", "o", "u", "l"],
    ["c", "h", "a", "r", "g", "i", "n", "g"],
    ["g", "a", "t", "o", "r", "a", "d", "e"]
];
// my selections to be guessed

var guessLeft = 12;
var points = 0;
//beginning of the how-many-word-correct

var beginningPoints = 0;
// beginning points and words we can not miss
var random = Math.floor((Math.random() * (choices.length)));
console.log(random);
//random selection choosers
// console.log(choices[1]);

var display = choices[random];
//display is now the new random selector
console.log(display);

var lengthWord = display.length;
console.log(lengthWord);
var choicesDiv = document.display;
//identifys/and changes made to choices on the html

var blankSpaces = getSpaces(lengthWord);

document.getElementById("zero").innerHTML = points;
// document.getElementById("lettersG").innerHTML = ;
document.getElementById("guessL").innerHTML = guessLeft;


function getSpaces(word) {
    for (var x = 0; x < word; x++) {
        // console.log(x);
    }
    var wordString = word.toString();
   
    console.log(wordString);
    wordString = wordString.replace(/,/g, " ");
    console.log(wordString);
    return wordString;
}


// document.onkeyup = function(event) {
//     var userGuess = event.key;
//     if ((userGuess === blankLetter))
// }

getSpaces(display);
document.getElementById("demo").innerHTML = getSpaces(display);
// i got the code now to display "display" on the html. now i need to get it to be blank.








// console.log(getSpaces);

// // setting blank spaces
// document.getElementById("demo").innerHTML = blankSpaces;
// console.log();


// for (var i = 0; i < display.length; i++) {
//     var empty = choicesDiv.replace((display), "_ ");
// }
// document.empty = document.getElementById("choicesH");
// //this code i m hoping it would replace the choices with _

// //user typing phase
// document.onkeypress = function(){
//     var userGuess = document.getElementById("choicesH");
//     document.getElementById("demo");
// if (beginningPoints === 13){
//     return;
//     alert("gameover");
// }
// if ((userGuess === key))
// if (correct) {
//     choices.replace("_", (choices));

// } else (wrong) 
//     document.textContent= document.getElementById(beginningPoints++)
// }



