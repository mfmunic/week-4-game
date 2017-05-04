$(document).ready(function(){

var win = 0;
var loss = 0;
var guessTotal = 0;
var goal = 0;

jewelGame()

function jewelGame() {

	$("#losses").text(loss);
	$("#wins").text(win);

	guessTotal = 0;
	$("#yourTotal").text(guessTotal);

	goal = Math.floor(Math.random()*(120-19))+19;
	$("#crystalNo").text(goal);

	//declare 4 variables that will never equal each other
	var jewel1 = Math.ceil(Math.random()*12);

	do {
		var jewel2 = Math.ceil(Math.random()*12);
	} while (jewel2 == jewel1);

	do {
		var jewel3 = Math.ceil(Math.random()*12);
	} while (jewel3 == jewel1 || jewel3 == jewel2);

	do {
		var jewel4 = Math.ceil(Math.random()*12);
	} while (jewel4 == jewel1 || jewel4 == jewel2 || jewel4 == jewel3);

	console.log(jewel1, jewel2, jewel3, jewel4);

	$("#jewel1").on("click",function(){
		guessTotal += jewel1;
		console.log("jewel1 is "+jewel1);
		$("#yourTotal").text(guessTotal);
		check();
	})//end of onclick 1

	$("#jewel2").on("click",function(){
		guessTotal += jewel2;
		console.log("jewel2 is "+jewel2);
		$("#yourTotal").text(guessTotal);
		check();
	})//end of onclick 2

	$("#jewel3").on("click",function(){
		guessTotal += jewel3;
		console.log("jewel3 is "+jewel3);
		$("#yourTotal").text(guessTotal);
		check();
	})//end of onclick 3

	$("#jewel4").on("click",function(){
		guessTotal += jewel4;
		console.log("jewel4 is "+jewel4);
		$("#yourTotal").text(guessTotal);
		check();
	})//end of onclick 4

}//end of function

//checks win lose conditions
function check(){
	console.log("guesstotal is "+guessTotal);
	if (guessTotal > goal){
		console.log("loss");
		loss++;
		jewelGame();
		} else if (guessTotal == goal){
		console.log("win");
		win++;
		jewelGame();
	}
}

})//end of document ready
