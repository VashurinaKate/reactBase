import { ADD_CHAT, SEND_MESSAGE, REMOVE_CHAT } from "./actionTypes";

export const addChat = (chatId, name) => ({
    type: ADD_CHAT,
    payload: {
        chatId,
        name
    }
})

export const sendMessage = (chatId, message) => ({
    type: SEND_MESSAGE,
    payload: {
        chatId,
        message
    }
})

export const removeChat = (chatId) => ({
    type: REMOVE_CHAT,
    payload: {
        chatId
    }
})
