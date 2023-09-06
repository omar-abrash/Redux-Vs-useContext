import { createContext, useState } from "react";

const messagesContext = createContext({
  messages: [],
  addNewMsg: (newMsg) => {},
});

const MessagesContextProvider = (props) => {
  const [messages, setMessages] = useState([]);
  const addNewMsg = (newMsg) => {
    setMessages((prevState) => [newMsg, ...prevState]);
  };
  //
  const values = {
    messages: messages,
    addNewMsg: addNewMsg,
  };
  //
  return (
    <messagesContext.Provider value={values}>
      {props.children}
    </messagesContext.Provider>
  );
};

export { messagesContext, MessagesContextProvider };
