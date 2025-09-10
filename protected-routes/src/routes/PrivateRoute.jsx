// src/routes/PrivateRoute.jsx

import { useAuth } from '../contexts/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  const { isAuthenticated, loading } = useAuth()

  if (loading) {
    // Podemos retornar um spinner ou texto de carregando enquanto verifica o auth
    return <div>Carregando…</div>
  }

  // Se estiver autenticado, renderiza o componente filho (Outlet);
  // Caso contrário, redireciona para login.
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' replace />
}

export default PrivateRoute
