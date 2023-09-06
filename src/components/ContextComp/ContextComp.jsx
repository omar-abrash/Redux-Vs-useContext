// import React from "react";
import { useContext, useEffect, useCallback } from "react";
import { messagesContext } from "../../context/context";

import classes from "./ContextComp.module.css";

const ContextComp = () => {
  const msgCtx = useContext(messagesContext);
  const messages = msgCtx.messages;
  //   console.log(messages);
  const addNewMsg = useCallback(() => {
    msgCtx.addNewMsg({
      message: `${Math.random().toFixed(2)} new msg`,
      id: Math.random(),
    });
  }, []); // to fix this function
  //
  useEffect(() => {
    const interval = setInterval(() => {
      addNewMsg();
    }, 20);

    return () => clearInterval(interval);
  }, [addNewMsg]);
  //
  return (
    <div className={classes.main}>
      <h1>Context</h1>
      <ul>
        {messages.map((msg) => (
          <li key={msg.id}>{msg.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default ContextComp;
