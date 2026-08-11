import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simulador interativo de ACLS e emergências cardiológicas",
  description:
    "Estude, teste seus conhecimentos e pratique decisões dentro de cenários simulados de emergência cardiológica. ACLS não se domina só na teoria.",
  openGraph: {
    title: "ACLS não se domina só na teoria",
    description:
      "Simulador interativo de emergências cardiológicas: reconheça o ritmo, decida a conduta e pratique a intervenção.",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0d10",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={GeistMono.variable}>
      <body>{children}</body>
    </html>
  );
}
