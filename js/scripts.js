$(document).ready(function(){
  $("form#favorites").submit(function(event){
    event.preventDefault();
    alert("form works");

    var userFood = [$("input#food1").val(), $("input#food2").val(),$("input#food3").val()];
    var userDrink = [$("input#drink1").val(), $("input#drink2").val(),$("input#drink3").val()];
    var userMusic = [$("input#music1").val(), $("input#music2").val(),$("input#music3").val()];

    var favoriteList = userFood.concat(userDrink, userMusic);
    var favoriteListOutput = favoriteList.join()

    var userFoodList = userFood.join(", ");
    var userDrinkList = userDrink.join(", ");
    var userMusicList = userMusic.join(", ");

    console.log(userFoodList);
    console.log(userDrinkList);
    console.log(userMusicList);
    console.log(favoriteList);

    $(document).ready(function(){
      $("div").last();
    });


  });
});
