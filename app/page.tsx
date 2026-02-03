import Hero from '@/components/Hero';
import WhatIsCompound from '@/components/WhatIsCompound';
import { Calculator } from '@/components/Calculator';
import TwoFriends from '@/components/TwoFriends';
import TimeMachine from '@/components/TimeMachine';
import LatteCalculator from '@/components/LatteCalculator';
import SectionDivider from '@/components/ui/SectionDivider';

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionDivider />
      <WhatIsCompound />
      <SectionDivider />
      <Calculator />
      <SectionDivider />
      <TwoFriends />
      <SectionDivider />
      <TimeMachine />
      <SectionDivider />
      <LatteCalculator />
    </main>
  );
}
