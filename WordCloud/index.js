let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];
let wordsContainerEl = document.getElementById("wordsContainer");
let userInputEl = document.getElementById("userInput");
 
let errorEl = document.getElementById("errorMsg");

function createandappend(word) {
    let spanEl = document.createElement("span");
    let fontsize = Math.ceil(Math.random() * 40) + "px";

    spanEl.textContent = word;
    spanEl.style.fontSize = fontsize;
    wordsContainerEl.appendChild(spanEl);


}
for (let word of wordCloud) {
    createandappend(word);
}
function onAddWordToWordCloud() {
    let userEnteredWord=userInputEl.value;
    if (userInputEl.value === "") {
        errorEl.textContent = "Enter a word";
    } else {
        createandappend(userEnteredWord);
        userInputEl.value = "";
        errorEl.textContent = "";
    }

}