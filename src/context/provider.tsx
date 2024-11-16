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
  totalTouches: number;
  setTotalTouches: React.Dispatch<React.SetStateAction<number>>;
  totalPlayers: number;
  dailyUsers: number;
  onlinePlayers: number;
  fetchStats: () => void;
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

  // New State Variables for Stats
  const [totalTouches, setTotalTouches] = useState<number>(0);
  const [totalPlayers, setTotalPlayers] = useState<number>(2000000); // 2m
  const [dailyUsers, setDailyUsers] = useState<number>(200000); // 200k
  const [onlinePlayers, setOnlinePlayers] = useState<number>(45000); // 45k

  // Mock functions to fetch stats
  const fetchTotalTouches = async () => {
    // Replace with actual API call if necessary
    // For mock, we'll just return the current totalTouches
    return totalTouches;
  };

  const fetchTotalPlayers = async () => {
    // Mock data
    return 2000000;
  };

  const fetchDailyUsers = async () => {
    // Mock data
    return 200000;
  };

  const fetchOnlinePlayers = async () => {
    // Mock data
    return 45000;
  };

  // Function to fetch all stats
  const fetchStats = () => {
    fetchTotalTouches().then((touches) => setTotalTouches(touches));
    fetchTotalPlayers().then((players) => setTotalPlayers(players));
    fetchDailyUsers().then((users) => setDailyUsers(users));
    fetchOnlinePlayers().then((online) => setOnlinePlayers(online));
  };

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
      setTotalTouches((prev) => prev + 1); // Increment totalTouches

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
      farmer: 100,
      harvester: 200,
      hacienda: 300,
    };

    if (userEarnings < earningThresholds.farmer) {
      setSelectedRank('farmer');
    } else if (userEarnings < earningThresholds.harvester) {
      setSelectedRank('harvester');
    } else if (userEarnings < earningThresholds.hacienda) {
      setSelectedRank('hacienda');
    } else {
      setSelectedRank('farmer');
    }
  }, [userEarnings]);

  // Fetch stats on mount
  useEffect(() => {
    fetchStats();
    // Optionally, set an interval to refresh stats periodically
    const interval = setInterval(fetchStats, 60000); // Refresh every 60 seconds
    return () => clearInterval(interval);
  }, [totalTouches, totalPlayers, dailyUsers, onlinePlayers]);

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
        totalTouches,
        setTotalTouches,
        totalPlayers,
        dailyUsers,
        onlinePlayers,
        fetchStats,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
