---
date: '2026-03-12T13:14:09-03:00'
title: 'Apollodocs'
---
\
{{< hextra/hero-container image="https://d1aegon-bucket.s3.sa-east-1.amazonaws.com/portfolio-images/apollodocs-logo.png" class="ma0 w-75" imageTitle="title" >}}
<b>Apollodocs</b> is the next generation of Solar-Maker, engineered to automate and accelerate the production of technical documentation for solar energy projects.

Recognizing the limitations of a standalone desktop application, I completely reimagined the software as a robust web-based platform. This transition from a local environment to an API-driven architecture unlocks massive scalability, ensures centralized updates, and provides the flexibility to seamlessly integrate with other enterprise systems.
{{< /hextra/hero-container >}} 

## How It Works

At its core, Apollodocs is powered by a robust backend that exposes RESTful endpoints. The system receives structured JSON payloads containing solar project parameters, which are strictly validated and mapped into strongly-typed domain models. This approach guarantees type safety, consistency, and a clean separation between data validation and the underlying business logic.

A specialized calculation engine then processes these domain models to compute critical engineering parameters, including: 

- **Energy generation estimates**
- **Protection device sizing**
- **Cable dimensioning**
- **Electrical losses**
- **Regulatory compliance parameters**

## Tech Stack

The application is built leveraging a modern and scalable tech stack:

- **Frontend:** Next.js (React), TypeScript
- **Backend:** Python, FastAPI
- **Database:** PostgreSQL, SQLAlchemy
- **Infrastructure:** Docker, Nginx (Reverse Proxy), deployed on a VPS

## Current Status

Apollodocs is actively in development. While the Next.js frontend is currently being built out, the core calculation engine is fully functional and its endpoints can be explored interactively using Swagger UI. 

- 📺 **Demo:** Watch a walkthrough of how the API works on [YouTube](https://www.youtube.com/watch?v=H4Y6HOk3VJw).
- 🌐 **Live API:** The project is deployed and hosted at [apollodocs.diegocanafs.com.br](https://apollodocs.diegocanafs.com.br).
