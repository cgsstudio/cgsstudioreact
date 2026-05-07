import { useState } from 'react';
import './ChatBox.css';

function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleChat = () => setIsOpen((current) => !current);

  return (
    <div className="chat-box">
      <button type="button" onClick={toggleChat}>Chat</button>
      {isOpen && (
        <div className="chat-box-content">
          <p>How can we help you?</p>
        </div>
      )}
    </div>
  );
}

export default ChatBox;
