// script.js

function showMoreInfo(playerId) {
  const infoDiv = document.getElementById(`${playerId}-info`);
  if (infoDiv.classList.contains('hidden')) {
      infoDiv.classList.remove('hidden');
  } else {
      infoDiv.classList.add('hidden');
  }
}

// Toggle Chatbot Visibility
function toggleChat() {
  const chatbot = document.getElementById('chatbot');
  const chatButton = document.getElementById('open-chatbot-btn');
  if (chatbot.style.display === 'none' || chatbot.style.display === '') {
      chatbot.style.display = 'flex';
      chatButton.style.display = 'none';
  } else {
      chatbot.style.display = 'none';
      chatButton.style.display = 'block';
  }
}

// Handle Sending Message
function sendMessage() {
  const userInput = document.getElementById('user-input');
  const chatContent = document.getElementById('chat-content');
  const message = userInput.value.trim();

  if (message !== '') {
      // Display user message
      const userMessage = document.createElement('div');
      userMessage.classList.add('chat-message', 'user-message');
      userMessage.textContent = message;
      chatContent.appendChild(userMessage);

      // Scroll to the bottom of the chat window
      chatContent.scrollTop = chatContent.scrollHeight;

      // Simulate bot response after a short delay
      setTimeout(() => {
          botResponse(message);
      }, 500);

      // Clear the input field
      userInput.value = '';
  }
}

// Simulate Bot Response
function botResponse(message) {
  const chatContent = document.getElementById('chat-content');
  const botMessage = document.createElement('div');
  botMessage.classList.add('chat-message', 'bot-message');

  if (message.toLowerCase().includes('hello')) {
      botMessage.textContent = "Hello! How can I assist you with badminton player information?";
  } else if (message.toLowerCase().includes('player')) {
      botMessage.textContent = "Please provide the player's name to get more details.";
  } else if (message.toLowerCase().includes('thank you')) {
      botMessage.textContent = "You're welcome! Feel free to ask more questions.";
  } else {
      botMessage.textContent = "I'm sorry, I didn't understand that. Try asking about a player's profile!";
  }

  // Append bot message and scroll to the bottom
  chatContent.appendChild(botMessage);
  chatContent.scrollTop = chatContent.scrollHeight;
}
