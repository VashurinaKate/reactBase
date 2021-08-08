import { AUTHORS } from "../../constants"
import { ADD_CHAT, REMOVE_CHAT, SEND_MESSAGE } from "./actionTypes"

const initialState = {
    chat1: {
        name: "Chat 1",
        id: "chat1",
        messages: [{ 
            author: AUTHORS.human,
            message: "message from chat 1",
            id: "chat1-1"
        }]
    },
    chat2: {
        name: "Chat 2",
        id: "chat2",
        messages: [{
            author: AUTHORS.human,
            message: "message from chat 2",
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
                    messsages: []
                }
            }
        }
        case SEND_MESSAGE: {
            console.log(payload.message)
            console.log([...state[payload.chatId].messages, payload.message])

            return {
                ...state,
                [payload.chatId]: {
                    ...state[payload.chatId],
                    messsages: [...state[payload.chatId].messages, payload.message]
                }
            }
        }
        case REMOVE_CHAT: {
            const removeItem = Object.values(state).find(item => item.id === payload.chatId);
            const index = Object.values(state).indexOf(removeItem)
            Object.values(state).splice(index, 1)
            return {
                state
            }
        }
        default: return state
    }
}
