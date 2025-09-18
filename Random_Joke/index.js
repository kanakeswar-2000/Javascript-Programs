let jokeEl = document.getElementById("jokeText");
let buttonEl = document.getElementById("jokeBtn");
let spinnerEl = document.getElementById("spinner");

function randomjoke() {
    let url = "https://apis.ccbp.in/jokes/random";
    let options = {
        method: "GET"
    };
    spinnerEl.classList.remove("d-none");
    jokeEl.classList.add("d-none");
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerEl.classList.add("d-none");
            jokeEl.classList.remove("d-none");
            jokeEl.textContent = jsonData.value;


        });
}

buttonEl.addEventListener("click", randomjoke);