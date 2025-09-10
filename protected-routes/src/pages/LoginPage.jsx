// src/pages/LoginPage.jsx
import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { LogIn } from 'lucide-react'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await login(email, password) // autenticação JWT
      navigate('/dashboard') // redireciona após login
    } catch (err) {
      console.error('Falha no login', err)
      alert('Credenciais inválidas. Tente novamente!')
    }
  }

  return (
    <div className='flex justify-center  items-center  w-screen h-screen'>
      <div className=' flex flex-col p-8 w-100 rounded-xl shadow-md items-center'>
        <h1 className='text-2xl font-bold mb-4'>Bem-vindo</h1>
        <p className='mb-4 text-zinc-500 '>Faça login para continuar</p>
        <div className='flex flex-col '>
          <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
            <label htmlFor='email'>Email</label>

            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
            />
            <label htmlFor='password'>Senha</label>
            <input
              type='password'
              placeholder='Senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
            />
            <button
              type='submit'
              className='flex items-center justify-center px-4 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-600 gap-2'
            >
              <LogIn /> Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
