# Comparação — SeederLink da Fase 6 para a Fase 7

## Referência utilizada

A referência é o projeto da Fase 6 (Carteira de Propriedades), migrado para o repositório solo:

- Base anterior: https://github.com/dansfisica85/site_seederlink-wolvestech
- Entrega solo: https://github.com/DevourerHope/SeederLink-Fase-7

Na Fase 6, a novidade era a **Carteira de Propriedades**. Na Fase 7, a novidade é o **Painel ESG** com indicadores climáticos acumulados (integral discreta sobre a série histórica).

## O que mudou

| Aspecto | Base da Fase 6 | Evolução da Fase 7 |
| --- | --- | --- |
| Interface | Carteira, mapa e comparação. | Painel ESG por propriedade + ESG na comparação. |
| Nova função | Cadastro, histórico, comparação e exportação. | Score E/S/G demonstrativo e totais acumulados (°C·dia, %·dia, MJ/m²). |
| Persistência | `seederlink:fase6:carteira:v1` | `seederlink:fase7:carteira:v1` |
| Modelagem / UML | Cinco classes de domínio. | + `IndicadorEsg`; diagramas de classes e sequência. |
| Cadastro | Nome, cultura, área. | + contexto territorial (eixo social). |
| Deploy | Pages do grupo. | Pages solo: `/SeederLink-Fase-7/` |
| Autoria | Quatro integrantes. | Entrega individual — RM 570166 |

## Fluxo da nova funcionalidade

1. O usuário consulta o clima no mapa e envia a análise à carteira.
2. Informa nome, cultura, área e contexto territorial; salva a propriedade.
3. A análise guarda acumulados da série diária (soma tipo Riemann, Δt = 1 dia).
4. O painel ESG calcula eixos ambiental, social e governança e um score 0–100.
5. Na comparação lado a lado, os scores e acumulados também aparecem.

## Classes

| Classe | Papel |
| --- | --- |
| `Localizacao` | Coordenadas validadas. |
| `AnaliseClimatica` | Snapshot climático + acumulados. |
| `IndicadorEsg` | Score E/S/G demonstrativo a partir da propriedade. |
| `PropriedadeRural` | Cadastro, histórico e `indicadorEsg()`. |
| `CarteiraPropriedades` | Coleção, comparação e serialização. |
| `RepositorioLocal` | Persistência em `localStorage`. |

## Entrega da Fase 7

- Site: https://devourerhope.github.io/SeederLink-Fase-7/
- Repositório: https://github.com/DevourerHope/SeederLink-Fase-7
- Pitch: aguardando publicação (Home usa o da Fase 6 como referência até lá)
- Roteiro: [ROTEIRO_PITCH_FASE_7.md](ROTEIRO_PITCH_FASE_7.md)
