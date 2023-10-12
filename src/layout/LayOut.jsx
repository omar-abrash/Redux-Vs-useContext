// import React from "react";
import ReduxComp from "../components/ReduxComp/ReduxComp";
import ContextComp from "../components/ContextComp/ContextComp";

import { store } from "../redux/store";
import { Provider } from "react-redux";

import { MessagesContextProvider } from "../context/context";

import classes from "./LayOut.module.css";

const LayOut = () => {
  return (
    <div className={classes.main}>
      <Provider store={store}>
        <ReduxComp />
      </Provider>

      <MessagesContextProvider>
        <ContextComp />
      </MessagesContextProvider>
    </div>
  );
};

export default LayOut;
