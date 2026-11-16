---
title: Vertere Mind
kind: AI SaaS for construction · professional work
summary: AI-powered SaaS for the AEC sector — turns unstructured project data (IFC/BIM models, meeting transcripts, spreadsheets, budgets) into structured, queryable insight.
epigraph: Ariadne's thread through a labyrinth of project data.
status: Technical owner, May — Jul 2026
stack: [Flask 3, PostgreSQL, Qdrant, Redis, Celery, ifcopenshell, AWS S3, React 19, TypeScript, Chakra UI]
order: 3
featured: true
---

Vertere Mind is a multi-tenant AI SaaS for the AEC sector (Architecture, Engineering and Construction) and for corporate document and process management. It offers knowledge-base RAG chat, meeting intelligence, a talk-to-your-database SQL agent, BIM quantity extraction, budget intelligence, and multi-provider LLM routing with automatic fallback.

I took direct responsibility for maintaining and evolving the product — backend and frontend — with support from the original team.

## Owning a production codebase

The product was already in production, used by project managers, engineers and architects. I worked on site at a construction-monitoring office to gather and validate business rules, translating the real process of the building site into technical requirements. The API is organized in layers (routes → schemas → services → queries/repositories) with granular RBAC per route and per knowledge directory, and tested with pytest + testcontainers — real databases in containers, no mocks.

## BIM/IFC quantity takeoff

Quantity lookups depended on opening heavy modeling software such as Revit, and on hours of work and rework from engineers. I built automated quantity extraction from BIM/IFC files (the openBIM standard), with asynchronous processing through Celery and ifcopenshell, exporting Excel sheets organized by engineering discipline: architecture, structure, foundation, electrical, plumbing, drainage/sewage, lightning protection and fire safety.

**Result:** no modeling software needed for quantity queries, with an estimated saving of about **30 minutes per query** — and the same query can be made several times a day on each project.

## A data warehouse for a construction AI agent

Answering questions about the progress of a building site meant consolidating budget, monitoring and BIM data. I researched the source API, mapping **more than 600 endpoints** and identifying the central ones; defined layered storage schemas in the Medallion pattern (Bronze, Silver and Control); and designed multi-tenant isolation with Row-Level Security in PostgreSQL.

## Conversational agent with RAG and multi-provider LLMs

I developed a conversational agent with a skills architecture and dynamic intent routing, so customers ask questions about their projects in natural language instead of learning a new UI. Knowledge-base search runs on Qdrant with an iterative tool-use loop (ReAct), and **7 LLM providers** — OpenAI, Anthropic, Google Gemini, Grok, Groq, Deepinfra and Perplexity — sit behind routing with automatic fallback, removing the dependency on a single company or model.
