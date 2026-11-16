---
title: Warren
kind: Análise com RAG · produto próprio
summary: Análise de carteiras de investimento fundamentada nas cartas de Warren Buffett aos acionistas — fundamentos em base própria, raciocínio contextualizado por RAG.
epigraph: O Oráculo de Omaha, consultado como o de Delfos.
status: Em desenvolvimento
stack: [Python 3.12, FastAPI, PostgreSQL, SQLAlchemy async, ChromaDB, LangChain, OpenAI GPT-4o, Pydantic v2, WeasyPrint, structlog, Prometheus, Pytest]
order: 2
featured: true
links:
  - { label: GitHub, href: 'https://github.com/Diaegon' }
---

O Warren analisa carteiras de varejo — ações, fundos imobiliários e renda fixa — confrontando os fundamentos de cada empresa com os princípios de value investing das cartas anuais de Warren Buffett.

## A ideia

Construir uma API que combine dados fundamentalistas próprios com IA generativa contextualizada por RAG, **sem chamadas a APIs financeiras externas em tempo de execução**. Para cada ação da carteira ela entrega uma análise fundamentalista com veredito, nota e citações de Buffett que realmente se aplicam àquele ativo — além de uma nota geral da carteira e um relatório em PDF.

## Como funciona

- **Base de conhecimento.** O texto integral das cartas de Buffett aos acionistas da Berkshire Hathaway: extração com PyMuPDF, chunking por parágrafo (~300 tokens), metadados de ano e tipo de documento, embeddings `text-embedding-3-small` e ingestão idempotente em ChromaDB via CLI.
- **Recuperação.** Um serviço de RAG (LangChain) monta a query semântica a partir do perfil da empresa — setor, nível de ROE e perfil de endividamento — e recupera as passagens mais relevantes, com o ano para citação.
- **Análise.** Prompts em templates e GPT-4o com saída estruturada (JSON), convertida diretamente em modelos Pydantic.
- **Pipeline de carteira.** Os ativos são separados por tipo, as ações são analisadas de forma concorrente com `asyncio.gather` e regras de alerta olham para a composição — por exemplo, baixa exposição a renda fixa.

## Notas de engenharia

- API REST em camadas (routers, services, models/schemas) com injeção de dependência do FastAPI e exceções tipadas por domínio mapeadas para códigos HTTP.
- Contratos em Pydantic v2 validando regras de negócio, como a soma dos percentuais da carteira.
- Exportação de relatório em PDF com Jinja2 + WeasyPrint, devolvida como streaming response.
- Observabilidade de produção: logging estruturado com structlog e `trace_id` via middleware, métricas RED em `/metrics` no padrão Prometheus e health checks de liveness e readiness.
- TDD mandatório, com a suíte segmentada por marcadores (unit, integration, slow) e mocks obrigatórios para a OpenAI.
