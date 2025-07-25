let checkboxWithLabelContainerEl = document.getElementById("checkboxWithLabelContainer");
checkboxWithLabelContainerEl.classList.add("p-5", "text-center");



let checkboxElement = document.createElement("input");
checkboxElement.type = "checkbox";
checkboxElement.id = "checkbox";
checkboxWithLabelContainerEl.appendChild(checkboxElement);

let labelElement = document.createElement("label");
labelElement.setAttribute("for", "checkbox");
labelElement.textContent = "Click Me!";
labelElement.id = "checkboxLabel";
labelElement.classList.add("ml-2");
checkboxWithLabelContainerEl.appendChild(labelElement);