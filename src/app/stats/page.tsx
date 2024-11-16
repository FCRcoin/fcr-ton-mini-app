// components/custom/StatsDisplay.tsx
'use client';

import CoinEarnings from '@/components/custom/earnings';
import RankingAccordion from '@/components/custom/user-rank';
import { useCryptoEnergy } from '@/context/provider';
import React from 'react';

const StatsDisplay: React.FC = () => {
  const { totalTouches, totalPlayers, dailyUsers, onlinePlayers } =
    useCryptoEnergy();

  return (
    <section>
      <div className="flex flex-col items-center gap-1 border-b-2 border-gray w-[90%] pb-4">
        <h2 className="text-white text-lg">Total Share Balance:</h2>
        <CoinEarnings />
        <RankingAccordion />
      </div>

      <div className="stats-container flex flex-col items-center gap-4 mt-6">
        <div className="stat-item flex justify-between w-full max-w-md bg-gray-800 p-4 rounded-lg">
          <span className="text-white">Total Touches:</span>
          <span className="text-supernova-500">
            {totalTouches.toLocaleString()}
          </span>
        </div>
        <div className="stat-item flex justify-between w-full max-w-md bg-gray-800 p-4 rounded-lg">
          <span className="text-white">Total Players:</span>
          <span className="text-supernova-500">
            {totalPlayers.toLocaleString()}
          </span>
        </div>
        <div className="stat-item flex justify-between w-full max-w-md bg-gray-800 p-4 rounded-lg">
          <span className="text-white">Daily Users:</span>
          <span className="text-supernova-500">
            {dailyUsers.toLocaleString()}
          </span>
        </div>
        <div className="stat-item flex justify-between w-full max-w-md bg-gray-800 p-4 rounded-lg">
          <span className="text-white">Online Players:</span>
          <span className="text-supernova-500">
            {onlinePlayers.toLocaleString()}
          </span>
        </div>
      </div>
    </section>
  );
};

export default StatsDisplay;
