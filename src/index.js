import "./style.css";
import returnWeatherData from "./api";
import {
  setCurrentLocation,
  setCurrentTemperature,
  weatherOfTheWeek,
} from "./dom";

// lets user search location for weather
const form = document.querySelector("#form");
const search = document.querySelector("#search");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userInput = search.value.toLowerCase();
  returnWeatherData(userInput).then((response) => {
    setCurrentLocation(
      userInput,
      response.timezone,
      response.current.weather[0].description
    );
    setCurrentTemperature(
      response.current.weather[0].icon,
      response.current.temp,
      response.hourly[0].pop,
      response.current.humidity,
      response.current.wind_speed
    );
    weatherOfTheWeek(response.daily, response.timezone);
  });
  form.reset();
});


// default loading page when page is opened for the first time
function defaultPage(location) {
  returnWeatherData(location).then((response) => {
    setCurrentLocation(
      location,
      response.timezone,
      response.current.weather[0].description
    );
    setCurrentTemperature(
      response.current.weather[0].icon,
      response.current.temp,
      response.hourly[0].pop,
      response.current.humidity,
      response.current.wind_speed
    );
    weatherOfTheWeek(response.daily, response.timezone);
  });
}

defaultPage("Tokyo");
