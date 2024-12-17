'use client'
import React, { useState } from 'react';
import AsideToggle from './aside-toggle'
import { useRouter } from 'next/navigation'; // Import useRouter
import Aside from './aside';


const AsideManager = () => {
    const [isAsideVisible, setAsideVisible] = useState<boolean>(false);

    const toggleAside = () => {
        setAsideVisible((prev) => !prev);
      };

  return (
    <div className="flex">
      <AsideToggle onToggle={toggleAside} />
        <Aside
          isVisible={isAsideVisible}

        />
    </div>
  )
}

export default AsideManager