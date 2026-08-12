"use client";

import { motion } from "motion/react";
import { CTA, Container, Headline, SectionMark } from "@/components/brand/primitives";
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
          className="mt-[var(--space-mark)] text-center"
        >
          <Headline
            lines={s.headline}
            accent={s.headlineAccent}
            className="mx-auto max-w-[16ch] text-h2"
          />
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
          className="mt-[var(--space-block)] grid gap-x-16 gap-y-14 border-t border-ink/12 pt-14 lg:grid-cols-2 lg:gap-x-24"
        >
          <div>
            <h3 className="tech-sm text-ink-3">O que está incluído</h3>
            <ul className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2">
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
                    {term.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>

        {/*
          O preço fecha a seção, depois da lista do que está incluído: o
          briefing pede o valor claro, mas a ordem de venda é valor entregue
          primeiro, valor cobrado depois.

          Ele estava como uma linha da lista de Condições, no mesmo corpo de
          "Entrega" e "Requisitos" — a informação que decide a compra tinha o
          peso de uma nota de rodapé.

          O valor vai em text-h1, o mesmo corpo da headline do Hero. É o maior
          número da página porque é a informação que decide a compra. "Oferta
          extremamente limpa", no briefing, pede ausência de caixa, sombra e
          fundo próprio — não pede discrição. Limpo não é pequeno, e um preço
          tímido no fim de uma página de vendas lê como preço escondido.
        */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.65, ease, delay: 0.14 }}
          className="mt-[var(--space-block)] border-t border-ink/12 pt-16 text-center"
        >
          <p className="tech-sm text-ink-3">{s.price.label}</p>

          <p className="headline mt-7 text-h1 text-ink">
            {/*
              Cifrão em corpo reduzido e alinhado ao topo: em corpo cheio ele
              rouba largura do número, que é o que se quer ler primeiro.
            */}
            <span className="mr-3 align-top text-[0.3em] font-semibold tracking-[-0.01em] text-ink-3">
              {s.price.currency}
            </span>
            {s.price.amount}
          </p>

          <p className="mt-6 text-lead leading-[1.5] text-ink-2">{s.price.terms}</p>

          <ul className="mt-10 flex flex-wrap justify-center gap-3">
            {s.price.methods.map((m) => (
              <li key={m} className="tech-sm border border-ink/20 px-4 py-3 text-ink-2">
                {m}
              </li>
            ))}
          </ul>

          <div className="mt-12 flex justify-center">
            <CTA href={brand.checkoutUrl}>{s.cta}</CTA>
          </div>

          <p className="tech-sm mt-8 text-ink-3">{s.price.note}</p>
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
