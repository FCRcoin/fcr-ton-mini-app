// components/EnergyIndicator.tsx

'use client';

import React from 'react';
import { Progress } from '../ui/progress';
import Image from 'next/image';
import { useCryptoEnergy } from '@/app/context/provider';

const EnergyIndicator: React.FC = () => {
  const { energy, energyLimit } = useCryptoEnergy();
  const progressValue = (energy / energyLimit) * 100;

  return (
    <div className="text-white">
      <div className="flex flex-row items-center justify-center gap-1 mb-2">
        <Image
          src="/assets/lightning.png"
          width={40}
          height={40}
          alt="lightning"
        />
        <p className="text-2xl">
          {energy}/{energyLimit}
        </p>
      </div>
      <div className="border-2 rounded-sm border-white opacity-90">
        <div className="p-1 bg-white opacity-60">
          <Progress value={progressValue} />
        </div>
      </div>
    </div>
  );
};

export default EnergyIndicator;
