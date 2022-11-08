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

 tog = true;
 //event listner
 $("#c-button").click(function(){
   console.log("clicked c button");
   tog = !tog;
   console.log("bool tog is ", tog);
   if(!tog){
     $("#challenges").css("background-color", "#F8F8E7");
   }else{
     $("#challenges").css("background-color", "#4E5F55");
   }
 })

 $("#p-button").click(function(){
   console.log("clicked p button");
   tog = !tog;
   console.log("bool tog is ", tog);
   if(!tog){
     $(this).parent().css("background-color", "#F8F8E7");
   }else{
     $(this).parent().css("background-color", "#4E5F55");
   }
 })

 $("#r-button").click(function(){
   console.log("clicked r button");
   tog = !tog;
   console.log("bool tog is ", tog);
   if(!tog){
     $(this).parent().css("background-color", "#F8F8E7");
   }else{
     $(this).parent().css("background-color", "#4E5F55");
   }
 })
