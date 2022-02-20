function currentTime() {
  let date = new Date();
  let days=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
  let year=date.getFullYear();
  let month=date.getMonth()+1;
  let day=date.getDate();
  let dayWeek=date.getDay();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let session = "AM";
  if(hours === 0){
    hours = 12;
  }
  if(hours > 12){
    hours = hours - 12;
    session = "PM";
  }
  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  //todo ay patladı ezgiye sorulacak
  let dateDay=days[date.getDay()]+" ";
  let dateTime= " "+" "+day +"/"+month+"/"+year;
  let times = hours + ":" + minutes + ":" + seconds ;

  document.getElementById("day").innerText=dateDay;
  document.getElementById("date").innerText=dateTime;
  document.getElementById("meridian").innerText=session;
  document.getElementById("clock").innerText = times;
  let t = setTimeout(function(){ currentTime() }, 1000);
}
currentTime();

