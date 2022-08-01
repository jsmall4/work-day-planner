// global variables
var inputText1 = $("#text01");
var inputText2 = $("#text02");
var inputText3 = $("#text03");
var inputText4 = $("#text04");
var inputText5 = $("#text05");
var inputText6 = $("#text06");
var inputText7 = $("#text07");
var inputText8 = $("#text08");
var inputText9 = $("#text09");

// current date/time from moment.js
var now = moment();

var currentDay = document.querySelector("#currentDay");

currentDay.textContent = now.format("dddd MMMM Mo YYYY");

console.log(now.format("dddd MMMM Mo YYYY"));

var currentHour = now.hour(); // calls current hour from moment

console.log(currentHour); // works

// save btns & local storage
$("#button1").click(function (event) {
  event.preventDefault();
  localStorage.setItem("content1", inputText1.val());
  inputText1.text(inputText1.val());
});

$("#button2").click(function (event) {
  event.preventDefault();
  localStorage.setItem("content2", inputText2.val());
  inputText2.text(inputText2.val());
});

$("#button3").click(function (event) {
  event.preventDefault();
  localStorage.setItem("content3", inputText3.val());
  inputText3.text(inputText3.val());
});

$("#button4").click(function (event) {
  event.preventDefault();
  localStorage.setItem("content4", inputText4.val());
  inputText4.text(inputText4.val());
});

$("#button5").click(function (event) {
  event.preventDefault();
  localStorage.setItem("content5", inputText5.val());
  inputText5.text(inputText5.val());
});

$("#button6").click(function (event) {
  event.preventDefault();
  localStorage.setItem("content6", inputText6.val());
  inputText6.text(inputText6.val());
});

$("#button7").click(function (event) {
  event.preventDefault();
  localStorage.setItem("content7", inputText7.val());
  inputText7.text(inputText7.val());
});

$("#button8").click(function (event) {
  event.preventDefault();
  localStorage.setItem("content8", inputText8.val());
  inputText8.text(inputText8.val());
});

$("#button9").click(function (event) {
  event.preventDefault();
  localStorage.setItem("content9", inputText9.val());
  inputText9.text(inputText9.val());
});

//Display content in textarea when page refreshes
window.onload = function () {
  var fetchText1 = localStorage.getItem("content1", inputText1.val());
  inputText1.text(fetchText1);

  var fetchText2 = localStorage.getItem("content2", inputText2.val());
  inputText2.text(fetchText2);

  var fetchText3 = localStorage.getItem("content3", inputText3.val());
  inputText3.text(fetchText3);

  var fetchText4 = localStorage.getItem("content4", inputText4.val());
  inputText4.text(fetchText4);

  var fetchText5 = localStorage.getItem("content5", inputText5.val());
  inputText5.text(fetchText5);

  var fetchText6 = localStorage.getItem("content6", inputText6.val());
  inputText6.text(fetchText6);

  var fetchText7 = localStorage.getItem("content7", inputText7.val());
  inputText7.text(fetchText7);

  var fetchText8 = localStorage.getItem("content8", inputText8.val());
  inputText8.text(fetchText8);

  var fetchText9 = localStorage.getItem("content9", inputText9.val());
  inputText9.text(fetchText9);
};

// setting present, past and future colours to textarea blocks
$(".textarea").each(function () {
  var colorHour = $(this).attr("name");

  if (colorHour < currentHour) {
    $(this).addClass("past");
  } else if (colorHour == currentHour) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
});
