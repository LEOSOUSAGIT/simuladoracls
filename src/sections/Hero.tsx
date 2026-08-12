"use client";

import { motion } from "motion/react";
import { CTA } from "@/components/brand/primitives";
import { VitalsRail } from "@/components/instrument/VitalsRail";
import { site } from "@/content/site";

const ease = [0.2, 0.7, 0.3, 1] as const;

/** Entrada escalonada — um único momento coreografado no carregamento. */
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease, delay },
});

export function Hero() {
  const { hero, nav, brand } = site;

  return (
    <section className="grain relative flex min-h-svh flex-col overflow-hidden bg-graphite">
      {/* -------------------------------------------------- navegação */}
      <motion.nav
        {...rise(0)}
        className="container-page relative z-10 flex items-center justify-between gap-6 py-6"
      >
        <a
          href="#"
          className="text-[0.9375rem] font-semibold tracking-[-0.02em] text-bone"
        >
          {brand.short}
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.875rem] text-white/55 transition-colors hover:text-bone"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={brand.checkoutUrl}
          className="tech-sm hidden border border-white/20 px-4 py-3 text-bone transition-colors hover:border-white/60 sm:inline-block"
        >
          {nav.cta}
        </a>
      </motion.nav>

      {/* -------------------------------------------------- headline */}
      <div className="container-page relative z-10 flex flex-1 items-center py-16 sm:py-20">
        <div className="w-full">
          <motion.p {...rise(0.08)} className="tech mb-8 text-white/40">
            {hero.eyebrow}
          </motion.p>

          <h1 className="headline text-h1 text-bone">
            {hero.headline.map((line, i) => (
              <motion.span key={line} {...rise(0.14 + i * 0.09)} className="block">
                {line === hero.headlineAccent ? <span className="text-red">{line}</span> : line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            {...rise(0.4)}
            className="mt-9 max-w-[46ch] text-lead leading-[1.45] text-white/60"
          >
            {hero.sub}
          </motion.p>

          <motion.div {...rise(0.5)} className="mt-11 flex flex-wrap items-center gap-3">
            <CTA href={brand.checkoutUrl}>{hero.ctaPrimary}</CTA>
            <CTA href={hero.ctaSecondaryHref} variant="ghost-dark">
              {hero.ctaSecondary}
            </CTA>
          </motion.div>

          <motion.p {...rise(0.58)} className="tech-sm mt-7 text-white/25">
            Compra via Hotmart · acesso imediato ao download
          </motion.p>
        </div>

        {/*
          A régua vertical da margem direita trazia "01 / Hero" — um índice
          que só fazia sentido enquanto as seções eram numeradas. Sem esse
          sistema, restava um número órfão e uma palavra de bastidor.
        */}
      </div>

      {/* -------------------------------------------------- régua viva */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease, delay: 0.7 }}
        className="relative z-10"
      >
        <VitalsRail />
      </motion.div>
    </section>
  );
}
