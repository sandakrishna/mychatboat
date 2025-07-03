const botReplies = {
  "hi": "Hello! I’m Kittu – your product support assistant. How can I help you today? 😊",
  "invoice": "To generate an invoice: Go to the Invoice tab → Select client → Enter billing period & amount → Click 'Generate Invoice'.",
  "report": "Sales reports are available in the Reports section. Choose a date range and click 'Export to Excel'.",
  "login issue": "Check your email and password. If you forgot it, use the 'Reset Password' option on the login page.",
  "attendance": "Attendance sync issues may be due to server delays. Please try again in 15 minutes or contact support.",
  "support": "Raise your issue via this form 📩: Enter Your Issu Here!",
  "default": "I'm sorry, I didn’t understand that. Try typing: invoice, report, login issue, or support."
};

function sendMessage() {
  const input = document.getElementById("user-input");
  const userMessage = input.value.trim();
  if (!userMessage) return;

  addMessage("You", userMessage);
  input.value = "";

  const lowerCaseMsg = userMessage.toLowerCase();
  let reply = botReplies["default"];

  for (let key in botReplies) {
    if (lowerCaseMsg.includes(key)) {
      reply = botReplies[key];
      break;
    }
  }

  setTimeout(() => addMessage("ApBot", reply), 600);
}

function addMessage(sender, message) {
  const box = document.getElementById("chat-box");
  const msg = document.createElement("div");
  msg.innerHTML = `<strong>${sender}:</strong> ${message}`;
  msg.style.margin = "8px 0";
  box.appendChild(msg);
  box.scrollTop = box.scrollHeight;
}
