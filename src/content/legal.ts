/**
 * Documentos legais — Termos de Uso e Política de Privacidade.
 *
 * Mesma regra do resto do conteúdo: o que ainda não foi informado pelo
 * cliente aparece como marcador visível, nunca preenchido por suposição.
 * Aqui isso pesa mais do que na landing — texto legal inventado cria
 * obrigação que ninguém combinou.
 *
 * A Parte II dos Termos é o documento redigido pelo advogado do cliente e
 * está reproduzida na íntegra, sem edição de conteúdo. Alterações ali só com
 * a devida validação jurídica.
 */

export type LegalBlock =
  | { kind: "p"; text: string }
  | { kind: "sub"; text: string }
  | { kind: "list"; items: readonly string[] }
  | { kind: "pending"; label: string };

export type LegalSection = {
  title: string;
  blocks: readonly LegalBlock[];
};

export const CONTATO = "simuladoracls@gmail.com";

/** Aviso fixo no topo dos dois documentos enquanto faltarem dados cadastrais. */
export const RASCUNHO_AVISO =
  "Documento em elaboração. A identificação completa do fornecedor e a revisão jurídica final ainda estão pendentes.";

/* ---------------------------------------------------------------- */

export const termos = {
  slug: "/termos",
  title: "Termos de Uso",
  intro:
    "Estes Termos regulam a compra e a utilização do Simulador de Emergências Cardiológicas, software de treinamento instalável comercializado pela plataforma Hotmart.",
  updatedAt: "18 de agosto de 2026",

  partOne: {
    label: "Parte I",
    title: "Condições de compra e de uso",
    sections: [
      {
        title: "1. Identificação do fornecedor",
        blocks: [
          {
            kind: "p",
            text: `Contato oficial para dúvidas, suporte e exercício de direitos: ${CONTATO}.`,
          },
          { kind: "pending", label: "Razão social" },
          { kind: "pending", label: "CNPJ" },
          { kind: "pending", label: "Endereço físico" },
          {
            kind: "p",
            text: "A identificação completa do fornecedor é exigida pelo Decreto 7.962/2013, que regulamenta o Código de Defesa do Consumidor no comércio eletrônico.",
          },
        ],
      },
      {
        title: "2. Objeto",
        blocks: [
          {
            kind: "p",
            text: "O Simulador de Emergências Cardiológicas é um software de treinamento que reúne conteúdo de estudo, testes de fixação e prática em ambiente tridimensional interativo, no qual o usuário conduz casos simulados de emergência cardiológica.",
          },
          {
            kind: "p",
            text: "O software é instalado no dispositivo do usuário e não funciona dentro do navegador.",
          },
        ],
      },
      {
        title: "3. Licença de uso",
        blocks: [
          {
            kind: "p",
            text: "A compra concede ao usuário uma licença pessoal, intransferível e não exclusiva de uso do software pelo prazo de 90 (noventa) dias, contados da confirmação do pagamento.",
          },
          {
            kind: "p",
            text: "Encerrado esse prazo, a licença expira automaticamente, independentemente de aviso. A licença não transfere ao usuário qualquer direito de propriedade sobre o software ou sobre o seu conteúdo.",
          },
          { kind: "sub", text: "É vedado ao usuário:" },
          {
            kind: "list",
            items: [
              "Revender, sublicenciar, alugar, emprestar ou ceder o acesso a terceiros",
              "Compartilhar credenciais, arquivos de instalação ou chaves de ativação",
              "Reproduzir, distribuir ou publicar o conteúdo, no todo ou em parte",
              "Realizar engenharia reversa, descompilação ou modificação do software",
            ],
          },
          { kind: "pending", label: "Número de dispositivos por licença" },
        ],
      },
      {
        title: "4. Requisitos técnicos",
        blocks: [
          {
            kind: "p",
            text: "O software funciona em computadores com Windows e em dispositivos Android, exigindo 4 GB de memória. Depois de instalado, não depende de conexão com a internet para ser utilizado.",
          },
          {
            kind: "p",
            text: "É responsabilidade do usuário verificar a compatibilidade do seu dispositivo antes da compra.",
          },
        ],
      },
      {
        title: "5. Compra, pagamento e entrega",
        blocks: [
          {
            kind: "p",
            text: "A compra é processada integralmente pela Hotmart, em ambiente de pagamento próprio da plataforma. São aceitos cartão de crédito, à vista ou em até 12 parcelas, Pix e boleto bancário. As taxas de parcelamento são de responsabilidade do comprador.",
          },
          {
            kind: "p",
            text: "Confirmado o pagamento, o acesso ao download é liberado imediatamente pela própria plataforma.",
          },
        ],
      },
      {
        title: "6. Direito de arrependimento",
        blocks: [
          {
            kind: "p",
            text: "Nos termos do artigo 49 do Código de Defesa do Consumidor, o usuário pode desistir da compra em até 7 (sete) dias corridos, contados da confirmação do pagamento, com devolução integral do valor pago.",
          },
          {
            kind: "p",
            text: `A solicitação pode ser feita pela plataforma Hotmart ou pelo e-mail ${CONTATO}.`,
          },
        ],
      },
      {
        title: "7. Propriedade intelectual",
        blocks: [
          {
            kind: "p",
            text: "O software, os cenários, os textos, as imagens, os ritmos, os casos clínicos e todo o material que o compõe são protegidos por direitos autorais e permanecem de titularidade do desenvolvedor.",
          },
        ],
      },
      {
        title: "8. Suporte",
        blocks: [
          {
            kind: "p",
            text: `O atendimento a dúvidas técnicas e comerciais é feito pelo e-mail ${CONTATO}.`,
          },
        ],
      },
      {
        title: "9. Alterações destes Termos",
        blocks: [
          {
            kind: "p",
            text: "Estes Termos podem ser atualizados a qualquer momento. A versão vigente é sempre a publicada nesta página, com a data de atualização indicada no topo. Alterações não retroagem para prejudicar compras já realizadas.",
          },
        ],
      },
    ] as readonly LegalSection[],
  },

  /**
   * Redigido pelo advogado do cliente. Reproduzido na íntegra, sem edição.
   * Os colchetes do foro seguem em aberto no original.
   */
  partTwo: {
    label: "Parte II",
    title: "Termo de ciência, isenção e limitação de responsabilidade",
    lead: "Pelo presente instrumento, o USUÁRIO declara que leu, compreendeu e concorda integralmente com as disposições abaixo, como condição para utilização do simulador de emergências cardiológicas (“Software”).",
    sections: [
      {
        title: "1. Da natureza do software",
        blocks: [
          {
            kind: "p",
            text: "O usuário declara estar ciente de que o software constitui exclusivamente ferramenta de simulação, treinamento, estudo e aperfeiçoamento técnico, desenvolvida para fins educacionais.",
          },
          {
            kind: "p",
            text: "O software não constitui curso de formação, certificação profissional, protocolo médico oficial, diretriz clínica, consultoria médica, parecer técnico, nem substitui treinamento prático, supervisão profissional, literatura científica, protocolos institucionais, diretrizes de sociedades médicas ou o julgamento clínico do profissional responsável.",
          },
        ],
      },
      {
        title: "2. Da responsabilidade profissional",
        blocks: [
          {
            kind: "p",
            text: "Toda decisão clínica, diagnóstico, conduta terapêutica, prescrição, procedimento ou atendimento ao paciente constitui ato exclusivo do profissional habilitado, que permanece integralmente responsável por suas decisões.",
          },
          {
            kind: "p",
            text: "O usuário reconhece que nenhuma informação, cenário, resposta, pontuação, sugestão ou feedback apresentado pelo software deverá ser utilizado como fundamento único para tomada de decisões envolvendo pacientes reais.",
          },
        ],
      },
      {
        title: "3. Da inexistência de garantia de resultado",
        blocks: [
          {
            kind: "p",
            text: "O desenvolvedor não garante que a utilização do software resulte em aprovação em provas, obtenção de certificações, melhoria de desempenho profissional ou êxito em atendimentos médicos.",
          },
          {
            kind: "p",
            text: "O desempenho do usuário dependerá exclusivamente de sua formação, experiência, capacitação e atualização científica.",
          },
        ],
      },
      {
        title: "4. Da utilização em pacientes reais",
        blocks: [
          {
            kind: "p",
            text: "O usuário compromete-se a não utilizar o conteúdo do software como substituto do raciocínio clínico, de protocolos médicos reconhecidos, das diretrizes vigentes ou da avaliação individualizada de cada paciente.",
          },
          {
            kind: "p",
            text: "O usuário reconhece que qualquer utilização inadequada do conteúdo em situações reais ocorrerá por sua exclusiva responsabilidade.",
          },
        ],
      },
      {
        title: "5. Da limitação de responsabilidade",
        blocks: [
          {
            kind: "p",
            text: "Na máxima extensão permitida pela legislação aplicável, o desenvolvedor, seus sócios, colaboradores, programadores, consultores e parceiros não responderão por danos diretos, indiretos, materiais, morais, lucros cessantes, perdas financeiras ou quaisquer prejuízos decorrentes:",
          },
          {
            kind: "list",
            items: [
              "I – da interpretação incorreta do conteúdo;",
              "II – da utilização do software em desacordo com sua finalidade educacional;",
              "III – da adoção de condutas clínicas baseadas exclusivamente no conteúdo do software;",
              "IV – de erros profissionais praticados pelo usuário;",
              "V – de decisões tomadas durante atendimentos médicos reais.",
            ],
          },
        ],
      },
      {
        title: "6. Da atualização científica",
        blocks: [
          {
            kind: "p",
            text: "O usuário declara compreender que a medicina encontra-se em constante evolução, podendo ocorrer alterações em diretrizes, protocolos, evidências científicas, medicamentos e recomendações clínicas após o desenvolvimento ou atualização do software.",
          },
          {
            kind: "p",
            text: "Compete exclusivamente ao profissional manter-se cientificamente atualizado.",
          },
        ],
      },
      {
        title: "7. Da qualificação do usuário",
        blocks: [
          {
            kind: "p",
            text: "Caso o software seja destinado a estudantes ou profissionais da área da saúde, o usuário declara utilizá-lo exclusivamente para fins educacionais e de treinamento, comprometendo-se a observar toda a legislação e regulamentação profissional aplicáveis.",
          },
        ],
      },
      {
        title: "8. Da aceitação",
        blocks: [
          {
            kind: "p",
            text: "Ao acessar, instalar ou utilizar o software, o usuário declara que leu integralmente este termo, compreendeu seu conteúdo e concorda livremente com todas as suas disposições.",
          },
          {
            kind: "p",
            text: "Reconhece, ainda, que o simulador possui finalidade exclusivamente educacional, não substituindo formação profissional, treinamento supervisionado, protocolos oficiais ou julgamento clínico.",
          },
        ],
      },
      {
        title: "9. Da legislação aplicável",
        blocks: [
          {
            kind: "p",
            text: "Este termo será regido pelas leis da República Federativa do Brasil, elegendo-se o foro da Comarca de",
          },
          { kind: "pending", label: "Comarca (cidade/UF)" },
          {
            kind: "p",
            text: "com renúncia a qualquer outro, por mais privilegiado que seja, para dirimir eventuais controvérsias, ressalvadas as hipóteses de competência absoluta previstas em lei.",
          },
        ],
      },
    ] as readonly LegalSection[],
  },
} as const;

/* ---------------------------------------------------------------- */

export const privacidade = {
  slug: "/privacidade",
  title: "Política de Privacidade",
  intro:
    "Esta Política descreve como os dados pessoais são tratados neste site e na compra do Simulador de Emergências Cardiológicas, em conformidade com a Lei Geral de Proteção de Dados (Lei 13.709/2018).",
  updatedAt: "18 de agosto de 2026",
  sections: [
    {
      title: "1. Controlador e encarregado",
      blocks: [
        {
          kind: "p",
          text: `Canal para dúvidas sobre privacidade e para o exercício dos direitos previstos nesta Política: ${CONTATO}.`,
        },
        { kind: "pending", label: "Razão social do controlador" },
        { kind: "pending", label: "CNPJ" },
        { kind: "pending", label: "Endereço físico" },
        { kind: "pending", label: "Nome do encarregado (DPO)" },
      ],
    },
    {
      title: "2. Quais dados este site coleta",
      blocks: [
        {
          kind: "p",
          text: "Este site é uma página informativa. Ele não possui formulário de cadastro, área de login, newsletter nem qualquer campo que solicite dados ao visitante.",
        },
        {
          kind: "p",
          text: "Não utilizamos cookies de análise, pixels de rastreamento ou ferramentas de medição de audiência. Nenhum dado de navegação é coletado para fins de publicidade ou perfilamento.",
        },
        {
          kind: "p",
          text: "Como todo site publicado na internet, o servidor de hospedagem registra automaticamente dados técnicos de acesso, como endereço IP, data e hora da requisição e tipo de navegador. Esses registros existem para segurança, prevenção a fraudes e funcionamento do serviço, com base no legítimo interesse previsto no artigo 7º, IX, da LGPD.",
        },
      ],
    },
    {
      title: "3. Dados tratados na compra",
      blocks: [
        {
          kind: "p",
          text: "A compra é processada integralmente pela Hotmart, em ambiente próprio da plataforma. Os dados fornecidos no checkout — nome, e-mail, CPF e informações de pagamento — são coletados e tratados pela Hotmart na condição de controladora, segundo as políticas dela.",
        },
        {
          kind: "p",
          text: "Recebemos da plataforma apenas as informações necessárias para identificar a compra, liberar o acesso e prestar suporte. Esses dados são usados exclusivamente para a execução do contrato, com base no artigo 7º, V, da LGPD.",
        },
      ],
    },
    {
      title: "4. Com quem os dados são compartilhados",
      blocks: [
        { kind: "sub", text: "Operadores e parceiros envolvidos:" },
        {
          kind: "list",
          items: [
            "Hotmart — processamento de pagamento, emissão fiscal e entrega do produto",
            "Vercel — hospedagem do site, com servidores no exterior",
          ],
        },
        {
          kind: "p",
          text: "Não vendemos, alugamos nem cedemos dados pessoais a terceiros para fins comerciais. Dados podem ser fornecidos a autoridades quando houver obrigação legal ou ordem judicial.",
        },
      ],
    },
    {
      title: "5. Transferência internacional",
      blocks: [
        {
          kind: "p",
          text: "A hospedagem do site ocorre em servidores localizados fora do Brasil. A transferência se dá nos termos do artigo 33 da LGPD e se limita aos registros técnicos de acesso descritos no item 2.",
        },
      ],
    },
    {
      title: "6. Por quanto tempo os dados são mantidos",
      blocks: [
        {
          kind: "p",
          text: "Os registros técnicos de acesso são mantidos pelo prazo do artigo 15 do Marco Civil da Internet. Os dados relacionados à compra são mantidos enquanto durar a relação contratual e pelos prazos legais de guarda fiscal e de prescrição aplicáveis.",
        },
      ],
    },
    {
      title: "7. Direitos do titular",
      blocks: [
        {
          kind: "sub",
          text: "Nos termos do artigo 18 da LGPD, você pode solicitar a qualquer momento:",
        },
        {
          kind: "list",
          items: [
            "Confirmação da existência de tratamento dos seus dados",
            "Acesso aos dados que temos sobre você",
            "Correção de dados incompletos, inexatos ou desatualizados",
            "Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade com a lei",
            "Portabilidade a outro fornecedor, mediante requisição expressa",
            "Eliminação dos dados tratados com base em consentimento",
            "Informação sobre as entidades com as quais os dados foram compartilhados",
            "Revogação do consentimento, quando essa for a base legal aplicada",
          ],
        },
        {
          kind: "p",
          text: `Os pedidos devem ser enviados para ${CONTATO} e são respondidos nos prazos previstos na LGPD.`,
        },
      ],
    },
    {
      title: "8. Segurança",
      blocks: [
        {
          kind: "p",
          text: "O site é servido exclusivamente por conexão criptografada (HTTPS). O ambiente de pagamento é de responsabilidade da Hotmart e não trafega por este site — em nenhum momento dados de cartão passam por servidores nossos.",
        },
      ],
    },
    {
      title: "9. Alterações desta Política",
      blocks: [
        {
          kind: "p",
          text: "Esta Política pode ser atualizada, especialmente se o site passar a utilizar ferramentas de medição ou publicidade. Nesse caso, um aviso de cookies com opções de aceitar, recusar e personalizar será apresentado antes de qualquer coleta, conforme orientação da Autoridade Nacional de Proteção de Dados.",
        },
        {
          kind: "p",
          text: "A versão vigente é sempre a publicada nesta página, com a data de atualização indicada no topo.",
        },
      ],
    },
  ] as readonly LegalSection[],
} as const;
