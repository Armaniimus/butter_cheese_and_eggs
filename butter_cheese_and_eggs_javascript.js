var numbarray = ['','one','two','three','four','five','six','seven','eight','nine']
var nmb = ''
var blok = "block_"
var blcknumb = ""

function print(){
	blcknumb = blok+numbarray[nmb]
	document.getElementById(blcknumb).innerHTML = "X"
}

function block__one(){
	nmb = 1
	print()
}
function block__two(){
	nmb = 2
	print()
}
function block__three(){
	nmb = 3
	print()
}
function block__four(){
	nmb = 4
	print()
}
function block__five(){
	nmb = 5
	print()
}
function block__six(){
	nmb = 6
	print()
}
function block__seven(){
	nmb = 7
	print()
}
function block__eight(){
	nmb = 8
	print()
}
function block__nine(){
	nmb = 9
	print()
}