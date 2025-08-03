let titleInputElement = document.getElementById("titleInput");
let textAreaElement = document.getElementById("reviewTextarea");
let buttonElement = document.getElementById("addBtn");
let reviewsContainerElement = document.getElementById("reviewsContainer");

buttonElement.onclick = function() {
    let movieTitle = titleInputElement.value;
    let movieReview = textAreaElement.value;

    if (movieTitle === "") {
        alert("Enter a valid movie title");
        return;
    }
    let movieEl = document.createElement("h1");
    movieEl.textContent = "Movie Title:" + movieTitle;
    movieEl.classList.add("movie-title");
    reviewsContainerElement.appendChild(movieEl);

    let reviewEl = document.createElement("p");
    reviewEl.textContent = "Review:" + movieReview;
    reviewsContainerElement.appendChild(reviewEl);

    let horizontalLineEl = document.createElement("hr");
    reviewsContainerElement.appendChild(horizontalLineEl);

    titleInputElement.value = "";
    textAreaElement.value = "";
};