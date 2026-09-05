import Image from "next/image";
import { site } from "@/content/site";

/**
 * A MARCA — três chevrons, o último em vermelho.
 *
 * São dois arquivos, um por superfície, porque o símbolo não é monocromático:
 * os dois primeiros chevrons acompanham a cor do fundo e o terceiro é sempre
 * vermelho. Não dá para resolver isso recolorindo um arquivo só.
 *
 * `tone` descreve a SUPERFÍCIE em que a marca se apoia, não a cor dela — é a
 * mesma convenção de SectionMark e MediaPlate:
 *
 *   tone="dark"   superfície grafite  →  chevrons em branco
 *   tone="light"  superfície osso     →  chevrons em tinta
 *
 * Os arquivos são os originais do cliente com o padding transparente
 * removido. A arte não foi tocada: o recorte foi conferido pixel a pixel
 * contra a origem. O padding tinha 88px à esquerda contra 68 à direita, o
 * que jogava o símbolo fora do eixo em qualquer caixa que o contivesse.
 */

const MARK = {
  dark: { src: "/image/logo-simulador-fundo-escuro.png", w: 354, h: 178 },
  light: { src: "/image/logo-simulador-fundo-claro.png", w: 358, h: 180 },
} as const;

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function LogoMark({
  tone = "light",
  className,
  priority = false,
  /**
   * Só quando o símbolo aparece sem o nome ao lado. Dentro de um lockup ele é
   * decorativo — o nome já está escrito em texto, e um alt aqui faria o leitor
   * de tela anunciar a marca duas vezes seguidas.
   */
  standalone = false,
}: {
  tone?: "light" | "dark";
  className?: string;
  priority?: boolean;
  standalone?: boolean;
}) {
  const m = MARK[tone];

  return (
    <Image
      src={m.src}
      alt={standalone ? site.brand.short : ""}
      aria-hidden={standalone ? undefined : true}
      width={m.w}
      height={m.h}
      priority={priority}
      /* Altura manda, largura acompanha: as duas versões têm a mesma
         proporção (1,989:1), então trocar de superfície não desloca nada. */
      className={cx("w-auto", className)}
    />
  );
}
