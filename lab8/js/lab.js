/**
 * Author:    Daphne Cheng
 * Created:   10.26.2022
 *
 **/

//declare array
array = [100, 0.1, 3/2, -999, 88888888]
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

var temp_even = array.map(isEven);
console.log("array is evemm or not is ", temp_even);

var temp_sqrt = array.map(sqrt);
console.log("array squarerooted is ", temp_sqrt);

var temp_sqr = array.map(sqr);
console.log("array squared is ", temp_sqr);

array.map(function(x){
    return x ** x + 1;
})
console.log("array raised to the power of x, + 1 is ", array);
