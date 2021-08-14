import { AUTHORS } from "../../constants"

export const selectName = (state) => state.profile.name || AUTHORS.human
export const selectLastName = (state) => state.profile.lastName
export const selectAbbreviatedName = (state) => (state.profile.name.charAt(0) + state.profile.lastName.charAt(0)).toUpperCase()
export const selectBio = (state) => state.profile.bio
