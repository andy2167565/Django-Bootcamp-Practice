var first_name = prompt("Hello and welcome. Please enter your first name:");
var last_name = prompt("Please enter your last name:");
var age = prompt("How old are you?");
var height = prompt("How tall are you in centimeters?");
var pet = prompt("What is the name of your pet?");
alert("Thank you so much for the information.");

var cond1 = (first_name[0].toUpperCase() === last_name[0].toUpperCase());
var cond2 = (age > 20 && age < 30);
var cond3 = (height >= 170);
var cond4 = (pet.slice(-1) === "y");
if (cond1 && cond2 && cond3 && cond4) {
  console.log("Welcome Comrade! You've passed the Spy Test!");
} else {
  console.log("Sorry, nothing to see here.");
}
