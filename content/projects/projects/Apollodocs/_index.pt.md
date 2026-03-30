---
date: '2026-03-12T13:14:09-03:00'
title: 'Apollodocs'
---
\
{{< hextra/hero-container image="https://d1aegon-bucket.s3.sa-east-1.amazonaws.com/portfolio-images/apollodocs-logo.png" class="ma0 w-75" imageTitle="title" >}}
O <b>Apollodocs</b> é a evolução do Solar-Maker, projetado para automatizar e acelerar a produção de documentação técnica para projetos de energia solar.

Reconhecendo as limitações de um aplicativo desktop independente, reimaginei completamente o software como uma plataforma web robusta. Essa transição de um ambiente local para uma arquitetura orientada por API (*API-driven*) possibilita escalabilidade massiva, garante atualizações centralizadas e oferece a flexibilidade de integração autônoma com outros sistemas corporativos.
{{< /hextra/hero-container >}} 

## Como Funciona

Em sua essência, o Apollodocs é impulsionado por um backend robusto que expõe *endpoints* RESTful. O sistema recebe *payloads* JSON estruturados contendo os parâmetros do projeto solar, que são estritamente validados e mapeados em modelos de domínio fortemente tipados (*strongly-typed*). Essa abordagem garante a segurança de tipos (*type safety*), consistência e uma separação clara entre a camada de validação de dados e a lógica de negócios subjacente.

Um mecanismo de cálculo especializado processa então esses modelos de domínio para computar parâmetros essenciais de engenharia, incluindo: 

- **Estimativas de geração de energia**
- **Dimensionamento dos dispositivos de proteção**
- **Dimensionamento de cabeamento**
- **Cálculo de perdas elétricas**
- **Parâmetros de conformidade regulatória**

## Tecnologias Utilizadas (Tech Stack)

A aplicação foi integralmente construída utilizando uma stack moderna e escalável:

- **Frontend:** Next.js (React), TypeScript
- **Backend:** Python, FastAPI
- **Banco de Dados:** PostgreSQL, SQLAlchemy
- **Infraestrutura:** Docker, Nginx (Proxy Reverso), hospedado em uma VPS

## Status Atual

O Apollodocs está ativamente em desenvolvimento. Embora o frontend em Next.js ainda esteja sendo construído, o backend de cálculo core é totalmente funcional e a sua API pode ser explorada interativamente usando o Swagger UI.

- 📺 **Demonstração:** Assista a um *walkthrough* mostrando a API em funcionamento no [YouTube](https://www.youtube.com/watch?v=H4Y6HOk3VJw).
- 🌐 **Ambiente de Produção (Live API):** O projeto já está publicado (*deploy*) e pode ser acessado em [apollodocs.diegocanafs.com.br](https://apollodocs.diegocanafs.com.br).
