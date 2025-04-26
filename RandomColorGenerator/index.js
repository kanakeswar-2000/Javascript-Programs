let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
let no_of_colors = bgColorsArray.length;
let bgContainerEl=document.getElementById("bgContainer");
bgContainerEl.style.backgroundColor=bgColorsArray[0];
let random_code;
function changecolors() {
    let randomindex = Math.ceil(Math.random() * no_of_colors);
    
    if (randomindex === no_of_colors) {
        random_code = bgColorsArray[randomindex - 1];
    }
    random_code = bgColorsArray[randomindex];
    bgContainerEl.style.backgroundColor = random_code;
}