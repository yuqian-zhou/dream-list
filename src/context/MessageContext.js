// MessageContext.js
import React, { createContext, useState, useContext } from "react";

const MessageContext = createContext();

var timer = null;

export const MessageProvider = ({ children }) => {
  const [MessageContent, setMessageContent] = useState(null);
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  const showMessage = (content) => {
    setMessageContent(content);
    setIsMessageOpen(true);
    clearTimeout(timer);
    timer = setTimeout(() => {
      setIsMessageOpen(false);
      setMessageContent(null);
    }, 1500);
  };
  return (
    <MessageContext.Provider
      value={{ isMessageOpen, MessageContent, showMessage }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export const useMessage = () => useContext(MessageContext);
