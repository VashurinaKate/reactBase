import firebase from "firebase";
import { useState } from "react";
import { useInput } from "../../utils/useInput";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectProfileError } from "../../store/profile/selectors";
import { signUpWithFB, loginWithFB } from "../../store/profile/actions";

export const Login = ({ isSignUp }) => {
    // const [error, setError] = useState('')

    const dispatch = useDispatch();
    const error = useSelector(selectProfileError);

    const {
        value: email,
        handleChange: handleChangeEmail,
        reset: resetEmail
    } = useInput("")
    
    const {
        value: password,
        handleChange: handleChangePassword,
        reset: resetPassword
    } = useInput("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!email || !password) {
            return
        }

        // try {
            if (isSignUp) {
                // await firebase.auth().createUserWithEmailAndPassword(email, password)
                dispatch(signUpWithFB(email, password))
            } else {
                // await firebase.auth().signInWithEmailAndPassword(email, password)
                dispatch(loginWithFB(email, password))
            }

            resetEmail()
            resetPassword() 
        // catch (error) {
            // console.log(error)
            // setError(error.message)
        // }
    }
    return (
        <>
        <h2>{isSignUp ? "SIGN UP" : "LOGIN"}</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" value={email} onChange={handleChangeEmail}/>
            <input type="password" value={password} onChange={handleChangePassword}/>
            <input type="submit"/>
            {error && <span>{error}</span>}
        </form>
        <Link to={`${isSignUp ? "/login" : "/signup"}`}>
            {!isSignUp ? "SIGN UP" : "LOGIN"}
        </Link>
        </>
    )
}
