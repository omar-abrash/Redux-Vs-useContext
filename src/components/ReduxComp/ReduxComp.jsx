import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { messagesActions } from "../../redux/messagesSlice";

import classes from "./ReduxComp.module.css";

const ReduxComp = () => {
  const { messages } = useSelector((state) => state.messages);
  const dispatch = useDispatch();
  //
  useEffect(() => {
    setInterval(() => {
      dispatch(
        messagesActions.addNewMsg(`${Math.random().toFixed(2)} new msg`)
      );
    }, 200);
  }, [dispatch]);
  //
  return (
    <div className={classes.main}>
      <h1>Redux</h1>
      <ul>
        {messages.map((msg) => (
          <li key={Math.random()}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReduxComp;
