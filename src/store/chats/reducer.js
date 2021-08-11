import { AUTHORS } from "../../constants"
import { ADD_CHAT, REMOVE_CHAT, SEND_MESSAGE } from "./actionTypes"

const initialState = {
    chat1: {
        name: "Chat 1",
        id: "chat1",
        messages: [{ 
            author: AUTHORS.human,
            text: "message from chat 1",
            id: "chat1-1"
        }]
    },
    chat2: {
        name: "Chat 2",
        id: "chat2",
        messages: [{
            author: AUTHORS.human,
            text: "message from chat 2",
            id: "chat2-1"
        }]
    }
}

export const chatsReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case ADD_CHAT: {
            return {
                ...state,
                [payload.chatId]: {
                    name: payload.name,
                    id: payload.chatId,
                    messages: []
                }
            }
        }
        case SEND_MESSAGE: {
            return {
                ...state,
                [payload.chatId]: {
                    ...state[payload.chatId],
                    messages: [...state[payload.chatId].messages, payload.message]
                }
            }
        }
        case REMOVE_CHAT: {
            const newState = {...state};
            delete newState[payload]
            console.log(newState)
            return {
                newState
            }
        }
        default: return state
    }
}
