import Link from "next/link";
import { LogoMark } from "@/components/brand/Logo";
import { Container, Pending } from "@/components/brand/primitives";
import type { LegalBlock, LegalSection } from "@/content/legal";
import { RASCUNHO_AVISO } from "@/content/legal";

/**
 * Layout dos documentos legais.
 *
 * Medida estreita e sem animação de entrada: aqui o objetivo é leitura e
 * consulta, não persuasão. Mantém a tipografia e a superfície osso da marca
 * para que as páginas não pareçam de outro produto, mas abre mão da escala
 * editorial da landing — nenhuma headline gigante, nenhuma placa de imagem.
 */
export function LegalDoc({
  title,
  intro,
  updatedAt,
  children,
}: {
  title: string;
  intro: string;
  updatedAt: string;
  children: React.ReactNode;
}) {
  return (
    <main className="bg-bone">
      <Container className="py-[var(--space-surface)]">
        <Link href="/" className="inline-block transition-opacity hover:opacity-70">
          <LogoMark tone="light" className="h-8" standalone />
        </Link>

        <div className="mt-[var(--space-mark)] max-w-[72ch]">
          <h1 className="headline text-h2 text-ink">{title}</h1>
          <p className="mt-7 text-lead leading-[1.5] text-ink-2">{intro}</p>
          <p className="tech-sm mt-8 text-ink-3">Atualizado em {updatedAt}</p>

          {/*
            Aviso de rascunho no topo, não no rodapé. Documento legal
            incompleto que não se anuncia como incompleto é pior do que
            documento nenhum: passa a impressão de compromisso já assumido.
          */}
          <p className="mt-10 border-l-2 border-red pl-5 text-[0.9375rem] leading-[1.6] text-ink-2">
            {RASCUNHO_AVISO}
          </p>

          {children}
        </div>

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

/** Cabeçalho de parte, para documentos divididos em blocos. */
export function LegalPart({ label, title }: { label: string; title: string }) {
  return (
    <div className="mt-[var(--space-block)] border-t border-ink/12 pt-10">
      <p className="tech-sm text-red">{label}</p>
      <h2 className="headline mt-4 text-h3 text-ink">{title}</h2>
    </div>
  );
}

export function LegalSections({ sections }: { sections: readonly LegalSection[] }) {
  return (
    <>
      {sections.map((section) => (
        <section key={section.title} className="mt-12">
          <h3 className="text-[1.0625rem] font-semibold tracking-[-0.01em] text-ink">
            {section.title}
          </h3>
          <div className="mt-4 flex flex-col gap-4">
            {section.blocks.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}

function Block({ block }: { block: LegalBlock }) {
  if (block.kind === "pending") {
    return (
      <div>
        <Pending>{block.label}</Pending>
      </div>
    );
  }

  if (block.kind === "sub") {
    return <p className="text-[0.9375rem] leading-[1.7] text-ink">{block.text}</p>;
  }

  if (block.kind === "list") {
    return (
      <ul className="flex flex-col gap-2.5">
        {block.items.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-[0.9375rem] leading-[1.7] text-ink-2"
          >
            <span className="mt-[0.65em] h-1 w-1 shrink-0 rounded-full bg-red" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    );
  }

  return <p className="text-[0.9375rem] leading-[1.7] text-ink-2">{block.text}</p>;
}
