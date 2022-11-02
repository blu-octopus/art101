//1
/**
 * Author:    Daphne Cheng
 * Created:   11.2.2022
 *
 **/

 //change userName
 function sortName(array) {
   var lowered = array.toLowerCase();
   lowered = lowered.split(" ").join("");
   var nameArray = lowered.split('');
   var nameArraySort = nameArray.sort();
   var nameSorted = nameArraySort.join('');
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
 function shuffleName(array) {
   var lowered = array.toLowerCase();
   lowered = lowered.split(" ").join("");
   array = lowered.split('');
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

   var captialize = array[0].toUpperCase();
   var capArr = [];
   for(var i = 1; i < array.length; i++){
     capArr = capArr + array[i];
   }
   capArr = captialize + capArr;
   return capArr;
 }


 //input from user input, output to output
 sort_button = document.getElementById("sort-button");
 anagram_button = document.getElementById("anagram-button");
 outputEl = document.getElementById("output");

 sort_button.addEventListener("click", function(){
  var inputVal = document.getElementById('user-name').value;

  if(inputVal.length <= 0){
    outputEl.innerHTML = "<p id=name-results>" + "You need to type something in" + "</p>";
  }else{
    var sortedNewName = sortName(inputVal);
    outputEl.innerHTML = "<p id=name-results>" + "Your sorted name is " + sortedNewName + "</p>";
  }
 });

 anagram_button.addEventListener("click", function(){
  var inputVal = document.getElementById('user-name').value;
  if(inputVal.length <= 0){
    outputEl.innerHTML = "<p id=name-results>" + "You need to type something in" + "</p>";
  }else{
    var anagramName = shuffleName(inputVal);
    outputEl.innerHTML += "<p id=name-results>" + "Your mixed up name is " + anagramName + "</p>";
  }
 });

//js for input from https://freebiesupply.com/blog/css-inputs/
 'use strict';
 var textInput = document.querySelector('input');
 var inputWrap = textInput.parentElement ;
 var inputWidth = parseInt(getComputedStyle(inputWrap).width);
 var svgText = Snap('.line');
 var qCurve = inputWidth / 2;  // For correct curving on diff screen sizes
 var textPath = svgText.path("M0 0 " + inputWidth + " 0");
 var textDown = function(){
     textPath.animate({d:"M0 0 Q" + qCurve + " 40 " + inputWidth + " 0"},150,mina.easeout);
 };
 var textUp = function(){
   textPath.animate({d:"M0 0 Q" + qCurve + " -30 " + inputWidth + " 0"},150,mina.easeout);
 };
 var textSame = function(){
   textPath.animate({d:"M0 0 " + inputWidth + " 0"},200,mina.easein);
 };
 var textRun = function(){
   setTimeout(textDown, 200 );
   setTimeout(textUp, 400 );
   setTimeout(textSame, 600 );
 };

 (function(){
     textInput.addEventListener('focus', function(){
       var parentDiv = this.parentElement;
       parentDiv.classList.add('active');
       textRun();
       this.addEventListener('blur', function(){
         var rg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.]{3,9})+\.([A-Za-z]{2,4})$/;
         this.value == 0 ? parentDiv.classList.remove('active') : null;
         !rg.test(this.value) && this.value != 0 ?
          (parentDiv.classList.remove('valid'), parentDiv.classList.add('invalid'), parentDiv.style.transformOrigin="center")
          : rg.test(this.value) && this.value != 0 ?
         (parentDiv.classList.add('valid'), parentDiv.classList.remove('invalid'), parentDiv.style.transformOrigin="bottom") :null;
         });
      parentDiv.classList.remove('valid', 'invalid')
     });
 })();
