# Manual de Acesso — arquivo-fonte

PDF de uma página entregue ao comprador pela Hotmart.

| Arquivo | Papel |
|---|---|
| `Manual-de-Acesso-Simulador-ACLS.html` | **fonte** — edite aqui |
| `Manual-de-Acesso-Simulador-ACLS.pdf` | saída gerada, é o que vai para a Hotmart |
| `fonts/` | Geist Mono (cópia de `geist`), para a pasta ser autocontida |
| `logo-simulador-fundo-claro.png` | a marca, mesma arte que o site usa |

## Como regerar o PDF

Chrome headless, a partir desta pasta:

```bash
chrome --headless=new --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="Manual-de-Acesso-Simulador-ACLS.pdf" \
  "file:///CAMINHO/ABSOLUTO/Manual-de-Acesso-Simulador-ACLS.html"
```

No Windows o executável fica em
`C:\Program Files\Google\Chrome\Application\chrome.exe`. O caminho do HTML
precisa ser absoluto e em `file:///` — caminho relativo não carrega as fontes.

O `@page { size: A4; margin: 0 }` do HTML define o formato, então nenhuma
opção de tamanho ou margem é passada na linha de comando.

## O que conferir depois de editar

O documento é de **uma página**, papel osso do topo ao rodapé, e o rodapé é
posicionado por `margin-top: auto` dentro de `.page { height: 297mm;
overflow: hidden }`. Isso tem uma armadilha: se o conteúdo crescer além dos
297mm, o `auto` deixa de ter folga e o `padding-bottom` do rodapé é comido
pelo `overflow: hidden` — o texto continua visível, mas a margem inferior
encolhe silenciosamente. Um screenshot do HTML não mostra isso; só a medição
da página impressa mostra.

Depois de qualquer edição que mexa em texto ou espaçamento, confira:

- **uma página só** — se virarem duas, sobrou conteúdo;
- **margem inferior ≈ 20mm** — se cair para ~10mm, o rodapé estourou o limite
  e é preciso recuperar espaço no ritmo vertical (recuos da faixa, `padding-top`
  do corpo, margens de `section`);
- **três links clicáveis** — o botão, a URL escrita e o `mailto:`;
- **nenhum link do Firebase** — o único destino de download é
  `simuladoracls.com/download`, nunca o arquivo direto.

## Regras de conteúdo

Herdadas do projeto e do texto jurídico já publicado em `/termos`:

- não afirmar requisitos técnicos que não estejam confirmados;
- não mencionar certificação, credenciamento ou vínculo institucional;
- não citar a American Heart Association como associação oficial;
- não publicar os links diretos do Firebase Storage — eles vivem só na
  rota `/download`, em `src/content/download.ts`.
