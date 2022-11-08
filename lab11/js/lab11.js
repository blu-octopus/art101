//1
/**
 * Author:    Daphne Cheng
 * Created:   11.7.2022
 *
 **/

 //task 2
 //creating buttons
 $("#challenges").append("<button class='button-55' id='c-button'>Button</button>");
 $("#problems").append("<button class='button-55' id='p-button'>Button</button>");
 $("#results").append("<button class='button-55' id='r-button'>Button</button>");

 tog_c = true;
 tog_p = true;
 tog_r = true;

 //event listner
 $("#c-button").click(function(){
   console.log("clicked c button");
   tog_c = !tog_c;
   console.log("bool tog is ", tog_c);
   if(!tog_c){
     $("#challenges").css("background-color", "#F8F8E7");
   }else{
     $("#challenges").css("background-color", "#4E5F55");
   }
 })

 $("#p-button").click(function(){
   console.log("clicked p button");
   tog_p = !tog_p;
   console.log("bool tog is ", tog_p);
   if(!tog_p){
     $(this).parent().css("background-color", "#F8F8E7");
   }else{
     $(this).parent().css("background-color", "#4E5F55");
   }
 })

 $("#r-button").click(function(){
   console.log("clicked r button");
   tog_r = !tog_r;
   console.log("bool tog is ", tog_r);
   if(!tog_r){
     $(this).parent().css("background-color", "#F8F8E7");
   }else{
     $(this).parent().css("background-color", "#4E5F55");
   }
 })
