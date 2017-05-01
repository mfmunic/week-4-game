var win = 0;
var loss = 0;

function jewelGame() {

	var guessTotal = 0;

	//declare 4 variables that will never equal each other
	var jewel1 = Math.ceil(Math.random()*3);
	var jewel2 = Math.ceil(Math.random()*3)+3;
	var jewel3 = Math.ceil(Math.random()*3)+6;
	var jewel4 = Math.ceil(Math.random()*3)+9;

	//make a random number that with a min equal to the sum of the above var
	var jewels = jewel1+jewel2+jewel3+jewel4;
	var goal = Math.floor(Math.random()*(120-19))+19;

	console.log(jewel1, jewel2, jewel3, jewel4);

	$("#crystalNo").text(goal);
	$("#wins").text(win);
	$("#losses").text(loss);
	$("#yourTotal").text(guessTotal);

	$("#jewel1").on("click",function(){
		guessTotal += jewel1;
		$("#yourTotal").text(guessTotal);
		if (guessTotal > goal){
			loss++;
			jewelGame();
		} else if (guessTotal === goal){
			win++;
			jewelGame();
			}
	})//end of onclick 1

	$("#jewel2").on("click",function(){
		guessTotal += jewel2;
		$("#yourTotal").text(guessTotal);
		if (guessTotal > goal){
			loss++;
			jewelGame();
		} else if (guessTotal === goal){
			win++;
			jewelGame();
			}
	})//end of onclick 2

	$("#jewel3").on("click",function(){
		guessTotal += jewel3;
		$("#yourTotal").text(guessTotal);
		if (guessTotal > goal){
			loss++;
			jewelGame();
		} else if (guessTotal === goal){
			win++;
			jewelGame();
			}
	})//end of onclick 3

	$("#jewel4").on("click",function(){
		guessTotal += jewel4;
		$("#yourTotal").text(guessTotal);
		if (guessTotal > goal){
			loss++;
			jewelGame();
		} else if (guessTotal === goal){
			win++;
			jewelGame();
			}
	})//end of onclick 4

}//end of function
