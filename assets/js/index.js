let display = document.getElementById('display');

function transfer(num) {
	display.value += num;
}

function calc() {
	display.value = eval(display.value);
}

function cleary() {
	display.value = '';
}
