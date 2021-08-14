import { SET_NAME } from "./actionTypes"

export const setName = (name, lastName, bio) => ({
    type: SET_NAME,
    payload: {
        name,
        lastName,
        bio
    }
})
