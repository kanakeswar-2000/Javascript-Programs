let formEl = document.getElementById("addUserForm");
let nameEl = document.getElementById("name");
let nameErrEl = document.getElementById("nameErrMsg");
let emailEl = document.getElementById("email");
let emailErrEl = document.getElementById("emailErrMsg");
let statusEl = document.getElementById("status");
let maleEl = document.getElementById("genderMale");
let femaleEl = document.getElementById("genderFemale");

let formdata = {
    name: "",
    email: "",
    status: "Active",
    gender: "Male"
}
nameEl.addEventListener("change", function(event) {
    if (nameEl.value === "") {
        nameErrEl.textContent = "Required*";
    } else {
        nameErrEl.textContent = "";
    }
    formdata.name = event.target.value;
})
emailEl.addEventListener("change", function(event) {
    if (emailEl.value === "") {
        emailErrEl.textContent = "Required*";
    } else {
        emailErrEl.textContent = "";
    }
    formdata.email = event.target.value;
})
statusEl.addEventListener("change", function(event) {
    formdata.status = event.target.value;
})
maleEl.addEventListener("change", function(event) {
    formdata.gender = "Male";
})
femaleEl.addEventListener("change", function(event) {
    formdata.gender = "Female";
})

function validateformdata(formdata) {
    let {
        name,
        email
    } = formdata;
    if (name === "") {
        nameErrEl.textContent = "Required*";
    }
    if (email === "") {
        emailErrEl.textContent = "Required*";
    }
}

function addtheuser() {
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 8c0f19f93f6102ffdf1a1a693e27f1e9de290ae1521d24963cde0993c6e57f34"
        },
        body: JSON.stringify(formdata)
    }
    let url = "https://gorest.co.in/public-api/users";
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            if (jsonData.code === 422) {
                if (jsonData.data[0].message === "has already been taken") {
                    emailErrEl.textContent = "Email alredy exists";
                }
            }
        })
}
formEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateformdata(formdata);
    addtheuser(formdata);
});