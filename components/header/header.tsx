import AsideManager from '@/app/(dashboard)/_components/aside-manager'
import React from 'react'
import Logo from '../logo'
import { auth } from '@/auth';

interface HeaderProps {
  userEmail: string;
  websites: { title: string; webaddress: string }[];
  recentWebsite: { title: string; webaddress: string } | null;
}


const Header: React.FC<HeaderProps> = async ({ websites, recentWebsite, userEmail }) => {
  const session = await auth(); // Assuming auth doesn't need to be awaited here for session retrieval
  return (
    <header className='w-full p-4 h-16 border-b border-neutral-300'>
      <nav className='flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <AsideManager
            userEmail={userEmail}
            websites={websites} 
            />
            <Logo />
          </div>          
       </nav>
    </header>
  )
}

export default Header