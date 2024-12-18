'use client';

import React, { useActionState, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import ReactDOM from 'react-dom';
import { createWebsite } from '@/lib/actions/website/new-website';
import SubmitBtn from './sub-btn';
import LogoSelector from './logo-selector';

interface NewWebsiteModalProps {
  userEmail: string;
}

const WebsiteModal: React.FC<NewWebsiteModalProps> = ({ userEmail }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLogo, setSelectedLogo] = useState<string>(''); // Controlled state for logo
  const [title, setTitle] = useState<string>(''); // State for website title
  const [webaddress, setWebaddress] = useState<string>(''); // State for web address
  const [state, formAction] = useActionState(createWebsite, null);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Button to open modal */}
      <button
        onClick={openModal}
        className="flex items-center justify-center gap-2 p-2 bg-neutral-500 text-white rounded-md hover:bg-neutral-700 transition duration-200"
      >
        <FiPlus className="h-5 w-5" />
        New Website
      </button>

      {/* Modal Portal */}
      {isOpen &&
        ReactDOM.createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            {/* Modal Dialog Box */}
            <div className="bg-white rounded-lg w-full max-w-md shadow-lg p-6 relative">
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Create New Website
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-600 hover:text-gray-800"
                >
                  X
                </button>
              </div>

              {/* Modal Body */}

              
              <form action={formAction} className="flex flex-col space-y-4">
                <input type="hidden" name="userEmail" value={userEmail} />

                {/* Website Name */}
                <div>
                  <label htmlFor="title" className="block mb-1 font-medium">
                    Website Nam e:
                  </label>
                  <input
                    type="text"
                    placeholder="Website Name"
                    name="title"
                    id="title"
                    className="input input-bordered w-full"
                  />
                </div>

                {/* Website Address */}
                <div>
                  <label htmlFor="webaddress" className="block mb-1 font-medium">
                    Website Address:
                  </label>
                  <input
                    type="text"
                    placeholder="https://example.com"
                    name="webaddress"
                    id="webaddress"
                    className="input input-bordered w-full"
                  />
                </div>

                {/* Logo Selector */}
                <div>
                  <label className="block mb-1 font-medium">Select a Logo:</label>
                  <LogoSelector
                    onSelect={(logoId) => setSelectedLogo(logoId)} // Controlled selection
                  />
                  <input
                    type="hidden"
                    name="logo"
                    value={selectedLogo} // Controlled value
                  />
                </div>

                {/* Form Actions */}
                <div className="flex justify-end gap-2">
                  <button
                    onClick={closeModal}
                    type="button"
                    className="btn btn-sm bg-gray-300 hover:bg-gray-400 text-black"
                  >
                    Cancel
                  </button>
                  <SubmitBtn
                  defaultText='Add Website'
                  pendingText='Loading...'
                  />
                </div>
              </form>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default WebsiteModal;
