---
title: Warren
kind: RAG analysis · own product
summary: Investment-portfolio analysis grounded in Warren Buffett's shareholder letters — fundamentals from my own database, reasoning contextualized by RAG.
epigraph: The Oracle of Omaha, consulted like the one at Delphi.
status: In development
stack: [Python 3.12, FastAPI, PostgreSQL, SQLAlchemy async, ChromaDB, LangChain, OpenAI GPT-4o, Pydantic v2, WeasyPrint, structlog, Prometheus, Pytest]
order: 2
featured: true
links:
  - { label: GitHub, href: 'https://github.com/Diaegon' }
---

Warren analyzes retail portfolios — stocks, real-estate funds and fixed income — by confronting each company's fundamentals with the value-investing principles in Warren Buffett's annual letters.

## The idea

Build an API that combines my own fundamentals data with generative AI contextualized by RAG, **without calling external financial APIs at runtime**. For every stock in a portfolio it returns a fundamental analysis with a verdict, a score and Buffett quotes that actually apply to that asset — plus an overall portfolio score and a PDF report.

## How it works

- **Knowledge base.** The full text of Buffett's letters to Berkshire Hathaway shareholders: extraction with PyMuPDF, paragraph chunking (~300 tokens), year and document-type metadata, `text-embedding-3-small` embeddings and idempotent ingestion into ChromaDB through a CLI.
- **Retrieval.** A RAG service (LangChain) builds the semantic query from the company's profile — sector, ROE level, debt profile — and retrieves the most relevant passages, with the year for citation.
- **Analysis.** Prompt templates and GPT-4o with structured (JSON) output, converted straight into Pydantic models.
- **Portfolio pipeline.** Assets are split by type, stocks are analyzed concurrently with `asyncio.gather`, and alert rules look at the composition — for example, low exposure to fixed income.

## Engineering notes

- Layered REST API (routers, services, models/schemas) with FastAPI dependency injection, and typed domain exceptions mapped to HTTP codes.
- Pydantic v2 contracts validating business rules such as the sum of portfolio percentages.
- PDF report export with Jinja2 + WeasyPrint, returned as a streaming response.
- Production observability: structured logging with structlog and a `trace_id` middleware, RED metrics on `/metrics` in Prometheus format, liveness and readiness checks.
- Mandatory TDD, with the suite split by markers (unit, integration, slow) and OpenAI always mocked.
