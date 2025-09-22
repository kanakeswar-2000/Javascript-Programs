let inputEl = document.getElementById("userInput");
let factEl = document.getElementById("fact");
let spinnerEl = document.getElementById("spinner");

function interestingfact(event) {
    if (event.key === "Enter") {
        
        let inputVal=inputEl.value;
        if (inputVal===""){
            alert("Enter a number");
            return;
        }

        let options = {
            method: "GET"
        };
        let url = "https://apis.ccbp.in/numbers-fact?number=" + inputVal;
        
        spinnerEl.classList.remove("d-none");
        factEl.classList.add("d-none"); 
        
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                spinnerEl.classList.add("d-none");
                factEl.classList.remove("d-none");
                console.log("trigger");
                let {fact}=jsonData;
                factEl.textContent = fact;
            });
    }
}
inputEl.addEventListener("keyup", interestingfact);