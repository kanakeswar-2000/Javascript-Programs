let arr = [1, 7, 3, 1, 0, 20, 77];
let stringifiedArray = JSON.stringify(arr);
let startIndexEl = document.getElementById("startIndexInput");
let deleteCountEl = document.getElementById("deleteCountInput");
let itemToAddEl = document.getElementById("itemToAddInput");
let buttonEl = document.getElementById("spliceBtn");
let updatedArrayEl = document.getElementById("updatedArray");

function convertArrtoJSONStringAndAppend() {
    const stringifiedArray = JSON.stringify(arr);
    updatedArrayEl.textContent = stringifiedArray;
}
convertArrtoJSONStringAndAppend()

buttonEl.onclick = function() {

    let startindex = parseInt(startIndexEl.value);

    if (startIndexEl.value === "") {
        alert("Enter the start index");
        return;
    }

    let deletecount = parseInt(deleteCountEl.value);
    if (deleteCountEl.value === "") {
        deletecount = 0;
    }
    let newitem = (itemToAddEl.value);


    if (newitem === "") {
        arr.splice(startindex, deletecount);
    } else {
        arr.splice(startindex, deletecount, newitem);
    }
    convertArrtoJSONStringAndAppend();

    stringifiedArray = stringifiedArray;
    startIndexEl.value = "";
    deleteCountEl.value = "";
    itemToAddEl.value = "";

}