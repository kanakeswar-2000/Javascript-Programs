let numbers = [17, 31, 77, 20, 63];
let userInputEl = document.getElementById("userInput");
let indexEl = document.getElementById("indexOfNumber");

function findIndexOfNumber() {
    let number = parseInt(userInputEl.value);
    let itemIndex = numbers.findIndex(function(eachitem) {
        if (eachitem === number) {
            return true;
        } else {
            return false;
        }
    })

    indexEl.textContent = itemIndex;

