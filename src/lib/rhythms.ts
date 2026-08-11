/**
 * Geração de traçados eletrocardiográficos em código.
 *
 * sample(t) devolve amplitude normalizada (~ -1 a 1) para o instante t em segundos.
 */

/** Curva gaussiana — base de cada deflexão (P, Q, R, S, T). */
function bump(x: number, center: number, width: number, amplitude: number): number {
  const d = x - center;
  return amplitude * Math.exp(-(d * d) / (2 * width * width));
}

/** Fase [0,1) dentro de um ciclo de `bpm` batimentos por minuto. */
function phase(t: number, bpm: number): number {
  const period = 60 / bpm;
  return (t % period) / period;
}

export type PatientState = "estável" | "instável" | "sem pulso";

export interface Rhythm {
  id: string;
  label: string;
  full: string;
  bpm: number | null;
  bp: string;
  spo2: string;
  state: PatientState;
  sample: (t: number) => number;
}

/* ---------------------------------------------------------------- */

const sinus: Rhythm = {
  id: "sinus",
  label: "Ritmo sinusal",
  full: "Ritmo sinusal normal",
  bpm: 72,
  bp: "124/78",
  spo2: "98",
  state: "estável",
  sample: (t) => {
    const p = phase(t, 72);
    return (
      bump(p, 0.15, 0.024, 0.1) + // P
      bump(p, 0.243, 0.007, -0.08) + // Q
      bump(p, 0.268, 0.0075, 1) + // R
      bump(p, 0.298, 0.011, -0.24) + // S
      bump(p, 0.45, 0.036, 0.22) // T
    );
  },
};

const vt: Rhythm = {
  id: "vt",
  label: "TV monomórfica",
  full: "Taquicardia ventricular monomórfica",
  bpm: 191,
  bp: "76/44",
  spo2: "88",
  state: "instável",
  sample: (t) => {
    const p = phase(t, 191);
    // Complexos largos, sem onda P, morfologia uniforme.
    return bump(p, 0.3, 0.058, 0.94) + bump(p, 0.62, 0.08, -0.6);
  },
};

const vf: Rhythm = {
  id: "vf",
  label: "Fibrilação ventricular",
  full: "Fibrilação ventricular",
  bpm: null,
  bp: "—",
  spo2: "—",
  state: "sem pulso",
  sample: (t) => {
    // Atividade caótica: soma de senoides incomensuráveis.
    const a = Math.sin(2 * Math.PI * 4.3 * t);
    const b = Math.sin(2 * Math.PI * 7.1 * t + 1.1);
    const c = Math.sin(2 * Math.PI * 11.9 * t + 2.4);
    const envelope = 0.62 + 0.38 * Math.sin(2 * Math.PI * 1.27 * t);
    return (0.52 * a + 0.3 * b + 0.16 * c) * envelope;
  },
};

const avb3: Rhythm = {
  id: "avb3",
  label: "BAV de 3º grau",
  full: "Bloqueio atrioventricular total",
  bpm: 38,
  bp: "82/50",
  spo2: "92",
  state: "instável",
  sample: (t) => {
    // Átrios e ventrículos dissociados: ondas P independentes do QRS.
    const pAtrial = phase(t, 82);
    const pVent = phase(t, 38);
    return (
      bump(pAtrial, 0.16, 0.03, 0.13) +
      bump(pVent, 0.25, 0.012, 0.82) +
      bump(pVent, 0.29, 0.016, -0.2) +
      bump(pVent, 0.44, 0.05, 0.18)
    );
  },
};

export const RHYTHMS = { sinus, vt, vf, avb3 } as const;

/** Sequência exibida no Hero — abre estável e deteriora, como um caso real. */
export const HERO_SEQUENCE: Rhythm[] = [sinus, vt, vf, avb3];
