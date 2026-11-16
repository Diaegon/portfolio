---
title: ApolloDocs
kind: SaaS full-stack com IA · produto próprio
summary: Documentação de homologação solar, propostas comerciais e monitoramento de usinas em uma única plataforma multi-tenant. Um trabalho de ~2 horas reduzido a ~5 minutos.
epigraph: Apolo — deus do sol, e da ordem.
status: Em produção · desenvolvimento contínuo
stack: [Next.js 15, React 19, TypeScript, FastAPI, SQLAlchemy 2, PostgreSQL 16 (RLS), LangChain, OpenAI, WeasyPrint, PyMuPDF, Docker, NGINX, GitHub Actions, AWS S3]
image: /images/apollodocs-logo.webp
imageAlt: Logo do ApolloDocs
order: 1
featured: true
primary: true
links:
  - { label: Acessar, href: 'https://apollodocs.diegocanafs.com.br' }
  - { label: Demonstração da API (YouTube), href: 'https://www.youtube.com/watch?v=H4Y6HOk3VJw' }
---

O **ApolloDocs** é a evolução do [Solar-Maker](../solar-maker/), projetado para automatizar e acelerar a produção de documentação técnica para projetos de energia solar.

Reconhecendo as limitações de um aplicativo desktop independente, reimaginei completamente o software como uma plataforma web. A transição de um ambiente local para uma arquitetura orientada por API traz escalabilidade, atualizações centralizadas e a flexibilidade de integração com outros sistemas.

## O problema

Para homologar um sistema de geração distribuída solar, o integrador precisa entregar à distribuidora um pacote de documentos técnicos que levava cerca de **2 horas** para ser montado. Depois da instalação, ele ainda acompanha a geração das usinas em várias nuvens de fabricantes de inversores, sem uma visão única. Vivi esse problema diretamente quando trabalhei no setor solar.

## Como funciona

Em sua essência, o ApolloDocs é impulsionado por um backend que expõe *endpoints* RESTful. O sistema recebe *payloads* JSON estruturados contendo os parâmetros do projeto solar, que são estritamente validados e mapeados em modelos de domínio fortemente tipados. Essa abordagem garante segurança de tipos, consistência e uma separação clara entre a validação de dados e a lógica de negócios.

Um mecanismo de cálculo especializado processa então esses modelos de domínio para computar os parâmetros essenciais de engenharia:

- **Estimativas de geração de energia**
- **Dimensionamento dos dispositivos de proteção**
- **Dimensionamento de cabeamento**
- **Cálculo de perdas elétricas**
- **Parâmetros de conformidade regulatória**

## O que ele cobre hoje

- **Pacote de homologação.** Memorial Descritivo e Procuração gerados com Jinja2 + WeasyPrint, e preenchimento programático dos PDFs oficiais (Diagrama Unifilar e formulário da ENEL-CE) com PyMuPDF. As regras de cada distribuidora ficam isoladas em perfis de homologação, o que deixa a arquitetura pronta para várias distribuidoras.
- **Propostas comerciais.** Dimensionamento a partir do consumo ou da conta de energia e da irradiação do Atlas Solar do INPE, projeção financeira ano a ano (reajuste tarifário, degradação, transição do Fio B da Lei 14.300) e PDF com payback simples e descontado, VPL, TIR e ROI.
- **Monitoramento de usinas.** Um worker com fila de tarefas em PostgreSQL coleta as APIs de nuvem dos inversores com retentativas, guarda a resposta bruta e alimenta uma camada analítica com potência, energia, disponibilidade, alarmes traduzidos e geração esperada.
- **Relatórios mensais por IA.** Gerados com LangChain + OpenAI sobre um pacote de análise determinístico, com validação da saída, revisão pelo integrador antes da emissão e envio ao cliente final por e-mail.

## Notas de engenharia

- **Multi-tenancy no próprio banco:** Row-Level Security do PostgreSQL em todas as tabelas de tenant, FKs compostas, RBAC com papéis e permissões em tabelas e três roles de banco com privilégio mínimo — a API roda sem bypass de RLS.
- **Frontend guiado por contrato:** Next.js 15 (App Router) e React 19, com os tipos TypeScript gerados a partir do OpenAPI e verificação de divergência no CI.
- **Segurança e conformidade:** JWT em cookie httpOnly, verificação de e-mail, revogação de sessão e rate limiting. Documentos emitidos são registros imutáveis; os arquivos ficam no AWS S3 em São Paulo, mantendo os dados pessoais no Brasil em conformidade com a LGPD.
- **Infraestrutura de ponta a ponta em uma única VPS:** Docker Compose, NGINX com TLS atrás de Cloudflare Tunnel, CI/CD com GitHub Actions e GHCR, e backups offsite automatizados com teste de restauração.
- **Testes:** cerca de 850 testes Pytest (incluindo testes de RLS em PostgreSQL real), cerca de 400 testes Vitest + React Testing Library e testes E2E com Playwright contra as imagens de produção.

## Status atual

A plataforma está em produção com homologação, propostas, monitoramento e relatórios por IA. Atende a ENEL-CE e tem arquitetura pronta para novas distribuidoras e novos fabricantes de inversores.

- 📺 **Demonstração:** assista a um *walkthrough* mostrando a API em funcionamento no [YouTube](https://www.youtube.com/watch?v=H4Y6HOk3VJw).
- 🌐 **Em produção:** o projeto está publicado e pode ser acessado em [apollodocs.diegocanafs.com.br](https://apollodocs.diegocanafs.com.br).
