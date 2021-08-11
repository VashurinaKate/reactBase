import { addChat } from "../chats/actions"
import { ADD_CHAT } from "../chats/actionTypes"

export const middleware = store => next => action => {
    if (action.type === ADD_CHAT && action.payload.name !== 'generated') {
        setTimeout(() => {
            store.dispatch(addChat(Date.now(), 'generated'))
        }, 1000)
    }
}