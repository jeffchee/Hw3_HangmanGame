var beginning="javascript is loaded"
console.log(beginning);




var choices = [
    ["k", "o", "b", "e","b","r","y","a",'n',"t"],
    ["y","a","o","m","i","n","g"],
    ["r","e","b","o","u","n","d"],
    ["s","l","a","m","d","u","n","k"],
    ["t","e","c","h","n","i","c","a","l","f","o","u","l"],
    ["c","h","a","r","g","i","n","g"],
    ["g","a","t","o","r","a","d","e"]

];
// my selections to be guessed
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


function getSpaces(word){
    for (var x=0; x < word; x++){
        console.log(x);
    }

}



// setting blank spaces
document.getElementById("demo").innerHTML = blankSpaces;



for(var i=0; i<choices.length;i++){
    var empty = choicesDiv.replace((display),"_ ");
}
document.empty = document.getElementById("choicesH");
//this code i m hoping it would replace the choices with _

//user typing phase
document.onkeypress = function(){
    var userGuess = document.getElementById("choicesH");
    document.getElementById("demo");
if (beginningPoints === 13){
    return;
    alert("gameover");
}
if ((userGuess === key))
if (correct) {
    choices.replace("_", (choices));
    
} else (wrong) 
    document.textContent= document.getElementById(beginningPoints++)
}



