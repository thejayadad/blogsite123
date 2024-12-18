// LogoSelector.tsx
'use client';

import React, { useState } from 'react';
import { Logos } from './data';

interface LogoSelectorProps {
  onSelect: (logoId: string) => void;
}

const LogoSelector: React.FC<LogoSelectorProps> = ({ onSelect }) => {
  const [selectedLogo, setSelectedLogo] = useState<string | null>(null);

  const handleLogoClick = (logoId: string) => {
    setSelectedLogo(logoId);
    onSelect(logoId);
  };

  return (
    <div className="flex gap-4 justify-center mt-4">
      {Logos.map(({ id, Icon, label }) => (
        <button
          key={id}
          onClick={() => handleLogoClick(id)}
          className={`p-3 border rounded-md ${
            selectedLogo === id
              ? 'bg-neutral-500 text-white'
              : 'hover:bg-gray-100'
          } transition duration-200`}
          aria-label={label}
          type="button"
        >
          <Icon className="w-6 h-6" />
        </button>
      ))}
    </div>
  );
};

export default LogoSelector;
