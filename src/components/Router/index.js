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
import { Logout } from '../Logout/'
import { useDispatch } from 'react-redux';
import { connectProfileToFB } from '../../store/profile/actions';

export const Router = () => {
    // const [isAuthed, setIsAuthed] = useState(false);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(connectProfileToFB())
    }, [])
    // useEffect(() => {
    //   firebase.auth().onAuthStateChanged((user) => {
    //     if (user) {
    //         setIsAuthed(true);
    //     } else {
    //         setIsAuthed(false);
    //     }
    //   });
    // }, []);

    return (
        <BrowserRouter>
            <div style={{padding: '10px'}}>
                <p><Link to="/home">Home</Link></p>
                <p><Link to="/profile">Profile</Link></p>
                <p><Link to="/news">News</Link></p>
            </div>

            <Logout/>
            <Switch>
                <PublicRoute path="/login" exact>
                    <Login/>
                </PublicRoute>
                <PublicRoute path="/signup" exact>
                    <Login isSignUp/>
                </PublicRoute>
                <Route path="/" exact>
                    <h2>Welcome</h2>
                </Route>
                <PrivateRoute path="/profile">
                    <Profile />
                </PrivateRoute>
                <PrivateRoute path="/home/:chatId?">
                    <Home/>
                </PrivateRoute>
                <PublicRoute path="/news">
                    <News/>
                </PublicRoute>
                <PrivateRoute path="/nochat">
                    <NoChat />
                </PrivateRoute>
                <Route path="*">
                    <h2>404</h2>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
