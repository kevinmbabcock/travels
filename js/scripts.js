function Place (city, country, date, activities) {
  this.city = city;
  this.country = country;
  this.date = date;
  this.activities = [];
}

$(document).ready(function() {
  var places = [];
  var index = 0;

  $("form#new-trip").submit(function(event) {
    event.preventDefault();

    var inputtedCity = $("#new-city").val();
    var inputtedCountry = $("#new-country").val();
    var inputtedDate = $("#new-date").val();

    var newPlace = new Place(inputtedCity, inputtedCountry, inputtedDate);

    places.push(newPlace);

    $("ul#places").append("<li><span class='place'>" + newPlace.country + " " + newPlace.date + "</span></li>");

    $("#new-country").val("");
    $("#new-city").val("");
    $("#new-date").val("");

    $(".place").last().click(function() {
    $("#show-places").show();
    $("#add-activity").show();
    $("#show-places h2").text(newPlace.country);
    $(".city").text(newPlace.city);
    $(".date").text(newPlace.date);
    $(".activities").text(newPlace.activities);
    index = places.indexOf(newPlace);
    });

    // $("form#add-activity").submit(function(event) {
    //   event.preventDefault();
    //   var newActivity = $("#new-activity").val();
    //   places[index].activities.push(" " + newActivity);
    //   $("#new-activity").val("");
    //   $(".activities").text(places[index].activities);
    // })

  });

  $("form#add-activity").submit(function(event) {
    event.preventDefault();
    var newActivity = $("#new-activity").val();
    places[index].activities.push(" " + newActivity);
    $("#new-activity").val("");
    $(".activities").text(places[index].activities);
  })
});
