# SeederLink · Fase 7

**Painel ESG + indicadores climáticos acumulados**, sobre a carteira da Fase 6.

Projeto acadêmico FIAP (entrega individual — Mateus Augusto). React + Vite, testes, build e deploy via Vercel.

- [Site na Vercel](https://seederlink-fase-7.vercel.app/)
- [Repositório](https://github.com/DevourerHope/SeederLink-Fase-7)
- [Checklist da Fase 7](docs/CHECKLIST_ENTREGA_FASE7.md)
- [Comparação Fase 6 → 7](docs/COMPARACAO_FASE6_FASE7.md)
- [Roteiro do pitch da Fase 7](docs/ROTEIRO_PITCH_FASE_7.md)
- [Validação da Fase 7](docs/VALIDACAO_FASE7.md)
- [Diagrama de classes](public/docs/diagrama-classes-fase7.png)
- [Diagrama de sequência](public/docs/diagrama-sequencia-fase7.png)

> Demonstração acadêmica: a triagem não concede crédito real nem determina aptidão agrícola. A carteira usa `localStorage`, sem conta, servidor ou sincronização entre dispositivos. O formulário de contato herdado valida e exibe confirmação visual, mas não envia e-mail.

## Integrantes

| Nome completo | RM |
| --- | --- |
| MATEUS AUGUSTO DA COSTA OLIVEIRA GONÇALVES | 570166 |
| MATHEUS RISSATO CRISPIM | 571038 |
| ISAAC NILTON ALVARENGA DA SILVA | 573766 |

## Base herdada da Fase 6

| Preservado | Estado nesta Fase 7 |
| --- | --- |
| Mapa, consulta climática e carteira | Mantidos |
| Classes de domínio | + `IndicadorEsg`, contexto territorial e acumulados |
| Deploy via Vercel | Configurado com `vercel.json` |
| Documentação da Fase 6 | Conservada em `docs/` como referência |

O README da Fase 5 permanece em [docs/README_FASE5_REFERENCIA.md](docs/README_FASE5_REFERENCIA.md). A comparação Fase 5 → 6 está em [docs/COMPARACAO_FASE5_FASE6.md](docs/COMPARACAO_FASE5_FASE6.md).

## Executar localmente

Instale Node.js 26+, abra a pasta no VS Code e execute:

```bash
npm ci
npm test
npm run dev
```

Abra o endereço informado pelo Vite, normalmente `http://localhost:3000`. Para conferir a produção:

```bash
npm run build
npm run preview
```

Não abra `index.html` por duplo clique: JSX precisa do Vite. Não há token climático nem banco remoto para configurar.

## Usar a carteira

1. No **Fale Conosco**, clique no mapa, arraste o marcador, digite latitude/longitude ou autorize a localização do navegador.
2. Aguarde o resultado. Enquanto houver carregamento ou erro, não aparece a ação de salvar aquela consulta.
3. Clique em **Salvar esta análise na carteira**. O foco vai para a seção **Propriedades**.
4. Confira coordenadas, fonte e período; preencha nome, cultura (soja/tomate) e área em hectares. Vírgula decimal é aceita.
5. Clique em **Salvar propriedade**. O registro permanece após recarregar a página.
6. Cadastre outra propriedade; marque duas opções **Comparar** e clique em **Comparar selecionadas**.
7. Confira cultura, área, coordenadas, médias, período, dias válidos, fonte, captura e triagem.
8. Para atualizar um histórico, consulte a mesma coordenada e escolha **Atualizar histórico** no destino.
9. **Exportar JSON** baixa uma cópia legível. A remoção pede confirmação.

**Privacidade:** os dados ficam neste navegador e nesta origem. `localhost`, Vercel e outros domínios têm carteiras separadas.

## Stack e dependências

- React 18 + Vite 7 + `@vitejs/plugin-react` 5
- Leaflet 1.9.4 e Bootstrap Icons
- Node.js `>=26`

## Testes

```bash
npm test
npm run build
```

Para testar a interface, execute `npm run dev -- --port 4176 --open false` em um terminal e, em outro:

```bash
npx playwright install chromium
npm run test:ui
```

## Deploy

O provedor é a [Vercel](https://vercel.com). O arquivo `vercel.json` configura o build automático e o SPA routing. Cada push na branch `main` dispara um novo deploy automaticamente.

Após enviar uma alteração, o deploy é automático. Confira o site em `https://seederlink-fase-7.vercel.app` em janela anônima. Nunca envie `.env`, credenciais ou `node_modules`.

## Pitch

O pitch da Fase 7 ainda não foi publicado. Enquanto isso, a Home aponta para o [pitch da Fase 6](https://youtu.be/BJ_unP9lmys) como referência. Quando o vídeo novo estiver público, atualize `pitchUrl` em `src/data/entrega.js`, rode os testes e faça o deploy.
