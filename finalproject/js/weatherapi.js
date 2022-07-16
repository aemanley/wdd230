const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const currentCondition = document.querySelector("#current-condition");
const humidity=document.querySelector("#current-humidity");

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Campinas,BR&units=Imperial&appid=96ee84544597e3a8b2b7e0870cfd0b92";



async function apiFetch(apiUrl) {
  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // temp //
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch(url);

function displayResults(weatherData) {
  currentTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}`;
  currentCondition.innerHTML = `${weatherData.weather[0].description}`;
  humidity.innerHTML=`${weatherData.main.humidity.toFixed(0)}`;
  weatherIcon.src = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
}