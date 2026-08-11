"use client";

import { motion } from "motion/react";
import { Container, Headline, SectionMark } from "@/components/brand/primitives";
import { site } from "@/content/site";

const ease = [0.2, 0.7, 0.3, 1] as const;

/**
 * 02 — Pausa conceitual. Superfície osso, zero imagem, quase toda tipográfica.
 * É o contraponto de respiração entre o Hero escuro e a cena 3D escura.
 */
export function WhyPractice() {
  const { why } = site;

  return (
    <section id="por-que-pratica" className="bg-bone py-[var(--space-section)]">
      <Container>
        <SectionMark label={why.kicker} />

        {/* Headline + intro em colunas desiguais. */}
        <div className="mt-14 grid gap-x-12 gap-y-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-7"
          >
            <Headline
              lines={why.headline}
              accent={why.headlineAccent}
              className="text-h2"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, ease, delay: 0.12 }}
            className="max-w-[46ch] self-end text-body leading-[1.6] text-ink-2 lg:col-span-4 lg:col-start-9"
          >
            {why.intro}
          </motion.p>
        </div>

        {/* Progressão: reconhecer → interpretar → decidir → agir */}
        <div className="relative mt-24 sm:mt-32">
          <div className="relative h-px w-full bg-ink/12">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1.5, ease }}
              className="absolute inset-0 origin-left bg-red"
            />
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            {why.steps.map((step, i) => (
              <motion.li
                key={step.index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.6, ease, delay: 0.18 + i * 0.14 }}
                /*
                  Recuo interno simétrico em cada coluna para que número e
                  texto nunca encostem na régua divisória. Primeira e última
                  ficam rentes às bordas do container, mantendo o alinhamento
                  do grid da página.
                */
                className="border-b border-ink/12 pt-8 pb-10 sm:pr-10 xl:border-r xl:border-b-0 xl:px-10 xl:first:pl-0 xl:last:border-r-0 xl:last:pr-0"
              >
                {/*
                  Coluna fixa para o índice: garante que os quatro blocos
                  tenham exatamente a mesma distância entre número e título,
                  independentemente da largura dos dígitos. O tracking do
                  índice é reduzido para eliminar o espaço fantasma que a
                  utility `tech-sm` deixa depois do último caractere.
                */}
                <div className="grid grid-cols-[1.5rem_1fr] items-baseline gap-x-3">
                  <span className="tech-sm text-red" style={{ letterSpacing: "0.06em" }}>
                    {step.index}
                  </span>
                  <h3 className="text-h3 leading-none font-semibold tracking-[-0.03em]">
                    {step.term}
                  </h3>
                </div>
                <p className="mt-5 max-w-[34ch] text-[0.9375rem] leading-[1.6] text-ink-2">
                  {step.body}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Fecho conceitual */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8, ease }}
          className="headline mt-24 max-w-[22ch] text-h2 sm:mt-32"
        >
          {why.closing.map((line) => (
            <span key={line} className="block">
              {line === why.closingAccent ? <span className="text-red">{line}</span> : line}
            </span>
          ))}
        </motion.p>
      </Container>
    </section>
  );
}
