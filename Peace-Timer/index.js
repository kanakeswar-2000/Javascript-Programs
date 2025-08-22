let twentySecondBtnEl = document.getElementById("twentySecondsBtn");
let thirtySecondBtnEl = document.getElementById("thirtySecondsBtn");
let fortySecondBtnEl = document.getElementById("fortySecondsBtn");
let oneMinuteBtnEl = document.getElementById("oneMinuteBtn");
let timerTextEl = document.getElementById("timerText");

let timerId;
let secondsLeft=0;
let timerCompletedText = "Your moment is complete";

function clearPreviousTimers(){
    clearInterval(timerId);
}
function setTimerAndShow(){
    timerTextEl.textContent=secondsLeft + "seconds left";
    timerId=setInterval(function(){
        if (secondsLeft>1){ 
            secondsLeft=secondsLeft-1;
            timerTextEl.textContent=secondsLeft + "seconds left";
        }else{
            clearPreviousTimers();
            timerTextEl.textContent=timerCompletedText;
        }
    },1000);
}
twentySecondBtnEl.onclick=function(){
    secondsLeft=20;
    clearPreviousTimers();
    setTimerAndShow();
}
thirtySecondBtnEl.onclick=function(){
    secondsLeft=30;
    clearPreviousTimers();
    setTimerAndShow();
}
fortySecondBtnEl.onclick=function(){
    secondsLeft=40;
    clearPreviousTimers();
    setTimerAndShow();
}
oneMinuteBtnEl.onclick=function(){
    secondsLeft=60;
    clearPreviousTimers();
    setTimerAndShow();
}