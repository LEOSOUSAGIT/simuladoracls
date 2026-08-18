import type { Metadata } from "next";
import { LegalDoc, LegalSections } from "@/components/brand/LegalDoc";
import { privacidade } from "@/content/legal";

export const metadata: Metadata = {
  title: "Política de Privacidade — Simulador de Emergências Cardiológicas",
  description:
    "Como os dados pessoais são tratados neste site e na compra do simulador, em conformidade com a Lei Geral de Proteção de Dados.",
  robots: { index: true, follow: true },
};

export default function PrivacidadePage() {
  return (
    <LegalDoc
      title={privacidade.title}
      intro={privacidade.intro}
      updatedAt={privacidade.updatedAt}
    >
      <LegalSections sections={privacidade.sections} />
    </LegalDoc>
  );
}
