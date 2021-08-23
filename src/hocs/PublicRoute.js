import { Redirect, Route } from "react-router-dom"

export const PublicRoute = ({ authed, ...rest }) => {
    return !authed ? <Route {...rest} /> : <Redirect to="/home"/>
}
