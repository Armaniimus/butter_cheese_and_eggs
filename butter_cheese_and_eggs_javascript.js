var numbarray = ['','one','two','three','four','five','six','seven','eight','nine']
var nmb = 0
var blok = "block_"
var blcknumb = ""
var turnswitch = 1
var varturncount = 0
var varprint = ""
var arrayofmoves = []
var character_O = "O"
var character_X = "X"
var character = ""
var P_one = "player 1"
var P_two = "player 2"
var player = 1
var cpu = 0
var game = 0

/////////////////////////////////////////////////////////////////////
	
//Reset function
function reset(){
	for(i=1; i<=9; i++){
		arrayofmoves[i] = "";
		blcknumb = blok+numbarray[i];
		document.getElementById(blcknumb).innerHTML = '';
	}
	varturncount = 0
	turnswitcher()
	turnswitcher()
	printdisplay()
	arrayofmoves = ['A','B','C','D','E','F','G','H','I','J']
	game = 0
}
/////////////////////////////////////////////////////////////////////

//Core of the program
function execute(){
	if(game == 0){
	blcknumb = blok+numbarray[nmb];	//saves ID name
	turnswitcher();					//Switches player after each turn
	printdisplay();					//Return's to display
	turncounter();					//counts turn's
	arrayofmoves[nmb] = turnswitch; //Saves player action into array
	document.getElementById(blcknumb).innerHTML = character; //writes O or X to ID
	win(); 							//Tests for a won game
	cpu_opponent();					//Plays computer opponent
	}
}
////////////////////////////////////////////////////////////////////

//Print to display
function printdisplay(){
	document.getElementById("display").innerHTML = varprint
}

//Switches which character is displayed.
function turnswitcher(){
	if (turnswitch == 2){
		character = character_O
		turnswitch = 1
		varprint = "Its "+P_one+" it's turn"
	}
	else{
		character = character_X
		turnswitch = 2
		varprint = "Its "+P_two+" it's turn"
	}
}

//Counts the turns
function turncounter(){
	varturncount += 1
	if(varturncount == 9){
		varturncount = 0
		varprint = "The game is a draw"
		game = 1
		printdisplay()
	}
}
////////////////////////////////////////////////////////////////

//checks if some 1 has won
function win(){
	
	//horizontal checks
	if(arrayofmoves[1] == arrayofmoves[2] && arrayofmoves[2] == arrayofmoves[3]){
		winprint()
	}
	else if(arrayofmoves[4] == arrayofmoves[5] && arrayofmoves[5] == arrayofmoves[6]){
		winprint()
	}
	else if(arrayofmoves[7] == arrayofmoves[8] && arrayofmoves[8] == arrayofmoves[9]){
		winprint()
	}
	
	//vertical checks
	else if(arrayofmoves[1] == arrayofmoves[4] && arrayofmoves[4] == arrayofmoves[7]){
		winprint()
	}
	else if(arrayofmoves[2] == arrayofmoves[5] && arrayofmoves[5] == arrayofmoves[8]){
		winprint()
	}
	else if(arrayofmoves[3] == arrayofmoves[6] && arrayofmoves[6] == arrayofmoves[9]){
		winprint()
	}
	
	//diagonal checks
	else if(arrayofmoves[1] == arrayofmoves[5] && arrayofmoves[5] == arrayofmoves[9]){
		winprint()
	}
	else if(arrayofmoves[3] == arrayofmoves[5] && arrayofmoves[5] == arrayofmoves[7]){
		
		winprint()
	}
}
function winprint(){
	turnswitcher();
	if (player == turnswitch){
		varprint = P_one+" Has won"	
		game = 1
	}
	else{
		varprint = P_two+" Has won"	
		game = 1
	}
	printdisplay()
}

////////////////////////////////////////////////////////////////

//Blocks to number input
function block__one(){
	nmb = 1
	execute()
}
function block__two(){
	nmb = 2
	execute()
}
function block__three(){
	nmb = 3
	execute()
}
function block__four(){
	nmb = 4
	execute()
}
function block__five(){
	nmb = 5
	execute()
}
function block__six(){
	nmb = 6
	execute()
}
function block__seven(){
	nmb = 7
	execute()
}
function block__eight(){
	nmb = 8
	execute()
}
function block__nine(){
	nmb = 9
	execute()
}
reset()