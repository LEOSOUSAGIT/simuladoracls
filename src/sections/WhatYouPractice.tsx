"use client";

import { motion } from "motion/react";
import { Container, Headline, MediaSlot, SectionMark } from "@/components/brand/primitives";
import { RhythmQuiz } from "@/components/instrument/RhythmQuiz";
import { site } from "@/content/site";

const ease = [0.2, 0.7, 0.3, 1] as const;

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-15%" },
  transition: { duration: 0.7, ease, delay },
});

/**
 * 05 — Seção de profundidade do produto: Reconheça → Decida → Intervenha.
 *
 * Cada bloco recebe um tratamento diferente para que a seção não vire uma
 * lista de funcionalidades: o primeiro é jogável, o segundo é editorial com
 * a imagem sangrando pela esquerda, o terceiro abre com cena full-bleed.
 */
export function WhatYouPractice() {
  const { practice: s } = site;

  return (
    <section id="pratica">
      {/* ------------------------------------------------ abertura */}
      <div className="bg-bone pt-[var(--space-seam)] pb-12 sm:pb-16">
        <Container>
          <SectionMark label={s.kicker} />

          <div className="mt-14 grid gap-x-12 gap-y-9 lg:grid-cols-12">
            <motion.div {...reveal()} className="lg:col-span-6">
              <Headline lines={s.headline} className="text-h2" />
            </motion.div>
            <motion.p
              {...reveal(0.12)}
              className="max-w-[46ch] self-end text-body leading-[1.6] text-ink-2 lg:col-span-5 lg:col-start-8"
            >
              {s.intro}
            </motion.p>
          </div>

          {/*
            Índice das três capacidades. Sem ele a abertura promete "três
            capacidades" e corta direto para o bloco escuro, deixando a
            transição sem apoio. Sem números e sem réguas verticais, para
            não repetir a composição da seção 02.
          */}
          <ul className="mt-16 grid border-t border-ink/12 sm:mt-20 sm:grid-cols-3 sm:gap-x-12">
            {s.capabilities.map((c, i) => (
              <motion.li key={c.term} {...reveal(0.18 + i * 0.08)} className="pt-7 pb-8 sm:pr-6">
                <h3 className="text-[clamp(1.25rem,2vw,1.5rem)] font-semibold tracking-[-0.025em] text-ink">
                  {c.term}
                </h3>
                <p className="mt-2.5 max-w-[30ch] text-[0.9375rem] leading-[1.55] text-ink-2">
                  {c.body}
                </p>
              </motion.li>
            ))}
          </ul>
        </Container>
      </div>

      {/* ------------------------------------------------ RECONHEÇA */}
      <div className="grain relative bg-graphite py-[var(--space-section)]">
        <Container>
          <div className="grid gap-x-12 gap-y-8 lg:grid-cols-12">
            <motion.div {...reveal()} className="lg:col-span-7">
              <BlockLabel tone="dark">{s.recognize.label}</BlockLabel>
              <h3 className="headline mt-6 text-h3 text-bone">{s.recognize.headline}</h3>
            </motion.div>
            <motion.p
              {...reveal(0.1)}
              className="max-w-[44ch] self-end text-body leading-[1.6] text-white/55 lg:col-span-5"
            >
              {s.recognize.body}
            </motion.p>
          </div>

          <motion.div {...reveal(0.16)} className="mt-14 sm:mt-16">
            <p className="mb-5 text-[0.9375rem] text-white/40">{s.recognize.prompt}</p>
            <div className="max-w-[68rem]">
              <RhythmQuiz />
            </div>
          </motion.div>
        </Container>
      </div>

      {/* ------------------------------------------------ DECIDA */}
      <div className="overflow-hidden bg-bone">
        <div className="grid lg:grid-cols-2 lg:items-center">
          {/* A mídia sangra pela borda esquerda — nenhuma outra seção faz isso. */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.85, ease }}
            className="w-full"
          >
            <MediaSlot
              media={s.decide.media}
              tone="light"
              aspect="aspect-[16/10] lg:aspect-[5/4]"
            />
          </motion.div>

          <motion.div
            {...reveal(0.1)}
            className="container-page py-16 sm:py-20 lg:px-0 lg:py-24 lg:pr-[var(--space-gutter)] lg:pl-16 xl:pl-24"
          >
            <BlockLabel>{s.decide.label}</BlockLabel>
            <h3 className="headline mt-6 max-w-[16ch] text-h3 text-ink">
              {s.decide.headline}
            </h3>
            <p className="mt-7 max-w-[48ch] text-body leading-[1.6] text-ink-2">
              {s.decide.body}
            </p>
            <p className="mt-9 max-w-[46ch] border-l-2 border-red pl-5 text-[1.0625rem] leading-[1.55] font-medium text-ink">
              {s.decide.aside}
            </p>
            {/* A legenda descreve a captura — só existe quando ela existe. */}
            {s.decide.media.src && <p className="label mt-10">{s.decide.media.caption}</p>}
          </motion.div>
        </div>
      </div>

      {/* ------------------------------------------------ INTERVENHA */}
      <div className="grain relative bg-graphite">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, ease }}
          className="w-full border-b border-white/10"
        >
          <MediaSlot
            media={s.intervene.media}
            aspect="aspect-[4/3] sm:aspect-[16/9] xl:aspect-[21/9]"
          />
        </motion.div>

        <Container className="pt-16 pb-[var(--space-section)] sm:pt-20">
          <div className="grid gap-x-12 gap-y-8 lg:grid-cols-12">
            <motion.div {...reveal()} className="lg:col-span-7">
              <BlockLabel tone="dark">{s.intervene.label}</BlockLabel>
              <h3 className="headline mt-6 max-w-[18ch] text-h3 text-bone">
                {s.intervene.headline}
              </h3>
            </motion.div>
            <motion.p
              {...reveal(0.1)}
              className="max-w-[44ch] self-end text-body leading-[1.6] text-white/55 lg:col-span-5"
            >
              {s.intervene.body}
            </motion.p>
          </div>

          {/* Recursos como linhas de definição, não como cards com ícone. */}
          <dl className="mt-16 grid gap-x-14 sm:mt-20 lg:grid-cols-2">
            {s.intervene.actions.map((action, i) => (
              <motion.div
                key={action.term}
                {...reveal(0.06 * i)}
                className="grid gap-x-8 gap-y-2 border-t border-white/10 py-6 sm:grid-cols-[11rem_1fr]"
              >
                <dt className="text-[1.0625rem] font-medium text-bone">{action.term}</dt>
                <dd className="max-w-[46ch] text-[0.9375rem] leading-[1.6] text-white/50">
                  {action.body}
                </dd>
              </motion.div>
            ))}
          </dl>

          <motion.p
            {...reveal(0.1)}
            className="headline mt-16 max-w-[26ch] text-h3 text-bone sm:mt-20"
          >
            {s.intervene.principle}
          </motion.p>
        </Container>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */

function BlockLabel({
  children,
  tone = "light",
}: {
  children: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red" aria-hidden />
      <span className={`tech-sm ${tone === "light" ? "text-ink-2" : "text-white/60"}`}>
        {children}
      </span>
    </div>
  );
}
