// src/App.jsx
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import AppRoutes from './routes/AppRoutes'
// Se estiver usando a abordagem Data Router, importe AppRouter em vez de AppRoutes

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
        {/* ou <AppRouter /> se usar o Data Router */}
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
