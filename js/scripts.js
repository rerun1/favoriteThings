var userArrayFullList = [];


var makeArrayFullList =  function(input1, input2, input3, input4, input5, input6, input7, input8, input9){
var array1 = [$("input#userInput1").val(), $("input#userInput2").val(),$("input#userInput3").val()];
var array2 = [$("input#userInput4").val(), $("input#userInput5").val(),$("input#userInput6").val()];
var array3 = [$("input#userInput7").val(), $("input#userInput8").val(),$("input#userInput9").val()];
return userArrayFullList = array1.concat(array2, array3).reverse();
}
var resetForm = function(){
  $("input#userInput1").val("");
  $("input#userInput2").val("");
  $("input#userInput3").val("");
  $("input#userInput4").val("");
  $("input#userInput5").val("");
  $("input#userInput6").val("");
  $("input#userInput7").val("");
  $("input#userInput8").val("");
  $("input#userInput9").val("");
}

$(document).ready(function(){


  $("form#favorites").submit(function(event){
    event.preventDefault();

    // $("ul#list").empty();

    makeArrayFullList($("input"));


    console.log(userArrayFullList);


    $("ul#list").append("<li>"+userArrayFullList.pop()+"</li>");
    $("ul#list").append("<li>"+userArrayFullList.pop()+"</li>");
    $("ul#list").append("<li>"+userArrayFullList.pop()+"</li>");
    $("ul#list").append("<li>"+userArrayFullList.pop()+"</li>");
    $("ul#list").append("<li>"+userArrayFullList.pop()+"</li>");
    $("ul#list").append("<li>"+userArrayFullList.pop()+"</li>");
    $("ul#list").append("<li>"+userArrayFullList.pop()+"</li>");
    $("ul#list").append("<li>"+userArrayFullList.pop()+"</li>");
    $("ul#list").append("<li>"+userArrayFullList.pop()+"</li>");

    resetForm($("form#favorites"));

    $("div#intro").hide();
    $("div.favoriteList").toggle();
    $("form#favorites").hide();
    $("input").removeAttr("placeholder")

  });

  $("button#anotherList").click(function(){
    $("form#favorites").show();
    $("div.favoriteList").toggle();
  });

});
