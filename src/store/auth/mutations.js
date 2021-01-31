
export const auth_success = (state , {token, user}) => {
    state.token = token
    state.user = user
}


export const logout = (state, token) => {
    state.token = null
    state.user = null
}