import { createSlice } from "@reduxjs/toolkit";

const initialState = { messages: [] };

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addNewMsg(state, newMsg) {
      state.messages = [...state.messages, newMsg.payload];
    },
  },
});

const messagesActions = messagesSlice.actions;
const messagesReducers = messagesSlice.reducer;

export { messagesActions, messagesReducers };
