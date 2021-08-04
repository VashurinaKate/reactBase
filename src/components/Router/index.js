import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { Profile } from '../Profile';
import { NoChat } from '../NoChat'
import Home from '../Home'
import { useState } from 'react';
import { AUTHORS } from '../../constants';

const initialChats = {
    chat1: {
        name: "Chat 1",
        id: "chat1",
        messages: [{ 
            message: "message from chat 1",
            author: AUTHORS.human,
            id: "chat1-1"
        }]
    },
    chat2: {
        name: "Chat 2",
        id: "chat2",
        messages: [{
            message: "message from chat 2",
            author: AUTHORS.human,
            id: "chat2-1"
        }]
    }
}

export const Router = () => {
    const [chats, setChats] = useState(initialChats)

    return (
        <BrowserRouter>
            <div style={{padding: '10px'}}>
                <p><Link to="/home">Home</Link></p>
                <p><Link to="/profile">Profile</Link></p>
            </div>

            <Switch>
                <Route path="/" exact>
                    <h2>Welcome</h2>
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/home/:chatId?">
                    <Home chats={chats} setChats={setChats}/>
                </Route>
                <Route path="/nochat">
                    <NoChat chats={chats}/>
                </Route>
                <Route path="*">
                    <h2>404</h2>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}