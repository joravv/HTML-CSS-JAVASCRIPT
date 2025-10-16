var wakeUpTime;
var dsTime;
var sleepTime;
var noon=12;

function showCurrentTime(){
    var clock=document.getElementById('clock');
    var currentTime= new Date();
    var hours= currentTime.getHours();
    var minutes=currentTime.getMinutes();
    var seconds= currentTime.getSeconds();
    var meridian = "AM"

    if(hours > noon){
        meridian="PM";
    }

    var clocktime= hours + ":"+minutes+":"+seconds+" - "+meridian;
    clock.inneHTML=clocktime;
}

var oneSecond=1000;
setInterval(showCurrentTime, oneSecond);