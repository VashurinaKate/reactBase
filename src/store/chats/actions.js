import { AUTHORS } from "../../constants";
import { ADD_CHAT, SEND_MESSAGE, REMOVE_CHAT, SET_CHATS, SET_ERROR } from "./actionTypes";
import { db } from "../../services/firebase";

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
// ------------- FIREEBASE STUFF -------------- //

const setChats = (chats) => ({
    type: SET_CHATS,
    payload: chats,
  });
  
  const setError = (error) => ({
    type: SET_ERROR,
    payload: error,
  });
  
  export const connectChatsToFB = () => (dispatch) => {
    try {
      db.ref("chats").off();
      db.ref("chats").on("value", (snapshot) => {
        let newChats = {};
        snapshot.forEach((snap) => {
          const currentChat = snap.val();
          newChats[currentChat.id] = currentChat;
        });
    
        dispatch(setChats(newChats));
      });
    } catch (e) {
      dispatch(setError(e.message));
    }
  };
  
  export const addChatWithFB = (name) => (dispatch) => {
    try {
      const id = `chat-${Date.now()}`;
    
      db.ref("chats").child(id).set({
        name,
        id,
      });
    } catch (e) {
      dispatch(setError(e.message));
    }
  }
  
  export const deleteChatWithFB = (id) => (dispatch) => {
    try {
      db.ref("chats").child(id).remove();
    } catch (e) {
      dispatch(setError(e.message));
    }
  };
