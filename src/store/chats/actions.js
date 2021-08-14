import { AUTHORS } from "../../constants";
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

let timeout;

export const sendMessageWithReply = (chatId, message) => (dispatch) => {
    dispatch(sendMessage(chatId, message));

    if (timeout) {
        clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
        dispatch(sendMessage(chatId, { author: AUTHORS.robot, text: 'Hello!' }))
    }, 1000)
}
