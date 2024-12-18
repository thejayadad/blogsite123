import React from 'react';
import { FiMenu } from "react-icons/fi";

interface AsideToggleProps {
  onToggle: () => void;
}

const AsideToggle: React.FC<AsideToggleProps> = ({ onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="p-2 border rounded-full bg-neutral-500 text-white 
                 transition-transform duration-200 ease-out 
                 active:scale-90 hover:scale-105"
    >
      <FiMenu className="h-5 w-5" />
    </button>
  );
};

export default AsideToggle;
