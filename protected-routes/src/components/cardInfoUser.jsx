import { useAuth } from '../contexts/AuthContext'
export function CardInfoUser({ name }) {
  const { user } = useAuth()
  return (
    <div className=' flexw-full m-9 p-3 h-60 bg-zinc-100 rounded-xl border border-zinc-200'>
      <div className='flex flex-col gap-4 pl-4'>
        <p className='text-2xl font-semibold'>Informações do usuário</p>
        <div className='flex flex-col'>
          <label htmlFor=''>Nome</label>
          <label htmlFor=''>{user?.name || 'dev'}</label>
        </div>
        <div className='flex flex-col'>
          <label htmlFor=''>Email</label>
          <label htmlFor=''>janderffigueiredo@gmail.com</label>
        </div>
        <div className='flex flex-col'>
          <label>ID</label>
          <label htmlFor=''>1</label>
        </div>
      </div>
    </div>
  )
}
