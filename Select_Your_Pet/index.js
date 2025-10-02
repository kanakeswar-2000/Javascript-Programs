let petsImageUrls = {
    Dog: "https://supertails.com/cdn/shop/articles/golden-retriever_bb80d080-de9e-40e1-b0d8-1d53cb110b64.jpg?v=1755608799",
    Cat: "https://www.cdc.gov/healthy-pets/media/images/2024/04/Cat-on-couch.jpg",
    Parrot: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSrCY_8lGebWBFeC30lXsD2YZgVPQO267llS27o0I-iYlYY84fOnnd47LvI0Zw8znP6PrGn55sn_sG9RcW4Q-sQL2t-RwwzlyDlQ35JTnlgXA",
    Spider: "https://sdzwildlifeexplorers.org/sites/default/files/2017-09/animal-hero-spiders.jpg",
    Rabbit: "https://www.welcomewildlife.com/wp-content/uploads/2015/02/Eastern-Cottontail-E-Laura-Wolf-Flickr-CC-BY-2.0-scaled.jpg"
};
let selectEl = document.getElementById("petSelect");

let imgEl = document.getElementById("image");

selectEl.addEventListener("change", function(event) {
    let petanimal = event.target.value;
     
    let imageurl = petsImageUrls[petanimal];
    console.log(imageurl);
    imgEl.src = imageurl;
})