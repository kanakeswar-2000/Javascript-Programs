let formEl = document.getElementById("subscribeForm");
let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let nameErrMsgEl = document.getElementById("nameErrMsg");
let emailErrMsgEl = document.getElementById("emailErrMsg");
let errMsg="Required*";
nameEl.addEventListener("blur", function(event) {
    if (nameEl.value === "") {
        nameErrMsgEl.textContent = errMsg;
    } else {
        nameErrMsgEl.textContent = "";
    }
});
emailEl.addEventListener("blur", function(event) {
    if (emailEl.value === "") {
        emailErrMsgEl.textContent = errMsg;
    } else {
        emailErrMsgEl.textContent = "";
    }
});

formEl.addEventListener("submit", function(event) {
    event.preventDefault();
})