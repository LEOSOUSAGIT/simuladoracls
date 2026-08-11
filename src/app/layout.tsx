import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { archivo, jbMono, plexMono, schibsted } from "@/lib/fonts";
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

/**
 * Aplica a identidade tipográfica antes da primeira pintura, evitando
 * troca visível de fonte. Remover junto com o seletor quando a decisão
 * tipográfica estiver fechada.
 */
const typeBootstrap = `try{var t=localStorage.getItem("sim-type")||"tecnica";document.documentElement.setAttribute("data-type",t)}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      data-type="tecnica"
      className={[
        GeistSans.variable,
        GeistMono.variable,
        archivo.variable,
        schibsted.variable,
        plexMono.variable,
        jbMono.variable,
      ].join(" ")}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: typeBootstrap }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
