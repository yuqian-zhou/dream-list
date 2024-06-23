import React from "react";
import { useMessage } from "../context/MessageContext";
import { CSSTransition } from "react-transition-group";


const Message = () => {
  const { isMessageOpen, MessageContent } = useMessage();

  return (
    <CSSTransition
      in={isMessageOpen}
      timeout={1500}
      classNames="message"
      unmountOnExit
    >
      <div className={`message message_${MessageContent?.type}`}>
        {MessageContent?.message}
      </div>
    </CSSTransition>
  );
};

export default Message;
