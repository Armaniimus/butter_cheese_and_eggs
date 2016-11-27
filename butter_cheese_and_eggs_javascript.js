var numbarray = ['','one','two','three','four','five','six','seven','eight','nine']
var nmb = 0
var blok = "block_"
var blcknumb = ""
var turnswitch = "O"
var varturncount = 0
var varprint = ""
var arrayblocktypes = []

//Reset function
function reset(){
	for(i=1; i<=9; i++){
		arrayblocktypes[i] = "";
		blcknumb = blok+numbarray[i];
		document.getElementById(blcknumb).innerHTML = '';
	}
	varprint = "Its player 1 its turn"
	printdisplay()
	varturncount = 0
	turnswitch = "O"
}
//Print to display
function printdisplay(){
	document.getElementById("display").innerHTML = varprint
}
//Core of the program
function execute(){
	blcknumb = blok+numbarray[nmb]
	document.getElementById(blcknumb).innerHTML = turnswitch
	turnswitcher()
	turncounter()
}
//Switches which character is displayed.
function turnswitcher(){
	if (turnswitch == "X"){
		turnswitch = "O"
		varprint = "Its player 1 it's turn"
		printdisplay()
	}
	else{
		turnswitch = "X"
		varprint = "Its player 2 it's turn"
		printdisplay()
	}
}
//Counts the turns
function turncounter(){
	varturncount += 1
	if(varturncount == 9){
		varturncount = 0
		varprint = "The game is a draw"
		printdisplay()
	}
}
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