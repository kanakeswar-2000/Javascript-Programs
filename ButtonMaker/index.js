let bgcolorElement = document.getElementById("bgColorInput");
let fontcolorElement = document.getElementById("fontColorInput");
let fontsizeElement = document.getElementById("fontSizeInput");
let fontweightElement = document.getElementById("fontWeightInput");
let paddingElement = document.getElementById("paddingInput");
let borderradiusElement = document.getElementById("borderRadiusInput");
let buttonElement = document.getElementById("customButton");
function applyproperties() {
      let bgc = bgcolorElement.value;
      let fc = fontcolorElement.value;
      let fz = fontsizeElement.value;
      let fw = fontweightElement.value;
      let p = paddingElement.value;
      let br = borderradiusElement.value;
      
    buttonElement.style.backgroundColor = bgc;
    buttonElement.style.color = fc;
     buttonElement.style.fontSize = fz;
     buttonElement.style.fontWeight = fw;
     buttonElement.style.padding = p;
     buttonElement.style.borderRadius = br;
 }