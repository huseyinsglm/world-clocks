import moment from "moment-timezone";

const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
let timeZone = "Europe/Istanbul";

document.getElementById("mySelect").addEventListener("change", selectedCountryOptionChange);

function selectedCountryOptionChange() {
  const select = document.getElementById("mySelect");
  timeZone = select.value;
  currentTime();
}

function currentTime() {
  document.getElementById("day").innerText = days[getCurrentTime(timeZone).days()];
  document.getElementById("date").innerText = getCurrentDateString(timeZone);
  document.getElementById("meridian").innerText = getMeridian(getCurrentTime(timeZone).hour());
  document.getElementById("clock").innerText = getCurrentHourString(timeZone);
  let timer = setTimeout(function () {
    currentTime()
  }, 1000);
}

function getCurrentDateString(timeZoneCode) {
  return moment(new Date()).tz(timeZoneCode).format('DD/MM/YYYY');
}

function getCurrentTime(timeZoneCode) {
  return moment(new Date()).tz(timeZoneCode);
}

function getCurrentHourString(timeZoneCode) {
  return moment(new Date()).tz(timeZoneCode).format('HH:mm:ss');
}

function getMeridian(hour) {
  let meridian = "AM";
  if (hour === 0) {
    hour = 12;
  }
  if (hour > 12) {
    meridian = "PM";
  }
  return meridian;
}

currentTime();
