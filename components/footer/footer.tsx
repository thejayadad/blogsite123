import React from 'react'
import Logo from '../logo'

const Footer = () => {
  return (
    <div className='flex mt-auto items-center w-full p-6 z-50  h-16 border-t'>
      <div className='flex items-center justify-between space-x-6 mx-auto max-w-screen-xl'>
        <Logo />
        <p>@CopyRight thejayadad</p>
      </div>
    </div>
  )
}

export default Footer