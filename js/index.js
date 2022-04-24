let daysofweek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const d = new Date();
let dayName = daysofweek[d.getDay()];
let monthName = months[d.getMonth()];
let year = d.getFullYear();


const fulldate = dayName + "," + monthName + "," + year;


document.getElementById("updateddate").innerHTML = fulldate;
