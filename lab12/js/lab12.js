//1
/**
 * Author:    Daphne Cheng
 * Created:   11.8.2022
 *
 **/

 //task 2
 //2-1
 function sortingHat(str) {
   //2-2
   len = str.length;
   //2-3
   mod = len % 4;
   //2-5
   if (mod == 0) {
     return "Gryffindor"
   }
   else if (mod == 1) {
     return "Ravenclaw"
   }
   else if (mod == 2) {
     return "Slytherin"
   }
   else if (mod == 3) {
     return "Hufflepuff"
   }
 }

//task 3
 var myButton = document.getElementById("button");
 //event listner
 myButton.addEventListener("click", function() {
  //value of input field
  //maybe add no special symbols
  var name = document.getElementById("input").value;
  // call on sortingHat for house
  var houseObj = sortingHat(name);
  // output message
  newText = "<p> The Sorting Hat has sorted you into "+
          "<h2>" + houseObj + "!</h2>";
  var outputArea = document.getElementById("output");
  outputArea.innerHTML = newText;
  removeClass(outputArea, "hidden");
  //removeClass(document.getElementById("tail-box"), "hidden");
})

//keep output box hidden before submit
  var myInput = document.getElementById("input");
  myInput.addEventListener("focus", function() {
    addClass(document.getElementById("output"), "hidden");
    //addClass(document.getElementById("tail-box"), "hidden");
  });
