# Progresso — Plano de Estudos (Software + AI Engineering)

> Fonte de continuidade. Atualizo conforme avanço e compartilho no início de cada sessão.

**Última atualização:** 12/08/2026

---

## Status atual
- **Fase:** 1 — Fundamento sólido (mês 1–6)
- **Módulo Inteli:** Modelo Preditivo — semana 2 de 10
- **Projeto-espinha:** agregador de vagas remotas internacionais — https://github.com/viniciuscastiglia/job-ingestion-pipeline

---

## 🎯 Meta da semana

**Semana de:** [data de segunda]

| Frente | Horas-alvo | Alvo desta semana | Bateu? |
|--------|-----------|-------------------|--------|
| Preditivo (satélite) | 4h | EDA completa do House Prices commitada: distribuições, faltantes, correlações, 3 hipóteses escritas | |
| javascript.info | 4h | 3 sessões, a partir do cap. 2.4 | |
| DSA | 3h | 4 problemas — Arrays & Hashing | |
| Projeto-espinha | 3h | v1 burro: API do Remote OK → script puxa → Postgres local → salva → rota que lista | |
| T1 / T2 | 1h | ADR quando aparecer decisão não-óbvia (modelagem da tabela de vagas é uma) | |

**Alvo total: ~15h** fora das aulas.

### Piso (semana ruim ainda conta como semana)
Commit diário + 2 problemas de DSA + 1 sessão de js.info + entrega do Inteli. **~6h.**

### Ordem de corte quando a semana apertar
DSA extra → espinha → js.info cai pra 2x.
**Nunca corta:** commit diário, entrega do Inteli, preditivo abaixo do que o módulo exige.
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

Depois de preencher: cola o bloco de meta no início da sessão com o Claude.

---

## Fase 1 — andamento das trilhas
- [ ] 1.1 Linguagem (JS/TS a fundo)
- [ ] 1.2 DSA — ____/150 problemas
- [ ] 1.3 Fundamento de CS (SO, redes, terminal)
- [ ] 1.4 Git e fluxo profissional
- [ ] 1.5 Backend além de CRUD (auth, cache, filas, rate limiting)
- [ ] 1.6 Banco de dados a sério
- [ ] 1.7 Testes (unit + integração + e2e)
- [ ] 1.8 Produção (Docker, CI/CD, cloud, observabilidade)
- [ ] 🎯 Projeto-espinha no ar (não localhost)

### Disciplinas transversais (rodam desde o mês 1)
- **T1 — exposições externas:** ___/mês · pelo menos 1 crítica que mudou uma decisão? [ ]
- **T2 — ADRs escritos:** 2 · posts públicos: ___/4 na fase
- **T3 — sessões de caos:** ___ (mín. 1 por projeto-espinha)

---

## Log de sessões
| Data | O que fiz | Tempo | Onde parei |
|------|-----------|-------|------------|
| Semana 06–12/08 | Kaggle Intro to Machine Learning (curso inteiro) + primeira submissão House Prices | — | Curso concluído. **Frentes que zeraram: js.info, DSA, espinha, T1.** |
| 12/08 | Repo da espinha criado + README em inglês + ADR-001 e ADR-002 | 3h | README e os dois ADRs commitados. Falta: T1 do mês |

---

## Bloqueios atuais
- [dúvida ou coisa que travou — trazer pro Claude na próxima sessão]

---

## Próximas 3 ações
1. T1 do mês 1: PR de documentação em algum repo que eu uso — atrasado
2. ADR-003: decisão de expor só API REST, sem front, na Fase 1
3. v1 burro da espinha (semana que vem)

---

## Recursos em andamento
- **javascript.info:** parei no cap. 2.3, retomo no 2.4
- **DSA:** padrão atual = Arrays & Hashing (NeetCode)
- **Preditivo:** Kaggle Intro to ML concluído → próximo artefato é a EDA
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
