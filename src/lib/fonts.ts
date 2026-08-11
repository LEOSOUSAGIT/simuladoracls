import { Archivo, IBM_Plex_Mono, JetBrains_Mono, Schibsted_Grotesk } from "next/font/google";

/**
 * Três identidades tipográficas em avaliação.
 * Todas gratuitas, self-hosted pelo next/font e com acentuação PT-BR completa.
 * A escolha é trocada em runtime pelo atributo data-type no <html>.
 */

export const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted",
  display: "swap",
});

export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const jbMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jb-mono",
  display: "swap",
});

export const TYPE_OPTIONS = [
  {
    id: "tecnica",
    name: "Técnica",
    pair: "Geist / Geist Mono",
    note: "Neutra e contemporânea. Território Linear, Vercel, Stripe.",
  },
  {
    id: "editorial",
    name: "Editorial",
    pair: "Archivo / IBM Plex Mono",
    note: "Mais peso e presença de marca. Headline com atitude de capa.",
  },
  {
    id: "grotesca",
    name: "Grotesca",
    pair: "Schibsted Grotesk / JetBrains Mono",
    note: "Grotesca editorial de jornal. Headline seca, terminais com caráter.",
  },
] as const;

export type TypeOptionId = (typeof TYPE_OPTIONS)[number]["id"];
