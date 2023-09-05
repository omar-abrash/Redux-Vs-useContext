import React from "react";
import { useContext, useEffect, useCallback } from "react";
import { messagesContext } from "../../context/context";

import classes from "./ContextComp.module.css";

const ContextComp = () => {
  const msgCtx = useContext(messagesContext);
  const messages = msgCtx.messages;
  //   console.log(messages);
  const addNewMsg = useCallback(() => {
    msgCtx.addNewMsg(`${Math.random().toFixed(2)} new msg`);
  }, []); // to fix this function
  //
  useEffect(() => {
    setInterval(() => {
      addNewMsg();
    }, 500);
  }, [addNewMsg]);
  //
  return (
    <div className={classes.main}>
      <h1>Context</h1>
      <ul>
        {messages.map((msg) => (
          <li key={Math.random()}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default ContextComp;
