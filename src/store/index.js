import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { profileReducer } from './profile/reducer';
import { chatsReducer } from "./chats/reducer";
import { middleware } from "./profile/middlewares";

// const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export const store = createStore(
    combineReducers({
        profile: profileReducer,
        chats: chatsReducer
    }),
    // composeEnchancers(applyMiddleware(middleware)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
