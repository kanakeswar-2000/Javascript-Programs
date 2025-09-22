let searchInputEl = document.getElementById("searchInput");
let resultContainerEl = document.getElementById("resultCountries");
let spinnerEl = document.getElementById("spinner");

let searchInputval = "";
let countriesList = [];

function createandappend(country) {


    let {
        name,
        flag,
        population
    } = country;
    
    let resultitemEl = document.createElement("div");
    resultitemEl.classList.add("country-card", "col-11", "col-md-5", "mr-auto","ml-auto","d-flex");
    resultContainerEl.appendChild(resultitemEl);

    let flagEl = document.createElement("img");
    flagEl.classList.add("country-flag");
    flagEl.src = flag;
    resultitemEl.appendChild(flagEl);
    
    let countryInfoEl=document.createElement("div");
    countryInfoEl.classList.add("d-flex","flex-column","ml-4");
    resultitemEl.appendChild(countryInfoEl);
    
    let titleEl = document.createElement("h1");
    titleEl.classList.add("country-name");
    titleEl.textContent = name;
    countryInfoEl.appendChild(titleEl);

    let populationEl = document.createElement("p");
    populationEl.classList.add("country-population");
    populationEl.textContent = population;
    countryInfoEl.appendChild(populationEl);

}

function displaySearchResults() {
    resultContainerEl.textContent = "";

    for (let country of countriesList) {
        if (country.name.includes(searchInputval)) {
            createandappend(country);
        }
    }
}

function getCountries() {
    let url = "https://apis.ccbp.in/countries-data";
    let options = {
        method: "GET"
    };
    spinnerEl.classList.remove("d-none");

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            countriesList = jsonData;
            spinnerEl.classList.add("d-none");
            displaySearchResults();

        });
}

function onChangeSearchInput(event) {
    searchInputval = event.target.value;
    displaySearchResults();
}
getCountries();
searchInputEl.addEventListener("keyup", onChangeSearchInput);