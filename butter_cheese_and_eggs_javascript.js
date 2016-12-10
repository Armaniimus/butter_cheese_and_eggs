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
var temp = ""
var blok = "block_"
var P_one = "Player 1"
var P_two = "Player 2"
var P_cpu = "Computer"
var character_O = "O" // O is for player1
var character_X = "X" // X is for player2

var player = 1 //used to indentify player 1

//switches
var close_sol = 99	//99 known solutions are on	1 known solutions are off
var turnswitch = 1 	//1 = player1   			2 = player2 or cpu
var cpu = 0 		//1 = singleplayer   		0 = multiplayer
var game = 0 		//0 = game in process   	1 = game ended

/////////////////////////////////////////////////////////////////////
function closesolution(){
	if(close_sol == 99){
		close_sol= 1
		varprint= "Known solutions are Disabled"
	}
	else{
		close_sol=99
		varprint="Known solutions are Enabled"
	}
	printdisplay()
}
function setpmode_one(){
	cpu = 1
	turnswitch = 1
	reset()
	varprint = "Human player starts first"
	printdisplay()	
	P_two = "Computer"
}
function setpmode_two(){
	cpu = 0
	turnswitch = 1
	reset()
	P_two = "Player 2"
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
	arrayofmoves = ['','10','20','3','4','5','6','7','8','9']
	game = 0
}
/////////////////////////////////////////////////////////////////////

//Core of the program
function execute(){
	//game 0 is game in progress, game 1 is gameover
	if(game == 0){
		//Blocks a filled grid from being overridden.
		if(arrayofmoves[nmb] != 1 && arrayofmoves[nmb] != 2){
			
			//Storage functions
			blcknumb = blok+numbarray[nmb];	//saves ID name
			arrayofmoves[nmb] = turnswitch; //Saves player action into array
			document.getElementById(blcknumb).innerHTML = character; //writes O or X to ID
			
			//calculating functions
			turncounter();					//counts turn's
			win(); 							//Tests for a won game
			if(game == 0){
				turnswitcher();				//Switches player after each turn
				cpu_opponent();				//Plays computer opponent
			}
			printdisplay();					//Return's to user interface
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
		printdisplay()//Return's to user interface
	}
}
////////////////////////////////////////////////////////////////

//checks if some 1 has won
function win(){
	switch(nmb){
		
	//horizontal checks
		case 1: case 2:	case 3:
			if(arrayofmoves[1] == arrayofmoves[2] && arrayofmoves[2] == arrayofmoves[3]){
				winprint()
				break;
			}
		case 4: case 5:	case 6:
			if(arrayofmoves[4] == arrayofmoves[5] && arrayofmoves[5] == arrayofmoves[6]){
				winprint()
				break;
			}
		case 7: case 8:	case 9:
			if(arrayofmoves[7] == arrayofmoves[8] && arrayofmoves[8] == arrayofmoves[9]){
				winprint()
				break;
			}
			
	//vertical checks
		case 1: case 4:	case 7:
			if(arrayofmoves[1] == arrayofmoves[4] && arrayofmoves[4] == arrayofmoves[7]){
				winprint()
				break;
			}
		case 2: case 5:	case 8:
			if(arrayofmoves[2] == arrayofmoves[5] && arrayofmoves[5] == arrayofmoves[8]){
				winprint()
				break;
			}
		case 3: case 6:	case 9:
			if(arrayofmoves[3] == arrayofmoves[6] && arrayofmoves[6] == arrayofmoves[9]){
				winprint()
				break;
			}
			
	//diagonal checks
		case 1: case 5:	case 9:
			if(arrayofmoves[1] == arrayofmoves[5] && arrayofmoves[5] == arrayofmoves[9]){
				winprint()
				break;
			}
		case 3: case 5:	case 7:
			if(arrayofmoves[3] == arrayofmoves[5] && arrayofmoves[5] == arrayofmoves[7]){
				winprint()
				break;
			}
	}
}
function winprint(){
	if (player == turnswitch){
		varprint = P_one+" Won the game"	
		game = 1
	}
	else{
		varprint = P_two+" Won the game"	
		game = 1
	}
	printdisplay()//Return's to user interface
}

////////////////////////////////////////////////////////////////

//Computer opponent{
function cpu_opponent(){
	if(cpu == 1 && turnswitch == 2){
		
		switch(nmb){
		
		//Captures the middle
			case 1: case 2: case 3: case 4: case 6: case 7: case 8: case 9:
				if(arrayofmoves[5] != 1 && arrayofmoves[5] != 2){
					block__five()	//Presses block_five for the cpu
					temp ="5C"	//info gathering for debugging.
					break;
				}
				
	//////////////////////////////////////////////
	//horizontal	
				
		//makes sure top horizontal row isn't captured	
			case 1: case 2: case 3:
				if(arrayofmoves[1] == 10 && arrayofmoves[2] == arrayofmoves[3]){
					block__one()	//Presses block_one for the cpu
					temp ="1H"	//info gathering for debugging.
					break;
				}
				else if(arrayofmoves[2] == 20 && arrayofmoves[1] == arrayofmoves[3]){
					block__two()
					temp ="2H"
					break;
				}
				else if(arrayofmoves[3] == 3 && arrayofmoves[1] == arrayofmoves[2]){
					block__three()
					temp ="3H"
					break;
				}
				
		//makes sure middle horizontal row isn't captured
			case 4: case 5: case 6: 
				if(arrayofmoves[4] == 4 && arrayofmoves[5] == arrayofmoves[6]){
					block__four()
					temp ="4H"
					break;
				}
				else if(arrayofmoves[5] == 5 && arrayofmoves[4] == arrayofmoves[6]){
					block__five()
					temp ="5H"
					break;
				}
				else if(arrayofmoves[6] == 6 && arrayofmoves[4] == arrayofmoves[5]){
					block__six()
					temp ="6H"
					break;
				}
		
		//makes sure bottom horizontal row isn't captured
			case 7: case 8: case 9:
				if(arrayofmoves[7] == 7 && arrayofmoves[8] == arrayofmoves[9]){
					block__seven()
					temp ="7H"
					break;
				}
				else if(arrayofmoves[8] == 8 && arrayofmoves[7] == arrayofmoves[9]){
					block__eight()
					temp ="8H"
					break;
				}
				else if(arrayofmoves[9] == 9 && arrayofmoves[7] == arrayofmoves[8]){
					block__nine()
					temp ="9H"
					break;
				}

	/////////////////////////////////////////////////
	//vertical
				
		// makes sure left verticalrow isn't captured
			case 1: case 4: case 7: 
				if(arrayofmoves[1] == 10 && arrayofmoves[4] == arrayofmoves[7]){
					block__one()	//Presses block_one for the cpu
					temp ="1V"	//info gathering for debugging.
					break;
				}
				else if(arrayofmoves[4] == 4 && arrayofmoves[1] == arrayofmoves[7]){
					block__four()
					temp ="4V"
					break;
				}
				else if(arrayofmoves[7] == 7 && arrayofmoves[1] == arrayofmoves[4]){
					block__seven()
					temp ="7V"
					break;
				}
				
		//makes sure the middle verticalrow isn't captured
			case 2: case 5: case 8: 
				if(arrayofmoves[2] == 20 && arrayofmoves[5] == arrayofmoves[8]){
					block__two()
					temp ="2V"
					break;
				}
				else if(arrayofmoves[5] == 5 && arrayofmoves[2] == arrayofmoves[8]){
					block__five()
					temp ="5V"
				}
				else if(arrayofmoves[8] == 8 && arrayofmoves[2] == arrayofmoves[5]){
					block__eight()
					temp ="8V"
					break;
				}
				
		//makes sure the right verticalrow isn't captured
			case 3: case 6: case 9: 
				if(arrayofmoves[3] == 3 && arrayofmoves[6] == arrayofmoves[9]){
					block__three()
					temp ="3V"
					break;
				}
				else if(arrayofmoves[6] == 6 && arrayofmoves[3] == arrayofmoves[9]){
					block__six()
					temp ="6V"
					break;
				}
				else if(arrayofmoves[9] == 9 && arrayofmoves[3] == arrayofmoves[6]){
					block__nine()
					temp ="9V"
					break;
				}
				
	//////////////////////////////////////////////////
	//Diagonal
				
		//makes sure the \\ diagonalrow isn't captured
			case 1: case 5: case 9: 
				if(arrayofmoves[1] == 10 && arrayofmoves[5] == arrayofmoves[9]){
					block__one()//Presses block_one for the cpu
					temp ="1D"//info gathering for debugging.
					break;
				}
				else if(arrayofmoves[5] == 5 && arrayofmoves[1] == arrayofmoves[9]){
					block__five()
					temp ="5D"
					break;
				}
				else if(arrayofmoves[9] == 9 && arrayofmoves[1] == arrayofmoves[5]){
					block__nine()
					temp ="9D"
					break;
				}
				
		//makes sure the // diagonalrow isn't captured
			case 3: case 5: case 7: 
				if(arrayofmoves[3] == 3 && arrayofmoves[5] == arrayofmoves[7]){
					block__three()	//Presses block_three for the cpu
					temp ="3D"	//info gathering for debugging.
					break;
				}
				else if(arrayofmoves[5] == 5 && arrayofmoves[3] == arrayofmoves[7]){
					block__five()
					temp ="5D"
					break;
				}
				else if(arrayofmoves[7] == 7 && arrayofmoves[3] == arrayofmoves[5]){
					block__seven()
					temp ="7D"
					break;
				}
				
	////////////////////////////////////////
	//Advanced counter tactics
				
		//counter movements
			case 1: case 3: case 7: case 9: 
				if(arrayofmoves[1] == 1 && arrayofmoves[9] == 9){
					block__nine() 	//Presses block_nine for the cpu
					temp = "9Count"	//info gathering for debugging.
					break;
				}
				else if(arrayofmoves[3] == 1 && arrayofmoves[7] == 7){
					block__seven()
					temp = "7Count"
					break;
				}
				else if(arrayofmoves[7] == 1 && arrayofmoves[3] == 3){
					block__three()
					temp = "3Count"
					break;
				}
				else if(arrayofmoves[9] == 1 && arrayofmoves[1] == 10){
					block__one()
					temp = "1Count"
					break;
				}
				
		//closes victory lines disabled on purpose
			case 6: case 8: 
				if(arrayofmoves[6] == close_sol && arrayofmoves[8] == close_sol && arrayofmoves[9] == 9) {
					block__nine() 			//Presses block_nine for the cpu
					temp = "9specialcount"	//info gathering for debugging.
					break;
				}
			case 5: case 9: 
				if(arrayofmoves[5] == close_sol && arrayofmoves[9] == close_sol && arrayofmoves[3] == 3){
					block__three()
					temp = "3specialcount"
					break;
				}
			case 3: case 7:
				if(arrayofmoves[3] == close_sol && arrayofmoves[7] == close_sol && arrayofmoves[2] == 20){
					block__two()
					temp = "2specialcount"
					break;
				}
				
	/////////////////////////////////////////////
	//Else moves
				
		//makes sure the game get's played out
			case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9:
				if(arrayofmoves[1] == 10){
					block__one() 	//Presses block_one for the cpu
					temp ="1draw"	//info gathering for debugging.
					break;
				}
				else if(arrayofmoves[2] == 20){
					block__two()
					temp ="2draw"
					break;
				}
				else if(arrayofmoves[3] == 3){
					block__three()
					temp ="3draw"
					break;
				}
				else if(arrayofmoves[4] == 4){
					block__four()
					temp ="4draw"
					break;
				}
				else if(arrayofmoves[5] == 5){
					block__five()
					temp ="5draw"
					break;
				}
				else if(arrayofmoves[6] == 6){
					block__six()
					temp ="6draw"
					break;
				}
				else if(arrayofmoves[7] == 7){
					block__seven()
					temp ="7draw"
					break;
				}
				else if(arrayofmoves[8] == 8){
					block__eight()
					temp ="8draw"
					break;
				}
				else if(arrayofmoves[9] == 9){
					block__nine()
					temp ="9draw"
					break;
				}
		}
		//test info
		//varprint ="<br />"+temp+nmb
		//varprint +="<br />"+arrayofmoves
		
		printdisplay()	//return's to display after computer turn and for tests
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