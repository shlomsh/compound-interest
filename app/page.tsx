import Hero from '@/components/Hero';
import WhatIsCompound from '@/components/WhatIsCompound';
import { Calculator } from '@/components/Calculator';
import TwoFriends from '@/components/TwoFriends';
import TimeMachine from '@/components/TimeMachine';
import LatteCalculator from '@/components/LatteCalculator';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
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
      <SectionDivider />
      <CTASection />
      <Footer />
    </main>
  );
}
