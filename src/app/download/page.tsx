import type { Metadata } from "next";
import Link from "next/link";
import { LogoMark } from "@/components/brand/Logo";
import { CTA, Container, SectionMark } from "@/components/brand/primitives";
import { download } from "@/content/download";

export const metadata: Metadata = {
  title: "Baixe o simulador — Simulador de Emergências Cardiológicas",
  description:
    "Página de acesso ao download do Simulador de Emergências Cardiológicas após a confirmação da compra.",
  robots: { index: false, follow: false },
};

/**
 * /download — entrega pós-compra.
 *
 * Mesma superfície e tipografia da landing, mas com o registro das páginas de
 * consulta (termos, privacidade): medida estreita, sem animação de entrada,
 * link de volta no topo e no rodapé. É uma página de instrução, não de venda.
 */
export default function DownloadPage() {
  const { builds, access, support } = download;

  return (
    <main className="bg-bone">
      <Container className="py-[var(--space-surface)]">
        <Link href="/" className="inline-block transition-opacity hover:opacity-70">
          <LogoMark tone="light" className="h-8" standalone />
        </Link>

        <div className="mt-[var(--space-mark)] max-w-[72ch]">
          <SectionMark label={download.eyebrow} />
          <h1 className="headline mt-[var(--space-mark)] text-h2 text-ink">
            {download.headline}
          </h1>
          <p className="mt-7 text-lead leading-[1.5] text-ink-2">{download.lead}</p>
        </div>

        {/* -------------------------------------------------- instaladores */}
        <div className="mt-[var(--space-block)] grid gap-x-16 gap-y-12 border-t border-ink/12 pt-14 sm:grid-cols-2 sm:gap-x-24">
          {builds.map((b, i) => (
            <div
              key={b.os}
              className={
                i === 0
                  ? undefined
                  : "border-t border-ink/12 pt-12 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-16 xl:pl-24"
              }
            >
              <h2 className="tech-sm text-ink-3">{b.os}</h2>
              <p className="mt-3 text-[0.9375rem] leading-[1.5] text-ink-2">{b.note}</p>
              <CTA href={b.href} className="mt-7 w-full sm:w-auto">
                {b.cta}
              </CTA>
            </div>
          ))}
        </div>

        {/* -------------------------------------------------- como acessar */}
        <section
          aria-label={access.kicker}
          className="mt-[var(--space-block)] border-t border-ink/12 pt-14"
        >
          <SectionMark label={access.kicker} />
          <ol className="mt-[var(--space-mark)] max-w-[60ch]">
            {access.steps.map((step, i) => (
              <li
                key={step}
                className="flex gap-5 border-t border-ink/12 py-[1.125rem] text-[0.9375rem] leading-[1.5] text-ink-2 first:border-t-0 first:pt-0 last:pb-0"
              >
                <span className="num shrink-0 text-[0.9375rem] text-ink-3">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* -------------------------------------------------- suporte */}
        <section
          aria-label={support.kicker}
          className="mt-[var(--space-block)] border-t border-ink/12 pt-14"
        >
          <SectionMark label={support.kicker} />
          <p className="mt-[var(--space-mark)] max-w-[52ch] text-[0.9375rem] leading-[1.5] text-ink-2">
            {support.body}
          </p>
          <a
            href={`mailto:${support.email}`}
            className="mt-3 inline-block text-[0.9375rem] text-ink transition-colors hover:text-red"
          >
            {support.email}
          </a>
        </section>

        <div className="mt-[var(--space-block)] border-t border-ink/12 pt-8">
          <Link
            href="/"
            className="text-[0.9375rem] text-ink-2 transition-colors hover:text-ink"
          >
            Voltar para a página do simulador
          </Link>
        </div>
      </Container>
    </main>
  );
}
