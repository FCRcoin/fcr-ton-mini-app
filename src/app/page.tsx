import CoinEarnings from '@/components/custom/earnings';
import EnergyIndicator from '@/components/custom/progress-indicator';
import TapButton from '@/components/custom/tap-btn';
import RankingAccordion from '@/components/custom/user-rank';
import Image from 'next/image';

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col py-4">
      <div className="flex flex-col items-center">
        <CoinEarnings />
        <RankingAccordion />
      </div>
      <div>
        <TapButton />
      </div>

      <div className="mt-auto mb-40">
        <EnergyIndicator />
      </div>
    </section>
  );
}
