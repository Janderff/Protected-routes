import { Shield,LogOut } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }
  return (
    <header className="flex flex-row w-full justify-between my-4 ">
      <div className="flex flex-row mx-8 gap-2 items-center text-xl" >
        <Shield className="text-blue-500" />
        <span>Dashboard</span>
      </div>
      <div className="flex gap-2  mx-8 items-center">
        <span>{user?.name || 'dev'}</span>
        <button className="rounded-md px-5 p-2 flex flex-row bg-zinc-100" onClick={handleLogout}><LogOut/>Sair</button>
      </div>
    </header>
  )
}
