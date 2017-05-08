function displayMe() {
	document.getElementById("demo").style.display = 'none';
}

function innerHTMLMethod() {
	document.getElementById("demo").innerHTML = "value changed";
}

function sumofTwoNumbers(x, y) {
	var z = x + y;
	document.getElementById("sum").innerHTML = "z = " + z;
}