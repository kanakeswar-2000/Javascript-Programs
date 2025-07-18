let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://recipeswalay.com/wp-content/uploads/2025/07/Leonardo_Kino_XL_Red_Lobster_Shrimp_Scampi_Recipe_1-2-1.jpg",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};

let headingElement = document.getElementById("heading");
headingElement.textContent = recipeObj.title;

let imageElement = document.getElementById("image");
imageElement.classList.add("w-100");
imageElement.setAttribute("src", recipeObj.imgSrc);

 
let ingredientsContainerElement = document.getElementById("ingredientsContainer");
 
 
let ingredients_list = recipeObj.ingredients;
for (let item of ingredients_list) {
     let listElement = document.createElement("li");
    listElement.textContent = item;
    listElement.classList.add("items_style");
    ingredientsContainerElement.appendChild(listElement);
}