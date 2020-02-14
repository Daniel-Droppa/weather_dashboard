var savedLocations = JSON.parse(localStorage.getItem("oldlocation"));
console.log(savedLocations);

if (savedLocations) {
  savedSearch()
} else {
  savedLocations = []
}

function savedSearch() {
  $('#savedLocations').html("")
  for (var i = 0; i < savedLocations.length; i++) {
    var fillBox = $("<div>").addClass("location")
    fillBox.text(savedLocations[i])
    $("#savedLocations").append(fillBox)

  }
}

$("#searchBtn").on("click", function (event) {
  event.stopPropagation();
  $("#cityArea").html("")
  if ($("#location").val() === "") {
    return
  } else {
    var location = $("#location").val()
    savedLocations.unshift(location)
    if (savedLocations.length > 11) {
      savedLocations.splice(11, 1)
    }
    console.log(location);

    savedSearch()
    localStorage.setItem("oldlocation", JSON.stringify(savedLocations))
    console.log(savedLocations);



    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=imperial&APPID=67440f53bee9c0d87507f4ae95fa3a98"
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      var d = new Date();
      var month = d.getMonth() + 1;
      var day = d.getDate();
      var output = (month < 10 ? '0' : '') + month + '/' + (day < 10 ? '0' : '') + day + '/' + d.getFullYear() + 10n;

      var cityNameEl = $("<h3>" + response.name + " " + "(" + output + ")" + "<h3>")
      var temperature = $("<p>" + "temperature: " + response.main.temp + "&#176" + "F" + "<p>")
      var humidity = $("<p>" + "humidity: " + response.main.humidity + "%" + "<p>")
      var wind = $("<p>" + "Wind Speed: " + response.wind.speed + "M/H" + "<p>")


      $("#cityArea").append(cityNameEl)
      $("#cityArea").append(temperature)
      $("#cityArea").append(humidity)
      $("#cityArea").append(wind)

    })
    console.log(savedLocations);
  }
})


$("#clear").on("click", function (event) {
  event.stopPropagation();
  localStorage.clear()
  $("#savedLocations").html("")
})


$(".location").on("click", function (event) {
  event.stopPropagation();
  $("#cityArea").html("")
  var place = $(this).text()
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + place + "&units=imperial&APPID=67440f53bee9c0d87507f4ae95fa3a98"
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    var d = new Date();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var output = (month < 10 ? '0' : '') + month + '/' + (day < 10 ? '0' : '') + day + '/' + d.getFullYear() + 10n;

    var cityNameEl = $("<h3>" + response.name + " " + "(" + output + ")" + "<h3>")
    var temperature = $("<p>" + "temperature: " + response.main.temp + "&#176" + "F" + "<p>")
    var humidity = $("<p>" + "humidity: " + response.main.humidity + "%" + "<p>")
    var wind = $("<p>" + "Wind Speed: " + response.wind.speed + "M/H" + "<p>")


    $("#cityArea").append(cityNameEl)
    $("#cityArea").append(temperature)
    $("#cityArea").append(humidity)
    $("#cityArea").append(wind)
  })
})