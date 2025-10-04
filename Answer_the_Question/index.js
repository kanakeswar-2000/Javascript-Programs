let hydEl = document.getElementById("cityHyderabad");
let cheEl = document.getElementById("cityChennai");
let delEl = document.getElementById("cityDelhi");
let mumEl = document.getElementById("cityMumbai");

let questionsformEl = document.getElementById("questionsForm");
let resultEl = document.getElementById("resultMsg");

let capitalCity="Delhi";
let selectedcity = null;

questionsformEl.addEventListener("change", function(event) {
    selectedcity = event.target.value;
})
questionsformEl.addEventListener("submit", function(event) {
    event.preventDefault();
    if (selectedcity === null) {
        resultEl.textContent = "Please select the answer!";
        resultEl.style.color = "red";
    } else {
        if (selectedcity === "Delhi") {
            resultEl.textContent = "Correct answer!";
            resultEl.style.color = "green";
        } else {
            resultEl.textContent = "Wrong answer!";
            resultEl.style.color = "red";
        }
    }
})