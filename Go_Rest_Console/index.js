/* 
    request body data should given in key value pair in an object Keys must be in double quotes.

*/

let formEl = document.getElementById("consoleForm");
let urlEl = document.getElementById("requestUrl");
let errorMsgEl = document.getElementById("requestUrlErrMsg");
let requestMethodEl = document.getElementById("requestMethod");
let requestBodyEl = document.getElementById("requestBody");
let buttonEl = document.getElementById("sendRequestBtn");
let responseStatusEl = document.getElementById("responseStatus");
let responseBodyEl = document.getElementById("responseBody");

let formData = {
    requestUrl: "https://gorest.co.in/public-api/users",
    requestMethod: "POST",
    requestBody: ""
}
urlEl.addEventListener("change", function(event) {
    formData.requestUrl = urlEl.value;
})
requestMethodEl.addEventListener("change", function(event) {
    formData.requestMethod = requestMethodEl.value;
});

requestBodyEl.addEventListener("change", function(event) {
    formData.requestBody = requestBodyEl.value;
});

function validateUrl(){
    if (formData.requestUrl === "") {
        errorMsgEl.textContent = "Required*";
    } else {
        errorMsgEl.textContent = "";
    }
}

formEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateUrl();
    let options = {
        method: formData.requestMethod,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 8c0f19f93f6102ffdf1a1a693e27f1e9de290ae1521d24963cde0993c6e57f34"
        },
        body: formData.requestBody
    };
    let url = urlEl.value;
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            responseStatusEl.value = jsonData.code;
            responseBodyEl.textContent = JSON.stringify(jsonData);

        });
})