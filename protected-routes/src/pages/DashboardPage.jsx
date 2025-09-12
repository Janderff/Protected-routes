// src/pages/DashboardPage.jsx

import React from 'react'

import { Header } from '../components/header'

import { CardHello } from '../components/cardHello'
import { CardInfoUser } from '../components/cardInfoUser'

const DashboardPage = () => {
  return (
    <div className='w-full h-screen '>
      <Header />
      <div className='flex flex-col w-full h-full'>
        <CardHello />
        <CardInfoUser />
      </div>
    </div>
  )
}

export default DashboardPage
