---
title: ApolloDocs
kind: Full-stack AI SaaS · own product
summary: Solar-PV homologation documents, commercial proposals and plant monitoring in one multi-tenant platform. A ~2-hour documentation job, down to ~5 minutes.
epigraph: Apollo — god of the sun, and of order.
status: In production · continuous development
stack: [Next.js 15, React 19, TypeScript, FastAPI, SQLAlchemy 2, PostgreSQL 16 (RLS), LangChain, OpenAI, WeasyPrint, PyMuPDF, Docker, NGINX, GitHub Actions, AWS S3]
image: /images/apollodocs-logo.webp
imageAlt: ApolloDocs logo
order: 1
featured: true
primary: true
links:
  - { label: Live, href: 'https://apollodocs.diegocanafs.com.br' }
  - { label: API walkthrough (YouTube), href: 'https://www.youtube.com/watch?v=H4Y6HOk3VJw' }
---

**ApolloDocs** is the next generation of [Solar-Maker](../solar-maker/), engineered to automate and accelerate the production of technical documentation for solar energy projects.

Recognizing the limitations of a standalone desktop application, I completely reimagined the software as a web platform. Moving from a local environment to an API-driven architecture brings scalability, centralized updates, and the flexibility to integrate with other systems.

## The problem

To homologate a distributed solar system, the integrator has to deliver a package of technical documents to the utility — a package that took around **2 hours** to assemble by hand. After installation, the same integrator still follows the plants' generation across several inverter-manufacturer clouds, with no single view. I lived this problem directly when I worked in the solar sector.

## How it works

At its core, ApolloDocs is powered by a backend that exposes RESTful endpoints. The system receives structured JSON payloads containing the solar project parameters, which are strictly validated and mapped into strongly-typed domain models. This guarantees type safety, consistency, and a clean separation between data validation and the underlying business logic.

A specialized calculation engine then processes these domain models to compute the critical engineering parameters:

- **Energy generation estimates**
- **Protection device sizing**
- **Cable dimensioning**
- **Electrical losses**
- **Regulatory compliance parameters**

## What it covers today

- **Homologation package.** Descriptive Memorial and Power of Attorney rendered with Jinja2 + WeasyPrint, and the official PDFs (Single-Line Diagram and the ENEL-CE form) filled programmatically with PyMuPDF. Each utility's rules live in an isolated homologation profile, so the architecture is ready for more utilities.
- **Commercial proposals.** System sizing from consumption or from the energy bill plus INPE Solar Atlas irradiation, year-by-year financial projection (tariff adjustment, degradation, the "Fio B" transition of Law 14.300) and a PDF with simple and discounted payback, NPV, IRR and ROI.
- **Plant monitoring.** A worker with a PostgreSQL-backed task queue collects inverter-cloud APIs with retries, keeps the raw response and feeds an analytical layer with power, energy, availability, translated alarms and expected generation.
- **AI monthly reports.** Generated with LangChain + OpenAI on top of a deterministic analysis package, validated, reviewed by the integrator before being issued, and sent to the end customer by e-mail.

## Engineering notes

- **Multi-tenancy in the database itself:** PostgreSQL Row-Level Security on every tenant table, composite foreign keys, RBAC with roles and permissions in tables, and three least-privilege database roles — the API runs without RLS bypass.
- **Contract-first frontend:** Next.js 15 (App Router) and React 19, with TypeScript types generated from the OpenAPI schema and a drift check in CI.
- **Security and compliance:** JWT in httpOnly cookies, e-mail verification, session revocation and rate limiting. Issued documents are immutable records; files live in AWS S3 in São Paulo, keeping personal data in Brazil in line with the LGPD.
- **Infrastructure end to end on a single VPS:** Docker Compose, NGINX with TLS behind a Cloudflare Tunnel, CI/CD with GitHub Actions and GHCR, and automated offsite backups with restore tests.
- **Tests:** about 850 Pytest tests (including RLS tests on a real PostgreSQL), about 400 Vitest + React Testing Library tests and Playwright end-to-end tests against the production images.

## Current status

The platform is in production with homologation, proposals, monitoring and AI reports. It serves the ENEL-CE utility and is built to receive new utilities and new inverter manufacturers.

- 📺 **Demo:** watch a walkthrough of how the API works on [YouTube](https://www.youtube.com/watch?v=H4Y6HOk3VJw).
- 🌐 **Live:** the project is deployed and hosted at [apollodocs.diegocanafs.com.br](https://apollodocs.diegocanafs.com.br).
