import './ChatBox.css';

function ChatBox() {
  // ...existing code...
  return (
    <div className="chat-box">
      <button onClick={toggleChat}>Chat</button>
      {isOpen && (
        <div className="chat-box-content">
          {/* ...existing chat content... */}
        </div>
      )}
    </div>
  );
}

export default ChatBox;