import { AUTHORS } from "../../constants"
import { ADD_CHAT, REMOVE_CHAT, SEND_MESSAGE, SET_CHATS, SET_ERROR } from "./actionTypes"

const initialState = {
    chats: [],
    error: null
}

export const chatsReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        // case ADD_CHAT: {
        //     return {
        //         ...state,
        //         [payload.chatId]: {
        //             name: payload.name,
        //             id: payload.chatId,
        //             messages: []
        //         }
        //     }
        // }
        // case SEND_MESSAGE: {
        //     return {
        //         ...state,
        //         [payload.chatId]: {
        //             ...state[payload.chatId],
        //             messages: [...state[payload.chatId].messages, payload.message]
        //         }
        //     }
        // }
        // case REMOVE_CHAT: {
        //     const newState = {...state};
        //     delete newState[payload.chatId]
        //     return newState
        // }
        case SET_CHATS: {
            return {
                ...state,
                chats: payload
            }
        }
        case SET_ERROR: {
            return {
                ...state,
                error: payload
            }
        }
        default: return state
    }
}
