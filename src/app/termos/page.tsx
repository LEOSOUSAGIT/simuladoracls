import type { Metadata } from "next";
import { LegalDoc, LegalPart, LegalSections } from "@/components/brand/LegalDoc";
import { termos } from "@/content/legal";

export const metadata: Metadata = {
  title: "Termos de Uso — Simulador de Emergências Cardiológicas",
  description:
    "Condições de compra, licença de uso de 90 dias, requisitos técnicos, direito de arrependimento e termo de ciência e limitação de responsabilidade.",
  robots: { index: true, follow: true },
};

export default function TermosPage() {
  return (
    <LegalDoc title={termos.title} intro={termos.intro} updatedAt={termos.updatedAt}>
      <LegalPart label={termos.partOne.label} title={termos.partOne.title} />
      <LegalSections sections={termos.partOne.sections} />

      <LegalPart label={termos.partTwo.label} title={termos.partTwo.title} />
      <p className="mt-8 text-[0.9375rem] leading-[1.7] text-ink-2">
        {termos.partTwo.lead}
      </p>
      <LegalSections sections={termos.partTwo.sections} />
    </LegalDoc>
  );
}
