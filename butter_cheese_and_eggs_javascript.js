//saved arrayof strings
var numbarray = ['','one','two','three','four','five', 'six','seven','eight','nine']

// used to store the information of each block in the 9grid
var arrayofmoves = []
var nmb = 0

//used to store temporarly information
var blcknumb = "" //used to store an Id number
var varprint = "" //used to store a message before returning it to UI
var character = "" // used to save a character after each turn

//Counter for the amount of passed turns
var varturncount = 0

// saved strings
var blok = "block_"
var P_one = "player 1"
var character_O = "O" // 0 is for player1
var P_two = "player 2"
var character_X = "X" // X is for player2

var player = 1 //used to indentify player 1

//switches
var turnswitch = 1 	//1 = player1   			2 = player2 or cpu
var cpu = 0 		//1 = singleplayer   		0 = multiplayer
var game = 0 		//0 = game in process   	1 = game ended

/////////////////////////////////////////////////////////////////////
function setpmode_one(){
	cpu = 1
	reset()
	varprint = "Computerplayer is on"
	printdisplay()
	turnswitch = 1
	
}
function setpmode_two(){
	cpu = 0
	reset()
}

///////////////////////////////////////////////////////////////////

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
	arrayofmoves = ['','B','C','D','E','F','G','H','I','J']
	game = 0
}
/////////////////////////////////////////////////////////////////////

//Core of the program
function execute(){
	if(game == 0){
		if(arrayofmoves[nmb] != 1 && arrayofmoves[nmb] != 2){
			blcknumb = blok+numbarray[nmb];	//saves ID name
			turnswitcher();					//Switches player after each turn
			printdisplay();					//Return's to display
			turncounter();					//counts turn's
			arrayofmoves[nmb] = turnswitch; //Saves player action into array
			document.getElementById(blcknumb).innerHTML = character; //writes O or X to ID
			win(); 							//Tests for a won game
			cpu_opponent();					//Plays computer opponent
			varprint +="<br />"+arrayofmoves
			printdisplay()
		}
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

//Computer opponent{
function cpu_opponent(){
	if(cpu == 1 && turnswitch == 2){
		//Captures the middle
		if(arrayofmoves[5] == "F" && arrayofmoves != 1 ||arrayofmoves != 2){
			block__five()
		}
		
		//makes sure top horizontal row isn't captured
		else if(arrayofmoves[1] != 2 && arrayofmoves[2] == 1 && arrayofmoves[2] == 1){
			block__one()
		}
		else if(arrayofmoves[1] == 1 && arrayofmoves[2] != 2 && arrayofmoves[3] == 1){
		block__two()
		}
		else if(arrayofmoves[1] == 1 && arrayofmoves[2] != 2 && arrayofmoves[3] != 2){
			block__three()
		}
		
		//makes sure middle horizontal row isn't captured
		else if(arrayofmoves[4] != 2 && arrayofmoves[5] == 1 && arrayofmoves[6] == 1){
			block__four()
		}
		else if(arrayofmoves[4] == 1 && arrayofmoves[5] != 2 && arrayofmoves[6] == 1){
			block__five()
		}
		else if(arrayofmoves[4] == 1 && arrayofmoves[5] != 2 && arrayofmoves[6] != 2){
			block__six()
		}
		
		//makes sure bottom horizontal row isn't captured
		else if(arrayofmoves[7] != 2 && arrayofmoves[8] == 1 && arrayofmoves[9] == 1){
			block__seven()
		}
		else if(arrayofmoves[7] == 1 && arrayofmoves[8] != 2 && arrayofmoves[9] == 1){
			block__eight()
		}
		else if(arrayofmoves[7] == 1 && arrayofmoves[8] != 2 && arrayofmoves[9] != 2){
			block__nine()
		}
		///////////////////////////////////////
		// makes sure left verticalrow isn't captured
		else if(arrayofmoves[1] != 2 && arrayofmoves[4] == 1 && arrayofmoves[7] == 1){
			block__one()
		}
		else if(arrayofmoves[2] != 2 && arrayofmoves[5] == 1 && arrayofmoves[8] == 1){
			block__two()
		}
		else if(arrayofmoves[3] != 2 && arrayofmoves[6] == 1 && arrayofmoves[6] == 1){
			block__three()
		}
		
		
		
				
		else if(arrayofmoves[3] == "X"){
			block__seven()
		}
		else if(arrayofmoves[7] == "X"){
			block__three()
		}
		else if(arrayofmoves[9] == "X"){
			block__one()
		}
		//test info
		varprint +="<br />"+ nmb
		printdisplay()
	}
}

/////////////////////////////////////////////////////////////////

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