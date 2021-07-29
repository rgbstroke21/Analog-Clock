setInterval(() => {
    d = new Date();
    curHour = d.getHours();
    curMin = d.getMinutes();
    curSec = d.getSeconds();

    rotate_hour = curHour*30 + curMin/2 + curSec/120 ;
    rotate_min = curMin*6 + curSec/10;
    rotate_sec = curSec*6;

    hour.style.transform = `rotate(${rotate_hour}deg)`;
    minute.style.transform = `rotate(${rotate_min}deg)`;
    second.style.transform = `rotate(${rotate_sec}deg)`;
    
}, 1000);