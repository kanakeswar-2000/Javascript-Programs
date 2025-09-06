let hoursEl = document.getElementById("hoursInput");
let minutesEl = document.getElementById("minutesInput");
let errorEl = document.getElementById("errorMsg");
let secondsEl = document.getElementById("timeInSeconds");
let buttonEl = document.getElementById("convertBtn");

function converttoseconds() {
    let hours = hoursEl.value;
    let minutes = minutesEl.value;

    if (hoursEl.value === "" || (hoursEl.value === "" && minutes.value === "")) {
        errorEl.textContent = "please enter a valid number of hours";
        secondsEl.classList.remove("time-in-seconds");
        secondsEl.textContent = "";
        return;
    }
    if (minutesEl.value === "") {
        errorEl.textContent = "please enter a valid number of minutes";
        secondsEl.classList.remove("time-in-seconds");
        secondsEl.textContent = "";
        return;
    }
    let m1 = parseInt(hours) * 3600;
    let m2 = parseInt(minutes) * 60;
    secondsEl.classList.add("time-in-seconds");
    secondsEl.textContent = (m1 + m2) + "s";
    errorEl.textContent = "";
}

buttonEl.addEventListener("click", converttoseconds);