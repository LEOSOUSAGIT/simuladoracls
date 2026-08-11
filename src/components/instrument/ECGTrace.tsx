"use client";

import { useEffect, useRef } from "react";
import type { Rhythm } from "@/lib/rhythms";

interface ECGTraceProps {
  rhythm: Rhythm;
  /** Velocidade de varredura em px/s. */
  speed?: number;
  /** Amplitude como fração da altura disponível. */
  amplitude?: number;
  lineWidth?: number;
  color?: string;
  className?: string;
}

/**
 * Monitor de varredura desenhado em canvas.
 *
 * Reproduz o comportamento real de um monitor de cabeceira: o traço avança da
 * esquerda para a direita e apaga o rastro imediatamente à frente do cursor.
 * Sem glow, sem gradiente — 1,5px de linha sólida, leitura instrumental.
 */
export function ECGTrace({
  rhythm,
  speed = 118,
  amplitude = 0.34,
  lineWidth = 1.5,
  color = "var(--color-signal)",
  className,
}: ECGTraceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /**
   * O ritmo vive numa ref para que a troca não reinicie o loop de desenho:
   * o traçado continua correndo e apenas muda de morfologia, como em um
   * monitor real. A sincronização acontece fora da renderização.
   */
  const rhythmRef = useRef(rhythm);
  useEffect(() => {
    rhythmRef.current = rhythm;
  }, [rhythm]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const strokeColor =
      getComputedStyle(canvas).getPropertyValue("--color-signal").trim() || "#2fd46b";

    let width = 0;
    let height = 0;
    let x = 0;
    let prevY = 0;
    let t = 0;
    let raf = 0;
    let last = 0;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function setup() {
      const rect = canvas!.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      canvas!.width = Math.floor(width * dpr);
      canvas!.height = Math.floor(height * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx!.clearRect(0, 0, width, height);
      ctx!.lineWidth = lineWidth;
      ctx!.lineJoin = "round";
      ctx!.lineCap = "round";
      ctx!.strokeStyle = color.startsWith("var(") ? strokeColor : color;
      x = 0;
      prevY = height / 2;
      if (reduced) drawStatic();
    }

    /** Sem animação: desenha uma janela fixa do traçado, de ponta a ponta. */
    function drawStatic() {
      const mid = height / 2;
      const amp = height * amplitude;
      ctx!.beginPath();
      for (let px = 0; px <= width; px += 1) {
        const y = mid - rhythmRef.current.sample(px / speed) * amp;
        if (px === 0) ctx!.moveTo(px, y);
        else ctx!.lineTo(px, y);
      }
      ctx!.stroke();
    }

    function frame(now: number) {
      if (!last) last = now;
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      const mid = height / 2;
      const amp = height * amplitude;
      const gap = 26;

      let remaining = speed * dt;
      while (remaining > 0) {
        const step = Math.min(remaining, 1);
        const fromX = x;
        const fromY = prevY;

        x += step;
        t += step / speed;

        let wrapped = false;
        if (x >= width) {
          x -= width;
          wrapped = true;
        }

        const y = mid - rhythmRef.current.sample(t) * amp;
        if (!wrapped) {
          ctx!.beginPath();
          ctx!.moveTo(fromX, fromY);
          ctx!.lineTo(x, y);
          ctx!.stroke();
        }
        prevY = y;
        remaining -= step;
      }

      // Apaga a faixa imediatamente à frente do cursor.
      ctx!.clearRect(x + 1, 0, gap, height);
      if (x + 1 + gap > width) {
        ctx!.clearRect(0, 0, x + 1 + gap - width, height);
      }

      raf = requestAnimationFrame(frame);
    }

    setup();

    const ro = new ResizeObserver(() => setup());
    ro.observe(canvas);

    // Só anima enquanto estiver em tela.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (reduced) return;
        if (entry.isIntersecting && !raf) {
          last = 0;
          raf = requestAnimationFrame(frame);
        } else if (!entry.isIntersecting && raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      },
      { threshold: 0 },
    );
    io.observe(canvas);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, [amplitude, color, lineWidth, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden
      role="presentation"
      style={{ display: "block", width: "100%", height: "100%" }}
    />
  );
}
