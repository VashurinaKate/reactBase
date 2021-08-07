import { SET_NAME } from './actionTypes'

const initialState = {
    name: 'No name',
    lastName: 'No Last Name'
}
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NAME: {
            return {
                ...state,
                name: action.payload.name,
                lastName: action.payload.lastName
            }
        }
        default:
            return state
    }
}
