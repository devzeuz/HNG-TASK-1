const currentTime = document.getElementById("current-time");
const currentDay = document.getElementById("current-day");

// getting the utc time
let currentUtcDate = new Date().toUTCString();
console.log(currentUtcDate);
currentTime.innerText = currentUtcDate;

// Getting the current day of the week
const today = new Date();
const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

let dayNumber = today.getDay();
let dayName = daysOfTheWeek[dayNumber];
currentDay.innerText = dayName;
