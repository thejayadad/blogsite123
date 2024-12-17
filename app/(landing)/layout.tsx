import Header from '@/components/header/header';
import React from 'react'

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className='h-full'>
      <div className="grid grid-rows-12 h-full">
        <div className='row-span-1'>
          <Header />
        </div>
        <main  className=" row-span-10 overflow-y-auto">
      {children}
      </main>
      <div className='row-span-1'>
        Footer        
      </div>
      </div>
     </div>
  )
}

export default layout