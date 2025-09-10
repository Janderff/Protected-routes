// src/routes/AppRoutes.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import DashboardPage from '../pages/DashboardPage'
import PrivateRoute from './PrivateRoute'

const AppRoutes = () => {
  return (
    <Routes>
      {/* Rota pública */}
      <Route path='/login' element={<LoginPage />} />
      {/* Wrapper de rotas privadas */}
      <Route path='/' element={<PrivateRoute />}>
        {/* Qualquer rota declarada aqui dentro só será acessível se o usuário estiver autenticado */}
        <Route path='/dashboard' element={<DashboardPage />} />
        {/* Adicione mais rotas privadas aqui, se precisar */}
      </Route>
      {/* 404 */}
      <Route path='*' element={<div>Página não encontrada!</div>} />
    </Routes>
  )
}

export default AppRoutes
