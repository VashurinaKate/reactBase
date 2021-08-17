import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from "redux-persist";
import { profileReducer } from './profile/reducer';
import { chatsReducer } from "./chats/reducer";
import storage from "redux-persist/lib/storage";
import { articlesReducer } from "./articles/reducer";

const persistConfig = {
    key: 'KATE-messager',
    storage
}

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    articles: articlesReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export const store = createStore(
    persistedReducer,
    composeEnchancers(applyMiddleware(thunk)),
)

export const persistor = persistStore(store)
