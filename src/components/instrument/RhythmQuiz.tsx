"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ECGTrace } from "./ECGTrace";
import { QUIZ } from "@/lib/quiz";

const ease = [0.2, 0.7, 0.3, 1] as const;

/**
 * Identificação de ritmos jogável na própria página.
 *
 * O produto é interativo — então a landing deixa o visitante praticar em vez
 * de descrever a interatividade em texto. O traçado é o mesmo motor usado na
 * régua do Hero, desenhado em código.
 */
export function RhythmQuiz() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [done, setDone] = useState(false);

  const item = QUIZ[index];
  const answered = selected !== null;
  const correct = selected === item.answer;
  const last = index === QUIZ.length - 1;

  function next() {
    if (last) {
      setDone(true);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
  }

  function restart() {
    setIndex(0);
    setSelected(null);
    setDone(false);
  }

  if (done) {
    return (
      <div className="border border-white/12 bg-graphite-2 px-6 py-14 text-center sm:px-10 sm:py-20">
        <p className="headline mx-auto max-w-[24ch] text-h3 text-bone">
          Foram quatro traçados isolados.
        </p>
        <p className="mx-auto mt-5 max-w-[46ch] text-white/55">
          No simulador eles aparecem dentro de um caso em andamento, com um paciente que muda
          enquanto você decide — e sem quatro alternativas na tela.
        </p>
        <button
          onClick={restart}
          className="mt-9 text-[0.9375rem] text-white/50 underline underline-offset-4 transition-colors hover:text-bone"
        >
          Praticar novamente
        </button>
      </div>
    );
  }

  return (
    <div className="border border-white/12 bg-graphite-2">
      {/* Cabeçalho */}
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-7">
        <span className="tech-sm text-white/40">Identificação de ritmos</span>
        <span className="num text-[0.8125rem] text-white/40">
          {index + 1} / {QUIZ.length}
        </span>
      </div>

      {/* Traçado */}
      <div className="relative h-36 w-full border-b border-white/10 sm:h-48">
        <ECGTrace rhythm={item.rhythm} amplitude={0.3} />
      </div>

      {/* Pergunta e alternativas */}
      <div className="px-5 py-7 sm:px-7 sm:py-9">
        <p className="text-[1.0625rem] font-medium text-bone sm:text-[1.25rem]">
          Qual é o ritmo?
        </p>

        <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
          {item.options.map((option, i) => {
            const isAnswer = i === item.answer;
            const isPicked = i === selected;

            let tone = "border-white/15 text-white/75 hover:border-white/40 hover:bg-white/[0.04]";
            if (answered && isAnswer) tone = "border-signal/60 bg-signal/[0.07] text-signal";
            else if (answered && isPicked) tone = "border-red/60 bg-red/[0.07] text-red";
            else if (answered) tone = "border-white/10 text-white/30";

            return (
              <button
                key={option}
                onClick={() => !answered && setSelected(i)}
                disabled={answered}
                className={`flex min-h-13 items-center border px-4 py-3 text-left text-[0.9375rem] leading-snug transition-colors duration-200 ${tone} ${
                  answered ? "cursor-default" : "cursor-pointer"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>

        {/* Resultado */}
        <AnimatePresence initial={false}>
          {answered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease }}
              className="overflow-hidden"
            >
              <div className="mt-7 border-t border-white/10 pt-7" aria-live="polite">
                <p
                  className={`text-[0.9375rem] font-medium ${
                    correct ? "text-signal" : "text-red"
                  }`}
                >
                  {correct
                    ? "Correto."
                    : `Não é isso. O traçado é ${item.options[item.answer].toLowerCase()}.`}
                </p>
                <p className="mt-3 max-w-[62ch] text-[0.9375rem] leading-relaxed text-white/55">
                  {item.explanation}
                </p>

                <button
                  onClick={next}
                  className="mt-7 inline-flex h-12 items-center gap-2.5 border border-white/25 px-6 text-[0.9375rem] font-medium text-bone transition-colors hover:border-white/60 hover:bg-white/5"
                >
                  {last ? "Ver conclusão" : "Próximo traçado"}
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                    <path
                      d="M9 1l4 4-4 4M13 5H0"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="square"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
