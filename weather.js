let updateWidget = function(data) {

  console.log("Got weather data: ", data)
  $(".card-text").html("It is " + Math.round(data.main.temp) + " degrees outside")
  $("img").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png")
  $(".card-title").html(data.name)
}

let getWeather = function(info) {
  console.log(info)
  let latitude = info.coords.latitude.toFixed(4);
  let longitude = info.coords.longitude.toFixed(4);
  let apiKey = 'c12fc648d09e3dd15d018e0aacdd05b1'; // REPLACE THIS VALUE with your own key.

  let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
  weatherServiceURL += 'lat=' + latitude
  weatherServiceURL += '&lon=' + longitude
  weatherServiceURL +='&appid=' + apiKey + '&units=imperial'

  fetch(weatherServiceURL).then(convertToJSON).then(updateWidget).catch(displayError);
}

let updateWeather = function(event) {
  console.log("Starting updateWeather...")
  navigator.geolocation.getCurrentPosition(getWeather)
  console.log("updateWeather complete")
}


let link = jQuery("#get_forecast")
link.on("click", updateWeather);


////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANY CODE BEYOND THIS POINT
////////////////////////////////////////////////////////////

let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }

//let e = jQuery("p")
//e.html("See ya!")
