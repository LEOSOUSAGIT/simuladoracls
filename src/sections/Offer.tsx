"use client";

import { motion } from "motion/react";
import { CTA, Container, Headline, Pending, SectionMark } from "@/components/brand/primitives";
import { site } from "@/content/site";

const ease = [0.2, 0.7, 0.3, 1] as const;

/**
 * 07 — Confiança e oferta.
 *
 * Única seção centralizada da página, e a única sem nenhuma imagem de produto:
 * a demonstração já aconteceu antes. Aqui só existe o que está incluído, as
 * condições e o que o produto honestamente não é.
 */
export function Offer() {
  const { offer: s, brand } = site;

  return (
    <section id="oferta" className="bg-bone py-[var(--space-seam)]">
      <Container>
        <div className="flex justify-center">
          <SectionMark label={s.kicker} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease }}
          className="mt-12 text-center"
        >
          <Headline lines={s.headline} className="mx-auto max-w-[16ch] text-h2" />
          <p className="mx-auto mt-7 max-w-[52ch] text-lead leading-[1.5] text-ink-2">
            {s.intro}
          </p>
        </motion.div>

        {/* Incluído × condições, separados por uma régua vertical. */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="mt-20 grid gap-x-16 gap-y-14 border-t border-ink/12 pt-14 sm:mt-28 lg:grid-cols-2 lg:gap-x-24"
        >
          <div>
            <h3 className="tech-sm text-ink-3">O que está incluído</h3>
            <ul className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {s.includes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check />
                  <span className="text-[0.9375rem] leading-[1.5] text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:border-l lg:border-ink/12 lg:pl-16 xl:pl-24">
            <h3 className="tech-sm text-ink-3">Condições</h3>
            <dl className="mt-8">
              {s.terms.map((term) => (
                <div
                  key={term.label}
                  className="grid gap-x-8 gap-y-2 border-b border-ink/10 py-4 last:border-b-0 sm:grid-cols-[10rem_1fr]"
                >
                  <dt className="text-[0.9375rem] text-ink-3">{term.label}</dt>
                  <dd className="text-[0.9375rem] leading-[1.5] text-ink">
                    {term.value ?? <Pending>{term.label}</Pending>}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.65, ease, delay: 0.14 }}
          className="mt-16 flex justify-center sm:mt-20"
        >
          <CTA href={brand.checkoutUrl}>{s.cta}</CTA>
        </motion.div>

        {/* Transparência: sustenta a confiança e evita problema em anúncio. */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto mt-20 max-w-3xl border-t border-ink/12 pt-10 sm:mt-28"
        >
          <h3 className="tech-sm text-ink-3">{s.honesty.title}</h3>
          <ul className="mt-6 grid gap-3">
            {s.honesty.items.map((item) => (
              <li key={item} className="text-[0.9375rem] leading-[1.6] text-ink-2">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[0.9375rem] leading-[1.6] font-medium text-ink">
            {s.honesty.note}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

function Check() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
      className="mt-1 shrink-0"
    >
      <path d="M1 7.5l4 4L13 2" stroke="currentColor" strokeWidth="1.5" className="text-ink-3" />
    </svg>
  );
}
