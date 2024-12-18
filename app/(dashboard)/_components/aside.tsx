'use client'
import React, { useState } from 'react'
import {FiPlusCircle} from "react-icons/fi"
import WebsiteModal from './website-modal';
import Link from 'next/link';


interface Website {
  id: string;
  title: string;
  webaddress: string;
}


interface AsideProps {
    isVisible: boolean;
  }

  interface AsideProps {
    isVisible: boolean;
    websites: Website[];
    recentWebsite: Website | null;
    onWebsiteClick: (id: string) => void;
    userEmail: string; // Add userEmail to the props
  }
  const Aside: React.FC<AsideProps> = ({ isVisible, websites = [], recentWebsite, onWebsiteClick, userEmail  }) => {
    const [selectedWebsiteId, setSelectedWebsiteId] = useState<string | null>(null); // State for selected website ID

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedId = event.target.value;
      setSelectedWebsiteId(selectedId); // Update the selected website ID
      if (selectedId) {
        onWebsiteClick(selectedId); // Trigger the redirection
      }
    };
    return (
    <div
    className={`fixed top-16 left-0 h-full w-64 border-r bg-white z-[9999999] border-neutral-300 transition-transform duration-300 transform ${
      isVisible ? 'translate-x-0' : '-translate-x-full'
    }`}
  >
      <div className="p-4 flex flex-col space-y-8">
          {
            websites.length > 0 ? (
              <>
                <div>Websites</div>
                <select
              onChange={handleSelectChange}
              className="w-full border rounded-lg border-gray-400 p-2"
              defaultValue={recentWebsite ? recentWebsite.id : ''}
            >
              {websites.map((website) => (
                <option
                key={website.id} value={website.id}>
                  {website.title}
                </option>
              ))}
            </select>
              </>
            ) : (
                <>
                <p className='text-center'>Looks like you haven't created any websites yet. Create one today!</p>

                </>
            )
          }    
          {/* <button className="mt-4 p-2 flex items-center justify-center  bg-neutral-500 text-white hover:bg-neutral-200">
            <span>
              <FiPlusCircle className='h-5 w-5 mr-3' />
            </span>
            New Website
          </button> */}
          <WebsiteModal
            userEmail={userEmail}
          />
               <div className='pt-6'>
          {selectedWebsiteId && ( // Only show the link if a website is selected
            <Link
            className='btn btn-sm w-full'
            href={`/dashboard/${selectedWebsiteId}/new`}>
              New Post
            </Link>
          )}
        </div>
    </div>
    </div>
  )
}

export default Aside