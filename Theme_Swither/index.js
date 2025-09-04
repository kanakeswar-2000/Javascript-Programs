let inputEl = document.getElementById("themeUserInput");
let headingEl = document.getElementById("heading");
let containerEl = document.getElementById("bgContainer");

function changeTheme(event) {
    if (event.key === "Enter") {
        let user_entered_text = inputEl.value;
        
        if (user_entered_text === "Dark") {
            headingEl.style.color = "White";
            containerEl.style.backgroundColor ="black";

        } else if (user_entered_text === "Light") {
            headingEl.style.color = "black";
            containerEl.style.backgroundColor = "White";

        } else {
            alert("Enter the valid theme");
        }

    }
}
inputEl.addEventListener("keydown", changeTheme);