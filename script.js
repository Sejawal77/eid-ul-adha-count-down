
let eidDay = "16 june 2024 5:00 AM"

let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");



function change() {

    let end = new Date(eidDay);

let now = new Date();

let diff = (end - now)/1000;
if(diff < 0){
    return;
}
else {
    days.value = Math.floor(diff/3600/24);
hours.value = Math.floor(diff/3600%24);
minutes.value = Math.floor(diff/60%60);
seconds.value = Math.floor(diff%60)

}

}



setInterval(change
,1000);