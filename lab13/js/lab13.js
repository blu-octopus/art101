//1
/**
 * Author:    Daphne Cheng
 * Created:   11.14.2022
 *
 **/

 //arr = {3: "Fizz", 5: "Buzz", 7: "Boom", 13: "Bang"};
 maxInput = 4;

 function fizzBuzzBoom(maxNums, factorObj){
    for (var i = 0; i <= maxNums; i++){
      var str = "";
      for(factor in factorObj){
        //if i is a multiple of factor
        if(i % factor == 0){
          str += factorObj[factor];
        }
      }
      //if str is not empty
      if(str){
        str = " - " + str + "!";
      }
      //print int i + str
      //outputToPage(i.toString() + str);
      console.log(str);
      $("#output-2").append("<p>" + i + str + "</p>");

    }
  }

  function getFactorObj() {
    var factorObj = {};
    for (var factor = 0; factor < maxInput; factor++) {
        numId = "num" + factor;
        textId = "text" + factor;
        numValue = document.getElementById(numId).value;
        textValue = document.getElementById(textId).value;
        console.log(factor + ") num:", numValue, "text:", textValue)
        // if either value is blank, don't use it
        if (numValue || textValue) {
            factorObj[numValue] = textValue;
        }
    }
    return factorObj;
  }

  //call function
  //results = fizzBuzzBoom(200, arr);
  document.getElementById("submit").addEventListener("click", function() {
    var max = document.getElementById("max").value;
    console.log("max:", max)
    if (! max) {
        reportError("You must provide a maximum");
        return;
    }
    var factorObj = getFactorObj();
    console.log("factorObj:", factorObj);
    if (Object.keys(factorObj).length === 0) {
        reportError("You must provide at least one factor and text");
        return;
    }
    // clear error if there is one
    $("#output-2").html("");
    fizzBuzzBoom(max, factorObj);
    document.getElementById("output-2").classList.add("cols");
  })
