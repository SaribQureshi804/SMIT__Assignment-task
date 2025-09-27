// task no: 01

// let num = prompt("Enter a positive integer: ");
// let roundoff = Math.round(num);
// let floorvalue = Math.floor(num);
// let ceilvalue = Math.ceil(num);

// document.write("<h3>Number: " + num + "</h3>");
// document.write("<h3>Round off value: " + roundoff + "</h3>");
// document.write("<h3>Floor value: " + floorvalue + "</h3>");
// document.write("<h3>Ceil value: " + ceilvalue + "</h3>");

// task no: 02

// let num1= prompt("Enter a negative integer: ");
// let roundoff1 = Math.round(num);
// let floorvalue1 = Math.floor(num);
// let ceilvalue1 = Math.ceil(num);

// document.write("<h3>Number: " + num + "</h3>");
// document.write("<h3>Round off value: " + roundoff + "</h3>");
// document.write("<h3>Floor value: " + floorvalue + "</h3>");
// document.write("<h3>Ceil value: " + ceilvalue + "</h3>");


// task no: 03

// let number = prompt("Enter a number to display its absolute value: ");
// let absolutevalue = Math.abs(number);
// document.write("<h3>The absolute value of " + number + " is " + absolutevalue + "</h3>");

// task no: 04

// let diceRoll = Math.floor(Math.random() * 6) + 1;
// console.log("Random dice value: " + diceRoll);


// task no: 05

// let coinToss = Math.random()
// if (coinToss < 0.5) {
//     console.log("Heads");
// }
// else {
//     console.log("Tails");
// }

// task no: 06

// let nomber = Math.floor(Math.random() * 100) + 1; 
// console.log("Random number between 1 and 100: " + nomber);
// alert(nomber);

// task no: 07

// let userWeight = prompt("Enter your weight in kilograms ");
// let weight = parseFloat(userWeight);
// console.log("The weight of user is " + weight + " kilograms");
// alert("The weight of user is " + weight + " kilograms");



// task n0:8

let number = Math.floor(Math.random()* 10) + 1;
let userinput = +prompt("Enter a number between 1 and 10: ");

if (userinput === number ) {
    alert("Congratulations! You guessed the correct number.");
}
else{
    alert("Sorry, the correct number was " + number + ". Try again!");
}

















