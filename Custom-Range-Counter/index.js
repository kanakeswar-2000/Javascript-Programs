let counterTextEl = document.getElementById("counterText");
let fromUserInputEl = document.getElementById("fromUserInput");
let toUserInputEl = document.getElementById("toUserInput");
let startbutton = document.getElementById("startBtn");

function displayNumbers(fromCount,toCount){
    let currentCount=fromCount;
    counterTextEl.textContent=currentCount;
    let timerId=setInterval(function(){
        if (currentCount<toCount){
            currentCount+=1;
            counterTextEl.textContent=currentCount;
        }else{
            clearInterval(timerId);
        }
    },1000);
}

startbutton.onclick=function(){
    let fromVal=fromUserInputEl.value;
    let toVal=toUserInputEl.value;
    
    if (fromVal===""){
        alert("Enter From Value");
    }
    else if(toVal===""){
        alert("Enter To Value");
    }
     
    else{
        let fromValInteger=parseInt(fromVal);
        let toValInteger=parseInt(toVal);
        displayNumbers(fromValInteger,toValInteger);
    }
}