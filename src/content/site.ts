/**
 * Camada de conteúdo — fonte única de verdade da landing.
 *
 * Copy, ordem e ativos de cada seção vivem aqui. Trocar um screenshot,
 * ajustar uma headline ou reordenar etapas não deve exigir tocar em layout.
 *
 * Campos marcados com PENDENTE aguardam informação do cliente e são
 * renderizados como marcador visível — nunca preenchidos por suposição.
 */

/** Valor ainda não fornecido pelo cliente. Renderiza um marcador na página. */
export const PENDENTE = null;

export const site = {
  brand: {
    name: "Simulador de Emergências Cardiológicas",
    short: "Simulador ACLS",
    /** Substituir pela URL real do checkout Hotmart. */
    checkoutUrl: "#oferta",
  },

  nav: {
    label: "Simulador interativo de emergências · ACLS",
    links: [
      { label: "O simulador", href: "#simulador" },
      { label: "Como funciona", href: "#como-funciona" },
      { label: "O que você pratica", href: "#pratica" },
      { label: "Oferta", href: "#oferta" },
    ],
    cta: "Quero treinar na prática",
  },

  hero: {
    eyebrow: "Simulador interativo de emergências",
    headline: ["ACLS não se domina", "só na teoria."],
    /** Trecho da headline que recebe o vermelho de ação. */
    headlineAccent: "só na teoria.",
    sub: "Estude, teste seus conhecimentos e pratique decisões dentro de cenários simulados de emergência cardiológica.",
    ctaPrimary: "Quero treinar na prática",
    ctaSecondary: "Ver o simulador",
    ctaSecondaryHref: "#simulador",
  },

  /* ---------------------------------------------------------------- 02 */

  why: {
    kicker: "Por que a prática importa",
    headline: ["Saber o protocolo é essencial.", "Aplicá-lo é outra coisa."],
    headlineAccent: "Aplicá-lo é outra coisa.",
    intro:
      "A teoria ensina a sequência. A emergência cobra a execução, com um paciente que muda, um relógio que corre e uma equipe esperando a sua próxima ordem.",
    steps: [
      {
        index: "01",
        term: "Reconhecer",
        body: "O monitor mostra um traçado. Você tem segundos para saber o que ele é.",
      },
      {
        index: "02",
        term: "Interpretar",
        body: "O ritmo isolado não basta. Existe pressão, pulso, perfusão e nível de consciência.",
      },
      {
        index: "03",
        term: "Decidir",
        body: "Droga ou cardioversão? Sincronizado ou não? Qual carga, e agora ou depois?",
      },
      {
        index: "04",
        term: "Agir",
        body: "A conduta precisa sair na ordem certa, no tempo certo, com a equipe certa.",
      },
    ],
    closing: ["Entre saber e agir existe uma decisão.", "E decisão também se treina."],
    closingAccent: "E decisão também se treina.",
  },

  /* ---------------------------------------------------------------- 03 */

  simulator: {
    kicker: "Conheça o simulador interativo",
    headline: ["Entre em uma emergência", "criada para você praticar."],
    headlineAccent: "criada para você praticar.",
    body: "Você entra em um ambiente clínico 3D, acompanha o estado do paciente, lê o monitor, usa os recursos da sala e conduz o caso. Cada decisão altera o que acontece em seguida, inclusive quando está errada.",
    quote: "Eu realmente entro no cenário e preciso interagir com o caso.",
    scene: {
      src: null as string | null,
      alt: "Sala de emergência do simulador 3D",
      kind: "Screenshot" as const,
      hint: "Sala de emergência, visão geral do cenário 3D",
      caption: "Sala de emergência do simulador",
    },
    labels: [
      { id: "paciente", text: "Paciente", x: 44, y: 62 },
      { id: "equipe", text: "Equipe de apoio", x: 74, y: 44 },
      { id: "monitor", text: "Monitor", x: 20, y: 26 },
      { id: "desfibrilador", text: "Desfibrilador", x: 13, y: 58 },
      { id: "carrinho", text: "Carrinho de emergência", x: 66, y: 74 },
      { id: "medicacoes", text: "Medicações", x: 86, y: 66 },
      { id: "via-aerea", text: "Via aérea / intubação", x: 34, y: 34 },
    ],
  },

  /* ---------------------------------------------------------------- 04 */

  howItWorks: {
    kicker: "Como funciona o treinamento",
    headline: ["Aprenda. Teste.", "Pratique."],
    headlineAccent: "Pratique.",
    intro:
      "O simulador não começa na sala 3D. Começa no conteúdo, passa pela avaliação e termina com você conduzindo um caso. Teoria, prova e simulação se completando.",
    steps: [
      {
        index: "01",
        term: "Estudo",
        body: "Construa e reforce o conhecimento. Ritmos, protocolos e condutas organizados para consulta e revisão.",
        weight: "normal",
      },
      {
        index: "02",
        term: "Teste",
        body: "Coloque o que aprendeu à prova. Identificação de ritmos e questões com resultado imediato, para expor o que ainda não está firme.",
        weight: "normal",
      },
      {
        index: "03",
        term: "Prática 3D",
        body: "Entre no simulador e aplique o conhecimento em uma emergência em andamento. Aqui não existe alternativa correta na tela: existe um paciente, um relógio e a sua conduta.",
        weight: "strong",
        note: "É nesta etapa que o conhecimento vira decisão.",
      },
    ],
  },

  /* ---------------------------------------------------------------- 05 */

  practice: {
    kicker: "O que você vai praticar",
    headline: ["Do traçado", "à conduta."],
    headlineAccent: "à conduta.",
    intro:
      "A experiência dentro do simulador se organiza em três capacidades que só a repetição constrói, e que a leitura sozinha não entrega.",
    /** Índice das três capacidades: anuncia os blocos que vêm em seguida. */
    capabilities: [
      { term: "Reconheça", body: "O que o monitor está mostrando." },
      { term: "Decida", body: "Qual conduta o caso exige agora." },
      { term: "Intervenha", body: "O recurso certo, no momento certo." },
    ],

    recognize: {
      label: "Reconheça",
      headline: "Treine até reconhecer o que o monitor está mostrando.",
      body: "Um traçado por vez, com o tempo correndo. Você responde, vê o resultado e repete até o reconhecimento deixar de exigir esforço.",
      /** Convite para o bloco interativo logo abaixo. */
      prompt: "Tente agora, aqui mesmo:",
    },

    decide: {
      label: "Decida",
      headline: "191 bpm. Paciente instável. E agora?",
      body: "Reconhecer o ritmo não resolve o caso. É preciso ler os sinais vitais, avaliar a estabilidade e escolher a conduta: droga ou choque, sincronizado ou não, e com qual carga.",
      aside: "A mesma arritmia pede condutas diferentes conforme o estado do paciente. É essa leitura que o simulador cobra.",
      media: {
        /** Captura provisória em /image/painelgraficobpm.png — reativar com a definitiva. */
        src: null as string | null,
        alt: "Monitor e desfibrilador do simulador durante um cenário",
        focal: "50% 40%",
        kind: "Screenshot" as const,
        hint: "Monitor e desfibrilador em momento de decisão clínica",
        caption: "Monitor e desfibrilador durante um cenário em andamento",
      },
    },

    intervene: {
      label: "Intervenha",
      headline: "Você não assiste ao cenário. Você conduz.",
      body: "Cada recurso da sala existe para ser usado no momento certo. Usar no momento errado também tem consequência.",
      actions: [
        {
          term: "Desfibrilador",
          body: "Ligar, ajustar a carga, sincronizar ou não, e chocar no momento certo.",
        },
        {
          term: "Carrinho de emergência",
          body: "Abrir, localizar e preparar o material sem perder tempo procurando.",
        },
        {
          term: "Medicações",
          body: "Escolher a droga, a dose e o instante em que ela entra no caso.",
        },
        {
          term: "Via aérea",
          body: "Decidir quando a ventilação deixa de bastar e partir para a intubação.",
        },
        {
          term: "Equipe",
          body: "Dar comandos e coordenar quem faz o quê enquanto o caso evolui.",
        },
      ],
      principle:
        "Não se trata de o simulador ter um desfibrilador. Trata-se de você reconhecer quando usá-lo.",
      media: {
        /** Captura provisória em /image/simulador-ambiente.png — reativar com a definitiva. */
        src: null as string | null,
        alt: "Recursos da sala de emergência no simulador 3D",
        focal: "50% 32%",
        kind: "Screenshot" as const,
        hint: "Recursos da sala: desfibrilador, carrinho, medicações, via aérea",
        caption: "Recursos disponíveis durante o cenário",
      },
    },
  },

  /* ---------------------------------------------------------------- 06 */

  progression: {
    kicker: "Progressão e feedback",
    headline: ["Comece pelo reconhecimento.", "Avance até a emergência completa."],
    intro:
      "A dificuldade não aparece de uma vez. Cada estágio acrescenta uma variável a mais para você administrar.",
    stages: [
      {
        term: "Identificação de ritmos",
        body: "Um traçado por vez. Só reconhecer.",
      },
      {
        term: "Paciente estável",
        body: "O ritmo dentro de um caso, com tempo para raciocinar.",
      },
      {
        term: "Paciente instável",
        body: "Sinais vitais deteriorando. A janela de decisão encurta.",
      },
      {
        term: "Sala de emergência completa",
        body: "Equipe, equipamentos e um caso que evolui conforme você conduz.",
      },
    ],
    loop: ["Praticar", "Errar", "Receber feedback", "Repetir", "Evoluir"],
    loopBody:
      "O erro dentro da simulação é barato e informativo. Ele mostra exatamente onde a conduta saiu do lugar, e você pode refazer o caso quantas vezes precisar.",
    closing: "Não é uma sala 3D para explorar. É um treinamento estruturado para ser repetido.",
    /** Quando houver captura de feedback do simulador, apontar aqui. */
    media: {
      src: null as string | null,
      alt: "Tela de feedback ao final de um caso",
      kind: "Screenshot" as const,
      hint: "Feedback do caso: conduta avaliada e resultado",
      caption: "Feedback ao final do caso",
    },
  },

  /* ---------------------------------------------------------------- 07 */

  offer: {
    kicker: "A oferta",
    headline: ["Leve sua preparação", "para a prática."],
    headlineAccent: "para a prática.",
    intro:
      "Um acesso, todas as etapas do treinamento, do estudo à sala de emergência completa.",
    includes: [
      "Estudo de ritmos, protocolos e condutas",
      "Testes com resultado imediato",
      "Treino de identificação de ritmos",
      "Simulador interativo em ambiente 3D",
      "Cenários de emergência com paciente que evolui",
      "Monitor e desfibrilador operáveis",
      "Medicações e recursos clínicos da sala",
      "Progressão por estágios e feedback por caso",
    ],
    /** PENDENTE — preencher com os dados reais da oferta na Hotmart. */
    terms: [
      { label: "Valor", value: PENDENTE as string | null },
      { label: "Formas de pagamento", value: PENDENTE as string | null },
      { label: "Duração do acesso", value: PENDENTE as string | null },
      { label: "Garantia", value: PENDENTE as string | null },
      {
        label: "Entrega",
        value: "Acesso imediato ao download após a confirmação da compra.",
      },
      { label: "Requisitos", value: PENDENTE as string | null },
    ],
    cta: "Quero começar a praticar",
  },

  /* ---------------------------------------------------------------- 08 */

  faq: {
    kicker: "Perguntas frequentes",
    headline: ["Antes de começar."],
    items: [
      {
        q: "Isso substitui o curso ou a certificação oficial de ACLS?",
        a: "Não. O simulador é uma ferramenta de preparação prática e não emite certificação nem substitui o curso oficial. Ele foi feito para o intervalo entre estudar o protocolo e conseguir aplicá-lo, treinando reconhecimento, decisão e conduta quantas vezes você precisar.",
      },
      {
        q: "O que exatamente é o simulador?",
        a: "É um software de treinamento com três frentes: estudo do conteúdo, testes de fixação e uma prática em ambiente 3D interativo, onde você entra em um cenário de emergência, lê o monitor, usa os recursos da sala e conduz o caso. Não é videoaula nem banco de questões: é uma simulação em que as suas decisões alteram o que acontece.",
      },
      {
        q: "Para quem ele é indicado?",
        a: "Para profissionais e estudantes da área da saúde que já tiveram contato com o conteúdo de ACLS e querem treinar a aplicação prática: reconhecer ritmos com segurança, decidir condutas sob pressão e se familiarizar com a sequência de uma emergência antes de vivê-la.",
      },
      {
        q: "Preciso instalar alguma coisa?",
        a: "Sim. O simulador é um programa que você baixa e instala no computador. Ele não roda dentro do navegador. Depois da instalação, você pratica quantas vezes quiser sem depender de conexão constante.",
        /** Confirmado com o cliente: produto instalável. */
      },
      {
        q: "Em quais dispositivos funciona?",
        aPending: "Requisitos técnicos e sistemas operacionais suportados",
        a: null as string | null,
      },
      {
        q: "Por quanto tempo tenho acesso?",
        aPending: "Duração do acesso",
        a: null as string | null,
      },
      {
        q: "Como funciona o pagamento?",
        a: "A compra é processada pela Hotmart, com ambiente de pagamento próprio da plataforma. Assim que o pagamento é confirmado, o acesso ao download é liberado.",
      },
    ],
    finalCta: {
      headline: ["Treine antes", "de precisar agir."],
      sub: "Transforme conhecimento em decisão através de um treinamento interativo baseado em simulação.",
      cta: "Começar meu treinamento",
    },
  },

  footer: {
    disclaimer:
      "Este simulador é uma ferramenta de treinamento e preparação prática. Não emite certificação, não substitui o curso oficial de ACLS nem treinamento presencial, e não possui vínculo com a American Heart Association.",
    links: [
      { label: "Política de privacidade", href: "#" },
      { label: "Termos de uso", href: "#" },
      { label: "Suporte", href: "#" },
    ],
  },
} as const;

export type Site = typeof site;
