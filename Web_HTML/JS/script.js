
var food = ['Pizza', 'Burger', 'Mengo', 'Grill', 'Icecream', 'Tea','Orenge', 'Fineapple' ];

var menu = [];
menu = {'Pizza': 200,'Burger': 150};
console.log (menu)

var apple = 20;
mengo = 20;
fineapple = 34;
orenge = 23;

var total = apple + mengo + fineapple + orenge;
var savemoney = 50;

console.log ('Total Price: '+total);
if(total <= savemoney || apple <= 15){
	console.log ('You can buy');
}else if(orenge <= savemoney){
	console.log ('You can buy orenge');
}
else{
	console.log ('You can not buy');
}

var sb1 = 13;
sb2 = 23;
sb3 = 10;
sb4 = 15;
sb5 = 19;

var total = sb1 + sb2 + sb3 + sb4 + sb5;
console.log ('Total Mark: '+ total);
if (total >= 80) {
	console.log ('A+');
}else if (total >= 70) {
	console.log ('A');
}else if (total >= 60) {
	console.log ('A-');
}else if (total >= 50) {
	console.log ('B');
}else if (total >= 40) {
	console.log ('C')
}else {
	console.log ('F')
}

// While Loop
var number = 0;
var loop_string = '';

while (number <= 10){
	loop_string = loop_string + 'A';
	console.log (loop_string);
	number++;
}

var i = 0;

console.log (food.length);

while (i < food.length) {
	console.log (food[i]);
	i++;
}