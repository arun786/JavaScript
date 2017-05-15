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

function objectValue() {
	var person = {
		firstName : "arun",
		lastName : "singh",
		age : 16,
		eyeColor : "blue"
	};
	document.getElementById("demo").innerHTML = person.firstName + " : "
			+ person.lastName + " is " + person.age
			+ " years old with eye color as " + person.eyeColor;
}

function sumReturn(x, y) {
	var z = x + y;
	return z;
}

function displayinHTML(x, y) {
	document.getElementById('demo').innerHTML = sumReturn(x, y);
}

function toFarenheit() {
	var fahrenheit = document.getElementById('fahrenheit').innerHTML;
	document.getElementById('celcius').innerHTML = (5 / 9) * (fahrenheit - 32) + " celcius";
}