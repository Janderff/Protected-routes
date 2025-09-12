import { Shield, LogOut } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
export function CardHello({ name }) {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className='flex flex-row  m-9 p-3  h-30 bg-zinc-100 rounded-xl  gap-4'>
      <div className='items-center justify-center flex '>
        <Shield className='text-emerald-600 bg-emerald-100 w-16 h-16 m-5  p-3 rounded-xl' />
      </div>
      <div className='flex flex-col justify-center gap-2'>
        <strong className='text-4xl'>Olá, {user?.name || 'dev'}</strong>
        <p className='text-zinc-500 text-xl'>
          Você está logado com sucesso. Esta é uma área protegida por JWT.
        </p>
      </div>
    </div>
  )
}
