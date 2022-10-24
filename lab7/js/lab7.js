/**
 * Author:    Daphne Cheng
 * Created:   10.23.2022
 *
 **/

 function makeName() {
   var userName = window.prompt("Your name is: ");
   console.log("userName =", userName);
   //put string into array by char
   var nameArray = userName.split('');
   console.log("nameArray =", nameArray);
   //sort array
   var nameArraySort = nameArray.sort();
   console.log("nameArraySort =", nameArraySort);
   //put array into a string
   var nameSorted = nameArraySort.join('');
   console.log("nameSorted =", nameSorted);

   return nameSorted;
 }

 //Output
 document.writeln("Your better name: ", makeName(), "</br>");
