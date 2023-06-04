import React, { useState } from "react";
import ChatBody from "./components/chatBody";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    const input = event.target.elements.message;
    const message = input.value;
    if (message.trim() !== "") {
      setMessages([...messages, message]);
      input.value = "";
    }
  };

  return (
    <>
      <ChatBody data={messages} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            marginBottom: "1rem",
            display: "flex",
            gap: "10px",
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%",
            padding: "10px",
            
          }}
        >
            
          <form onSubmit={handleMessageSubmit} style={{ width: "90vw" }}>
            <input
              type="text"
              name="message"
              placeholder="Type here"
              className="input input-bordered"
              style={{ width: "90vw" }}
            />
          </form>
          <button type="submit" className="btn btn-primary">
              Send
            </button>
        </div>
      </div>
    </>
  );
};

export default Chat;
