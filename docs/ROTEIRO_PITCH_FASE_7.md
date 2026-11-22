# Roteiro do pitch — SeederLink, Fase 7

Vídeo da entrega: _(inserir link YouTube)_, duração-alvo **≤ 3 minutos**.

Locução em primeira pessoa — Mateus Augusto (RM 570166).

## Texto contínuo

Olá, eu sou o Mateus e apresento a Fase 7 do SeederLink: o Painel ESG com indicadores climáticos acumulados.

No mapa, consulto o clima e envio a análise para a carteira. Cadastro nome, cultura, área e o contexto territorial da propriedade.

No cartão, além das médias, mostro o score ESG demonstrativo nos eixos ambiental, social e governança. Os totais em graus-dia, umidade acumulada e radiação total aproximam a integral definida da série diária — uma soma com Δt igual a um dia.

Na comparação lado a lado, os dois cadastros exibem score e acumulados. O indicador é acadêmico: não substitui laudo ESG nem decisão de crédito.

No diagrama de classes, destaque para a nova classe IndicadorEsg e sua relação com PropriedadeRural e AnaliseClimatica. No diagrama de sequência, o fluxo vai da interface à persistência local e ao cálculo do painel.

Assim, a Fase 7 une carteira, sustentabilidade mensurável e documentação UML. Muito obrigado!

## Narração sincronizada

| Tempo | O que mostrar | Narração |
| --- | --- | --- |
| 00:00–00:15 | Home / CTA Fase 7 | Apresentação e novidade. |
| 00:15–00:50 | Mapa → salvar na carteira | Consulta e cadastro com contexto. |
| 00:50–01:40 | Cartão com Painel ESG | Score E/S/G e acumulados. |
| 01:40–02:10 | Comparação | Lado a lado com ESG. |
| 02:10–02:50 | UML classes + sequência | Classes e fluxo. |
| 02:50–03:00 | Fechamento | Disclaimer e obrigado. |

## Checklist antes de gravar

- [ ] Site publicado em janela anônima
- [ ] Duas propriedades com ESG visível
- [ ] UML legível em tela cheia
- [ ] Duração ≤ 3 minutos
- [ ] Vídeo público + `pitchUrl` em `src/data/entrega.js`
