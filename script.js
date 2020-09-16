var wrap = document.body.querySelector(".wrapper");

var firstNumber = prompt("Input first Number");
var secondNumber= prompt("Input second Number");
var calculation= firstNumber+secondNumber;
var firstNumberInt= parseInt(firstNumber);
var secondNumberInt= parseInt(secondNumber);
var calculation= firstNumberInt+secondNumberInt

document.body.querySelector(".wrapper").innerHTML=calculation;