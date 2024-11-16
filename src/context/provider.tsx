'use client';

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

interface AppContextProps {
  energy: number;
  energyLimit: number;
  setEnergy: React.Dispatch<React.SetStateAction<number>>;
  animate: boolean;
  setAnimate: React.Dispatch<React.SetStateAction<boolean>>;
  lastIncrement: number;
  setLastIncrement: React.Dispatch<React.SetStateAction<number>>;
  selectedRank: string | null;
  setSelectedRank: React.Dispatch<React.SetStateAction<string | null>>;
  userEarnings: number;
  setUserEarnings: React.Dispatch<React.SetStateAction<number>>;
  getUserEarnings: () => Promise<number>;
  getRemainingEnergy: () => Promise<{ remainingEnergy: number; limit: number }>;
  consumeEnergy: (amount: number) => boolean;
  handleClick: () => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const useCryptoEnergy = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(
      'useCryptoEnergy must be used within a CryptoEnergyProvider'
    );
  }
  return context;
};

interface CryptoEnergyProviderProps {
  children: ReactNode;
}

export const CryptoEnergyProvider: React.FC<CryptoEnergyProviderProps> = ({
  children,
}) => {
  const [energy, setEnergy] = useState<number>(1000); // Starting with 100 energy units
  const energyLimit = 1000; // Fixed limit
  const [animate, setAnimate] = useState<boolean>(false);
  const [lastIncrement, setLastIncrement] = useState<number>(0);
  const [selectedRank, setSelectedRank] = useState<string | null>(null);
  const [userEarnings, setUserEarnings] = useState<number>(0);

  // Function to get remaining energy
  const getRemainingEnergy = async () => {
    // Replace with actual API call if necessary
    return { remainingEnergy: energy, limit: energyLimit };
  };

  // Function to get user earnings
  const getUserEarnings = async () => {
    // Replace with actual API call if necessary
    return userEarnings;
  };

  // Function to consume energy
  const consumeEnergy = (amount: number): boolean => {
    if (energy >= amount) {
      setEnergy((prev) => prev - amount);
      return true;
    }
    return false;
  };

  // Handle button click
  const handleClick = () => {
    const energyCost = 10; // Define how much energy each click consumes
    const coinsAwarded = 5; // Define how many crypto coins are awarded per click

    if (consumeEnergy(energyCost)) {
      setUserEarnings((prev) => prev + coinsAwarded);
      setLastIncrement(coinsAwarded);
      setAnimate(true);

      // Reset animation after it completes (e.g., 1 second)
      setTimeout(() => {
        setAnimate(false);
      }, 1000);
    } else {
      alert('Not enough energy!');
    }
  };

  // Fetch user earnings on mount
  useEffect(() => {
    const fetchEarnings = async () => {
      const earnings = await getUserEarnings();
      setUserEarnings(earnings);
    };
    fetchEarnings();
  }, []);

  // Determine selected rank based on userEarnings
  useEffect(() => {
    const earningThresholds: { [key: string]: number } = {
      Farmer: 10000,
      Haciendero: 50000,
      Monopoly: Infinity,
    };

    if (userEarnings < earningThresholds.Farmer) {
      setSelectedRank('farmer');
    } else if (userEarnings < earningThresholds.Haciendero) {
      setSelectedRank('hacienda');
    } else {
      setSelectedRank('monopoly');
    }
  }, [userEarnings]);

  return (
    <AppContext.Provider
      value={{
        energy,
        energyLimit,
        setEnergy,
        animate,
        setAnimate,
        lastIncrement,
        setLastIncrement,
        selectedRank,
        setSelectedRank,
        userEarnings,
        setUserEarnings,
        getUserEarnings,
        getRemainingEnergy,
        consumeEnergy,
        handleClick,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
