let firstnumberElement = document.getElementById("firstNumber");
let secondnumberElement = document.getElementById("secondNumber");

let userInputElement = document.getElementById("userInput");
let gameresultElement = document.getElementById("gameResult");

function check_result() {
    let firstnumber = (firstnumberElement.textContent);
    
    let sum = parseInt(userInputElement.value);
    
    let secondnumber = (secondnumberElement.textContent);

    if (firstnumber + secondnumber === sum) {
        gameresultElement.textContent = "Congratulations! You got it right";
        gameresultElement.style.backgroundColor = "#028a0f"
    } else {
        gameresultElement.textContent = "Please Try Again!";
        gameresultElement.style.backgroundColor = "#1e217c"
    }
}

function restart() {
    firstnumberElement.textContent = Math.ceil(Math.random() * 100);

    secondnumberElement.textContent = Math.ceil(Math.random() * 100);

    gameresultElement.textContent = "";
    userInputElement.value = "";
}
restart();