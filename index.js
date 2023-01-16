var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var imageSourcetwo = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", imageSourcetwo);




if (randomNumber1 > randomNumber2){

    document.querySelector("h1").innerHTML= "Player 1 Wins! Refresh Page";


} else if (randomNumber1 === randomNumber2){

    document.querySelector("h1").innerHTML= "It's a tie! Refresh Page";

}else { document.querySelector("h1").innerHTML= "Player 2 Wins! Refresh Page";

}