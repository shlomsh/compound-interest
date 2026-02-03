import Hero from '@/components/Hero';
import WhatIsCompound from '@/components/WhatIsCompound';
import { Calculator } from '@/components/Calculator';
import SectionDivider from '@/components/ui/SectionDivider';

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionDivider />
      <WhatIsCompound />
      <SectionDivider />
      <Calculator />
    </main>
  );
}
