import { createSlice } from "@reduxjs/toolkit";

const initialState = { messages: [] };

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addNewMsg(state, newMsg) {
      state.messages = [newMsg.payload, ...state.messages];
    },
  },
});

const messagesActions = messagesSlice.actions;
const messagesReducers = messagesSlice.reducer;

export { messagesActions, messagesReducers };
