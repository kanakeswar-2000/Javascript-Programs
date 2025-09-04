let defuserEl = document.getElementById("defuser");
let timerEl = document.getElementById("timer");
let count = 10;

let id = setInterval(function() {
    count = count - 1;
         timerEl.textContent = count;
    if (count === 0) {
        timerEl.textContent = "Boom";
        clearInterval(id);
    } 
}, 1000);

defuserEl.addEventListener("keydown", function(event) {
    let bombDefuserText = defuserEl.value;
    if (bombDefuserText === "defuse" && count !== 0 && event.key === "Enter") {
        timerEl.textContent = "You did it!";
        clearInterval(id);
    }
})
 