$(document).ready(function(){
//var farm
var win = 0;
var loss = 0;
var guessTotal = 0;
var goal = 0;

var jewel1;
var jewel2;
var jewel3;
var jewel4;

jewelGame()

//main game but acts as more of a reset
function jewelGame() {

	$("#losses").text(loss);
	$("#wins").text(win);

	guessTotal = 0;
	$("#yourTotal").text(guessTotal);

	goal = Math.floor(Math.random()*(120-19))+19;
	$("#crystalNo").text(goal);

	//declare 4 variables that will never equal each other
	jewel1 = Math.ceil(Math.random()*12);

	do {
		jewel2 = Math.ceil(Math.random()*12);
	} while (jewel2 == jewel1);

	do {
		jewel3 = Math.ceil(Math.random()*12);
	} while (jewel3 == jewel1 || jewel3 == jewel2);

	do {
		jewel4 = Math.ceil(Math.random()*12);
	} while (jewel4 == jewel1 || jewel4 == jewel2 || jewel4 == jewel3);

	console.log(jewel1, jewel2, jewel3, jewel4);
}//end of function

$("#jewel1").on("click",function(){
	guessTotal += jewel1;
	$("#yourTotal").text(guessTotal);
	showValue(this, jewel1);
	check();
})//end of onclick 1

$("#jewel2").on("click",function(){
	guessTotal += jewel2;
	$("#yourTotal").text(guessTotal);
	showValue(this, jewel2);
	check();
})//end of onclick 2

$("#jewel3").on("click",function(){
	guessTotal += jewel3;
	$("#yourTotal").text(guessTotal);
	showValue(this, jewel3);
	check();
})//end of onclick 3

$("#jewel4").on("click",function(){
	guessTotal += jewel4;
	$("#yourTotal").text(guessTotal);
	showValue(this, jewel4);
	check();
})//end of onclick 4

//checks win lose conditions
function check(){
	if (guessTotal > goal){
		loss++;
		jewelGame();
	} else if (guessTotal == goal){
		win++;
		jewelGame();
	}
}

})//end of document ready

//wanted to show the values of each jewel to practice this/scope/setTimeout
function showValue(but, jewelVal){
	$(but).text(jewelVal);
	setTimeout(function(){$(but).text(" ")}, 500);
}