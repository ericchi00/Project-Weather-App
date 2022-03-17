import formatInTimeZone from "date-fns-tz/formatInTimeZone";

// import all pictures at once, found on stackoverflow
function importAll(r) {
  const images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("./images", false, /\.(png|jpe?g|svg)$/)
);

// capitlizes every first letter of a word ie: san francisco => San Francisco
function firstLetterUppercase(string) {
  return string
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
}

function setCurrentLocation(location, timezone, description) {
  const currentLocation = document.querySelector("#currentLocation");
  const currentDate = document.querySelector("#currentDate");
  const currentWeather = document.querySelector("#currentWeather");
  currentLocation.textContent = firstLetterUppercase(location);
  currentDate.textContent = `${formatInTimeZone(
    new Date(),
    timezone,
    "eeee hh:mm a"
  )}`;
  currentWeather.textContent = description;
}

// sets current temperature, precipitation, humidity, windspeed and icon
function setCurrentTemperature(
  id,
  temperature,
  precipitation,
  humidity,
  windSpeed
) {
  const icon = document.querySelector(".iconWrapper").querySelector("img");
  const temp = document.querySelector("#temp");
  const rain = document.querySelector("#precipitation");
  const humid = document.querySelector("#humidity");
  const wind = document.querySelector("#wind");
  icon.src = images[`${id}.png`];
  temp.textContent = Math.round(temperature);
  rain.textContent = `Precipitation is at ${precipitation * 100}%`;
  humid.textContent = `Humidity is at ${humidity}%`;
  wind.textContent = `Wind Speed is ${windSpeed} mph`;
}


// creates the days of the week cards 
function weatherOfTheWeek(weekArray, timeZone) {
  const container = document.querySelector(".seven");
  // removes everything in the container
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  const zero = document.createElement("div");
  const one = document.createElement("div");
  const two = document.createElement("div");
  const three = document.createElement("div");
  const four = document.createElement("div");
  const five = document.createElement("div");
  const six = document.createElement("div");
  const seven = document.createElement("div");

  const days = [zero, one, two, three, four, five, six, seven];

  days.forEach((day, index) => {
    const date = new Date();
    date.setDate(date.getDate() + index); // adds index amount of days to the current day
    container.appendChild(day);
    day.classList.add(`i${index}`);
    const dayTitle = document.createElement("p");
    dayTitle.classList.add("dayTitle");
    dayTitle.textContent = formatInTimeZone(date, timeZone, "eee");
    const icon = document.createElement("img");
    icon.classList.add("dayOfTheWeekIcon");
    icon.src = images[`${weekArray[index].weather[0].icon}.png`];
    const tempWrapper = document.createElement("div");
    tempWrapper.classList.add("tempWrapper");
    const maxTemp = document.createElement("p");
    maxTemp.classList.add("maxTemp");
    maxTemp.textContent = `${Math.round(weekArray[index].temp.max)}°`;
    const lowTemp = document.createElement("p");
    lowTemp.classList.add("lowTemp");
    lowTemp.textContent = `${Math.round(weekArray[index].temp.min)}°`;
    tempWrapper.appendChild(maxTemp);
    tempWrapper.appendChild(lowTemp);
    day.appendChild(dayTitle);
    day.appendChild(icon);
    day.appendChild(tempWrapper);
  });
}

export {
  setCurrentLocation,
  firstLetterUppercase,
  setCurrentTemperature,
  weatherOfTheWeek,
};
