let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
 
let chatboxEl = document.getElementById("userInput");
let chatContainerEl = document.getElementById("chatContainer");

function getreplyfromchatbot() {
    let noOfMsgs = chatbotMsgList.length;

    let chatbotMsg = chatbotMsgList[Math.ceil(Math.random() * noOfMsgs) - 1];
    let chatbotMsgContainerEl = document.createElement("div");
    chatbotMsgContainerEl.classList.add("msg-from-chatbot-container");
    chatContainerEl.appendChild(chatbotMsgContainerEl);

    let chatbotMsgEl = document.createElement("span");
    chatbotMsgEl.classList.add("msg-from-chatbot");
    chatbotMsgEl.textContent = chatbotMsg;
    chatbotMsgContainerEl.appendChild(chatbotMsgEl);

}

function sendMsgToChatbot() {
    let message = chatboxEl.value;

    let sentMsgContainerEl = document.createElement("div");
    sentMsgContainerEl.classList.add("msg-to-chatbot-container");
    chatContainerEl.appendChild(sentMsgContainerEl);

    let sentMsgEl = document.createElement("span");
    sentMsgEl.classList.add("msg-to-chatbot");
    sentMsgEl.textContent = message;
    sentMsgContainerEl.appendChild(sentMsgEl);

    chatboxEl.value = "";
    getreplyfromchatbot();
}