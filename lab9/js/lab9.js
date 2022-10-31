//1
/**
 * Author:    Daphne Cheng
 * Created:   10.26.2022
 *
 **/

//2 Using getElementById()
var outputEl = document.getElementById("output");
console.log("outputEl: ", outputEl);

//3 document.createElement
//create <p></p>
var new1El = document.createElement("p");

//4 html attribute
//innerHTML for <p> with id new1EL
new1El.innerHTML = "Something new.";
//id to go in css
new1El.id = "new-one";

//5 new element
//create <p></p>
var new2El = document.createElement("p");
//id to go in css
new2El.id = "new-two";

//6 element2 says something else
//innerHTML for <p> with id new2EL
new2El.innerHTML = "Something else.";

//7 appened child
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

//8 change css attribute?
//in lab9/css/lab9.css
