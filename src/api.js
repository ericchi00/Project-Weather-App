// gets Lat & Lon and then puts it into API call for weather data
async function returnWeatherData(location) {
      const search = document.querySelector("#search");
  try {
    search.placeholder = 'Location';
    const apiCall = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=98658d9bf9aba83345eb8033cc9dbe20`,
      {
        mode: "cors",
      }
    );
    const response = await apiCall.json();
    const { lat } = response[0];
    const { lon } = response[0];
    const weather = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts&units=imperial&appid=98658d9bf9aba83345eb8033cc9dbe20`,
      {
        mode: "cors",
      }
    );
    const json = await weather.json();
      return json;
  } catch (error) {
    search.placeholder = 'Place does not exist';
  }
    return null;
}

export default returnWeatherData;
