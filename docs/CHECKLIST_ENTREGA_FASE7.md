# Checklist da entrega - Fase 7

Conferência de fechamento: **22/11/2026**.

## Requisitos e evidências

| Item | Requisito | Evidência na entrega |
| --- | --- | --- |
| 1.1.1 | Usar a Fase 6 como referência. | Comparação em `COMPARACAO_FASE6_FASE7.md`; carteira preservada. |
| 1.1.2 | React em toda a interface. | `src/main.jsx` → `App.jsx`; `PainelEsg.jsx` e carteira em React. |
| 1.1.3 | Nova funcionalidade. | Painel ESG + acumulados climáticos (integral discreta). |
| 1.2.1 | Classes com atributos, métodos e relacionamentos. | `IndicadorEsg` + classes da carteira em `src/domain/portfolio.js`. |
| 1.2.1 | UML em imagem no PDF. | `public/docs/diagrama-classes-fase7.png` e `diagrama-sequencia-fase7.png`. |
| 1.3.1 | Pitch ≤ 3 min. | Pendente de gravação; Home pronta para `pitchUrl`. |
| 1.3.1 | Vídeo público na Home. | `src/data/entrega.js` + `Hero.jsx`. |
| 1.4 | Site publicado. | https://devourerhope.github.io/SeederLink-Fase-7/ |
| 1.6/1.7 | ZIP com PDF + projeto. | Scripts `generate-delivery.py` e `package-delivery.py`. |

## Publicação reproduzível

1. `npm ci`
2. `npm test`
3. `npm run build` com `VITE_BASE_PATH=/SeederLink-Fase-7/`
4. Workflow `.github/workflows/deploy-pages.yml` publica a `main`

## Integrante

| Nome | RM |
| --- | --- |
| MATEUS AUGUSTO DA COSTA OLIVEIRA GONÇALVES | 570166 |
