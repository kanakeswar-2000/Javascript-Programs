let greeting = '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Rahul","to":"Varakumar"}';
let parsedValue = JSON.parse(greeting);
 
let greet1El = document.getElementById("greet1");
greet1El.textContent = "From:" + parsedValue.from;
 

let greet1E2 = document.getElementById("greet2");
greet1E2.textContent = "To:" + parsedValue.to;
 

let greetTextEl = document.getElementById("greettext");
greetTextEl.textContent = parsedValue.greetText;
 