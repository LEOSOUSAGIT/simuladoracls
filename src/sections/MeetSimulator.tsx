"use client";

import { motion } from "motion/react";
import { Container, Headline, MediaSlot, SectionMark } from "@/components/brand/primitives";
import { site } from "@/content/site";

const ease = [0.2, 0.7, 0.3, 1] as const;

/**
 * 03 — A cena. Superfície grafite, leitura do ambiente da simulação.
 *
 * As labels técnicas só existem sobre uma captura real: anotar um espaço
 * vazio criaria a impressão de uma interface que ainda não temos. Sem o
 * ativo, os recursos aparecem como lista de texto abaixo do slot.
 */
export function MeetSimulator() {
  const { simulator } = site;
  const { scene, labels } = simulator;

  return (
    <section id="simulador" className="grain relative overflow-hidden bg-graphite">
      <Container className="pt-[var(--space-seam)] pb-14 sm:pb-16">
        <SectionMark label={simulator.kicker} tone="dark" />

        <div className="mt-[var(--space-mark)] grid gap-x-12 gap-y-9 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-7"
          >
            <Headline
              lines={simulator.headline}
              accent={simulator.headlineAccent}
              tone="dark"
              className="text-h2"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, ease, delay: 0.12 }}
            className="max-w-[48ch] self-end text-body leading-[1.6] text-white/55 lg:col-span-5"
          >
            {simulator.body}
          </motion.p>
        </div>
      </Container>

      {/* ---------------------------------------------- a cena */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.9, ease }}
        className="relative w-full"
      >
        <div className="relative">
          <MediaSlot
            media={scene}
            aspect="aspect-[4/3] sm:aspect-[16/9] xl:aspect-[21/9]"
          />

          {/* Leitura técnica do ambiente — só sobre captura real. */}
          {scene.src && (
            <div className="pointer-events-none absolute inset-0 hidden md:block">
              {labels.map((label, i) => (
                <motion.div
                  key={label.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, ease, delay: 0.35 + i * 0.11 }}
                  className="absolute flex items-center gap-2.5"
                  style={{ left: `${label.x}%`, top: `${label.y}%` }}
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
                  <span className="h-px w-6 bg-white/25" />
                  <span className="tech-sm whitespace-nowrap text-white/70">{label.text}</span>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      {/* Recursos em texto: no mobile sempre, no desktop só sem captura. */}
      <Container className="pt-6">
        <ul className={`flex flex-wrap gap-x-5 gap-y-2.5 ${scene.src ? "md:hidden" : ""}`}>
          {labels.map((l) => (
            <li key={l.id} className="tech-sm flex items-center gap-2 text-white/45">
              <span className="h-1 w-1 rounded-full bg-red" aria-hidden />
              {l.text}
            </li>
          ))}
        </ul>
      </Container>

      {/* ---------------------------------------------- fecho */}
      <Container className="pt-16 pb-[var(--space-section)] sm:pt-20">
        <motion.blockquote
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.7, ease }}
          className="headline max-w-[24ch] text-h3 text-bone"
        >
          <span className="text-red">“</span>
          {simulator.quote}
          <span className="text-red">”</span>
        </motion.blockquote>
      </Container>
    </section>
  );
}
