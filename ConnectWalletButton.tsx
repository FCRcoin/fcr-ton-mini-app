import React from 'react';
import { useWallet } from './useWallet'; // adjust import path as needed

const ConnectWalletButton: React.FC = () => {
  const { connect, disconnect, isConnected, address } = useWallet();

  const handleClick = () => {
    if (isConnected) {
      disconnect();
    } else {
      connect();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors"
    >
      {isConnected ? (
        <span>
          {address?.slice(0, 6)}...{address?.slice(-4)}
        </span>
      ) : (
        'Connect Wallet'
      )}
    </button>
  );
};

export default ConnectWalletButton;