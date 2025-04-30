let billAmountInput = document.getElementById("billAmount");
 let percentageTipInput = document.getElementById("percentageTip");
 let tipAmountInput = document.getElementById("tipAmount");
 let totalInput = document.getElementById("totalAmount");
 let errorMessageElement = document.getElementById("errorMessage");
 let errorMessage = "Please Enter a Valid Input";

 function calculateTip() {
     let billAmountInputValue = billAmountInput.value;
     let percentageTipInputValue = percentageTipInput.value;


     if (billAmountInputValue === "") { // Here, if the bill input value is empty, error message will be displayed
         errorMessageElement.textContent = errorMessage;
     } else if (percentageTipInputValue === "") { // Here, if the percentage tip input value is empty, error message will be displayed
         errorMessageElement.textContent = errorMessage;
     } else {
         errorMessageElement.textContent = ""; // Here, if the both input values are not empty, error message will be removed
         let billAmount = parseInt(billAmountInputValue); // Getting bill amount and converting to integer
         let percentageTip = parseInt(percentageTipInputValue); // Getting tip percentage and converting to integer

         let calculatedTip = (percentageTip / 100) * billAmount; // Calculating tip
         let calculatedTotal = billAmount + calculatedTip; // Calculating total

         tipAmountInput.value = calculatedTip; // Assigning CalculatedTip to the input
         totalInput.value = calculatedTotal; // Assigning total bill amount to the input
     }
 }