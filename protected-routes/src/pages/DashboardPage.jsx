// src/pages/DashboardPage.jsx

import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const DashboardPage = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bem-vindo(a), {user?.name || 'dev'}!</p>
      <button onClick={handleLogout}>Sair</button>
    </div>
  )
}

export default DashboardPage
