let formEl = document.getElementById("updatePasswordForm");

let newpasswordinputEl = document.getElementById("newPassword");
let confirmpasswordinputEl = document.getElementById("confirmPassword");

let newpassworderrmsgEl = document.getElementById("newPasswordErrMsg");
let confirmpassworderrmsgEl = document.getElementById("confirmPasswordErrMsg");

let validateNewPassword = function() {
    if (newpasswordinputEl.value === "") {
        newpassworderrmsgEl.textContent = "Required *";
    } else {
        newpassworderrmsgEl.textContent = "";
    }
};
let validateConfirmPassword = function() {

    if (confirmpasswordinputEl.value !== newpasswordinputEl.value) {
        confirmpassworderrmsgEl.textContent = "Password must be same";
    } else {
        confirmpassworderrmsgEl.textContent = "";
    }
};
newpasswordinputEl.addEventListener("blur", validateNewPassword);

confirmpasswordinputEl.addEventListener("blur", validateConfirmPassword);



formEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateNewPassword();
    validateConfirmPassword();
})