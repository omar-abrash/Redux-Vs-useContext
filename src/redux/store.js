import { configureStore } from "@reduxjs/toolkit";
import { messagesReducers } from "./messagesSlice";

const store = configureStore({ reducer: { messages: messagesReducers } });

export { store };
