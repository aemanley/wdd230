const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url= 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=96ee84544597e3a8b2b7e0870cfd0b92';


async function apiFetch(apiUrl){
    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const data= await response.json();
            console.log(data); // temp //
displayResults(data);

        } else {
            throw Error(await response.text());
        }


    } catch (error){
    console.log (error);
    }
   
}

apiFetch(url);

function displayResults(weatherData){
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;


    const iconsrc= `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.innerHTML = desc;
}