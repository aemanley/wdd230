const currentTemp = document.querySelector("#current-temp");
const currentCondition = document.querySelector("#current-condition");
const humidity=document.querySelector("#current-humidity");

/*Forecast*/ 
const tempmin=document.querySelector("#min-temp");
const tempmax=document.querySelector("#max-temp");
const weatherdescription=document.querySelector("#weather-description");
const weatherIcon = document.querySelector("#weather-icon");
/*Forecast DAY #2*/ 
const tempmi=document.querySelector("#min-temp2");
const tempma=document.querySelector("#max-temp2");
const weatherdescriptio=document.querySelector("#weather-description2");
const weatherIco= document.querySelector("#weather-icon2");
/*Forecast DAY #3*/ 
const tempmini=document.querySelector("#min-temp3");
const tempmaxi=document.querySelector("#max-temp3");
const weatherdescripti=document.querySelector("#weather-description3");
const weatherIc= document.querySelector("#weather-icon3");




const url =
"https://api.openweathermap.org/data/2.5/onecall?lat=-22.9056&lon=-47.0608&units=imperial&exclude=minutely,hourly&appid=96ee84544597e3a8b2b7e0870cfd0b92";
  


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
  currentTemp.innerHTML = `${weatherData.current.temp.toFixed(0)}`;
  humidity.innerHTML = `${weatherData.current.humidity.toFixed(0)}`;
  currentCondition.innerHTML = `${weatherData.current.weather[0].description}`;


/*Forecast*/
weatherdescription.innerHTML = `${weatherData.daily[0].weather[0].description}`;
tempmin.innerHTML= `${weatherData.daily[0].temp.min.toFixed(0)}`;
tempmax.innerHTML= `${weatherData.daily[0].temp.max.toFixed(0)}`;
weatherIcon.src = `https://openweathermap.org/img/w/${weatherData.daily[0].weather[0].icon}.png`;

/*Forecast DAY #2*/ 
weatherdescriptio.innerHTML = `${weatherData.daily[1].weather[0].description}`;
tempmi.innerHTML= `${weatherData.daily[1].temp.min.toFixed(0)}`;
tempma.innerHTML= `${weatherData.daily[1].temp.max.toFixed(0)}`;
weatherIco.src = `https://openweathermap.org/img/w/${weatherData.daily[1].weather[0].icon}.png`;


/*Forecast DAY #3*/ 
weatherdescripti.innerHTML = `${weatherData.daily[2].weather[0].description}`;
tempmini.innerHTML= `${weatherData.daily[2].temp.min.toFixed(0)}`;
tempmaxi.innerHTML= `${weatherData.daily[2].temp.max.toFixed(0)}`;
weatherIc.src = `https://openweathermap.org/img/w/${weatherData.daily[2].weather[0].icon}.png`;

}

/*Get current Day*/ 
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
let date=[d.getDate()];

document.getElementById("demo1").innerHTML =date;
document.getElementById("demo").innerHTML =day;

/*Get days after the current*/ 
const today=new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
document.getElementById("tomorrow").innerHTML=tomorrow.getDate();
document.getElementById("tomorrow2").innerHTML=weekday[tomorrow.getDay()];

const tday=new Date();
const tmorrow = new Date(tday);
tmorrow.setDate(tday.getDate() + 2);
document.getElementById("tomorrow3").innerHTML=tmorrow.getDate();
document.getElementById("tomorrow4").innerHTML=weekday[tmorrow.getDay()];
