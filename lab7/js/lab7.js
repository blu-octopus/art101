/**
 * Author:    Daphne Cheng
 * Created:   10.23.2022
 *
 **/
//change userName
userName = window.prompt("Your name is: ", "put your name here");
console.log("userName =", userName);
//change user input to lower case
var lowered = userName.toLowerCase();
//take out spaces
lowered = lowered.split(" ").join("");
//put string into array by char
var nameArray = lowered.split('');
console.log("nameArray =", nameArray);

function makeName() {
  //sort array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  //put array into a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  //captialize first letter
  var captialize = nameSorted[0].toUpperCase();
  var capArr = [];
  for(var i = 1; i < nameSorted.length; i++){
    capArr = capArr + nameSorted[i];
  }
  capArr = captialize + capArr;

  return capArr;
}

//shuffle
//code from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  //captialize first letter
  var captialize = array[0].toUpperCase();
  var capArr = [];
  for(var i = 1; i < array.length; i++){
    capArr = capArr + array[i];
  }
  capArr = captialize + capArr;
  return capArr;
}

/*
function shuffleName(name) {

  var sortedname = name.split('').sort()

  return sortedname.join('');
}
*/
//Output
document.writeln("You had given me the name: ", userName, "</br>")
var name = makeName();
document.writeln("Your better name: ", name, "</br>");
var randomnizedName = shuffle(nameArray);
document.writeln("Your shuffled name: ", randomnizedName, "</br>");

/*
var sorted_name = shuffleName(name)
document.writeln("sorted name: ", sorted_name, "</br>");
*/
