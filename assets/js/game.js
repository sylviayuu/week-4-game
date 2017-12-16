var randomNumber1 = Math.floor(Math.random() * 10+10);
var randomNumber2 = Math.floor(Math.random() * 100+20);
var randomNumber3 = randomNumber2 - randomNumber1
$("#randnum").append( "<p>" + randomNumber3 + "</p>");

var randomNumber4 = Math.floor(Math.random() * 10+2);
var randomNumber5 = Math.floor(Math.random() * 10+2);
var randomNumber6 = Math.floor(Math.random() * 10+2);
var randomNumber7 = Math.floor(Math.random() * 10+2);

$("#diamond1").append( "<p>" + randomNumber4 + "</p>");
$("#diamond2").append( "<p>" + randomNumber5 + "</p>");
$("#diamond3").append( "<p>" + randomNumber6 + "</p>");
$("#diamond4").append( "<p>" + randomNumber7 + "</p>");

//Didn't have enough time to complete all the requirements, please see pseudocode below

// Still need to do the following:

// Hide all random numbers attached to the diamonds

// Onclick diamonds --> add number sums to "Score" box

// Create syntax for winning and lossing 

// If sum > random generated number, then lose
// if sum = random generated number, then win
