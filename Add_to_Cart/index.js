let userInputElement = document.getElementById("cartItemTextInput");
let buttonElement = document.getElementById("addBtn");
let itemsContainerElement = document.getElementById("itemsContainer");
buttonElement.onclick = function() {
    let cartItemText = userInputElement.value;
    let cartItemEl = document.createElement("li");
    cartItemEl.textContent = cartItemText;
    itemsContainerElement.appendChild(cartItemEl);
    userInputElement.value = "";
};