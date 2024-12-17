import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={'/'}>
        <p className='text-xl text-gray-900 font-semibold'>Wrigting<span
        className='text-neutral-500'>
        Hub</span></p>
    </Link>
  )
}

export default Logo