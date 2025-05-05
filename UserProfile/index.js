let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
};
let profileContainerElement = document.getElementById("profileContainer");
let imageContainerElement = document.getElementById("imgContainer");
profileContainerElement.classList.add("center", "d-flex", "flex-column", "justify-content-center");

let imageElement = document.createElement("img");
imageElement.setAttribute("src",profileDetails.imgSrc);
imageElement.classList.add("image");
imageContainerElement.appendChild(imageElement);

let headingElement = document.createElement("h1");
headingElement.textContent = profileDetails.name;
headingElement.classList.add("person-name");
profileContainerElement.appendChild(headingElement);

let paragraphElement = document.createElement("p");
paragraphElement.textContent = "Age:" + profileDetails.age;
paragraphElement.classList.add("person-age");
profileContainerElement.appendChild(paragraphElement);