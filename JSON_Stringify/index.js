let bikes = ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];
let person = {
    name: "Rahul",
    age: 25,
    gender: "Male",
};
let todos = [{
        todo: "Attending CCBP sessions",
        todoStatus: "Completed",
    },
    {
        todo: "Completing practice sets",
        todoStatus: "Not Completed",
    },
    {
        todo: "Asking doubts",
        todoStatus: "Completed",
    },
];
let valuesToStringify = [bikes, person, todos];

let jsonContainerEl = document.getElementById("jsonContainer");

function createAndAppendValue(stringifiedvalue) {
    let valueContainerEl = document.createElement("div");
    valueContainerEl.classList.add("value-container");
    jsonContainerEl.appendChild(valueContainerEl);

    let valueEl = document.createElement("span");
    valueEl.textContent = stringifiedvalue;
    valueEl.classList.add("value");
    valueContainerEl.appendChild(valueEl);
}

function convert_to_JSONstring(item) {
    let stringifiedvalue = JSON.stringify(item);
    createAndAppendValue(stringifiedvalue);
}
for (let value of valuesToStringify) {
    convert_to_JSONstring(value);
}