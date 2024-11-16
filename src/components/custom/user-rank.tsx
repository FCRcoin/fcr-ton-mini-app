'use client';
import { useCryptoEnergy } from '@/context/provider';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@radix-ui/react-accordion';
import Image from 'next/image';

const rankings = {
  harvester: 'A relentless tapping machine, earning points with every click!',
  farmer:
    'A fun and engaging way to start, amassing points and enjoying the game!',
  hacienda:
    'The ultimate tap champion, with unparalleled control over the crypto game!',
};

const RankingAccordion = () => {
  const { selectedRank } = useCryptoEnergy();

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

              <p className="text-center">
                {selectedRank.charAt(0).toUpperCase() + selectedRank.slice(1)}
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-center">
            {rankings[selectedRank as keyof typeof rankings]}
          </AccordionContent>
        </AccordionItem>
      )}
    </Accordion>
  );
};

export default RankingAccordion;
