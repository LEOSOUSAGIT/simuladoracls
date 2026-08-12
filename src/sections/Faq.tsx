"use client";

import { motion } from "motion/react";
import { CTA, Container, Headline, SectionMark } from "@/components/brand/primitives";
import { site } from "@/content/site";

const ease = [0.2, 0.7, 0.3, 1] as const;

/**
 * 08 — Objeções e fechamento.
 *
 * O acordeão usa <details>/<summary> nativos: funciona sem JavaScript, é
 * acessível por teclado e indexável. O encerramento inverte para grafite,
 * fechando a página no mesmo tom em que ela abriu.
 */
export function Faq() {
  const { faq: s, footer, brand } = site;

  return (
    <>
      <section id="faq" className="bg-bone pt-[var(--space-seam)] pb-[var(--space-surface)]">
        <Container>
          <SectionMark label={s.kicker} />

          <div className="mt-[var(--space-mark)] grid gap-x-16 gap-y-9 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, ease }}
              className="lg:col-span-4"
            >
              <Headline lines={s.headline} className="text-h2" />
            </motion.div>

            <div className="lg:col-span-7 lg:col-start-6">
              {s.items.map((item, i) => {
                return (
                  <motion.details
                    key={item.q}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.5, ease, delay: i * 0.05 }}
                    className="group border-b border-ink/12 first:border-t"
                  >
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-8 py-6 text-[1.0625rem] leading-snug font-medium text-ink transition-colors hover:text-ink-2 [&::-webkit-details-marker]:hidden">
                      {item.q}
                      <span
                        className="relative mt-2 h-3 w-3 shrink-0"
                        aria-hidden
                      >
                        <span className="absolute top-1/2 left-0 h-px w-3 -translate-y-1/2 bg-ink/50 transition-colors duration-200 group-open:bg-red" />
                        <span className="absolute top-0 left-1/2 h-3 w-px -translate-x-1/2 bg-ink/50 transition-transform duration-200 group-open:rotate-90 group-open:opacity-0" />
                      </span>
                    </summary>

                    <div className="pb-7">
                      <p className="max-w-[62ch] text-[0.9375rem] leading-[1.7] text-ink-2">
                        {item.a}
                      </p>
                    </div>
                  </motion.details>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------ encerramento */}
      <section className="grain relative bg-graphite">
        <Container className="py-[var(--space-section)] text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.8, ease }}
          >
            <Headline
              lines={s.finalCta.headline}
              tone="dark"
              className="mx-auto max-w-[14ch] text-h1"
            />
            <p className="mx-auto mt-9 max-w-[50ch] text-lead leading-[1.5] text-white/55">
              {s.finalCta.sub}
            </p>
            <div className="mt-11 flex justify-center">
              <CTA href={brand.checkoutUrl}>{s.finalCta.cta}</CTA>
            </div>
          </motion.div>
        </Container>

        <footer className="border-t border-white/10">
          <Container className="flex flex-col gap-8 py-12 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-[70ch]">
              <p className="text-[0.9375rem] font-medium text-bone">{brand.name}</p>
              <p className="mt-4 text-[0.8125rem] leading-[1.7] text-white/40">
                {footer.disclaimer}
              </p>
            </div>

            <ul className="flex shrink-0 flex-wrap gap-x-7 gap-y-2">
              {footer.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[0.8125rem] text-white/40 transition-colors hover:text-bone"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </footer>
      </section>
    </>
  );
}
