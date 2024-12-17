import React from 'react'
import Sidebar from './_components/sidebar';
import Header from '@/components/header/header';

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className='h-full'>
      {/* <Sidebar />
       <main className='flex-1 h-full overflow-y-auto'>
       {children}
      </main> */}
      <Header />
      <div className='flex'>
        <div className="flex-grow ml-64">
          {children}
        </div>
      </div>
    </div>
  ) 
}

export default layout