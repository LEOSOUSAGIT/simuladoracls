"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { ECGTrace } from "./ECGTrace";
import { HERO_SEQUENCE } from "@/lib/rhythms";

const ROTATION_MS = 8000;

/**
 * Régua de instrumento — a faixa viva que atravessa a base do Hero.
 *
 * Três zonas que não se sobrepõem: identificação do ritmo à esquerda, o
 * traçado na sua própria faixa central e uma única leitura numérica à direita.
 * O traçado nunca corre por trás de texto.
 */
export function VitalsRail() {
  const [i, setI] = useState(0);
  const rhythm = HERO_SEQUENCE[i];

  useEffect(() => {
    const id = window.setInterval(
      () => setI((prev) => (prev + 1) % HERO_SEQUENCE.length),
      ROTATION_MS,
    );
    return () => window.clearInterval(id);
  }, []);

  const critical = rhythm.state !== "estável";

  return (
    <div className="relative w-full overflow-hidden border-t border-white/10 bg-graphite">
      {/* Marca de troca de estado */}
      <AnimatePresence>
        {critical && (
          <motion.div
            key={rhythm.id}
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{ scaleX: 1, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left bg-red"
            aria-hidden
          />
        )}
      </AnimatePresence>

      <div className="container-page flex flex-col justify-center gap-5 py-7 sm:h-[clamp(8rem,17vh,11rem)] sm:flex-row sm:items-center sm:gap-10 sm:py-0">
        {/* Identificação do ritmo */}
        <AnimatePresence mode="wait">
          <motion.div
            key={rhythm.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3, ease: [0.2, 0.7, 0.3, 1] }}
            className="flex shrink-0 items-center gap-3"
          >
            <span className="text-[clamp(1rem,2.2vw,1.375rem)] font-medium tracking-[-0.02em] text-bone">
              {rhythm.label}
            </span>
            <StateChip state={rhythm.state} />
          </motion.div>
        </AnimatePresence>

        {/* Traçado, em faixa própria */}
        <div className="relative h-12 min-w-0 flex-1 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] sm:h-16">
          <ECGTrace rhythm={rhythm} />
        </div>

        {/* Uma única leitura */}
        <div className="flex shrink-0 items-baseline gap-2.5">
          <span className="num text-[clamp(2rem,4.2vw,3rem)] leading-none font-medium text-bone">
            {rhythm.bpm === null ? "—" : rhythm.bpm}
          </span>
          <span className="tech-sm text-white/30">bpm</span>
        </div>
      </div>
    </div>
  );
}

function StateChip({ state }: { state: string }) {
  const alert = state !== "estável";
  return (
    <span
      className={`tech-sm inline-flex items-center gap-2 border px-2.5 py-1.5 ${
        alert ? "border-red/45 text-red" : "border-white/15 text-white/45"
      }`}
    >
      <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${alert ? "bg-red" : "bg-white/40"}`} />
      {state}
    </span>
  );
}
