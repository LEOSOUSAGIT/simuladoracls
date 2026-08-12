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
    <section id="por-que-pratica" className="bg-bone py-[var(--space-surface)]">
      <Container>
        <SectionMark label={why.kicker} />

        {/* Headline + intro em colunas desiguais. */}
        <div className="mt-[var(--space-mark)] grid gap-x-12 gap-y-9 lg:grid-cols-12">
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
            /*
              Abertura de seção, padrão da página: o parágrafo entra em
              text-lead e centrado na altura da headline, nunca em corpo
              pequeno ancorado na base. Em corpo de texto ele lia como legenda
              perdida no canto, e a coluna direita parecia esperar conteúdo que
              nunca chegava.
            */
            className="max-w-[40ch] self-center text-lead leading-[1.5] text-ink-2 lg:col-span-5 lg:col-start-8"
          >
            {why.intro}
          </motion.p>
        </div>

        {/* Progressão: reconhecer → interpretar → decidir → agir */}
        <div className="relative mt-[var(--space-block)]">
          {/*
            Régua neutra. Havia aqui uma barra vermelha que entrava da esquerda
            e ficava: a animação terminava cobrindo a linha inteira, então o
            que sobrava era uma régua vermelha permanente de ponta a ponta
            atravessando a seção.
          */}
          <div className="h-px w-full bg-ink/12" />

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
                className="border-b border-ink/12 pt-9 pb-14 sm:pr-10 xl:border-r xl:border-b-0 xl:px-10 xl:first:pl-0 xl:last:border-r-0 xl:last:pr-0"
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
          /*
            Fechos de seção ocupam a largura inteira do container, sem medida
            máxima. Presos a 22ch dentro de uma coluna de ~90ch, viravam uma
            ilha de texto num campo vazio, e o olho lia a sobra como falta.
            Centralizar não resolveu: só dividiu a mesma sobra em dois lados.
            Preenchendo a linha, não existe sobra para interpretar.
          */
          className="headline mt-[var(--space-block)] text-h2"
        >
          {why.closing.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </motion.p>
      </Container>
    </section>
  );
}
