'use client'
import React, { useState } from 'react';
import AsideToggle from './aside-toggle'
import { useRouter } from 'next/navigation'; // Import useRouter
import Aside from './aside';


interface Website {
  id: string; // Include id for redirection
  title: string;
  webaddress: string;
}

interface AsideManagerProps {
  websites: Website[];
  recentWebsite: Website | null;
  userEmail: string
}

const AsideManager: React.FC<AsideManagerProps> = ({ websites, recentWebsite, userEmail }) => {
  const [isAsideVisible, setAsideVisible] = useState<boolean>(false);
  const router = useRouter(); // Initialize the router

    const toggleAside = () => {
        setAsideVisible((prev) => !prev);
      };
      const handleWebsiteClick = (id: string) => {
        // Redirect to the specific website page
        router.push(`/dashboard/${id}`);
      };
    

  return (
    <div className="flex">
      <AsideToggle onToggle={toggleAside} />
        <Aside
          isVisible={isAsideVisible}
          websites={websites}
          userEmail={userEmail}
          recentWebsite={recentWebsite}
          onWebsiteClick={handleWebsiteClick} // Pass the click handler

        />
    </div>
  )
}

export default AsideManager