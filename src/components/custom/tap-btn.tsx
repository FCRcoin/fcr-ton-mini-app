// components/TapButton.tsx

'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils'; // Ensure this path is correct
import { useCryptoEnergy } from '@/app/context/provider';

const TapButton: React.FC = () => {
  const { animate, lastIncrement, handleClick } = useCryptoEnergy();

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Button with Image */}
      <div className="relative">
        <button onClick={handleClick} className="p-4 rounded-full">
          <Image
            src="/assets/coin-tap.png"
            width={200}
            height={200}
            alt="coin tap"
          />
        </button>

        {/* Animated Number */}
        {animate && (
          <span
            className={cn(
              'absolute top-0 left-1/2 transform -translate-x-1/2 text-green-400 font-bold',
              'animate-fadeUp'
            )}
          >
            +{lastIncrement}
          </span>
        )}
      </div>
    </div>
  );
};

export default TapButton;
