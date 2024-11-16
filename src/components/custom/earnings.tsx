// components/CoinEarnings.tsx

'use client';

import React from 'react';
import Image from 'next/image';
import { useCryptoEnergy } from '@/app/context/provider';

const CoinEarnings: React.FC = () => {
  const { userEarnings } = useCryptoEnergy();

  return (
    <div className="flex gap-1 items-center justify-center">
      <Image src="/assets/coin-sm.svg" width={70} height={70} alt="coin" />
      <p className="text-white text-5xl font-medium">{userEarnings}</p>
    </div>
  );
};

export default CoinEarnings;
