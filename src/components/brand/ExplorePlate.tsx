"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent, ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { PlateFrame, type Media } from "./primitives";

/**
 * Placa explorável: arrastar dá uma olhada leve pela cena, mudando o ângulo.
 *
 * Nada é gerado. O efeito move e inclina os pixels reais da captura — não há
 * geometria inventada, interface recriada nem trecho de sala que o simulador
 * não tenha renderizado.
 *
 * Em repouso a imagem aparece inteira, sem recorte: a ampliação só acontece
 * durante o arraste. É o que evita a troca ruim de "ganhei exploração, perdi
 * as bordas da captura para sempre".
 */

/** Inclinação máxima. Poucos graus: acima disso o plano denuncia que é plano. */
const TILT = 3.2;
/** Deslocamento lateral máximo, em % da largura. */
const PAN = 3.4;
/** Ampliação durante o arraste — a folga que existe para ser revelada. */
const ZOOM = 0.1;

const SPRING = { stiffness: 150, damping: 24, mass: 0.7 };

function clamp(v: number) {
  return Math.max(-1, Math.min(1, v));
}

export function ExplorePlate({
  media,
  hint,
  sizes = "(min-width: 1440px) 1340px, 100vw",
  children,
}: {
  media: Media;
  /** Convite de uso, some depois do primeiro arraste. */
  hint: string;
  sizes?: string;
  /** Anotações da cena. Somem enquanto se olha em volta. */
  children?: ReactNode;
}) {
  const reduce = useReducedMotion();
  const box = useRef<HTMLDivElement>(null);
  const drag = useRef<{ id: number; x: number; y: number } | null>(null);
  const [used, setUsed] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const grab = useMotionValue(0);

  const sx = useSpring(mx, SPRING);
  const sy = useSpring(my, SPRING);
  const sg = useSpring(grab, SPRING);

  const rotateY = useTransform(sx, [-1, 1], [-TILT, TILT]);
  const rotateX = useTransform(sy, [-1, 1], [TILT, -TILT]);
  const x = useTransform(sx, [-1, 1], [`${PAN}%`, `${-PAN}%`]);
  const y = useTransform(sy, [-1, 1], [`${PAN * 0.7}%`, `${-PAN * 0.7}%`]);
  const scale = useTransform(sg, [0, 1], [1, 1 + ZOOM]);

  /*
    As anotações ficam fora da camada transformada: dentro dela, o zoom
    aumentaria o corpo do texto junto com a cena. Elas somem durante o arraste
    porque nesse momento ninguém está lendo rótulo, está olhando a sala.
  */
  const labelOpacity = useTransform(sg, [0, 0.35], [1, 0]);
  const hintOpacity = useTransform(sg, [0, 0.35], [1, 0]);

  function onPointerDown(e: ReactPointerEvent) {
    const el = box.current;
    if (!el) return;
    el.setPointerCapture(e.pointerId);
    drag.current = { id: e.pointerId, x: e.clientX, y: e.clientY };
    grab.set(1);
    setUsed(true);
  }

  function onPointerMove(e: ReactPointerEvent) {
    const d = drag.current;
    const el = box.current;
    if (!d || !el || d.id !== e.pointerId) return;
    const r = el.getBoundingClientRect();
    mx.set(clamp((e.clientX - d.x) / (r.width * 0.4)));
    my.set(clamp((e.clientY - d.y) / (r.height * 0.4)));
  }

  function release() {
    if (!drag.current) return;
    drag.current = null;
    mx.set(0);
    my.set(0);
    grab.set(0);
  }

  const interactive = !reduce && Boolean(media.src);

  return (
    <figure className="relative">
      <PlateFrame>
        <div
          ref={box}
          onPointerDown={interactive ? onPointerDown : undefined}
          onPointerMove={interactive ? onPointerMove : undefined}
          onPointerUp={interactive ? release : undefined}
          onPointerCancel={interactive ? release : undefined}
          className={`relative overflow-hidden bg-graphite [perspective:1400px] ${
            interactive ? "cursor-grab touch-none active:cursor-grabbing" : ""
          }`}
          style={{ aspectRatio: `${media.w} / ${media.h}` }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              rotateX,
              rotateY,
              x,
              y,
              scale,
              transformStyle: "preserve-3d",
            }}
          >
            {media.src && (
              <Image
                src={media.src}
                alt={media.alt}
                fill
                sizes={sizes}
                className="object-cover"
                draggable={false}
              />
            )}
          </motion.div>

          {children && (
            <motion.div
              className="pointer-events-none absolute inset-0"
              style={{ opacity: interactive ? labelOpacity : 1 }}
            >
              {children}
            </motion.div>
          )}

          {interactive && !used && (
            <motion.div
              className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center sm:bottom-6"
              style={{ opacity: hintOpacity }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <span className="tech-sm flex items-center gap-2.5 bg-graphite/80 px-4 py-3 text-bone backdrop-blur-[2px]">
                <DragGlyph />
                {hint}
              </span>
            </motion.div>
          )}
        </div>
      </PlateFrame>
    </figure>
  );
}

function DragGlyph() {
  return (
    <svg width="16" height="8" viewBox="0 0 16 8" fill="none" aria-hidden>
      <path
        d="M3 1L1 4l2 3M13 1l2 3-2 3M1 4h14"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="square"
        opacity="0.7"
      />
    </svg>
  );
}
