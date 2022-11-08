//1
/**
 * Author:    Daphne Cheng
 * Created:   11.7.2022
 *
 **/

 //task 2
 //creating buttons
 $("#challenges").append("<button class='button-55' id='c-button'>Click me!</button>");
 $("#problems").append("<button class='button-55' id='p-button'>Click me!</button>");
 $("#results").append("<button class='button-55' id='r-button'>Click me!</button>");

//for task x change button color
$(".output-left").append("<button class='button-55' id='left-button'>Change -> color!</button>");
$(".output-right").append("<button class='button-55' id='right-button'> Change <- color! </button>");


 //tog_c = true;
 // tog_p = true;
 // tog_r = true;
 tog_color = 0;

 //event listner
 $("#c-button").click(function(){
   console.log("clicked c button");
   $(this).parent().toggleClass("special");
   // tog_c = !tog_c;
   // console.log("bool tog is ", tog_c);
   // if(!tog_c){
   //   $(this).parent().css("background-color", "#4E5F50");
   // }else{
   //   $(this).parent().css("background-color", "#F8F8E7");
   // }
 })
 //button color deepens when hover over
 $("#c-button").hover(function(){
   $(this).css("background-color", "#4E5F55");
 })
 //button color back to normal when stop hovering
 $("#c-button").mouseleave(function(){
   $(this).css("background-color", "#F8F8E7");
 })

 $("#p-button").click(function(){
   console.log("clicked p button");
   $(this).parent().toggleClass("special");
   // tog_p = !tog_p;
   // console.log("bool tog is ", tog_p);
   // if(!tog_p){
   //   $(this).parent().css("background-color", "#4E5F5A");
   // }else{
   //   $(this).parent().css("background-color", "#F8F8E7");
   //}
 })
 //button color deepens when hover over
 $("#p-button").hover(function(){
   $(this).css("background-color", "#4E5F55");
 })
 //button color back to normal when stop hovering
 $("#p-button").mouseleave(function(){
   $(this).css("background-color", "#F8F8E7");
 })

 $("#r-button").click(function(){
   console.log("clicked r button");
   $(this).parent().toggleClass("special");
   // tog_r = !tog_r;
   // console.log("bool tog is ", tog_r);
   // if(!tog_r){
   //   $(this).parent().css("background-color", "#4E5F65");
   // }else{
   //   $(this).parent().css("background-color", "#F8F8E7");
   // }
 })
 //button color deepens when hover over
 $("#r-button").hover(function(){
   $(this).css("background-color", "#4E5F55");
 })
 //button color back to normal when stop hovering
 $("#r-button").mouseleave(function(){
   $(this).css("background-color", "#F8F8E7");
 })

 //left color button is clicked
  $("#left-button").click(function(){
    console.log("clicked color button");
    $("#output").css("border", "groove");
    tog_color += 1;
    if(tog_color == 1){
      //red
      $(this).parent().parent().parent().css("background-color", "#FBB9C5");
      $("#right-button").css("background-color", "#FBB9C5");
    }else if(tog_color == 2){
      //orange
      $(this).parent().parent().parent().css("background-color", "#FDD0B1");
      $("#right-button").css("background-color", "#FDD0B1");
    }else if(tog_color == 3){
      //yellow
      $(this).parent().parent().parent().css("background-color", "#F9EFC7");
      $("#right-button").css("background-color", "#F9EFC7");
    }else if(tog_color == 4){
      //green
      $(this).parent().parent().parent().css("background-color", "#C3EDBF");
      $("#right-button").css("background-color", "#C3EDBF");
    }else if(tog_color == 5){
      //blue
      $(this).parent().parent().parent().css("background-color", "#B8DFE6");
      $("#right-button").css("background-color", "#B8DFE6");
    }else{
      //purple
      tog_color = 0;
      $(this).parent().parent().parent().css("background-color", "#C5BBDE");
      $("#right-button").css("background-color", "#C5BBDE");
    }
  })
  //right color button is clicked
  $("#right-button").click(function(){
   console.log("clicked color button");
   $("#output").css("border", "groove");
   tog_color += 1;
   if(tog_color == 1){
     //red
     $(this).parent().parent().parent().css("background-color", "#FBB9C5");
     $("#left-button").css("background-color", "#FBB9C5");
   }else if(tog_color == 2){
     //orange
     $(this).parent().parent().parent().css("background-color", "#FDD0B1");
     $("#left-button").css("background-color", "#FDD0B1");
   }else if(tog_color == 3){
     //yellow
     $(this).parent().parent().parent().css("background-color", "#F9EFC7");
     $("#left-button").css("background-color", "#F9EFC7");
   }else if(tog_color == 4){
     //green
     $(this).parent().parent().parent().css("background-color", "#C3EDBF");
     $("#left-button").css("background-color", "#C3EDBF");
   }else if(tog_color == 5){
     //blue
     $(this).parent().parent().parent().css("background-color", "#B8DFE6");
     $("#right-button").css("background-color", "#B8DFE6");
   }else{
     //purple
     tog_color = 0;
     $(this).parent().parent().parent().css("background-color", "#C5BBDE");
     $("#left-button").css("background-color", "#C5BBDE");
   }
 })
