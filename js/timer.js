const timerForm = document.querySelector("#timer-form");
const timerh3 = document.querySelector("#timer h3");
let count =0;
let timerSecond=0;
let interval;
function getTimer(){
    const elapsed = timerSecond-count;
    if(elapsed===0){
        timerh3.classList.add("hidden");
        alert("time is done!");
        clearInterval(interval);
    }
    const second = String(elapsed%60).padStart(2,"0");
    const minute = String(parseInt(elapsed/60)%60).padStart(2,"0");
    const hour =  String(parseInt(elapsed/(60*60))%24).padStart(2,"0");
    timerh3.innerText = `${hour}:${minute}:${second}`;
    timerh3.classList.remove("hidden");
    count=count+1;
}
function handleTimerSubmit(event){
    event.preventDefault();
    timerSecond = parseInt(timerForm.querySelector("input").value)*60;
    getTimer();
    interval = setInterval(getTimer,1000);
}
timerForm.addEventListener("submit", handleTimerSubmit);

