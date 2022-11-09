//1
/**
 * Author:    Daphne Cheng
 * Created:   11.8.2022
 *
 **/

 //copied from professor Modes' website
 function checksum(s) {
   //declaring variables
   hash = 0
   len = s.length
   //no input, return 0
   if ( len === 0 ) {
     return hash;
   }
   //adding up sum
   for ( i = 0; i < len; i++ ) {
     //get char
     c = s.charCodeAt( i );
     //shift left by 5, - itself, + char to get the hash num of c
     //hash = hash, shifted, + c (adding up the hash)
     hash = ((hash << 5) - hash) + c;
     //convert to 32 bit integer
     hash = hash & hash;
   }
   return hash;
 };

 //task 2
 var houses = ["Big frog", "Normie frog", "Smol frog", "Chunky frog"];
 var descriptions = ["this means you are brave", "this means you are smart", "this means you are detail oriented", "this means you are kind"]

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

 //var myButton = document.getElementById("button");
 var desc = "description of houses";

 $("#button").click(function() {
   var name = document.getElementById("input").value;
   console.log("input is ", input);
   var house = sortingHat(name);

   // newText = "<p> The Sorting Hat has sorted you into "+
   //        "<h2>" + house + "!</h2>"+
   //        "<p>" + desc + "</p>";
   resultText = document.createElement("p");
   resultText.innerHTML = name +", you have been sorted into the ";

   resultHouse = document.createElement("h2");
   resultHouse.innerHTML = house + "!";

   descText = document.createElement("p");
   descText.innerHTML = desc;

  froggy = document.createElement("img");
  froggy.src = "../lab8/img/frog.gif";
  froggy.id = "imgSort"
  $("#imgSort").css("width", "10px");
  $("#imgSort").css("height", "10px");

  //output
  var outputEl = document.getElementById("output");
  //clears previous output
  //outputEl.innerHTML = "";
  outputEl.appendChild(froggy);
  outputEl.appendChild(resultText);
  outputEl.appendChild(resultHouse);
  outputEl.appendChild(descText);

})
