// added this for current date/time from moment.js - passing no value will default current date/time
var now = moment();

var currentDay = document.querySelector("#currentDay");

currentDay.textContent = now.format("dddd MMMM Mo YYYY");

console.log(now.format("dddd MMMM Mo YYYY"));
