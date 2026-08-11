import { RHYTHMS, type Rhythm } from "./rhythms";

/**
 * Amostra de identificação de ritmos jogável na própria landing.
 *
 * As alternativas estão em ordem fixa (e não embaralhadas em runtime) para
 * evitar divergência entre servidor e cliente na hidratação.
 */
export interface QuizItem {
  rhythm: Rhythm;
  options: string[];
  answer: number;
  /** Uma frase que ensina algo, exibida depois da resposta. */
  explanation: string;
}

export const QUIZ: QuizItem[] = [
  {
    rhythm: RHYTHMS.vt,
    options: [
      "Taquicardia sinusal",
      "Torsades de pointes",
      "Taquicardia ventricular monomórfica",
      "Flutter atrial",
    ],
    answer: 2,
    explanation:
      "Complexos largos, regulares e de morfologia uniforme, em alta frequência. Com paciente instável, a conduta é cardioversão sincronizada.",
  },
  {
    rhythm: RHYTHMS.vf,
    options: [
      "Assistolia",
      "Artefato de movimento",
      "Ritmo agônico",
      "Fibrilação ventricular",
    ],
    answer: 3,
    explanation:
      "Atividade caótica, sem complexos identificáveis e sem pulso. É ritmo chocável: desfibrilação imediata e RCP de alta qualidade.",
  },
  {
    rhythm: RHYTHMS.avb3,
    options: [
      "BAV de 3º grau (bloqueio AV total)",
      "Bradicardia sinusal",
      "Ritmo juncional",
      "BAV de 1º grau",
    ],
    answer: 0,
    explanation:
      "Ondas P e complexos QRS em frequências próprias, sem relação entre si: átrios e ventrículos dissociados.",
  },
  {
    rhythm: RHYTHMS.sinus,
    options: [
      "Fibrilação atrial",
      "Ritmo sinusal",
      "Ritmo idioventricular",
      "Taquicardia supraventricular",
    ],
    answer: 1,
    explanation:
      "Onda P precedendo cada QRS, intervalos regulares e frequência dentro da faixa normal. Reconhecer o normal é o que torna o anormal evidente.",
  },
];
