


var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessLeft = 9;
var guessSoFar = [];
var computerGuess = '';

var newletter = function(){

    for (var i = 0; i < alpha.length; i++) {

        computerGuess = alpha[Math.floor(Math.random() * alpha.length)];
        console.log ("computer guess " + computerGuess)
    }
}

newletter()

document.onkeyup = function(event) {

    var userGuess = event.key;

    // push(event.key);
    // console.log("user input" + guessSoFar)
    //having a hard time recording keys pressed by the user



    console.log('users ' + userGuess)
    console.log('comp ' + computerGuess)

    if (userGuess === computerGuess) {

        wins++
        guessLeft = 9;
        newletter()
        console.log("wins " + wins)
    } else {

        guessLeft--
        console.log("guesses left " + guessLeft)
        //push to guessSoFar

                        //userGuess.push(guessSoFar[ ]);
                        //push.userGuess = guessSoFar [];
                       // guessSoFar.push(event.key);
    }


    if (guessLeft == 0) {

        //Reset Game
        alert('Game Over');
        guessLeft = 9;
        losses++
        var guessSoFar = [];
        console.log("losses " + losses)
    }

                    var temp = document.getElementById("wins-span");
                    temp.textContent = wins;

                    temp = document.getElementById("lose-span");
                    temp.textContent = losses;

                    temp = document.getElementById("left-span");
                    temp.textContent = guessLeft;

                    temp = document.getElementById("used-span");
                    temp.textContent = guessSoFar;

                   // temp = document.getElementById("comp-choice-span");
                   // temp.textContent = computerGuess;





}


// When the user presses a key, it will run the following function...
//     document.onkeyup = function(event) {
//
//
//
//                     // document.getElementById("guessUsed").innerHTML = guessUsed;
//
//
//                     if ((userGuess === event.key)) {
//                     }
//                     // console.log ("users guess " + userGuess)
//
//                     if ((userGuess === computerGuess)) {
//                         wins++;
//                         guessLeft = 9;
//                         console.log ("guesses left " + guessLeft)
//                         console.log ("wins " + wins)
//
//                     //forgot to add in lose statment
//
//                     }
//                     else {
//                         guessLeft--;
//                         console.log ("losses " + losses)
//                     }


// //having trouble with getting text into document// figured it out




                    /*
                                     var html = "<p>Press r, p or s to start playing!</p>" +
                                    "<p>Wins: " + wins + "</p>" +
                                    "<p>Losses: " + losses + "</p>" +
                                    "<p>GuessLeft: " + guessLeft + "</p>";


                                    document.querySelector("#game").innerHTML = html;

                    */

                    //
                   //
                   // document.getElementById("lossCount").innerHTML = text;
                   // document.getElementById("guessUsed").innerHTML = text;



   /* if ((userGuess > 0 )) {
        console.log("User has no more guesses " + userGuess)

    */

    /*
    // Here we create the HTML that will be injected into our div and displayed on the page.
    var html = "<p>The Psychic Game</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessLeft + "</p>"
    "Your Guess so far:"
    */


    // Injecting the HTML we just created into our div and updating the game information on our page.




/*
Wins: id="winCount"
Loss: id="lossCount"
Guesses Left: id="guessLeft"
Your Guesses so far: id="guessUsed"
 */
