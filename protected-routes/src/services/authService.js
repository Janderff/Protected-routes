export const TOKEN_KEY = 'token'

//vERIFICA SE O USUARIO ESTA LOGADO NO LOCALSTORAGE
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY)

//pega o usuario logado no local localStorage

export const getToken = () => localStorage.getItem(TOKEN_KEY)

//Salva o token (Login)
export const login = (token) => {
  localStorage.setItem(TOKEN_KEY, token)
}

//Logout
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY)
}
