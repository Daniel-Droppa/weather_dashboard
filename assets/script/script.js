$("button").on("click",function() {
var location = $("#location").val()
console.log(location);
var savedBox = $("<div>")
$(savedBox).addClass("location")
var storeIt =savedBox.text(location)
$(savedBox).append(storeIt)
$("#savedLocations").prepend(savedBox)


var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+location+"&units-imperial&APPID=67440f53bee9c0d87507f4ae95fa3a98"
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
console.log(response);

  })
})