

//Lazy Loading
const images = document.querySelectorAll("img[data-src]");

const preloadingImage = (img) => {
  const src = img.getAttribute("data-src");
  img.src = src;
};

const imgOptions = {
  threshold: 0.8,
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadingImage(entry.target);
      imgObserver.unobserve(entry.target);
      entry.target.style.filter = "blur(0em)";
    }
  });
}, imgOptions);

images.forEach((image) => {
  imgObserver.observe(image);
});

//Last modified
document.querySelector(
  "#updated"
).textContent = `Last updated: ${document.lastModified}`;

const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  now
);
datefield.innerHTML = `<em>${fulldate}</em>`;

//Hamburguer Button

function toggleMenu() {
  document.getElementById("primarynav").classList.toggle("open");
  document.getElementById("hamburgerbtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerbtn");
x.onclick = toggleMenu;
//banner
const dayofweek = new Date().getDay();
let bannernot = document.getElementById("banner");
if (dayofweek == 1 || dayofweek == 2) {
  bannernot.style.display = "block";
} else {
  bannernot.style.display = "none";
}

// Weather API
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const speedWind = document.querySelector("#windsp");
const currentCondition = document.querySelector("#current-condition");

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=San+Pedro+Sula,+HN&units=Imperial&appid=96ee84544597e3a8b2b7e0870cfd0b92";

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
  speedWind.innerHTML = `${weatherData.wind.speed}`;
  weatherIcon.src = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
}
