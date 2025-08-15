let textAreaEl = document.getElementById("msg");
let saveEl = document.getElementById("saveBtn");
let clearEl = document.getElementById("clearBtn");

let text = localStorage.getItem("userInput");
textAreaEl.value = text;

saveEl.onclick = function() {
    let text = textAreaEl.value;
    localStorage.setItem("userInput", text);

}
clearEl.onclick = function() {
    textAreaEl.value = "";
    localStorage.removeItem("userInput");
}