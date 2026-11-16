---
title: Vertere Mind
kind: SaaS de IA para construção civil · trabalho profissional
summary: SaaS de IA para o setor AEC — transforma dados não estruturados de obras (modelos IFC/BIM, transcrições de reuniões, planilhas, orçamentos) em informação estruturada e consultável.
epigraph: O fio de Ariadne em um labirinto de dados de obra.
status: Responsável técnico, mai — jul 2026
stack: [Flask 3, PostgreSQL, Qdrant, Redis, Celery, ifcopenshell, AWS S3, React 19, TypeScript, Chakra UI]
order: 3
featured: true
---

A Vertere Mind é um SaaS de IA multi-tenant para o setor AEC (Arquitetura, Engenharia e Construção) e para gestão documental e de processos corporativos. Oferece chat com RAG sobre base de conhecimento, inteligência de reuniões, um agente SQL para conversar com o banco de dados, extração de quantitativos BIM, inteligência de orçamentos e roteamento multi-provider de LLMs com fallback automático.

Assumi a responsabilidade direta pela manutenção e evolução do produto — backend e frontend — com apoio do time original.

## Responsabilidade por uma codebase de produção

O produto já estava em produção, usado por gerentes de projeto, engenheiros e arquitetos. Atuei in loco em um escritório de acompanhamento de obras para levantar e validar regras de negócio, traduzindo o processo real do canteiro em requisitos técnicos. A API é organizada em camadas (routes → schemas → services → queries/repositories), com RBAC granular por rota e por diretório de conhecimento, e testada com pytest + testcontainers — bancos de dados reais em containers, sem mocks.

## Extração de quantitativos BIM/IFC

Consultas de quantitativos dependiam da abertura de softwares pesados de modelagem, como o Revit, e de horas de trabalho e retrabalho de engenheiros. Desenvolvi a extração automatizada de quantitativos a partir de arquivos BIM/IFC (padrão openBIM), com processamento assíncrono via Celery e ifcopenshell, exportando planilhas Excel organizadas por disciplina de engenharia: arquitetura, estrutura, fundação, elétrica, hidráulica, pluvial/sanitário, SPDA e combate a incêndio.

**Resultado:** nenhuma necessidade de software de modelagem para consultas de quantitativos, com economia estimada de cerca de **30 minutos por consulta** — e a mesma consulta pode ser feita várias vezes por dia em cada projeto.

## Um data warehouse para um agente de IA de obras

Responder perguntas sobre o andamento de uma obra exigia consolidar dados de orçamento, acompanhamento e modelos BIM. Pesquisei a API de origem, mapeando **mais de 600 endpoints** e identificando os centrais; defini os schemas de armazenamento em camadas no padrão Medallion (Bronze, Silver e Controle); e projetei o isolamento multi-tenant com Row-Level Security no PostgreSQL.

## Agente conversacional com RAG e multi-provider de LLMs

Desenvolvi um agente conversacional com arquitetura de skills e roteamento dinâmico de intenção, para que o cliente pergunte sobre suas obras em linguagem natural em vez de aprender uma UI nova. A busca em base de conhecimento roda no Qdrant com ciclo iterativo de uso de ferramentas (ReAct), e **7 provedores de LLM** — OpenAI, Anthropic, Google Gemini, Grok, Groq, Deepinfra e Perplexity — ficam atrás de um roteamento com fallback automático, reduzindo a dependência de uma única empresa ou modelo.
