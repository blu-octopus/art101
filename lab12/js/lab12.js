//1
/**
 * Author:    Daphne Cheng
 * Created:   11.8.2022
 *
 **/

 //copied from professor Modes' website
 function checksum(s) {
   var hash = 0, strlen = s.length, i, c;
   if ( strlen === 0 ) {
     return hash;
   }
   for ( i = 0; i < strlen; i++ ) {
     c = s.charCodeAt( i );
     hash = ((hash << 5) - hash) + c;
     hash = hash & hash; // Convert to 32bit integer
   }
   return hash;
 };

 //task 2
 var houses = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"];
 var descriptions = ["you are brave", "you are smart", "you are detail oriented", "you are kind"]

 function sortingHat(str) {
   len = str.length;
   console.log("length is ", len);
   hashedValue = checksum(str);
   console.log("hashedValue is ", hashedValue);
   mod = Math.abs(hashedValue) % houses.length;
   desc = descriptions[mod];
   console.log("desc is updated to ", desc);
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
 var desc = "description of houses";

 myButton.addEventListener("click", function() {
   var name = document.getElementById("input").value;
   console.log("input is ", input);
  var house = sortingHat(name);
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
