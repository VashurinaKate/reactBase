import { SET_NAME } from "./actionTypes"

export const setName = (name, lastName) => ({
    type: SET_NAME,
    payload: {
        name,
        lastName
    }
})
