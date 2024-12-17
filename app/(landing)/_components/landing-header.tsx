import Logo from '@/components/logo'
import React from 'react'
import AuthModal from './auth-modal'

const LandingHeader = () => {
  return (
    <header className='w-full p-4 h-16 border-b-[1px]'>
      <nav className='flex mx-auto max-w-screen-xl w-full items-center justify-between'>
            <div>
                <Logo />
            </div>
            <div>
                <AuthModal
                title='SignIn'
                />
            </div>
        </nav>
    </header>
  )
}

export default LandingHeader