"use client";

import { motion } from "motion/react";
import { Container, Headline, SectionMark } from "@/components/brand/primitives";
import { site } from "@/content/site";

const ease = [0.2, 0.7, 0.3, 1] as const;

/**
 * 04 — A jornada Estudo → Teste → Prática 3D.
 *
 * Composição deliberadamente vertical: a seção 02 já usa colunas horizontais,
 * então aqui o ritmo vem de linhas largas que crescem em peso até a terceira
 * etapa, onde o conhecimento vira conduta.
 */
export function HowItWorks() {
  const { howItWorks: s } = site;

  return (
    <section id="como-funciona" className="bg-bone pt-[var(--space-section)] pb-[var(--space-seam)]">
      <Container>
        <SectionMark label={s.kicker} />

        <div className="mt-14 grid gap-x-12 gap-y-9 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-6"
          >
            <Headline lines={s.headline} className="text-h2" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, ease, delay: 0.12 }}
            className="max-w-[46ch] self-end text-body leading-[1.6] text-ink-2 lg:col-span-5 lg:col-start-8"
          >
            {s.intro}
          </motion.p>
        </div>

        <ol className="mt-20 sm:mt-28">
          {s.steps.map((step, i) => {
            const strong = step.weight === "strong";
            return (
              <motion.li
                key={step.index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.6, ease, delay: i * 0.1 }}
                className={`border-t border-ink/12 last:border-b ${
                  strong ? "py-12 lg:py-20" : "py-10 lg:py-12"
                }`}
              >
                <div className="grid gap-x-12 gap-y-6 lg:grid-cols-12">
                  <span className="tech-sm self-start pt-1.5 text-ink-3 lg:col-span-1">
                    {step.index}
                  </span>

                  <h3
                    className={`headline text-ink lg:col-span-4 ${
                      strong ? "text-feature" : "text-h3"
                    }`}
                  >
                    {step.term}
                  </h3>

                  <div className="lg:col-span-6 lg:col-start-7">
                    <p
                      className={`max-w-[54ch] leading-[1.6] text-ink-2 ${
                        strong ? "text-lead" : "text-body"
                      }`}
                    >
                      {step.body}
                    </p>

                    {"note" in step && step.note && (
                      <p className="mt-7 border-l-2 border-red pl-5 text-[1.0625rem] font-medium text-ink">
                        {step.note}
                      </p>
                    )}
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
