import {
    PROFILE_SET_NAME,
    PROFILE_DROP_NAME,
    SET_AUTH,
    SET_ERROR
} from './actionTypes'

const initialState = {
    name: 'No name',
    lastName: 'No Last Name',
    bio: 'No BIO',
    authorized: false,
    error: null
}
export const profileReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case PROFILE_SET_NAME: {
            return {
                ...state,
                name: payload.name,
                lastName: payload.lastName,
                bio: payload.bio
            }
        }
        case PROFILE_DROP_NAME: {
            return {
                ...state,
                name: "",
                lastName: "",
                bio: ""
            }
        }
        case SET_AUTH: {
            return {
                ...state,
                authorized: payload,
                error: null
            }
        }
        case SET_ERROR: {
            return {
                ...state,
                error: payload
            }
        }
        default:
            return state
    }
}
