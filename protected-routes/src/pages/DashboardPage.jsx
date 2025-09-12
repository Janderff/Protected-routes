// src/pages/DashboardPage.jsx

import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Header } from '../components/header'

const DashboardPage = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className='w-full h-screen '>
      <Header />
      <div>Ola Dashboard</div>
    </div>
  )
}

export default DashboardPage
