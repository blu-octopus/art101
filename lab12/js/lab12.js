//1
/**
 * Author:    Daphne Cheng
 * Created:   11.8.2022
 *
 **/

 //task 2
 var houses = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"];
 var descriptions = ["you are brave", "you are smart", "you are detail oriented", "you are kind"]

 function sortingHat(str) {
   len = str.length;
   mod = len % houses.length;
   desc = descriptions[mod];
   console.log("str2 is ", desc);
   return houses[mod];
   // if (mod == 0) {
   //   return "Gryffindor"
   // }
   // else if (mod == 1) {
   //   return "Ravenclaw"
   // }
   // else if (mod == 2) {
   //   return "Slytherin"
   // }
   // else if (mod == 3) {
   //   return "Hufflepuff"
   // }
 }

 var myButton = document.getElementById("button");
 var name = document.getElementById("input").value;
 var desc = "description of houses";

 myButton.addEventListener("click", function() {
  var house = sortingHat(name, desc);
  console.log(desc);

  newText = "<p> The Sorting Hat has sorted you into "+
          "<h2>" + house + "!</h2>"+
          "<p>" + desc + "</p>";
  var outputArea = document.getElementById("output");
  outputArea.innerHTML = newText;
  //removeClass(outputArea, "hidden");
  //removeClass(document.getElementById("tail-box"), "hidden");
})

//keep output box hidden before submit
  var myInput = document.getElementById("input");
  //myInput.addEventListener("focus", function() {
    //addClass(document.getElementById("output"), "hidden");
    //addClass(document.getElementById("tail-box"), "hidden");
  //});
