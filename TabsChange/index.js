let aboutbuttonElement = document.getElementById("aboutButton");
let timetovisitbuttonElement = document.getElementById("timeToVisitButton");
let attractionsbuttonElement = document.getElementById("attractionsButton");
let abouttabElement = document.getElementById("aboutTab");
let timetovisittabElement = document.getElementById("timeToVisitTab");
let attractionstabElement = document.getElementById("attractionsTab");
function about() {
    timetovisitbuttonElement.classList.remove("selected-button");
    attractionsbuttonElement.classList.remove("selected-button");
    aboutbuttonElement.classList.add("selected-button");
    abouttabElement.classList.remove("d-none");
    timetovisittabElement.classList.add("d-none");
    attractionstabElement.classList.add("d-none");
}

function timetovisit() {
    timetovisitbuttonElement.classList.add("selected-button");
    attractionsbuttonElement.classList.remove("selected-button");
    aboutbuttonElement.classList.remove("selected-button");
    timetovisittabElement.classList.remove("d-none");
    abouttabElement.classList.add("d-none");
    attractionstabElement.classList.add("d-none");

}

function attractions() {
    timetovisitbuttonElement.classList.remove("selected-button");
    attractionsbuttonElement.classList.add("selected-button");
    aboutbuttonElement.classList.remove("selected-button");
    attractionstabElement.classList.remove("d-none");
    timetovisittabElement.classList.add("d-none");
    abouttabElement.classList.add("d-none");

}