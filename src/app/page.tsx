import CoinEarnings from '@/components/custom/earnings';
import EnergyIndicator from '@/components/custom/energy-indicator';
import TapButton from '@/components/custom/tap-btn';
import RankingAccordion from '@/components/custom/user-rank';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="flex flex-col py-4">
      <div className="flex flex-col items-center gap-1 ">
        <div className="border-b-2 border-gray w-[90%] flex flex-col items-center gap-2 pb-4">
          <p className="text-white text-sm">Rewards Marketplace</p>
          <Image
            src="/assets/epimall.svg"
            width={100}
            height={100}
            alt="coin"
            className="border-4 p-2 border-white"
          />
          <Link href="/partners" className="text-supernova-400 text-xs">
            Click for more partners here
          </Link>
        </div>
        <CoinEarnings />
        <RankingAccordion />
      </div>
      <div className="h-[300px] flex items-center justify-center">
        <TapButton />
      </div>

      <div className="mt-auto mb-40">
        <EnergyIndicator />
      </div>
    </section>
  );
}
