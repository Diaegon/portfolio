---
title: Solar-Maker
kind: Automação desktop · produto próprio
summary: Aplicação desktop feita em Python para automatizar e facilitar a gerência e a produção de projetos de energia solar — a origem do ApolloDocs.
epigraph: O mito de origem do ApolloDocs.
status: Pronto para produção · usado em projetos reais de engenharia solar
stack: [Python, Tkinter, SQLite, ReportLab, PyMuPDF]
image: /images/solarmaker-image.webp
imageAlt: Interface desktop do Solar-Maker feita em Tkinter
order: 6
links:
  - { label: LinkedIn, href: 'https://linkedin.com/in/diegocanafs' }
---

Este projeto surgiu da necessidade de automatizar a criação de documentação técnica para projetos de energia solar.

Na indústria de energia solar, a criação de documentação técnica é uma tarefa crítica, porém demorada. Ela envolve reunir e organizar uma grande quantidade de informações, incluindo especificações do sistema, diretrizes de instalação e procedimentos de manutenção. Esse processo pode ser trabalhoso e propenso a erros humanos, resultando em inconsistências e atrasos na entrega dos projetos.

O projeto Solar-Maker busca resolver esses desafios utilizando automação para otimizar o processo de geração de documentação.

## Como funciona

Um projeto solar para residências, edifícios comerciais e algumas indústrias é composto por diversos documentos que o engenheiro precisa criar e gerenciar. Quatro desses documentos possuem cerca de 10 páginas cada, que devem ser preenchidas com dados pessoais ou dados calculados do projeto. Muitas dessas informações são repetidas em todos os documentos, e o engenheiro precisa preenchê-las manualmente.

O sistema Solar-Maker automatiza esse processo gerando esses documentos com base em parâmetros de entrada e dados do projeto. Todos os cálculos, de acordo com as normas brasileiras, são realizados pelo sistema, e os documentos são gerados em um formato padronizado, garantindo consistência e precisão em toda a documentação do projeto.

Ao automatizar o processo de documentação, o Solar-Maker não apenas economiza tempo e reduz o risco de erros, como também permite que engenheiros se concentrem em aspectos mais críticos de seus projetos, como o design e a implementação.

## Status atual

A versão inicial do Solar-Maker está pronta para uso em produção e já foi aplicada com sucesso em diversos projetos reais de engenharia solar. Ele é implementado em Python e segue um fluxo estruturado para processamento de dados, modelagem de domínio e geração automatizada de documentação técnica. Os dados de entrada são fornecidos por meio de payloads JSON estruturados, que são analisados e processados pelo mecanismo de cálculo. A geração de documentos é feita com o ReportLab para criação de PDFs e PyMuPDF para pós-processamento e manipulação.

A segunda versão do projeto foi finalizada com um frontend desenvolvido em Tkinter, e o sistema também possui um banco de dados em SQLite para armazenar dados dos projetos e reutilizar informações de projetos anteriores, tornando o processo ainda mais rápido.

A lógica de geração e o formato dos documentos validados aqui serviram de base técnica e de domínio para o [ApolloDocs](../apollodocs/).

Se você quiser adquirir ou entender melhor o projeto, entre em contato comigo através do meu [LinkedIn](https://linkedin.com/in/diegocanafs).
