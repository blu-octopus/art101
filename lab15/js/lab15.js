//1
/**
 * Author:    Daphne Cheng
 * Created:   11.21.2022
 *
 **/
 //URL = "https://api.imgflip.com/get_memes";
 var outputEl = document.getElementById("output");

//event listner to when activate button is clicked
 $('#activate').click(function(){
   console.log("action button is clicked");
   //starts ajax
   $.ajax({
     //url of api we are getting from
     url: "https://api.imgflip.com/get_memes",

     type: "GET",
     dataType : "json",
      success: function(data) {
        console.log(data);
      },
      error: function () {
        console.log("Error:");
      }
  })
  //when ajax called data successfully
  .done(function(data) {
     //random number from 1-100
     var rand = 1 + Math.floor(Math.random() * 100);
     //checking my printing stuff
     console.log(rand);
     console.log("name: " + data.data.memes[rand]["name"]);
     //append meme to output div
     $("#output").append("<h2>" + data.data.memes[rand]["name"] + "<h2>");
     $("#output").append("<img src=" + data.data.memes[rand]["url"] + ">");
 })
});


     // console.log("data.mm "+ data.memes);
     // /undefined
     //
     // console.log("mm.name "+memes.name);
     //  //memes is not defined
     //
     // console.log("data.mm[r] "+data.memes[rand]);
     //  //cannot read properties
     //
     //  console.log("mm[r] "+memes[rand]);
     //  //meme is not defined
     //
     //  console.log("data.mm[r].id "+data.memes[rand].id);
     //  //cannot read properties
     //
     //$("#output").append("<p>" + data.fortune + "<p>");
     //$("#title").html(data.title)
     //$("#output").append("<h2>" + data.name + "<h2>");
     //$("#output").append("<img src=" + data.icon_url + " >");
     //var printableData = "<pre>" + JSON.stringify(data) + "</pre>";
     //console.log(data);

     //URL = "https://api.chucknorris.io/jokes/random";
     //URL = "http://www.yerkee.com/api/fortune/wisdom";
     //GET "https://yesno.wtf/#api";
     //$("#output").append("<img src=" + data.image + " >");
