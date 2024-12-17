'use client'
import React from 'react'

interface AsideProps {
    isVisible: boolean;
  }

  const Aside: React.FC<AsideProps> = ({ isVisible }) => {
    return (
    <div
    className={`fixed top-16 left-0 h-full w-64 border-r transition-transform duration-300 transform ${
      isVisible ? 'translate-x-0' : '-translate-x-full'
    }`}
  >
    Aside
    </div>
  )
}

export default Aside