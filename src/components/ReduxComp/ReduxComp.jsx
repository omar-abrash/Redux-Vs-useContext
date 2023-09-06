import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { messagesActions } from "../../redux/messagesSlice";

import classes from "./ReduxComp.module.css";

const ReduxComp = () => {
  const { messages } = useSelector((state) => state.messages);
  const dispatch = useDispatch();
  //
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        messagesActions.addNewMsg({
          message: `${Math.random().toFixed(2)} new msg`,
          id: Math.random(),
        })
      );
    }, 20);
    return () => clearInterval(interval);
  }, [dispatch]);
  //
  return (
    <div className={classes.main}>
      <h1>Redux</h1>
      <ul>
        {messages.map((msg) => (
          <li key={msg.id}>{msg.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReduxComp;
