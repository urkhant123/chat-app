// HTML elements
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatContainer = document.getElementById('chat-container');

// Function to add a new message to the chat
function addMessageToChat(message, sender) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.innerHTML = `<span class="sender">${sender}: </span>${message}`;
  chatContainer.appendChild(messageElement);
}

// Event listener for send button click
sendButton.addEventListener('click', () => {
  const message = messageInput.value;
  if (message.trim() !== '') {
    addMessageToChat(message, 'You');
    messageInput.value = '';
  }
});

// Event listener for Enter key press in the message input
messageInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    const message = messageInput.value;
    if (message.trim() !== '') {
      addMessageToChat(message, 'You');
      messageInput.value = '';
    }
  }
});

// Simulating received messages
setTimeout(() => {
  addMessageToChat('Hello there!', 'Stranger');
}, 1000);

setTimeout(() => {
  addMessageToChat('How are you?', 'Stranger');
}, 2000);

setTimeout(() => {
  addMessageToChat('I\'m doing great!', 'You');
}, 3000);

setTimeout(() => {
  addMessageToChat('Thanks for asking.', 'You');
}, 4000);
