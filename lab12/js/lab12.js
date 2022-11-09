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
 var descriptions = ["this means you are brave.", "this means you are smart.", "this means you are detail oriented.", "this means you are kind."];
 var widths = ["540px", "90px", "10px", "150px"];
 var heights = ["430px", "70px", "7px", "70px"];

 function sortingHat(str) {
   hashedValue = checksum(str);
   mod = Math.abs(hashedValue) % houses.length;
   console.log("width is ", widths[mod]);
   return [houses[mod], descriptions[mod], widths[mod], heights[mod]];
   //len = str.length;
   //mod = len % houses.length;
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

 $("#button").click(function() {
   var name = document.getElementById("input").value;
   console.log("input is ", input);

   //[house, description, width, height]
   arrHoused = sortingHat(name);
   var house = arrHoused[0];
   var desc = arrHoused[1];
   var fWidth = arrHoused[2];
   var fHeight = arrHoused[3];

   // newText = "<p> The Sorting Hat has sorted you into "+
   //        "<h2>" + house + "!</h2>"+
   //        "<p>" + desc + "</p>";
   resultText = document.createElement("p");
   resultText.innerHTML = name + ", you have been sorted into the ";

   resultHouse = document.createElement("h2");
   resultHouse.innerHTML = house + "!";

   descText = document.createElement("p");
   descText.innerHTML = desc ;

  //froggy = document.createElement("img");
  //froggy.src = "../lab8/img/frog.gif";
  //froggy.id = "imgFrog"
  console.log("getting the fWidth ", fWidth);
  console.log("getting the fHeight ", fHeight);
  $("#imgFrog").css("width", fWidth);
  $("#imgFrog").css("height", fHeight);
  //$("#imgFrog").css("height", fHeight);
  //$("#imgFrog").toggleClass("imgSort");

  //output
  var outputEl = document.getElementById("output");
  //clears previous output
  outputEl.innerHTML = "";
  //outputEl.appendChild(froggy);
  outputEl.appendChild(resultText);
  outputEl.appendChild(resultHouse);
  outputEl.appendChild(descText);

})
