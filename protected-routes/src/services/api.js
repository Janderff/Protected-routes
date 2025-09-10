import axios from 'axios'
import { getToken } from './authService'

const api = axios.create({
  baseURL: 'http://localhost:3000',
})

// Interceptor de requisições: adiciona o token JWT ao header Authorization, se existir
api.interceptors.request.use((config) => {
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api
