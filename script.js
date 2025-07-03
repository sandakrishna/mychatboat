const botReplies = {
  "hi": "Hello! How can I help you today? 😊",
  "invoice": "To generate an invoice, go to the Invoice tab → select client → enter amount → click Generate.",
  "report": "You can download reports under the Data Report module. Need help with filters?",
  "login issue": "Make sure your email and password are correct. You can reset your password if needed.",
  "support": "You can raise a ticket here: https://forms.gle/YOUR-FORM-LINK",
  "default": "Sorry, I didn’t understand that. Please rephrase or try keywords like: invoice, report, login issue."
};

function sendMessage() {
  const input = document.getElementById("user-input");
  const userMessage = input.value.trim();
  if (!userMessage) return;

  addMessage("You", userMessage);
  input.value = "";

  const lowerCaseMsg = userMessage.toLowerCase();
  let reply = botReplies["default"];
  
  Object.keys(botReplies).forEach((key) => {
    if (lowerCaseMsg.includes(key)) {
      reply = botReplies[key];
    }
  });

  setTimeout(() => addMessage("ApBot", reply), 500);
}

function addMessage(sender, message) {
  const box = document.getElementById("chat-box");
  const msg = document.createElement("div");
  msg.innerHTML = `<strong>${sender}:</strong> ${message}`;
  msg.style.margin = "5px 0";
  box.appendChild(msg);
  box.scrollTop = box.scrollHeight;
}
