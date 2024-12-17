import AsideManager from '@/app/(dashboard)/_components/aside-manager'
import React from 'react'

const Header = () => {
  return (
    <header className='w-full p-4 h-16 border-b'>
      <nav className='flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <AsideManager />
            <p>LOGO</p>
          </div>          
       </nav>
    </header>
  )
}

export default Header