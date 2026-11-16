import type { Lang } from '../i18n';

type L<T> = Record<Lang, T>;

export const hero: L<{
  eyebrow: string[];
  lead: string;
  leadStrong: string;
  facts: string[];
  ctaWork: string;
  ctaContact: string;
}> = {
  en: {
    eyebrow: ['Physics', 'Full-stack', 'AI Engineering'],
    lead: 'I build full-stack and AI systems for production. I have a Physics degree and started my career in solar-PV engineering, and every project since has followed the same pattern:',
    leadStrong: 'hit a real problem in the field, then build the software that solves it.',
    facts: [
      'Fortaleza, CE, Brazil — on-site, remote (Brazil), or remote international',
      'Currently: ApolloDocs — a ~2-hour documentation job down to ~5 minutes',
      'Portuguese (native) · English (B2) · Spanish (A1)',
    ],
    ctaWork: 'See the work',
    ctaContact: 'Get in touch',
  },
  pt: {
    eyebrow: ['Física', 'Full-stack', 'Engenharia de IA'],
    lead: 'Construo sistemas full-stack e de IA para produção. Sou formado em Física e comecei a carreira na engenharia de energia solar, e todo projeto desde então segue o mesmo padrão:',
    leadStrong: 'encontrar um problema real em campo e construir o software que resolve.',
    facts: [
      'Fortaleza, CE, Brasil — presencial, remoto (Brasil) ou remoto internacional',
      'Agora: ApolloDocs — um trabalho de ~2 horas de documentação reduzido a ~5 minutos',
      'Português (nativo) · Inglês (B2) · Espanhol (A1)',
    ],
    ctaWork: 'Ver os projetos',
    ctaContact: 'Entrar em contato',
  },
};

export const pattern: L<{
  label: string;
  title: string;
  paragraphs: string[];
  columns: [string, string, string];
  rows: { from: string; friction: string; built: string; link?: string }[];
}> = {
  en: {
    label: 'The pattern',
    title: 'Same rigor, different notation.',
    paragraphs: [
      'The tensor notation on this site isn’t decoration — it’s the General Relativity coursework from my Physics degree, sitting next to the architecture of the systems I ship today.',
      'A tensor doesn’t change when you change coordinates; only its components do. Most of what I’ve built works the same way — the problem stays the problem, and the basis changes from field work to software.',
    ],
    columns: ['Where I was', 'What hurt', 'What I built'],
    rows: [
      {
        from: 'Solar-PV designer',
        friction: 'Repetitive, manual homologation documentation.',
        built:
          'Solar-Maker, a desktop automation tool — which became ApolloDocs, a full-stack SaaS cutting the job from ~2 hours to ~5 minutes.',
        link: 'projects/apollodocs',
      },
      {
        from: 'AI developer at Vertere AI',
        friction: 'Construction teams needed BIM/IFC quantities without opening Revit.',
        built:
          'An automated takeoff-extraction pipeline (Celery + ifcopenshell) saving ~30 min per query, plus the data-warehouse initiative feeding an AI agent that answers questions about project status.',
        link: 'projects/vertere-mind',
      },
      {
        from: 'Personal investing research',
        friction: 'Judging a portfolio against value-investing principles, by hand.',
        built:
          'Warren, a RAG-grounded portfolio analyzer that reasons over Warren Buffett’s shareholder letters.',
        link: 'projects/warren',
      },
    ],
  },
  pt: {
    label: 'O padrão',
    title: 'Mesmo rigor, outra notação.',
    paragraphs: [
      'A notação tensorial deste site não é enfeite — é a Relatividade Geral que estudei na graduação em Física, ao lado da arquitetura dos sistemas que coloco em produção hoje.',
      'Um tensor não muda quando você troca de coordenadas; só as componentes mudam. Quase tudo o que construí funciona assim — o problema continua sendo o problema, e a base muda do trabalho de campo para o software.',
    ],
    columns: ['Onde eu estava', 'O que doía', 'O que construí'],
    rows: [
      {
        from: 'Projetista de energia solar',
        friction: 'Documentação de homologação manual e repetitiva.',
        built:
          'O Solar-Maker, uma ferramenta desktop de automação — que virou o ApolloDocs, um SaaS full-stack que reduz o trabalho de ~2 horas para ~5 minutos.',
        link: 'projects/apollodocs',
      },
      {
        from: 'Desenvolvedor de IA na Vertere AI',
        friction: 'Empresas de engenharia civil perdem muito tempo com trabalho manual e repetitivo',
        built:
          'Estudo, mapeamento e Integração de sistemas de inteligencia artificial com processos de Construção civil, visando acelerar o processo de tomada de decisão e diminuição do retrabalho.',
        link: 'projects/vertere-mind',
      },
      {
        from: 'Estudo pessoal de investimentos',
        friction: 'Avaliar uma carteira pelos princípios de value investing, na mão.',
        built:
          'O Warren, um analisador de carteiras com RAG que raciocina sobre as cartas de Warren Buffett aos acionistas.',
        link: 'projects/warren',
      },
    ],
  },
};

export const stats: L<{ value: string; label: string }[]> = {
  en: [
    { value: '2 h → 5 min', label: 'to produce a solar homologation package with ApolloDocs' },
    { value: '~30 min', label: 'saved per engineering query with automated BIM/IFC takeoff' },
    { value: '600+', label: 'external API endpoints mapped to design a data warehouse' },
    { value: '7', label: 'LLM providers behind one router with automatic fallback' },
    { value: '200+', label: 'solar projects under my direct technical responsibility' },
  ],
  pt: [
    { value: '2 h → 5 min', label: 'para gerar a documentação de homologação solar com o ApolloDocs' },
    { value: '~30 min', label: 'economizados por consulta com a extração automática de quantitativos BIM/IFC' },
    { value: '600+', label: 'endpoints de uma API externa mapeados para conceber um data warehouse' },
    { value: '7', label: 'provedores de LLM atrás de um roteador com fallback automático' },
    { value: '200+', label: 'projetos solares sob minha responsabilidade técnica direta' },
  ],
};

export const stack: L<{ label: string; title: string; motto: string; groups: { name: string; items: string[] }[] }> = {
  en: {
    label: 'Tech stack',
    title: 'The current basis.',
    motto: 'My stack changes — my ability to learn doesn’t.',
    groups: [
      { name: 'Backend', items: ['Python', 'FastAPI', 'Flask', 'SQLAlchemy', 'Alembic', 'Pydantic', 'Celery'] },
      { name: 'Frontend', items: ['TypeScript', 'Next.js', 'React', 'Tailwind CSS', 'TanStack Query'] },
      { name: 'AI / LLM', items: ['RAG', 'Agents (ReAct)', 'LangChain', 'OpenAI · Claude · Gemini', 'Qdrant · ChromaDB'] },
      { name: 'Data', items: ['PostgreSQL (RLS)', 'MySQL', 'SQLite', 'Redis', 'Medallion warehouse'] },
      { name: 'Infra & quality', items: ['Docker', 'GitHub Actions', 'NGINX', 'Linux', 'AWS S3', 'Pytest · Playwright'] },
    ],
  },
  pt: {
    label: 'Stack',
    title: 'A base atual.',
    motto: 'Minha stack pode mudar — minha habilidade para aprender não.',
    groups: [
      { name: 'Backend', items: ['Python', 'FastAPI', 'Flask', 'SQLAlchemy', 'Alembic', 'Pydantic'] },
      { name: 'Frontend', items: ['TypeScript', 'Next.js', 'React', 'Tailwind CSS'] },
      { name: 'IA / LLM', items: ['RAG', 'Agentes (ReAct)', 'LangChain', 'OpenAI · Claude · Gemini', 'Qdrant · ChromaDB'] },
      { name: 'Dados', items: ['PostgreSQL (RLS)', 'SQLite', 'Redis', 'Data warehouse Medallion'] },
      { name: 'Infra e qualidade', items: ['Docker', 'GitHub Actions', 'NGINX', 'Linux', 'AWS S3', 'Pytest · Playwright'] },
    ],
  },
};

export const worldline: L<{
  label: string;
  title: string;
  events: { year: string; title: string; notes: string[]; now?: boolean }[];
}> = {
  en: {
    label: 'Worldline',
    title: 'The road so far.',
    events: [
      { year: '2011', title: 'Electrotechnics — IFCE', notes: ['C/C++, electronics and automation systems.'] },
      { year: '2017', title: 'Physics — UFC', notes: ['Scientific computing with Python and computational modeling.'] },
      {
        year: '2018',
        title: 'Engineering leadership — Fam Engenharia',
        notes: ['Technical project designer in the solar-energy sector.'],
      },
      {
        year: '2023',
        title: 'Bachelor’s degree in Physics',
        notes: [
          'More than 200 solar-energy projects approved.',
          'Started Systems Analysis and Development — and building APIs in Python.',
        ],
      },
      {
        year: '2024',
        title: 'International experience',
        notes: ['Volunteer at the Kadampa center in Leicester, UK.'],
      },
      {
        year: '2026',
        title: 'Full-stack & AI engineering',
        notes: [
          'Technical owner of a multi-tenant AI SaaS for construction at Vertere AI.',
          'ApolloDocs in production: homologation, proposals, monitoring and AI reports.',
        ],
        now: true,
      },
    ],
  },
  pt: {
    label: 'Linha de mundo',
    title: 'A estrada até agora.',
    events: [
      { year: '2011', title: 'Eletrotécnica — IFCE', notes: ['C/C++, eletrônica e automação de sistemas.'] },
      { year: '2017', title: 'Física — UFC', notes: ['Primeiro contato com Python e modelagem computacional.'] },
      {
        year: '2018',
        title: 'Gestão de engenharia — Fam Engenharia',
        notes: ['Responsável técnico no setor de energia solar.'],
      },
      {
        year: '2023',
        title: 'Bacharel em Física',
        notes: [
          'Marca de mais de 200 projetos de energia solar aprovados.',
          'Início do curso de Análise e Desenvolvimento de Sistemas — e das primeiras APIs em Python.',
        ],
      },
      {
        year: '2024',
        title: 'Intercâmbio internacional',
        notes: ['Voluntário no centro Kadampa em Leicester, Reino Unido.'],
      },
      {
        year: '2026',
        title: 'Desenvolvimento de software full-stack e de IA',
        notes: [
          'Responsável por um SaaS de IA multi-tenant para a construção civil na Vertere AI.',
          'ApolloDocs em produção: homologação, propostas, monitoramento e relatórios por IA.',
        ],
        now: true,
      },
    ],
  },
};

export const quote = {
  text: 'Nobody ever figures out what life is all about, and it doesn’t matter. Explore the world. Nearly everything is really interesting if you go into it deeply enough.',
  author: 'Richard P. Feynman',
};

export const sections: L<{ work: [string, string]; writing: [string, string] }> = {
  en: {
    work: ['Selected work', 'Problems I got tired of solving by hand.'],
    writing: ['Writing', 'Notes from the road.'],
  },
  pt: {
    work: ['Projetos em destaque', 'Problemas que cansei de resolver na mão.'],
    writing: ['Textos', 'Anotações da estrada.'],
  },
};
