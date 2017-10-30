function Place (city, country, date, activities) {
  this.city = city;
  this.country = country;
  this.date = date;
  this.activities = activities;
}

$(document).ready(function() {
  $("form#new-trip").submit(function(event) {
    event.preventDefault();

    var inputtedCity = $("#new-city").val();
    var inputtedCountry = $("#new-country").val();
    var inputtedDate = $("#new-date").val();

    var newPlace = new Place(inputtedCity, inputtedCountry, inputtedDate, []);

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
    });

    $("form#add-activity").submit(function(event) {
      event.preventDefault();
      var newActivity = $("#new-activity").val();
      console.log(newActivity);
      this.activities.push(" " + newActivity);
      console.log(newPlace.activities);
      //$("#new-activity").val("");
      $(".activities").text(newPlace.activities);
    })
  });
});
