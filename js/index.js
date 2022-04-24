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


let d = new Date();
let dayName = daysofweek[d.getDay()];
let monthName = months[d.getMonth()];
let year = d.getFullYear();
let fulldate = dayName + "," + monthName + " " +d.getDate()+ ","+ year;


document.getElementById("updateddate").textContent = fulldate;



document.getElementById("year").textContent = year;