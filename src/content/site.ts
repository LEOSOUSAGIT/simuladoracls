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
    /**
     * Checkout real na Hotmart. Todos os CTAs da página apontam para cá —
     * Hero, oferta, fecho do FAQ, barra fixa do mobile e o botão da nav.
     * Trocar aqui troca os cinco.
     */
    checkoutUrl: "https://pay.hotmart.com/C107328938X",
  },

  nav: {
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
  },

  /* ---------------------------------------------------------------- 03 */

  simulator: {
    kicker: "Conheça o simulador interativo",
    headline: ["Entre em uma emergência", "criada para você praticar."],
    headlineAccent: "criada para você praticar.",
    body: "Você entra em um ambiente clínico 3D, acompanha o estado do paciente, lê o monitor, usa os recursos da sala e conduz o caso. Cada decisão altera o que acontece em seguida, inclusive quando está errada.",
    /**
     * Citação em primeira pessoa, sem autor por enquanto. Quando houver um
     * depoimento real, com nome e profissão, basta assinar embaixo: a marcação
     * já é <blockquote>, e o <cite> entra sem mexer no layout.
     */
    quote: "Eu realmente entro no cenário e preciso interagir com o caso.",
    /** Convite do arraste sobre a cena. Some depois do primeiro uso. */
    exploreHint: "Arraste para olhar em volta",
    scene: {
      src: "/image/sala-maca-equipe-ajustada.png" as string | null,
      w: 1545,
      h: 1018,
      alt: "Sala de emergência do simulador 3D vista de cima, com equipe, maca, monitores e equipamentos",
      kind: "Screenshot" as const,
      hint: "Sala de emergência, visão geral do cenário 3D",
    },
    /**
     * Cinco âncoras, não sete. Anotar tudo vira infográfico de setas, que é
     * o que o briefing pede para evitar — e só ancoro o que dá para
     * identificar com certeza no quadro. A lista completa de recursos
     * aparece em texto logo abaixo da cena.
     *
     * Coordenadas em % do quadro NATIVO da captura. Como a placa mostra o
     * arquivo inteiro, sem recorte, essas coordenadas valem em qualquer
     * largura — antes elas dependiam do focal e quebravam a cada ajuste.
     *
     * `side: "left"` joga o texto para a esquerda da âncora, para o rótulo
     * não escapar da borda direita da placa.
     */
    labels: [
      { id: "monitor", text: "Monitor", x: 52, y: 27 },
      { id: "via-aerea", text: "Via aérea / intubação", x: 60, y: 37 },
      { id: "paciente", text: "Paciente", x: 45, y: 47 },
      { id: "carrinho", text: "Carrinho de emergência", x: 79, y: 56, side: "left" },
      { id: "equipe", text: "Equipe de apoio", x: 56, y: 72 },
    ] as ReadonlyArray<{
      id: string;
      text: string;
      x: number;
      y: number;
      side?: "left";
    }>,
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
      headline: "175 bpm. Paciente instável. E agora?",
      body: "Reconhecer o ritmo não resolve o caso. É preciso ler os sinais vitais, avaliar a estabilidade e escolher a conduta: droga ou choque, sincronizado ou não, e com qual carga.",
      aside: "A mesma arritmia pede condutas diferentes conforme o estado do paciente. É essa leitura que o simulador cobra.",
      media: {
        src: "/image/monitor-175bpm-instavel-ajustada.png" as string | null,
        w: 1672,
        h: 941,
        alt: "Monitor do simulador em 175 bpm com pressão 78/48, ao lado da descrição do caso e dos recursos disponíveis",
        kind: "Screenshot" as const,
        hint: "Monitor e desfibrilador em momento de decisão clínica",
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
        src: "/image/monitor-desfibrilador-carregando-ajustado.png" as string | null,
        w: 1672,
        h: 941,
        alt: "Desfibrilador do simulador sincronizado e carregando para 250 J durante um cenário",
        kind: "Screenshot" as const,
        hint: "Recursos da sala: desfibrilador, carrinho, medicações, via aérea",
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
    /**
     * Última imagem antes do preço, onde a pessoa mede o que leva pelo valor
     * cobrado. O painel de resultados ocupava esse lugar e terminava em duas
     * linhas vermelhas de conduta incorreta — a última coisa vista antes da
     * oferta era o produto dizendo que o usuário errou.
     */
    media: {
      src: "/image/cenario-exame-paciente-ajustada.png" as string | null,
      w: 1536,
      h: 1024,
      alt: "Equipe do simulador examinando um paciente de 68 anos sentado na maca, com o painel de recursos da sala à direita",
      kind: "Screenshot" as const,
      hint: "Cenário em andamento: equipe, paciente e recursos da sala",
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
    /**
     * O preço fecha a seção em bloco próprio, depois da lista do que está
     * incluído: primeiro o valor entregue, depois o valor cobrado.
     *
     * Valor, parcelamento e garantia saíram das Condições ao ganhar esse
     * bloco. Repetir os três a poucos centímetros de distância fazia a lista
     * parecer letra miúda contradizendo o anúncio.
     *
     * Sem valor por parcela: as taxas do parcelamento correm por conta do
     * comprador, então 249 ÷ 12 não é o que ele paga. Anunciar "12x de R$
     * 20,75" seria número falso, desmentido no checkout.
     *
     * Só os meios de pagamento relevantes no Brasil. A conta tem PayPal,
     * Apple Pay, Mercado Pago, Nequi, Yape e outras regionais ativas, mas
     * listar tudo vira inventário no lugar de condição.
     */
    price: {
      /*
       * O rótulo diz o prazo, não "acesso único". Pagamento único e acesso
       * permanente são coisas diferentes, e com licença de 90 dias a segunda
       * leitura seria promessa que o produto não cumpre.
       */
      label: "Licença de 90 dias",
      currency: "R$",
      amount: "249,00",
      terms: "Pagamento único, à vista ou parcelado.",
      /**
       * Formas de pagamento como itens visíveis, não como frase corrida. O
       * briefing pede que apareçam "claramente", e dentro de um parágrafo elas
       * só existem para quem lê a linha inteira.
       */
      methods: ["Pix", "Boleto", "Cartão em até 12x"],
      note: "7 dias de garantia · acesso imediato ao download",
    },
    terms: [
      {
        label: "Duração do acesso",
        value: "90 dias, contados da confirmação da compra.",
      },
      {
        label: "Entrega",
        value: "Acesso imediato ao download após a confirmação da compra.",
      },
      {
        label: "Requisitos",
        value: "Windows ou Android, com 4 GB de memória. Depois de instalado, funciona sem internet.",
      },
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
        a: "Sim. O simulador é um programa que você baixa e instala no seu dispositivo. Ele não roda dentro do navegador. Depois da instalação, você pratica quantas vezes quiser sem depender de conexão com a internet.",
        /** Confirmado com o cliente: produto instalável. */
      },
      {
        q: "Em quais dispositivos funciona?",
        a: "Em computadores com Windows e em dispositivos Android. O requisito de memória é de 4 GB. Depois de instalado, o simulador funciona sem conexão com a internet.",
      },
      {
        q: "Por quanto tempo tenho acesso?",
        a: "A licença é de 90 dias, contados a partir da confirmação da compra. Dentro desse período você pratica quantas vezes quiser, refazendo os casos sem limite.",
      },
      {
        q: "Como funciona o pagamento?",
        a: "A compra é processada pela Hotmart, com ambiente de pagamento próprio da plataforma. Você pode pagar com cartão de crédito, à vista ou parcelado, com Pix ou com boleto bancário. Assim que o pagamento é confirmado, o acesso ao download é liberado.",
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
    /**
     * Contato oficial. O Decreto 7.962/2013 exige, além dele, razão social,
     * CNPJ e endereço físico em local de fácil visualização — assim que o
     * cliente informar, entram aqui e o rodapé passa a exibi-los.
     */
    contact: "suporte@simuladoracls.com",
    links: [
      { label: "Política de privacidade", href: "/privacidade" },
      { label: "Termos de uso", href: "/termos" },
      { label: "Suporte", href: "mailto:suporte@simuladoracls.com" },
    ],
  },
} as const;

export type Site = typeof site;
