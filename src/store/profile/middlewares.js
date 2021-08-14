// import { AUTHORS } from "../../constants"
// import { sendMessage } from "../chats/actions"
// import { SEND_MESSAGE } from "../chats/actionTypes"

// export const middleware = store => next => action => {
//     if (action.type === SEND_MESSAGE && action.payload.message.author !== AUTHORS.robot) {
//         setTimeout(() => {
//             store.dispatch(sendMessage(action.payload.chatId, { text: 'Hello!', author: AUTHORS.robot }))
//         }, 1000)
//     }
//     return next(action)
// }
