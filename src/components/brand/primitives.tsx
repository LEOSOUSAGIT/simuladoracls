import Image from "next/image";
import type { ReactNode } from "react";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

/* ---------------------------------------------------------------- */

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cx("container-page", className)}>{children}</div>;
}

/**
 * Marcador de seção: rótulo e régua fina.
 *
 * Sem índice numérico de propósito. As etapas dentro das seções já usam
 * 01–04 para descrever sequências reais; numerar as seções na mesma
 * tipografia criava duas contagens concorrentes e o leitor via saltos
 * inexistentes (…03 Prática 3D, 05 O que você vai praticar).
 */
export function SectionMark({
  label,
  tone = "light",
}: {
  label: string;
  tone?: "light" | "dark";
}) {
  const line = tone === "light" ? "bg-ink/20" : "bg-white/20";
  const lbl = tone === "light" ? "text-ink-2" : "text-white/55";

  return (
    <div className="flex items-center gap-4">
      <span className={cx("h-px w-10 shrink-0", line)} aria-hidden />
      <span className={cx("tech-sm", lbl)}>{label}</span>
    </div>
  );
}

/**
 * Etiqueta técnica solta — usada em réguas de instrumento e anotações de cena.
 */
export function TechLabel({
  children,
  tone = "dark",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={cx(
        "tech-sm",
        tone === "light" ? "text-ink-3" : "text-white/45",
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ---------------------------------------------------------------- */

type CTAProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "ghost-light" | "ghost-dark";
  className?: string;
};

export function CTA({ children, href, variant = "primary", className }: CTAProps) {
  const base =
    "group inline-flex items-center justify-center gap-2.5 h-13 px-7 text-[0.9375rem] font-medium tracking-[-0.01em] transition-colors duration-200 will-change-transform";

  const styles: Record<NonNullable<CTAProps["variant"]>, string> = {
    primary: "bg-red text-bone hover:bg-red-deep",
    "ghost-light": "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-bone",
    "ghost-dark": "border border-white/20 text-bone hover:border-white/60 hover:bg-white/5",
  };

  return (
    <a href={href} className={cx(base, styles[variant], className)}>
      {children}
      <svg
        width="14"
        height="10"
        viewBox="0 0 14 10"
        fill="none"
        aria-hidden
        className="transition-transform duration-200 group-hover:translate-x-1"
      >
        <path
          d="M9 1l4 4-4 4M13 5H0"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="square"
        />
      </svg>
    </a>
  );
}

/* ---------------------------------------------------------------- */

type MediaKind = "Screenshot" | "Vídeo" | "Asset do simulador";

/**
 * Espaço reservado para um ativo real do simulador.
 *
 * Regra do projeto: onde não existe screenshot ou vídeo real, não se desenha
 * nada que possa ser confundido com uma tela do produto — nem mockup, nem
 * interface recriada em código, nem arte abstrata representando a simulação.
 * O layout se organiza ao redor deste espaço; a arte vem depois, do produto.
 */
export function MediaPlaceholder({
  kind,
  hint,
  tone = "dark",
}: {
  kind: MediaKind;
  hint?: string;
  tone?: "light" | "dark";
}) {
  const border = tone === "dark" ? "border-white/15" : "border-ink/20";
  const surface = tone === "dark" ? "bg-white/[0.015]" : "bg-ink/[0.015]";
  const primary = tone === "dark" ? "text-white/40" : "text-ink-3";
  const secondary = tone === "dark" ? "text-white/25" : "text-ink-3/70";

  return (
    <div
      className={cx(
        "flex h-full w-full flex-col items-center justify-center gap-2.5 border border-dashed px-6 text-center",
        border,
        surface,
      )}
    >
      <span className={cx("tech-sm", primary)}>{kind}</span>
      {hint && <span className={cx("text-[0.8125rem]", secondary)}>{hint}</span>}
    </div>
  );
}

export type Media = {
  src: string | null;
  /** Dimensões nativas do arquivo. Definem a proporção — nunca se recorta. */
  w: number;
  h: number;
  alt: string;
  kind: MediaKind;
  hint?: string;
};

/**
 * PLACA — o único jeito de mostrar uma captura do simulador.
 *
 * A versão anterior sangrava as capturas de borda a borda e forçava 16:9 em
 * arquivos que não eram 16:9. O resultado lia como fragmento recortado de
 * outra coisa, não como a tela do produto.
 *
 * Aqui a captura entra inteira, na proporção nativa do arquivo (por isso
 * `w`/`h` vêm do conteúdo), apoiada sobre uma placa de grafite com margem
 * visível e cantos de registro. A margem é o que transforma "imagem cortada"
 * em "tela apresentada": o olho lê a folga como enquadramento deliberado.
 *
 * Os cantos são marcas de registro gráfico, não interface — não há risco de
 * confundi-los com uma tela do simulador. O canto superior esquerdo é
 * vermelho: é a marca que diz onde a leitura começa.
 */
export function MediaPlate({
  media,
  tone = "dark",
  sizes = "(min-width: 1440px) 1340px, 100vw",
  priority = false,
  className,
  children,
}: {
  media: Media;
  /** Superfície em que a placa se apoia. No osso, ela ganha sombra. */
  tone?: "light" | "dark";
  sizes?: string;
  priority?: boolean;
  className?: string;
  /** Sobreposições ancoradas à imagem (anotações da cena). */
  children?: ReactNode;
}) {
  return (
    <figure className={cx("relative", className)}>
      <PlateFrame tone={tone}>
        <div className="relative overflow-hidden bg-graphite">
          {media.src ? (
            <Image
              src={media.src}
              alt={media.alt}
              width={media.w}
              height={media.h}
              sizes={sizes}
              priority={priority}
              className="block h-auto w-full"
            />
          ) : (
            <div className="w-full" style={{ aspectRatio: `${media.w} / ${media.h}` }}>
              <MediaPlaceholder kind={media.kind} hint={media.hint} tone="dark" />
            </div>
          )}
          {children}
        </div>
      </PlateFrame>
    </figure>
  );
}

/**
 * A moldura da placa, sem a mídia. Existe separada porque a versão explorável
 * precisa da mesma casca com um miolo interativo dentro.
 */
export function PlateFrame({
  tone = "dark",
  children,
}: {
  tone?: "light" | "dark";
  children: ReactNode;
}) {
  return (
    <div
      className={cx(
        "relative bg-graphite-2 p-2.5 ring-1 ring-inset ring-white/10 sm:p-4 lg:p-5",
        tone === "light" && "shadow-[0_40px_80px_-32px_rgba(11,12,14,0.45)]",
      )}
    >
      <div className="relative">
        {children}
        <RegistrationMarks />
      </div>
    </div>
  );
}

/** Cantos de registro: enquadram a captura sem tocar nela. */
function RegistrationMarks() {
  const v = "absolute h-4 w-px";
  const h = "absolute h-px w-4";
  const tone = "bg-white/25";

  return (
    <div className="pointer-events-none absolute -inset-2 hidden sm:block" aria-hidden>
      <span className={cx(v, "top-0 left-0 bg-red")} />
      <span className={cx(h, "top-0 left-0 bg-red")} />
      <span className={cx(v, "top-0 right-0", tone)} />
      <span className={cx(h, "top-0 right-0", tone)} />
      <span className={cx(v, "bottom-0 left-0", tone)} />
      <span className={cx(h, "bottom-0 left-0", tone)} />
      <span className={cx(v, "right-0 bottom-0", tone)} />
      <span className={cx(h, "right-0 bottom-0", tone)} />
    </div>
  );
}

/* ---------------------------------------------------------------- */

/**
 * Marcador de informação que ainda depende do cliente.
 * Preferimos expor a lacuna a inventar valor — preço, prazo e requisitos
 * nunca devem ser preenchidos por suposição.
 */
export function Pending({ children }: { children: string }) {
  return (
    <span className="tech-sm inline-flex items-center gap-2 border border-dashed border-ink/25 px-2 py-1.5 text-ink-3">
      <span className="h-1 w-1 shrink-0 rounded-full bg-ink/30" aria-hidden />
      {children}: a definir
    </span>
  );
}

/* ---------------------------------------------------------------- */

/**
 * Headline com uma linha destacada em vermelho.
 * O vermelho aparece só onde existe tensão ou decisão — nunca decorativo.
 */
export function Headline({
  lines,
  accent,
  className,
  tone = "light",
  as: Tag = "h2",
}: {
  lines: readonly string[];
  accent?: string;
  className?: string;
  tone?: "light" | "dark";
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag className={cx("headline", tone === "light" ? "text-ink" : "text-bone", className)}>
      {lines.map((line) => (
        <span key={line} className="block">
          {accent === line ? <span className="text-red">{line}</span> : line}
        </span>
      ))}
    </Tag>
  );
}
