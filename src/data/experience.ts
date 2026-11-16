import type { Lang } from '../i18n';

type L<T> = Record<Lang, T>;

export interface Role {
  title: string;
  company: string;
  period: string;
  context: string;
  highlights: { head?: string; text: string }[];
  stack: string[];
  link?: { label: string; path: string };
}

export const intro: L<{ label: string; title: string; lead: string[] }> = {
  en: {
    label: 'Experience',
    title: 'From the rooftop to production.',
    lead: [
      'Full-stack developer with degrees in Physics and in Systems Analysis and Development, building Python APIs and relational databases since August 2023. Most recently I was the technical owner — backend and frontend — of a multi-tenant AI SaaS for the AEC sector: conversational agents with RAG, multi-provider LLM integration, asynchronous processing with Celery and the design of a Medallion data warehouse.',
      'I run my own infrastructure (Ubuntu Server, NGINX, Docker, Cloudflare Tunnel), ship through CI/CD with GitHub Actions and work test-first. Before software I was the electrotechnician responsible for 200+ distributed solar projects, with the customer from sale to after-sales — the domain experience that produced my own products.',
    ],
  },
  pt: {
    label: 'Experiência',
    title: 'Do telhado à produção.',
    lead: [
      'Desenvolvedor full-stack formado em Física e em Análise e Desenvolvimento de Sistemas, construindo APIs em Python e bancos de dados relacionais desde agosto de 2023. Mais recentemente fui o responsável técnico — backend e frontend — por um SaaS de IA multi-tenant para o setor AEC: agentes conversacionais com RAG, integração multi-provider de LLMs, processamento assíncrono com Celery e a concepção de um data warehouse em arquitetura Medallion.',
      'Mantenho infraestrutura própria (Ubuntu Server, NGINX, Docker, Cloudflare Tunnel), entrego com CI/CD no GitHub Actions e trabalho com testes desde o início. Antes do software fui o eletrotécnico responsável por mais de 200 projetos de microgeração solar, com o cliente da venda ao pós-venda — a vivência de domínio que deu origem aos meus próprios produtos.',
    ],
  },
};

export const roles: L<Role[]> = {
  en: [
    {
      title: 'AI Developer',
      company: 'Vertere AI',
      period: 'May 2026 — Jul 2026',
      context:
        'Multi-tenant AI SaaS for the AEC sector and for corporate document and process management, used by project managers, engineers and architects at Brazilian construction companies.',
      highlights: [
        {
          head: 'Owning a production codebase',
          text: 'Took over maintenance and evolution of backend and frontend. Worked on site at a construction-monitoring office to turn the real process into technical requirements; layered API (routes → schemas → services → repositories) with granular RBAC, tested with pytest + testcontainers against real databases.',
        },
        {
          head: 'BIM/IFC quantity takeoff',
          text: 'Built automated quantity extraction from IFC files (openBIM) with Celery and ifcopenshell, exporting Excel sheets per engineering discipline. No modeling software needed — about 30 minutes saved per query.',
        },
        {
          head: 'Data warehouse for a construction AI agent',
          text: 'Mapped 600+ endpoints of the source API, defined Medallion-layer schemas (Bronze, Silver, Control) and designed multi-tenant isolation with PostgreSQL Row-Level Security.',
        },
        {
          head: 'Conversational agent with RAG',
          text: 'Skill-based agent with dynamic intent routing, knowledge-base search on Qdrant with a ReAct tool loop, and 7 LLM providers (OpenAI, Anthropic, Gemini, Grok, Groq, Deepinfra, Perplexity) behind routing with automatic fallback.',
        },
      ],
      stack: ['Python', 'Flask 3', 'PostgreSQL', 'Qdrant', 'Redis', 'Celery', 'ifcopenshell', 'AWS S3', 'Docker', 'React 19', 'TypeScript', 'Chakra UI'],
      link: { label: 'Vertere Mind case', path: 'projects/vertere-mind' },
    },
    {
      title: 'Backend Developer (Python)',
      company: 'Independent',
      period: 'Aug 2023 — Present',
      context: 'APIs, web applications and self-managed infrastructure.',
      highlights: [
        { text: 'RESTful APIs in Python (FastAPI) with clear separation of responsibilities.' },
        { text: 'PostgreSQL and MySQL through SQLAlchemy (sync and async), Alembic migrations and Pydantic models.' },
        { text: 'JWT authentication, automated tests with Pytest, Docker and CI/CD pipelines on GitHub Actions.' },
        { text: 'My own VPS on Ubuntu Server with NGINX as reverse proxy and Cloudflare Tunnel, plus cloud deploys on Render and Railway.' },
        { text: 'Full-stack web apps with Next.js, React and TypeScript on top of the Python backend.' },
      ],
      stack: ['Python', 'FastAPI', 'PostgreSQL', 'MySQL', 'SQLAlchemy', 'Alembic', 'Pydantic', 'Pytest', 'Docker', 'GitHub Actions', 'NGINX', 'Next.js', 'React', 'TypeScript'],
      link: { label: 'Projects', path: 'projects' },
    },
    {
      title: 'Electrotechnician in charge',
      company: 'Fam Engenharia',
      period: 'From 2018 · 7+ years',
      context: 'Solar-energy engineering company working on distributed microgeneration.',
      highlights: [
        { text: 'Direct technical responsibility for distributed-microgeneration projects.' },
        { text: 'Took part in the design and execution of the installations.' },
        { text: 'Handled sales and the customer relationship, from sale to after-sales.' },
        { text: 'More than 200 projects under direct technical responsibility and active participation in more than 300.' },
      ],
      stack: ['Solar PV', 'Utility homologation', 'Electrical design', 'Customer-facing'],
    },
  ],
  pt: [
    {
      title: 'Desenvolvedor de IA',
      company: 'Vertere AI',
      period: 'Mai 2026 — Jul 2026',
      context:
        'SaaS de IA multi-tenant para o setor AEC e para gestão documental e de processos corporativos, usado por gerentes de projeto, engenheiros e arquitetos de empresas de construção civil no Brasil.',
      highlights: [
        {
          head: 'Responsabilidade pela codebase de produção',
          text: 'Assumi a manutenção e a evolução do backend e do frontend. Atuei in loco em um escritório de acompanhamento de obras para traduzir o processo real em requisitos técnicos; API em camadas (routes → schemas → services → repositories) com RBAC granular, testada com pytest + testcontainers em bancos reais.',
        },
        {
          head: 'Quantitativos BIM/IFC',
          text: 'Desenvolvi a extração automática de quantitativos a partir de arquivos IFC (openBIM) com Celery e ifcopenshell, exportando planilhas Excel por disciplina de engenharia. Sem software de modelagem — cerca de 30 minutos economizados por consulta.',
        },
        {
          head: 'Data warehouse para um agente de IA de obras',
          text: 'Mapeei mais de 600 endpoints da API de origem, defini os schemas em camadas Medallion (Bronze, Silver e Controle) e projetei o isolamento multi-tenant com Row-Level Security no PostgreSQL.',
        },
        {
          head: 'Agente conversacional com RAG',
          text: 'Agente com arquitetura de skills e roteamento dinâmico de intenção, busca em base de conhecimento no Qdrant com ciclo ReAct, e 7 provedores de LLM (OpenAI, Anthropic, Gemini, Grok, Groq, Deepinfra, Perplexity) com roteamento e fallback automático.',
        },
      ],
      stack: ['Python', 'Flask 3', 'PostgreSQL', 'Qdrant', 'Redis', 'Celery', 'ifcopenshell', 'AWS S3', 'Docker', 'React 19', 'TypeScript', 'Chakra UI'],
      link: { label: 'Case Vertere Mind', path: 'projects/vertere-mind' },
    },
    {
      title: 'Desenvolvedor Backend (Python)',
      company: 'Autônomo',
      period: 'Ago 2023 — Atual',
      context: 'APIs, aplicações web e infraestrutura própria.',
      highlights: [
        { text: 'APIs RESTful em Python (FastAPI) com separação clara de responsabilidades.' },
        { text: 'PostgreSQL e MySQL via SQLAlchemy (sync e async), migrações com Alembic e modelagem com Pydantic.' },
        { text: 'Autenticação JWT, testes automatizados com Pytest, Docker e pipelines de CI/CD no GitHub Actions.' },
        { text: 'VPS própria em Ubuntu Server com NGINX como proxy reverso e Cloudflare Tunnel, além de deploys em Render e Railway.' },
        { text: 'Aplicações web full-stack com Next.js, React e TypeScript em complemento ao backend em Python.' },
      ],
      stack: ['Python', 'FastAPI', 'PostgreSQL', 'MySQL', 'SQLAlchemy', 'Alembic', 'Pydantic', 'Pytest', 'Docker', 'GitHub Actions', 'NGINX', 'Next.js', 'React', 'TypeScript'],
      link: { label: 'Projetos', path: 'projects' },
    },
    {
      title: 'Eletrotécnico Responsável',
      company: 'Fam Engenharia',
      period: 'Desde 2018 · 7+ anos',
      context: 'Empresa de engenharia do setor de energia solar, com projetos de microgeração distribuída.',
      highlights: [
        { text: 'Responsável técnico direto de projetos de microgeração distribuída.' },
        { text: 'Participação no projeto e na execução das instalações.' },
        { text: 'Venda e tratamento direto com o cliente, da venda ao pós-venda.' },
        { text: 'Mais de 200 projetos sob responsabilidade técnica direta e participação ativa em mais de 300.' },
      ],
      stack: ['Energia solar', 'Homologação em distribuidoras', 'Projeto elétrico', 'Contato com cliente'],
    },
  ],
};

export const education: L<{ label: string; items: { course: string; school: string; period: string }[] }> = {
  en: {
    label: 'Education',
    items: [
      { course: 'Systems Analysis and Development', school: 'Universidade Estácio de Sá', period: '2023 — 2026' },
      { course: 'BSc in Physics', school: 'Universidade Federal do Ceará (UFC)', period: '2017 — 2023' },
      { course: 'Electrotechnics', school: 'Instituto Federal do Ceará (IFCE)', period: '2011 — 2016' },
    ],
  },
  pt: {
    label: 'Formação',
    items: [
      { course: 'Análise e Desenvolvimento de Sistemas', school: 'Universidade Estácio de Sá', period: '2023 — 2026' },
      { course: 'Bacharelado em Física', school: 'Universidade Federal do Ceará (UFC)', period: '2017 — 2023' },
      { course: 'Eletrotécnica', school: 'Instituto Federal do Ceará (IFCE)', period: '2011 — 2016' },
    ],
  },
};

export const extras: L<{ languagesLabel: string; languages: string[]; domainsLabel: string; domains: string[] }> = {
  en: {
    languagesLabel: 'Languages',
    languages: ['Portuguese — native', 'English — B2', 'Spanish — A1'],
    domainsLabel: 'Business domains',
    domains: [
      'Solar energy — distributed microgeneration, utility homologation',
      'Construction — AEC, BIM, budgets, site monitoring',
      'Fundamental analysis of investments',
    ],
  },
  pt: {
    languagesLabel: 'Idiomas',
    languages: ['Português — nativo', 'Inglês — B2', 'Espanhol — A1'],
    domainsLabel: 'Domínios de negócio',
    domains: [
      'Energia solar — microgeração distribuída, homologação junto a distribuidoras',
      'Construção civil — AEC, BIM, orçamentos, acompanhamento de obras',
      'Análise fundamentalista de investimentos',
    ],
  },
};
