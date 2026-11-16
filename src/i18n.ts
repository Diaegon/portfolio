export const languages = ['en', 'pt'] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'en';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Base-aware absolute path for a site asset or page, e.g. href('/images/x.webp'). */
export function href(path: string): string {
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Localised page path with trailing slash: page('pt', 'projects') -> /pt/projects/ */
export function page(lang: Lang, path = ''): string {
  const clean = path.replace(/^\/|\/$/g, '');
  return href(`/${lang}/${clean ? `${clean}/` : ''}`);
}

export function otherLang(lang: Lang): Lang {
  return lang === 'en' ? 'pt' : 'en';
}

export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === 'pt' ? 'pt-BR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

/** "en/apollodocs" -> { lang: "en", slug: "apollodocs" } */
export function splitId(id: string): { lang: Lang; slug: string } {
  const [lang, ...rest] = id.split('/');
  return { lang: lang as Lang, slug: rest.join('/') };
}

export const ui = {
  en: {
    siteTitle: 'Diêgo Canafistula',
    siteDescription:
      'Diêgo Tavares Canafistula — full-stack and AI engineer with a Physics degree. I hit real problems in the field, then build the software that solves them.',
    nav: { about: 'About', experience: 'Experience', projects: 'Projects', writing: 'Writing' },
    skip: 'Skip to content',
    switchTo: 'Português',
    readMore: 'Read more',
    viewProject: 'View project',
    allProjects: 'All projects',
    allWriting: 'All writing',
    fullExperience: 'Full experience',
    backToProjects: 'All projects',
    backToWriting: 'All writing',
    stackLabel: 'Stack',
    linksLabel: 'Links',
    statusLabel: 'Status',
    next: 'Next',
    previous: 'Previous',
    onlyIn: { en: 'English only', pt: 'Portuguese only' },
    contactTitle: 'Get in touch',
    contactLead:
      'Here I share my projects, experiments, and the systems I build along the way. Feel free to explore — and reach out if you’d like to work together.',
    availability: 'Fortaleza, CE, Brazil — open to on-site, remote in Brazil, or remote international.',
    footerLaw: 'tensor transformation law — same rules, new basis',
    notFoundTitle: 'You know nothing, Jon Snow.',
    notFoundBody:
      'This page crossed the event horizon and no information is coming back. Try one of the paths below.',
    home: 'Home',
  },
  pt: {
    siteTitle: 'Diêgo Canafistula',
    siteDescription:
      'Diêgo Tavares Canafistula — engenheiro full-stack e de IA formado em Física. Encontro problemas reais em campo e construo o software que resolve.',
    nav: { about: 'Sobre', experience: 'Experiência', projects: 'Projetos', writing: 'Textos' },
    skip: 'Pular para o conteúdo',
    switchTo: 'English',
    readMore: 'Ler mais',
    viewProject: 'Ver projeto',
    allProjects: 'Todos os projetos',
    allWriting: 'Todos os textos',
    fullExperience: 'Experiência completa',
    backToProjects: 'Todos os projetos',
    backToWriting: 'Todos os textos',
    stackLabel: 'Stack',
    linksLabel: 'Links',
    statusLabel: 'Status',
    next: 'Próximo',
    previous: 'Anterior',
    onlyIn: { en: 'Somente em inglês', pt: 'Somente em português' },
    contactTitle: 'Entre em contato',
    contactLead:
      'Aqui compartilho meus projetos, experimentos e os sistemas que desenvolvo ao longo da jornada. Sinta-se à vontade para explorar — e me escreva se quiser trabalhar comigo.',
    availability: 'Fortaleza, CE, Brasil — aberto a presencial, remoto no Brasil ou remoto internacional.',
    footerLaw: 'lei de transformação tensorial — mesmas regras, nova base',
    notFoundTitle: 'Você não sabe nada, Jon Snow.',
    notFoundBody:
      'Esta página cruzou o horizonte de eventos e nenhuma informação volta de lá. Tente um dos caminhos abaixo.',
    home: 'Início',
  },
} as const;

export const contact = {
  email: 'diego.canafistula@gmail.com',
  github: 'https://github.com/Diaegon',
  linkedin: 'https://linkedin.com/in/diegocanafs',
};
