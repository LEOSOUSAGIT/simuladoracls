"use client";

import { motion } from "motion/react";
import { Container, Headline, MediaPlate, SectionMark } from "@/components/brand/primitives";
import { site } from "@/content/site";

const ease = [0.2, 0.7, 0.3, 1] as const;

/**
 * 06 — Progressão e feedback.
 *
 * A escada é literal: cada estágio entra maior e mais recuado que o anterior,
 * de modo que a própria composição comunique aumento de dificuldade sem
 * precisar de diagrama, seta ou ícone.
 */
export function Progression() {
  const { progression: s } = site;

  const size = [
    "text-[clamp(1.25rem,2.2vw,1.625rem)]",
    "text-[clamp(1.5rem,3vw,2.125rem)]",
    "text-[clamp(1.75rem,3.8vw,2.75rem)]",
    "text-[clamp(2rem,4.6vw,3.5rem)]",
  ];
  /**
   * Largura de um degrau. A linha-guia desce pela lateral de cada estágio e
   * dá um passo lateral para o próximo, desenhando o percurso. Sem esse
   * traço a indentação crescente lê como desalinhamento, não como escalada.
   */
  const STEP = "clamp(0.75rem, 2.5vw, 3.5rem)";
  const at = (i: number) => `calc(${i} * ${STEP})`;

  return (
    <section id="progressao" className="bg-bone pt-[var(--space-surface)] pb-[var(--space-seam)]">
      <Container>
        <SectionMark label={s.kicker} />

        <div className="mt-[var(--space-mark)] grid gap-x-12 gap-y-9 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-7"
          >
            <Headline lines={s.headline} className="text-h2" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, ease, delay: 0.12 }}
            className="max-w-[40ch] self-center text-lead leading-[1.5] text-ink-2 lg:col-span-5 lg:col-start-8"
          >
            {s.intro}
          </motion.p>
        </div>

        {/* Escada de estágios */}
        <ol className="mt-[var(--space-block)]">
          {s.stages.map((stage, i) => {
            const isLast = i === s.stages.length - 1;
            const stroke = isLast ? "bg-red" : "bg-ink/25";

            return (
              <motion.li
                key={stage.term}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-18%" }}
                transition={{ duration: 0.65, ease, delay: i * 0.09 }}
                className="relative"
              >
                {/* Cotovelo: passo lateral vindo do estágio anterior. */}
                {i > 0 && (
                  <span
                    className={`absolute top-0 h-px ${stroke}`}
                    style={{ left: at(i - 1), width: STEP }}
                    aria-hidden
                  />
                )}

                {/* Trecho vertical que acompanha a altura do estágio. */}
                <span
                  className={`absolute top-0 bottom-0 w-px ${stroke}`}
                  style={{ left: at(i) }}
                  aria-hidden
                />

                <div
                  className="py-8 sm:py-10"
                  style={{ paddingLeft: `calc(${at(i)} + 1.5rem)` }}
                >
                  <h3 className={`headline text-ink ${size[i]}`}>{stage.term}</h3>
                  <p className="mt-3 max-w-[48ch] text-[0.9375rem] leading-[1.6] text-ink-2">
                    {stage.body}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ol>

        {/* Ciclo de repetição */}
        <div className="mt-[var(--space-block)] border-t border-ink/12 pt-12">
          <motion.ul
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.65, ease }}
            className="flex flex-wrap items-center gap-x-5 gap-y-3"
          >
            {s.loop.map((word, i) => (
              <li key={word} className="flex items-center gap-5">
                <span
                  className={`text-[clamp(1.125rem,2.2vw,1.5rem)] font-medium tracking-[-0.02em] ${
                    i === s.loop.length - 1 ? "text-red" : "text-ink"
                  }`}
                >
                  {word}
                </span>
                {i < s.loop.length - 1 && (
                  <span className="h-px w-6 bg-ink/25" aria-hidden />
                )}
              </li>
            ))}
          </motion.ul>

          <div className="mt-12 grid gap-x-12 gap-y-8 lg:grid-cols-12">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.65, ease, delay: 0.08 }}
              className="max-w-[52ch] text-body leading-[1.6] text-ink-2 lg:col-span-6"
            >
              {s.loopBody}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.65, ease, delay: 0.16 }}
              className="headline max-w-[24ch] text-h3 text-ink lg:col-span-5 lg:col-start-8"
            >
              {s.closing}
            </motion.p>
          </div>
        </div>

        {/*
          A prova do que a seção acabou de afirmar: o feedback real do caso.
          Fora do bloco do ciclo, para que a placa encerre a seção inteira e
          não pareça um anexo do último parágrafo.
        */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease }}
          className="mt-[var(--space-block)]"
        >
          <MediaPlate media={s.media} tone="light" />
        </motion.div>
      </Container>
    </section>
  );
}
