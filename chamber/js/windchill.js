
let temp= 40;
let windSpeed= 15;

if ((temp <= 50) && (windSpeed > 3)){
    getwindchill(temp, windSpeed);
}
else{
    windChill= "N/A";
}

function getwindchill(temp, windspeed){
    temp = parseInt(temp);
    windSpeed= parseInt(windSpeed);
    windChill= (35.74 + (0.6215 * temperature))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temperature*Math.pow(windspeed,0.16));
}
document.getElementById("result").textContent= windChill;


/* it does not output the windchill, what I am missing? */




