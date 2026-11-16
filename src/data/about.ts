import type { Lang } from '../i18n';

type L<T> = Record<Lang, T>;

export const about: L<{
  label: string;
  title: string;
  greeting: string;
  intro: string[];
  ifceCaption: string;
  cards: { title: string; subtitle: string; image: string }[];
  later: string[];
  portraitAlt: string;
  offLabel: string;
  offTitle: string;
  interests: { mark: string; title: string; text: string }[];
  cta: string;
}> = {
  en: {
    label: 'About',
    title: 'Electronics first. Then physics. Then software.',
    greeting: 'Hi, my name is Diêgo!',
    intro: [
      'My journey in technology started long before software became my main focus. I began working with electronics and low-level programming, which shaped the way I think about systems — structured, reliable, and built with purpose.',
      'While studying Physics, I strengthened my analytical thinking and worked with scientific computing using Python to model complex systems. This experience taught me how to break down problems methodically.',
    ],
    ifceCaption:
      'My first technology internship, a Petrobras/IFCE grant — my group’s work on stepper-motor control with Arduino.',
    cards: [
      {
        title: 'Undergraduate thesis in Physics',
        subtitle: 'A study of transcriptional genetic networks',
        image: '/images/tcc-image.webp',
      },
      { title: 'Solar-Maker', subtitle: 'First software', image: '/images/solar-makerv1.webp' },
    ],
    later: [
      'Before transitioning fully into software development, I spent more than seven years in the renewable-energy sector as a Technical Project Designer, contributing to more than 200 approved photovoltaic projects. Designing systems under regulatory and operational constraints developed my sense of ownership and responsibility.',
      'Today, I focus on full-stack development, AI systems and system architecture. I am particularly interested in building scalable applications and understanding infrastructure and DevOps to see the full picture behind modern software.',
    ],
    portraitAlt: 'Diêgo Canafistula',
    offLabel: 'Off the clock',
    offTitle: 'What the black and red are about.',
    interests: [
      {
        mark: 'Gμν',
        title: 'Theoretical physics & cosmology',
        text: 'General Relativity is where the notation on this site comes from. The big questions — how spacetime bends, how the universe began — are still the ones I enjoy the most.',
      },
      {
        mark: 'Ἀπόλλων',
        title: 'Greek mythology',
        text: 'Old stories that keep naming new things. A product about solar energy could only carry the name of the sun god.',
      },
      {
        mark: 'Ice & Fire',
        title: 'Game of Thrones',
        text: 'Black and red, long games and consequences. And a healthy reminder that, at the start of anything new, you and Jon Snow know the same thing: nothing.',
      },
    ],
    cta: 'See my experience',
  },
  pt: {
    label: 'Sobre',
    title: 'Primeiro a eletrônica. Depois a física. Depois o software.',
    greeting: 'Oi, eu sou Diêgo!',
    intro: [
      'Minha jornada na tecnologia começou muito antes de o desenvolvimento de software se tornar meu foco principal. Comecei trabalhando com eletrônica e programação de baixo nível, experiências que moldaram a forma como penso sobre sistemas: estruturados, confiáveis e construídos com propósito.',
      'Na minha graduação em Física, desenvolvi ainda mais meu pensamento analítico e trabalhei com computação científica utilizando Python para modelar sistemas complexos. Essa experiência me ensinou a abordar problemas de forma metódica e a dividi-los em partes menores e mais gerenciáveis.',
    ],
    ifceCaption:
      'O trabalho do meu grupo na bolsa de iniciação tecnológica Petrobras/IFCE: controle de motor de passo via Arduino.',
    cards: [
      {
        title: 'TCC Física',
        subtitle: 'TCC sobre redes de transcrição genética',
        image: '/images/tcc-image.webp',
      },
      { title: 'Solar-Maker', subtitle: 'Primeiro software', image: '/images/solar-makerv1.webp' },
    ],
    later: [
      'Antes de fazer a transição completa para o desenvolvimento de software, passei mais de sete anos no setor de energia renovável como Projetista Técnico. Nesse período, contribuí para o desenvolvimento de mais de 200 projetos fotovoltaicos aprovados. Projetar sistemas dentro de restrições regulatórias e operacionais fortaleceu meu senso de responsabilidade e de comprometimento com a qualidade do trabalho entregue.',
      'Hoje, meu foco está no desenvolvimento full-stack, em sistemas de IA e na arquitetura de sistemas. Gosto de construir sistemas confiáveis e de compreender como as diferentes camadas do software moderno se conectam — da lógica da aplicação até a infraestrutura. Tenho especial interesse em aplicações escaláveis, infraestrutura e DevOps, pois acredito que entender o sistema como um todo é essencial para construir softwares robustos e sustentáveis ao longo do tempo.',
    ],
    portraitAlt: 'Diêgo Canafistula',
    offLabel: 'Fora do expediente',
    offTitle: 'De onde vêm o preto e o vermelho.',
    interests: [
      {
        mark: 'Gμν',
        title: 'Física teórica e cosmologia',
        text: 'A Relatividade Geral é de onde vem a notação deste site. As grandes perguntas — como o espaço-tempo se curva, como o universo começou — ainda são as que mais gosto.',
      },
      {
        mark: 'Ἀπόλλων',
        title: 'Mitologia grega',
        text: 'Histórias antigas que continuam batizando coisas novas. Um produto sobre energia solar só podia levar o nome do deus do sol.',
      },
      {
        mark: 'Gelo & Fogo',
        title: 'Game of Thrones',
        text: 'Preto e vermelho, jogos longos e consequências. E um bom lembrete de que, no começo de qualquer coisa nova, você e o Jon Snow sabem a mesma coisa: nada.',
      },
    ],
    cta: 'Ver minha experiência',
  },
};
