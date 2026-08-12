"use client";

import { motion } from "motion/react";
import { ExplorePlate } from "@/components/brand/ExplorePlate";
import { Container, Headline, SectionMark } from "@/components/brand/primitives";
import { site } from "@/content/site";

const ease = [0.2, 0.7, 0.3, 1] as const;

/**
 * 03 — A cena. Superfície grafite, leitura do ambiente da simulação.
 *
 * As labels técnicas só existem sobre uma captura real: anotar um espaço
 * vazio criaria a impressão de uma interface que ainda não temos. Sem o
 * ativo, os recursos aparecem como lista de texto abaixo do slot.
 */
export function MeetSimulator() {
  const { simulator } = site;
  const { scene, labels } = simulator;

  return (
    <section id="simulador" className="grain relative overflow-hidden bg-graphite">
      {/*
        Troca de superfície: osso → grafite. Cada lado paga `--space-surface`,
        nunca `--space-section`. A mudança de cor já separa as seções; somar
        dois intervalos cheios era o que abria o buraco no topo.

        z-2 tira o conteúdo de baixo da camada de grão. O granulado existe
        para dar matéria à superfície escura, não para sujar uma captura.
      */}
      <Container className="relative z-[2] py-[var(--space-surface)]">
        <SectionMark label={simulator.kicker} tone="dark" />

        <div className="mt-[var(--space-mark)] grid gap-x-12 gap-y-9 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-7"
          >
            <Headline
              lines={simulator.headline}
              accent={simulator.headlineAccent}
              tone="dark"
              className="text-h2"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, ease, delay: 0.12 }}
            /*
              `text-lead` e centrado na altura da headline. Em corpo padrão e
              alinhado ao topo, o parágrafo ocupava um terço da altura da
              headline e deixava um vazio grande embaixo dele; a medida mais
              fechada faz o bloco crescer até quase empatar com o título ao
              lado, e aí a centralização passa a ter o que equilibrar.
            */
            className="max-w-[40ch] self-center text-lead leading-[1.5] text-white/60 lg:col-span-5"
          >
            {simulator.body}
          </motion.p>
        </div>

        {/* ---------------------------------------------- a cena */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, ease }}
          className="mt-[var(--space-block)]"
        >
          <ExplorePlate media={scene} hint={simulator.exploreHint}>
            {/* Leitura técnica do ambiente — só sobre captura real. */}
            {scene.src && (
              <div className="pointer-events-none absolute inset-0 hidden lg:block">
                {labels.map((label, i) => (
                  <motion.div
                    key={label.id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.5, ease, delay: 0.35 + i * 0.11 }}
                    className={`absolute flex items-center gap-2.5 ${
                      label.side === "left" ? "flex-row-reverse" : ""
                    }`}
                    /*
                      Ancoragem sem transform: `right` no lugar de
                      translateX(-100%) porque o Motion controla a propriedade
                      transform do elemento. `marginTop` negativo centra o
                      ponto vermelho na coordenada, em vez de pendurar o
                      rótulo a partir dela.
                    */
                    style={{
                      left: label.side === "left" ? undefined : `${label.x}%`,
                      right: label.side === "left" ? `${100 - label.x}%` : undefined,
                      top: `${label.y}%`,
                      marginTop: "-0.875rem",
                    }}
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
                    <span className="h-px w-6 shrink-0 bg-white/40" />
                    {/*
                      Fundo escuro por trás do texto: a sala tem parede clara,
                      piso claro e equipamento branco, então branco puro some
                      em boa parte do quadro.
                    */}
                    <span className="tech-sm bg-graphite/80 px-2.5 py-1.5 whitespace-nowrap text-bone backdrop-blur-[2px]">
                      {label.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            )}
          </ExplorePlate>
        </motion.div>

        {/* ---------------------------------------------- fecho */}
        {/*
          Fecho da seção em text-h2, o mesmo corpo dos fechos das seções 02 e
          06. Em text-h3 a frase tinha metade do peso das irmãs e ficava solta
          na largura da coluna.
        */}
        <motion.blockquote
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.7, ease }}
          className="headline mt-[var(--space-block)] text-h2 text-bone"
        >
          <span className="text-red">“</span>
          {simulator.quote}
          <span className="text-red">”</span>
        </motion.blockquote>
      </Container>
    </section>
  );
}
