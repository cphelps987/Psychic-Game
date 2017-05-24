


var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessLeft = 9;
//var guessSofar = [];


// When the user presses a key, it will run the following function...
document.onkeyup = function(event) {

                    var userGuess = event.key;

                    // document.getElementById("guessUsed").innerHTML = guessUsed;

                    for (var i = 0; i < alpha.length; i++) {

                        computerGuess = alpha[Math.floor(Math.random() * alpha.length)];
                    }

                    if ((userGuess === event.key)) {
                    }

                    if ((userGuess === computerGuess)) {
                        wins++;
                        guessLeft = 9;
                        //forgot to add in lose statment

                    }

                    else {
                        guessLeft--;

                    }

                    var temp = document.getElementById("wins-span");
                    temp.textContent = wins;

                    temp = document.getElementById("lose-span");
                    temp.textContent = losses;

                    temp = document.getElementById("left-span");
                    temp.textContent = guessLeft;

                    temp = document.getElementById("used-span");
                    temp.textContent = userGuess;

                    temp = document.getElementById("comp-choice-span");
                    temp.textContent = computerGuess;

//having trouble with getting text into document// figured it out

}

                    /*

                     <br>
                     <p>Wins: <span id="wins-span"></span></p>

                     <br>
                     <p> Losses: <span id="lose-span"></span></p>


                     <br>
                     <p> Guesses Left: <span id="left-span"></span></p>


                     <br>
                     <p> Guesses Used: <span id="used-span"></span></p>


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
