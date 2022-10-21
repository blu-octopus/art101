/**
 * Author:    Daphne Cheng, Million Villanueva
 * Created:   10.07.2022
 *
 **/

 // Define Variables
make = "Squishmellow";
model= "Wendy the Frog";
color= "Green";
year= 2017;
ownIt = false;

//calculate
age = 2022 - year;

//output
document.writeln("Make: " + make + "<br>");
document.writeln("Model: " + model + "<br>");
document.writeln("Color: " + color + "<br>");
document.writeln("Year: " + year + "<br>");
document.writeln("Age: " + age + " years <br>");
if (ownIt) {
  document.writeln("I own it!");
}else {
  document.writeln("I don't own it!");
}
