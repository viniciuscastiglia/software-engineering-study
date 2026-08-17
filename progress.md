# Progresso — Plano de Estudos (Software + AI Engineering)

> Fonte de continuidade. Atualizo conforme avanço e compartilho no início de cada sessão.

**Última atualização:** 17/08/2026

---

## Status atual
- **Fase:** 1 — Fundamento sólido (mês 1–6)
- **Módulo Inteli:** Modelo Preditivo — semana 3 de 10 · trilha: seção 2 (EDA)
- **Projeto-espinha:** agregador de vagas remotas internacionais — https://github.com/viniciuscastiglia/job-ingestion-pipeline

---

## 🎯 Meta da semana

**Semana de:** 17/08/2026

| Frente | Horas-alvo | Alvo desta semana | Bateu? |
|--------|-----------|-------------------|--------|
| javascript.info | 6h30 | Fechar o cap. 2: seções 2.9 → 2.18 | |
| Preditivo (satélite) | 4h | EDA do House Prices commitada: distribuições, faltantes, correlações com `SalePrice`, 3 hipóteses escritas | |
| DSA | 3h | 4 problemas — Arrays & Hashing (2/150 → 6/150) | |
| Projeto-espinha | 1h30 | Schema da tabela de vagas em `.sql` no repo. **Nada instalado, nada conectado** — é trabalho de papel | |
| T1 | 1h | PR de documentação — **até quarta** | |
| T2 | — | ADR-003: schema da tabela de vagas, no dia da decisão | |

**Alvo total: ~16h** fora das aulas.

### Cronograma
| Dia | Bloco | h |
|---|---|---|
| Seg 17 | js.info 2.9–2.12 (comparações, if/?, lógicos, ??) + abre o PR do T1 | 2h |
| Ter 18 | Preditivo bloco 1: carrega `train.csv`, shape, dtypes, % de faltantes por coluna, distribuições | 2h |
| Qua 19 | js.info 2.13–2.14 (loops, switch) → DSA 2 problemas | 2h30 |
| Qui 20 | Preditivo bloco 2: correlações com `SalePrice`, 3 hipóteses escritas, notebook commitado | 2h |
| Sex 21 | js.info 2.15–2.16 (funções, function expressions) — sem pressa | 2h30 |
| Sáb 22 | Espinha: schema em `.sql` + ADR-003 → DSA 2 problemas | 3h |
| Dom 23 | js.info 2.17–2.18 (arrow functions, specials) + ritual | 2h30 |

**Amarrações:** loops (2.13) e DSA caem no mesmo dia, de propósito. EDA parte em dois blocos — o primeiro é mecânico, o segundo é onde eu penso; hipótese escrita no cansaço vira enfeite. Sexta e domingo são as seções de função, as mais densas do capítulo — por isso têm 2h30 e não 1h30.

**O schema é papel, não banco.** Decidir campos, obrigatoriedade, nulos e qual chave identifica a mesma vaga vinda de fontes diferentes (Remote OK e WWR publicam a mesma vaga com títulos diferentes — o que é duplicata?). Isso é modelagem, e eu já consigo hoje. Índice, EXPLAIN, n+1 e transação são a 1.6, e servem pra otimizar tabela que já existe. Pode cair em qualquer dia da semana.

### Piso (semana ruim ainda conta como semana)
Commit diário + 2 problemas de DSA + 1 sessão de js.info + entrega do Inteli. **~6h.**

### Ordem de corte quando a semana apertar
DSA de sábado → espinha sai inteira (schema escorrega pra semana que vem) → js.info de segunda cai pra 2 seções.
**Nunca corta:** commit diário, entrega do Inteli, preditivo abaixo do que o módulo exige, **e as seções de função (2.15–2.17)**.
Corta **antes** de começar a semana, não no meio.

---

## 🔁 Ritual de domingo (15 min, inegociável)

1. Cada frente bateu alvo, bateu piso, ou zerou?
2. Alguma frente zerou **duas semanas seguidas**? → sinal de alerta, trata antes de tudo.
3. A semana que vem tem entrega pesada do Inteli? → se sim, corta agora na ordem acima.
4. Qual o alvo de cada frente pra próxima semana?

**Como responder a 4 sozinho** — cada frente tem sequência própria:
- js.info → próximo capítulo, na ordem
- DSA → próximo problema do NeetCode
- Preditivo → próxima semana da `trilha-modulo-preditivo.md`
- Espinha → próxima camada, **e só se a ausência dela já doer**

**Teste:** se a resposta exigir decisão de *arquitetura*, leva pro Claude. Se for só "o que vem a seguir na sequência", este arquivo já responde.

**Preencher sempre:** campo "Semana de" e a coluna de horas do log. Log sem data e sem hora não dá pra reler depois.

Depois de preencher: cola o bloco de meta no início da sessão com o Claude.

---

## Fase 1 — andamento das trilhas
- [ ] 1.1 Linguagem (JS/TS a fundo) — javascript.info cap. 2 em andamento
- [ ] 1.2 DSA — 2/150 problemas
- [ ] 1.3 Fundamento de CS (SO, redes, terminal)
- [ ] 1.4 Git e fluxo profissional
- [ ] 1.5 Backend além de CRUD (auth, cache, filas, rate limiting)
- [ ] 1.6 Banco de dados a sério
- [ ] 1.7 Testes (unit + integração + e2e)
- [ ] 1.8 Produção (Docker, CI/CD, cloud, observabilidade)
- [ ] 🎯 Projeto-espinha no ar (não localhost)

### Disciplinas transversais (rodam desde o mês 1)
- **T1 — exposições externas:** 0/mês · pelo menos 1 crítica que mudou uma decisão? [ ] · **atrasado, 3 semanas**
- **T2 — ADRs escritos:** 2 (ADR-001, ADR-002) · posts públicos: 0/4 na fase
- **T3 — sessões de caos:** 0 (mín. 1 por projeto-espinha)

---

## Log de sessões
| Data | O que fiz | Tempo | Onde parei |
|------|-----------|-------|------------|
| 10–16/08 | Kaggle Intro to Machine Learning (curso inteiro) + primeira submissão House Prices | [preencher] | Curso concluído |
| 12/08 | Repo da espinha criado + README em inglês + ADR-001 e ADR-002 | 3h | README e os dois ADRs commitados. Falta: T1 do mês |
| 13/08 | javascript.info caps 2.4–2.7 | 2h | Todos exercícios feitos. Falta: T1 do mês |
| 16/08 | javascript.info cap 2.8 + DSA 1 e 2 / 150 | 2h | Falta: T1 do mês |
| **Fecha semana 1 (10–16/08)** | Preditivo ✓ · js.info ✓ · DSA piso · espinha ✓ (repo + ADRs) · **T1 zerou** | ~12h | Alvo era 15h. Única frente zerada: T1 |
| 17/08 | javascript.info cap 2.9 - 2.12| 2h | Todos exercícios feitos. Falta: T1 do mês |

---

## Bloqueios atuais
- **Espinha travada em async, não só no fetch.** Puxar a API do Remote OK exige promises/async — mas conectar no Postgres pelo Node também (`await client.connect()`). É a mesma trava. Não é lacuna de sintaxe como loop era pro DSA; é modelo mental. Decisão: desvio cirúrgico no 11.1–11.2 depois de fechar o cap. 2. Duas seções, destino definido, não o capítulo inteiro. Isso destrava fetch + conexão + insert + rota de uma vez — ou seja, o v1 inteiro.
- **O que dá pra fazer antes disso:** schema. Modelagem é papel, não exige banco rodando.

---

## Próximas 3 ações
1. **T1 do mês 1 — PR de documentação, até quarta.** Atrasado há 3 semanas. O javascript.info tem "Edit on GitHub" no rodapé de toda página.
2. ADR-003: schema da tabela de vagas
3. Decisão de expor só API REST, sem front, na Fase 1 — vira ADR só se houver alternativa real descartada

---

## Recursos em andamento
- **javascript.info:** parei no cap. 2.8, retomo no 2.9. Cap. 2 fecha no 2.18
- **DSA:** padrão atual = Arrays & Hashing (NeetCode)
- **Preditivo:** Kaggle Intro to ML concluído → próximo artefato é a EDA. Data Visualization como consulta, não do começo ao fim
- **DDIA:** leitura lenta ao longo dos 18 meses — [capítulo]

---

## Inglês técnico (paralelo)
- Consumindo: [podcast / doc / vídeo em inglês]

---

## Regras que não esqueço
- Na Fase 1: Claude é tutor, não piloto automático. Digito eu mesmo, entendo cada linha.
- A espinha é onde eu **aplico** o que aprendi — não é onde eu aprendo. Por isso ela nunca come hora de js.info nem de DSA.
- Uma frente não pode comer a semana inteira. Teto do satélite é teto, não meta.
- Semana ruim que bate o piso **conta como semana**. O piso existe pra isso.
- Fechar capítulo não é o objetivo; entender é. Acelerar as seções densas pra bater checkbox é autoengano.