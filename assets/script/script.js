
var savedLocations = JSON.parse(localStorage.getItem("oldlocation")) || [];
console.log(savedLocations);

if (savedLocations.length !== null) {
  savedSearch()
}

function savedSearch() {

  for (var i = 0; i < savedLocations.length; i++) {
    var fillBox = $("<div>")
    var oldLocal = savedLocations[i]
    $(fillBox).addClass("location")
    $(fillBox).append(fillBox.text(oldLocal))
    $("#savedLocations").prepend(fillBox)

  }
}

$("button").on("click", function () {
  if ($("#location").val() === "") {
    return
  } else {
    var location = $("#location").val()
    savedLocations.push(location)
    console.log(location);
    var savedBox = $("<div>")
    $(savedBox).addClass("location")
    var storeIt = savedBox.text(location)
    $(savedBox).append(storeIt)
    $("#savedLocations").prepend(savedBox)
    localStorage.setItem("oldlocation", JSON.stringify(savedLocations))
    console.log(savedLocations);



    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&units-imperial&APPID=67440f53bee9c0d87507f4ae95fa3a98"
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      var cityNameEl = $("<h1>" + response.name + "<h1>")
      $("#cityArea").append(cityNameEl)

    })
    console.log(savedLocations);
  }
})