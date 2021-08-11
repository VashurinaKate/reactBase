import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { Profile } from '../Profile';
import { NoChat } from '../NoChat'
import Home from '../Home'

export const Router = () => {
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
                    <Home/>

                </Route>
                <Route path="/nochat">
                    <NoChat />
                </Route>
                <Route path="*">
                    <h2>404</h2>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}