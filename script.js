let ann = new Date(2023,12,26);

var yearLi = document.getElementById("year");
var monthLi = document.getElementById("month");
var dayLi = document.getElementById("day");
var timeLi = document.getElementById("time")

var yearText = document.getElementById("yearText");
var monthText = document.getElementById("monthText");
var dayText = document.getElementById("dayText");

var totalDaysText = document.getElementById("totalDays");

function totalDaysTogether(){
    var currentTime = new Date();
    let days=0;
    let year=ann.getFullYear();
    while(year<currentTime.getFullYear())
    {
        if(year % 4 == 0)
        {
            if(year % 400) days+=366;
            else if(year % 100 == 0) days+=365;
            else days+=366;
        }
        year++; 
    }
    let month=0;
    while(month<currentTime.getMonth())
        {
            days+=(new Date(currentTime.getFullYear(),month,0)).getDate();
            month++;            
    }
    days+=(new Date(ann.getFullYear(),ann.getMonth(),0)).getDate()-ann.getDate();
    days+=currentTime.getDate();
    return days;
}

var timer=setInterval(() => {
    var currentTime = new Date();    
    let years = currentTime.getFullYear() - ann.getFullYear();
    let months = currentTime.getMonth() - ann.getMonth();
    let days = currentTime.getDate() - ann.getDate();
    let hours = currentTime.getHours() - ann.getHours();
    let minutes = currentTime.getMinutes() - ann.getMinutes();
    let seconds = currentTime.getSeconds() - ann.getSeconds();
    
    let totalDaysValue = totalDaysTogether();
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
        const previousMonth = new Date(currentTime.getFullYear(), currentTime.getMonth(), 0); 
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
    else if(days == 2 || days == 3 || days == 4) dayText.innerHTML="Dny";
    else dayText.innerHTML="Dnů";
    yearLi.innerHTML = years;
    monthLi.innerHTML = months;
    dayLi.innerHTML = days;
    timeLi.innerHTML=hours + ":" + minutes + ":" + seconds;
    totalDaysText.innerHTML=totalDaysValue + " dní!";
}, 1000);

const reasons = ["Jsi moje neskutečná podpora!", "Umíš úžasně vařit!", "Jsi neskutečně nádherná!", "Jsi strašně roztomilá!", "Máš radost z maličkostí", "Dokážeš mi vždycky zlepšit náladu!"]
var reasonText = document.getElementById("reasonText");
reasonText.innerHTML=reasons[Math.floor(Math.random()*reasons.length)];
