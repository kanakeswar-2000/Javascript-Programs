let imageElement = document.getElementById("image");
let warningMessageElement = document.getElementById("warningMessage");
let imageWidthElement = document.getElementById("imageWidth");
let imageMaxWidth = 300;
let imageMinWidth = 100;
let imageOriginalWidth = 200;
 


function onDecrement() {
    if (imageOriginalWidth === imageMinWidth) {
        warningMessageElement.textContent = "Can't Visible.Increase the size of the image";
    } else {
        imageOriginalWidth -= 5;
        let updated_width = imageOriginalWidth + "px";
        warningMessageElement.textContent = "";
        imageElement.style.width = updated_width;
        imageWidthElement.textContent = updated_width;

    }

}

function onIncrement() {
    if (imageOriginalWidth === imageMaxWidth) {
        warningMessageElement.textContent = "Too big.Decrease the size of the image";
    } else {
        imageOriginalWidth += 5;
        let updated_width = imageOriginalWidth + "px";
        warningMessageElement.textContent = "";
        imageElement.style.width = updated_width;
        imageWidthElement.textContent = updated_width;

    }

}