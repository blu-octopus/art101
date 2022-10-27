/**
 * Author:    Daphne Cheng
 * Created:   10.26.2022
 *
 **/

//var outputEl = document.getElementById("output");
//outputEl.innerHTML = mapResults(); // put your results here
//console.log(mapResults);

//declare array
array = [100, 81, 4, 16, 42, 144, 100000];
console.log("my array is ", array);

//is even Functions
function isEven(x){
  return (x%2 == 0);
}

//squareroot function
function sqrt(x){
    return (Math.sqrt(x));
}

//square x function
function sqr(x){
    return x*x;
}

//power Functions
function pwr(x){
  return x ** 0.5;
}
//testing isEven function
console.log("Is 1 even?", isEven(1));
console.log("Is 2 even?", isEven(2));

var temp_even = array.map(isEven).join(', ');
console.log("Array is even or not is ", temp_even);

//testing squareroot function
console.log("Squareroot of -10 (not real): ", sqrt(-10));
console.log("Squareroot of 0.5: ", sqrt(0.5));
console.log("Squareroot of 49: ", sqrt(49));
var temp_sqrt = array.map(sqrt).join(', ');
console.log("Array squarerooted is ", temp_sqrt);

var temp_sqr = array.map(sqr).join(', ');
console.log("Array squared is ", temp_sqr);

var temp_pwr = array.map(pwr).join(', ');
/*
temp_pwr.map(function(x){
    return x ** 0.5;
})
*/
console.log("array raised to the power of 0.5 ", temp_pwr);

array = array.join(', ');
