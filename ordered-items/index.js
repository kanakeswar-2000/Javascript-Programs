let itemList = [{
        itemName: "Veg Biryani",
        uniqueNo: 1,
    },
    {
        itemName: "Chicken 65",
        uniqueNo: 2,
    },
    {
        itemName: "Paratha",
        uniqueNo: 3,
    }
];
let itemsContainerElement = document.getElementById("orderedItemsContainer");
let itemslistContainerElement = document.getElementById("itemsListContainer");

function ondelete(itemId) {
    let itemElement = document.getElementById(itemId);
    itemslistContainerElement.removeChild(itemElement);
}

function createandappend(item) {
    let itemId = "item" + item.uniqueNo;
    let buttonId = "button" + item.uniqueNo;

    let itemElement = document.createElement("li");
    itemElement.id = itemId;
    itemElement.classList.add("ordered-item");
    itemElement.textContent = item.itemName;
    itemslistContainerElement.appendChild(itemElement);



    let buttonElement = document.createElement("button");
    buttonElement.id = buttonId;
    buttonElement.textContent = "Cancel";
    buttonElement.classList.add("btn" ,"btn-danger" ,"ml-3");
    itemElement.appendChild(buttonElement);
    buttonElement.onclick = function() {
        ondelete(itemId);
    };



}
for (let item of itemList) {
    createandappend(item);
}