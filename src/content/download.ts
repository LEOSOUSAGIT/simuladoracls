/**
 * Página pós-compra — /download.
 *
 * Rota fora da navegação principal e fora do índice de busca (noindex).
 * O comprador chega aqui pela Hotmart, depois de confirmado o pagamento.
 *
 * Mesma regra do resto do projeto: copy e ativos vivem aqui, o layout só
 * os organiza. Os links dos instaladores são os arquivos reais no Firebase
 * Storage — trocar de build é trocar a URL, sem tocar em componente.
 */

export const download = {
  slug: "/download",

  eyebrow: "Acesso ao simulador",
  headline: "Baixe o simulador",
  lead: "Escolha a versão correspondente ao seu dispositivo. A sua licença individual é enviada para o e-mail utilizado na compra e será solicitada na primeira ativação.",

  builds: [
    {
      os: "Windows",
      note: "Versão para computador.",
      cta: "Baixar para Windows",
      href: "https://firebasestorage.googleapis.com/v0/b/acls-db355.firebasestorage.app/o/releases%2FAcls%20PC.zip?alt=media&token=4f610d8c-f86e-4eeb-9b8d-85c2993aa924",
    },
    {
      os: "Android",
      note: "Versão para dispositivos Android.",
      cta: "Baixar para Android",
      href: "https://firebasestorage.googleapis.com/v0/b/acls-db355.firebasestorage.app/o/releases%2FAcls.apk?alt=media&token=fd276ca9-342c-4520-927f-071e5411a12c",
    },
  ],

  access: {
    kicker: "Como acessar",
    steps: [
      "Baixe a versão correspondente ao seu dispositivo.",
      "Instale ou abra o simulador.",
      "Informe a licença recebida por e-mail.",
      "A licença é validada na primeira ativação.",
    ],
  },

  support: {
    kicker: "Suporte",
    body: "Dúvidas sobre o download ou a ativação da licença.",
    email: "suporte@simuladoracls.com",
  },
} as const;

export type Download = typeof download;
