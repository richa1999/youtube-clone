import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_LIMIT } from "../utils/constants";


const chatSlice = createSlice({
    name: "chat",
    initialState: {
        message: [],
    },
    reducers: {
        addMessage: (state, action) => {
            state.message.splice(LIVE_CHAT_LIMIT, 1);
            state.message.unshift(action.payload);
        }
    }
});


export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;