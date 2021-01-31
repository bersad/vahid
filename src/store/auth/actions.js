import Api from 'src/api/api'
const api = new Api()

export const login = async ({ commit },data) => {
    let response = await api.Auth.login(data);
    if(response.data.token){
        const token = response.data.token
        const user = response.data.user
        localStorage.setItem('token', token)
        commit('auth_success', {token, user})
    }
}

export const logout = ({ commit }) => {
    localStorage.removeItem('token')
    commit('logout')
}