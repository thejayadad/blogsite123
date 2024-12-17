import React from 'react'
import {FiArrowRightCircle} from "react-icons/fi"
const Heading = () => {
  return (
    <div className='max-w-screen-xl space-y-4'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>Share your thoughts, ideas, & network <span className='underline'>
        The WritingHub
        </span>

        </h1>
        <h3 className='text-base sm:text-lg md:text-xl font-medium'>
            The Writinghub is the safe space<br/>
              to write, share, and network with people.
        </h3>
        <div  className='flex items-center justify-center w-full'>
        <button className='flex items-center'>
          Enter
          <FiArrowRightCircle className='h-4 w-w ml-2' />
        </button>
        </div>
    </div>
  )
}

export default Heading