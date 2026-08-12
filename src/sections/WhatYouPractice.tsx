"use client";

import { motion } from "motion/react";
import { Container, Headline, MediaPlate, SectionMark } from "@/components/brand/primitives";
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
 * 05 — Reconheça → Decida → Intervenha.
 *
 * A seção é UM painel de grafite, não três blocos alternando superfície.
 * Antes, Decida entrava em osso entre dois blocos escuros, e isso obrigava a
 * placa a pousar sobre creme: uma mancha escura grande sobre a superfície
 * clara, que brigava com tudo em volta. Em todo o resto da página a placa
 * repousa sobre grafite.
 *
 * Dentro do painel, as três baias se separam por fio, não por troca de cor —
 * é a gramática de instrumento que a página já usa. A variedade vem do
 * arranjo interno: a primeira é jogável em largura cheia, e as duas seguintes
 * são espelhos exatos uma da outra, com a captura trocando de lado.
 */
export function WhatYouPractice() {
  const { practice: s } = site;

  return (
    <section id="pratica">
      {/* ------------------------------------------------ abertura */}
      <div className="bg-bone pt-[var(--space-seam)] pb-[var(--space-surface)]">
        <Container>
          <SectionMark label={s.kicker} />

          <div className="mt-[var(--space-mark)] grid gap-x-12 gap-y-9 lg:grid-cols-12">
            <motion.div {...reveal()} className="lg:col-span-6">
              <Headline lines={s.headline} accent={s.headlineAccent} className="text-h2" />
            </motion.div>
            <motion.p
              {...reveal(0.12)}
              className="max-w-[40ch] self-center text-lead leading-[1.5] text-ink-2 lg:col-span-5 lg:col-start-8"
            >
              {s.intro}
            </motion.p>
          </div>

          {/*
            Índice das três capacidades. Sem ele a abertura promete "três
            capacidades" e corta direto para o painel escuro, deixando a
            transição sem apoio.
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

      {/* ------------------------------------------------ o painel */}
      <div className="grain relative bg-graphite">
        <Container className="relative z-[2] py-[var(--space-surface)]">
          {/* -------------------------------------------- RECONHEÇA */}
          <div className="grid gap-x-14 gap-y-8 lg:grid-cols-12">
            <motion.div {...reveal()} className="lg:col-span-7">
              <BlockLabel>{s.recognize.label}</BlockLabel>
              <h3 className="headline mt-6 text-feature text-bone">{s.recognize.headline}</h3>
            </motion.div>
            <motion.p
              {...reveal(0.1)}
              className="max-w-[40ch] self-center text-lead leading-[1.5] text-white/60 lg:col-span-5"
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

          {/* -------------------------------------------- DECIDA */}
          <Bay>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.85, ease }}
              className="lg:order-1"
            >
              <MediaPlate media={s.decide.media} sizes="(min-width: 1024px) 58vw, 100vw" />
            </motion.div>

            <motion.div {...reveal(0.1)} className="lg:order-2">
              <BayCopy
                label={s.decide.label}
                headline={s.decide.headline}
                body={s.decide.body}
                aside={s.decide.aside}
              />
            </motion.div>
          </Bay>

          {/* -------------------------------------------- INTERVENHA */}
          <Bay flip>
            {/*
              Espelho exato da baia anterior: mesma proporção de colunas, mesmo
              alinhamento vertical, captura do lado oposto. A troca de lado é a
              única diferença, e é o que dá ritmo sem inventar outro layout.
            */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.85, ease }}
              className="lg:order-2"
            >
              <MediaPlate media={s.intervene.media} sizes="(min-width: 1024px) 58vw, 100vw" />
            </motion.div>

            <motion.div {...reveal(0.1)} className="lg:order-1">
              <BayCopy
                label={s.intervene.label}
                headline={s.intervene.headline}
                body={s.intervene.body}
                /*
                  O princípio era um parágrafo solto em largura cheia no fim da
                  seção. Como destaque da coluna, ele ocupa a mesma posição do
                  aside de Decida e as duas baias fecham igual.
                */
                aside={s.intervene.principle}
              />
            </motion.div>
          </Bay>

          {/* Recursos como linhas de definição, não como cards com ícone. */}
          <dl className="mt-[var(--space-block)] grid gap-x-14 lg:grid-cols-2">
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
        </Container>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */

/**
 * Baia do painel: fio de separação no topo e duas colunas na mesma régua,
 * 7 para a captura e 5 para o texto, centradas verticalmente.
 *
 * `flip` inverte a régua junto com os `lg:order-*` dos filhos. Sem inverter o
 * template, a ordem só trocaria os itens de lugar e a captura acabaria na
 * coluna estreita — as duas baias deixariam de ser espelhos.
 *
 * A ordem do documento é sempre captura e depois texto, então no mobile as
 * duas baias começam pela imagem.
 */
function Bay({ children, flip = false }: { children: React.ReactNode; flip?: boolean }) {
  return (
    <div className="mt-[var(--space-block)] border-t border-white/10 pt-[var(--space-block)]">
      <div
        className={`grid items-center gap-x-14 gap-y-12 ${
          flip
            ? "lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
            : "lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function BayCopy({
  label,
  headline,
  body,
  aside,
}: {
  label: string;
  headline: string;
  body: string;
  aside: string;
}) {
  /*
    Sem medida máxima em nenhum dos três: quem define a linha é a largura da
    coluna. As medidas fixas anteriores (15ch no título, 42ch no corpo)
    estrangulavam o texto dentro de uma coluna que já era estreita, e o título
    caía em três linhas curtas empilhadas em vez de correr na horizontal.
  */
  return (
    <>
      <BlockLabel>{label}</BlockLabel>
      <h3 className="headline mt-6 text-feature text-bone">{headline}</h3>
      <p className="mt-7 text-body leading-[1.6] text-white/55">{body}</p>
      <p className="mt-8 border-l-2 border-red pl-5 text-[1.0625rem] leading-[1.55] font-medium text-bone">
        {aside}
      </p>
    </>
  );
}

function BlockLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red" aria-hidden />
      <span className="tech-sm text-white/60">{children}</span>
    </div>
  );
}
