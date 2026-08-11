"use client";

import { useState, useSyncExternalStore } from "react";
import { TYPE_OPTIONS, type TypeOptionId } from "@/lib/fonts";

const STORAGE_KEY = "sim-type";
const DEFAULT: TypeOptionId = "tecnica";

/**
 * A identidade ativa é lida do atributo data-type do <html>, que o script de
 * bootstrap no layout já definiu antes da primeira pintura. Ler do DOM em vez
 * de duplicar em estado evita divergência de hidratação.
 */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-type"],
  });
  return () => observer.disconnect();
}

function readActive(): TypeOptionId {
  return (document.documentElement.getAttribute("data-type") as TypeOptionId) ?? DEFAULT;
}

/**
 * FERRAMENTA DE DECISÃO — não faz parte da landing final.
 *
 * Permite comparar as três identidades tipográficas aplicadas à página real.
 * Assim que a escolha estiver fechada: apagar este componente, manter apenas
 * o bloco correspondente em globals.css e remover as fontes não usadas de
 * lib/fonts.ts e do layout.
 */
export function TypeSwitcher() {
  const active = useSyncExternalStore(subscribe, readActive, () => DEFAULT);
  const [open, setOpen] = useState(true);

  function choose(id: TypeOptionId) {
    document.documentElement.setAttribute("data-type", id);
    localStorage.setItem(STORAGE_KEY, id);
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="tech-sm fixed bottom-4 left-4 z-50 border border-white/20 bg-graphite/90 px-3 py-2.5 text-white/60 backdrop-blur-sm hover:text-bone"
      >
        Tipografia
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 w-[min(21rem,calc(100vw-2rem))] border border-white/15 bg-graphite/95 backdrop-blur-md">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <span className="tech-sm text-white/40">Identidade tipográfica</span>
        <button
          onClick={() => setOpen(false)}
          className="tech-sm text-white/40 hover:text-bone"
          aria-label="Fechar seletor"
        >
          ✕
        </button>
      </div>

      <div className="flex flex-col">
        {TYPE_OPTIONS.map((opt) => {
          const selected = active === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => choose(opt.id)}
              data-type={opt.id}
              className={`flex flex-col items-start gap-1 border-b border-white/[0.07] px-4 py-3.5 text-left transition-colors last:border-b-0 ${
                selected ? "bg-white/[0.06]" : "hover:bg-white/[0.03]"
              }`}
            >
              <span className="flex w-full items-center justify-between gap-3">
                <span
                  className="text-[1.0625rem] font-semibold tracking-[-0.03em] text-bone"
                  style={{ fontFamily: "var(--font-sans-active)" }}
                >
                  {opt.name}
                </span>
                <span
                  className={`h-1.5 w-1.5 rounded-full ${selected ? "bg-red" : "bg-white/20"}`}
                />
              </span>
              <span
                className="text-[0.6875rem] tracking-[0.14em] text-white/40 uppercase"
                style={{ fontFamily: "var(--font-mono-active)" }}
              >
                {opt.pair}
              </span>
              <span className="mt-1 text-[0.8125rem] leading-snug text-white/45">{opt.note}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
