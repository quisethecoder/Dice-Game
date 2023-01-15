// var randomNumber1 = Math.floor(Math.random() * 7);

// var randomNumber2 = Math.floor(Math.random() * 7);

// var randomDice = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

// document.querySelector("img").setAttribute("src", randomDice[randomNumber1]);

// document.querySelector("div").lastElementChild.lastElementChild.setAttribute("src", randomDice[randomNumber2]);


var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = ".images/dice" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomImageSource2 = "images/dice" + randomNumber2 + "png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);




if (randomNumber1 > randomNumber2){

    document.querySelector("h1").innerHTML= "Player 1 Wins! Refresh Page";


} else if (randomNumber1 === randomNumber2){

    document.querySelector("h1").innerHTML= "It's a tie! Refresh Page";

}else { document.querySelector("h1").innerHTML= "Player 2 Wins! Refresh Page";

}