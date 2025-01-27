const ann = new Date(2023,12,26);

var yearLi = document.getElementById("year");
var monthLi = document.getElementById("month");
var dayLi = document.getElementById("day");
var timeLi = document.getElementById("time")

var yearText = document.getElementById("yearText");
var monthText = document.getElementById("monthText");
var dayText = document.getElementById("dayText");

var timer=setInterval(() => {
    var currentTime = new Date();
    let years = currentTime.getFullYear() - ann.getFullYear();
    let months = currentTime.getMonth() - ann.getMonth();
    let days = currentTime.getDate() - ann.getDate();
    let hours = currentTime.getHours() - ann.getHours();
    let minutes = currentTime.getMinutes() - ann.getMinutes();
    let seconds = currentTime.getSeconds() - ann.getSeconds();
    months++;

    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        const previousMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0); 
        days += previousMonth.getDate();
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }
    if(seconds<10) seconds = "0" + seconds;
    if(minutes<10) minutes = "0" + minutes;
    if(years == 1) yearText.innerHTML="Rok";
    else if(years == 2) yearText.innerHTML="Roky";
    else yearText.innerHTML="Let";
    if(months==1) monthText.innerHTML="Měsíc";
    else monthText.innerHTML="Měsíce";
    if(days==1) dayText.innerHTML="Den";
    else if(days == 2) dayText.innerHTML="Dny";
    else dayText.innerHTML="Dnů";
    yearLi.innerHTML = years;
    monthLi.innerHTML = months;
    dayLi.innerHTML = days;
    timeLi.innerHTML=hours + ":" + minutes + ":" + seconds;
}, 1000);

const reasons = ["Jsi moje neskutečná podpora!", "Umíš úžasně vařit!", "Jsi neskutečně nádherná!", "Jsi strašně roztomilá!", "Máš radost z maličkostí", ]
var reasonText = document.getElementById("reasonText");
reasonText.innerHTML=reasons[Math.floor(Math.random()*reasons.length)];