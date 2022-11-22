//1
/**
 * Author:    Daphne Cheng
 * Created:   11.21.2022
 *
 **/

 //URL = "https://api.imgflip.com/get_memes";
 //URL = "https://api.chucknorris.io/jokes/random";
 URL = "http://www.yerkee.com/api/fortune/wisdom";
 //GET "https://yesno.wtf/#api";
 //$("#output").append("<img src=" + data.image + " >");

 $('#activate').click(function(){
   console.log("action button is clicked");
   $.ajax({
    url: URL,
    //GET "/api/fortune/fortune",
    //data: {fortune: ""},
    type: "GET",
    //dataType : "json",
    //message: "GET Success",
    success: function(data) {
      console.log(data);
    },
    error: function () {
      console.log("Error:");
    }
  })
  .done(function(data) {
    alert("Success!");
     //random number from 1-100
     //var rand = 1 + Math.floor(Math.random() * 100);
     console.log(data);


     //console.log(rand);
     //console.log("data.mm "+ data.memes);

     //$("#title").html(data.title)
     //$("#output").append("<h2>" + data.name + "<h2>");
     //$("#output").append("<img src=" + data.icon_url + " >");
     var printableData = "<pre>" + JSON.stringify(data) + "</pre>";
     console.log(data.fortune);
     $("#output").append("<p>" + data.fortune + "<p>");

 })
});

     //console.log("mm.name "+memes.name);
     //memes is not defined

     //console.log("data.mm[r] "+data.memes[rand]);
     //cannot read properties

     //console.log("mm[r] "+memes[rand]);
     //meme is not defined

     //console.log("data.mm[r].id "+data.memes[rand].id);
     //cannot read properties

     //console.log("mm[r].id "+memes[rand].id);
     //meme is not defined
