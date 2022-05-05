var randomNumber1 = Math.floor(Math.random() * 7);

var randomNumber2 = Math.floor(Math.random() * 7);

var randomDice = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

document.querySelector("img").setAttribute("src", randomDice[randomNumber1]);

document.querySelector("div").lastElementChild.lastElementChild.setAttribute("src", randomDice[randomNumber2]);


if (randomDice[randomNumber1] > randomDice[randomNumber2]){

    document.querySelector("h1").innerHTML= "Player 1 Wins! Refresh Page";


} else if (randomDice[randomNumber1] === randomDice[randomNumber2]){

    document.querySelector("h1").innerHTML= "It's a tie! Refresh Page";

}else { document.querySelector("h1").innerHTML= "Player 2 Wins! Refresh Page";

}