import React, { useEffect, useState } from 'react';
import firebase from "firebase";
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { Profile } from '../Profile';
import { NoChat } from '../NoChat'
import { News } from '../News'
import Home from '../Home'
import { PrivateRoute } from '../../hocs/PrivateRoute';
import { PublicRoute } from '../../hocs/PublicRoute';
import { Login } from '../Login';

export const Router = () => {
    const [isAuthed, setIsAuthed] = useState(false);

    useEffect(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            setIsAuthed(true);
        } else {
            setIsAuthed(false);
        }
      });
    }, []);

    return (
        <BrowserRouter>
            <div style={{padding: '10px'}}>
                <p><Link to="/home">Home</Link></p>
                <p><Link to="/profile">Profile</Link></p>
                <p><Link to="/news">News</Link></p>
            </div>

            <Switch>
                <PublicRoute authed={isAuthed} path="/login" exact>
                    <Login/>
                </PublicRoute>
                <PublicRoute authed={isAuthed} path="/signup" exact>
                    <Login isSignUp/>
                </PublicRoute>
                <Route path="/" exact>
                    <h2>Welcome</h2>
                </Route>
                <PrivateRoute authed={isAuthed} path="/profile">
                    <Profile />
                </PrivateRoute>
                <PrivateRoute authed={isAuthed} path="/home/:chatId?">
                    <Home/>
                </PrivateRoute>
                <PublicRoute authed={isAuthed} path="/news">
                    <News/>
                </PublicRoute>
                <PrivateRoute authed={isAuthed} path="/nochat">
                    <NoChat />
                </PrivateRoute>
                <Route path="*">
                    <h2>404</h2>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
