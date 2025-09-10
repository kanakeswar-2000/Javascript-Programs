let statusEl = document.getElementById("requestStatus");
let responseEl = document.getElementById("httpResponse");
let buttonEl = document.getElementById("sendGetRequestBtn");
let loadingEl = document.getElementById("loading");


function result() {
     
    let url = "https://gorest.co.in/public-api/users";
    let options = {
        method: "GET"

    };
    loadingEl.classList.remove("d-none");
    statusEl.classList.add("d-none");
    fetch(url, options)

        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            loadingEl.classList.add("d-none");
            statusEl.classList.remove("d-none");
            let requeststatus = jsonData.code;
            let httpresponse = JSON.stringify(jsonData);
            statusEl.textContent = requeststatus;
            responseEl.textContent = httpresponse;
        });
}

buttonEl.addEventListener("click", result);