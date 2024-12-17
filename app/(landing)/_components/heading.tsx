import React from 'react'
import {FiArrowRightCircle} from "react-icons/fi"
import AuthModal from './auth-modal'
const Heading = () => {
  return (
    <div className='max-w-screen-xl flex flex-col justify-center h-full items-center w-full mx-auto space-y-4'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>Share your thoughts, ideas, & network <span className='underline'>
        The WritingHub
        </span>

        </h1>
        <h3 className='text-base sm:text-lg md:text-xl font-medium'>
            The Writinghub is the safe space<br/>
              to write, share, and network with people.
        </h3>
        <div  className='flex items-center justify-center w-full'>
        <div className='flex items-center'>
          <AuthModal
          title='Enter'
          style='neutral'
          />
        </div>
        </div>
    </div>
  )
}

export default Heading