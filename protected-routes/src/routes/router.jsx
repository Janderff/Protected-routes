// src/routes/router.jsx (opcional)
import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import DashboardPage from '../pages/DashboardPage'
import { getToken } from '../services/authService'

// Protege a rota usando loader
async function requireAuth() {
  const token = getToken()
  if (!token) throw redirect('/login')
  return null
}

const router = createBrowserRouter([
  { path: '/login', element: <LoginPage /> },
  {
    path: '/',
    children: [
      { path: '/dashboard', element: <DashboardPage />, loader: requireAuth },
    ],
  },
])

export const AppRouter = () => <RouterProvider router={router} />
