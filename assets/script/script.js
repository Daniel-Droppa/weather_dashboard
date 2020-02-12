$("button").on("click",function() {
var location = $("#").val()
console.log(location);

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+location+"&units-imperial&APPID=67440f53bee9c0d87507f4ae95fa3a98"
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

  }
})