// Summary. Javascript program that returns our transportation
// Description. (use period)
// @file   This files defines the JS file for lab 6.
// @author Daphne Cheng and Tony Aleria.
// @since  10.20.2022
console.log("here");

//define variables
myTransport = [" Disability Veichle Service", " bus", " metro", " walking", " bicycle", " crutches", " legs", " friend"];
console.log("my transport is", myTransport[4]);

myMainRide = {
  name: myTransport[4],
  model:"costco",
  color:"black",
  size: "small",
  year: 2021,
  age: function() {
    return 2022 - age;
  }
}

//output
document.writeln("Kinds of transportation I use: ", myTransport, "<br>");
document.writeln("My main ride: <pre>",JSON.stringify(myMainRide, null, '\t'), "</pre>");
