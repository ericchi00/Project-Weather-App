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
    rain.textContent = `${precipitation  }%`;
    humid.textContent = `${humidity  }%`;
  wind.textContent = `${windSpeed} mph`;
}

export { setCurrentLocation, firstLetterUppercase, setCurrentTemperature };
