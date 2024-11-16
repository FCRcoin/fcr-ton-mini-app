'use client';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@radix-ui/react-accordion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const rankings = {
  harvester: 'A hardworking individual who cultivates the land.',
  farmer: 'A landowner who manages a large estate.',
  hacienda: 'A person or entity with exclusive control over a market.',
};

const earningThresholds = {
  Farmer: 10000,
  Haciendero: 50000,
  Monopoly: Infinity,
};

const RankingAccordion = () => {
  const [selectedRank, setSelectedRank] = useState<string | null>(null);
  const [userEarnings, setUserEarnings] = useState<number>(0);

  const fetchUserEarnings = async () => {
    // TODO: Replace this with your actual API call to fetch user earnings

    setUserEarnings(40000);
  };

  useEffect(() => {
    fetchUserEarnings();
  }, []);

  useEffect(() => {
    if (userEarnings < earningThresholds.Farmer) {
      setSelectedRank('farmer');
    } else if (userEarnings < earningThresholds.Haciendero) {
      setSelectedRank('hacienda');
    } else {
      setSelectedRank('monopoly');
    }
  }, [userEarnings]);

  return (
    <Accordion type="single" collapsible className="w-full text-white">
      {selectedRank && (
        <AccordionItem
          key={selectedRank}
          value={`item-${selectedRank}`}
          className="items-center flex flex-col"
        >
          <AccordionTrigger>
            <div className="flex gap-1 items-center ">
              <Image
                src={`/assets/${selectedRank}.png`}
                alt={selectedRank}
                width={40}
                height={40}
              />

              <p>
                {selectedRank.charAt(0).toUpperCase() + selectedRank.slice(1)}
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            {rankings[selectedRank as keyof typeof rankings]}
          </AccordionContent>
        </AccordionItem>
      )}
    </Accordion>
  );
};

export default RankingAccordion;
