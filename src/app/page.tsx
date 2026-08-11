import { StickyCTA } from "@/components/brand/StickyCTA";
import { TypeSwitcher } from "@/components/dev/TypeSwitcher";
import { Faq } from "@/sections/Faq";
import { Hero } from "@/sections/Hero";
import { HowItWorks } from "@/sections/HowItWorks";
import { MeetSimulator } from "@/sections/MeetSimulator";
import { Offer } from "@/sections/Offer";
import { Progression } from "@/sections/Progression";
import { WhatYouPractice } from "@/sections/WhatYouPractice";
import { WhyPractice } from "@/sections/WhyPractice";

export default function Page() {
  return (
    <main>
      {/* 01 */} <Hero />
      {/* 02 */} <WhyPractice />
      {/* 03 */} <MeetSimulator />
      {/* 04 */} <HowItWorks />
      {/* 05 */} <WhatYouPractice />
      {/* 06 */} <Progression />
      {/* 07 */} <Offer />
      {/* 08 */} <Faq />
      <StickyCTA />
      {/* Ferramenta de decisão tipográfica — remover ao fechar a escolha. */}
      <TypeSwitcher />
    </main>
  );
}
