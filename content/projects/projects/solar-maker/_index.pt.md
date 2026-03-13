---
date: '2026-03-12T13:14:09-03:00'
title: 'Solar-maker'
---

{{< hextra/hero-container image="https://www.diegocanafs.com.br/assets/images/solarmaker-image1.png" class="ma0 w-75"  imageTitle="title" >}}
Este projeto surgiu da necessidade de automatizar a criação de documentação técnica para projetos de energia solar.

Na indústria de energia solar, a criação de documentação técnica é uma tarefa crítica, porém demorada. Ela envolve reunir e organizar uma grande quantidade de informações, incluindo especificações do sistema, diretrizes de instalação e procedimentos de manutenção. Esse processo pode ser trabalhoso e propenso a erros humanos, resultando em inconsistências e atrasos na entrega dos projetos.

O projeto Solar-Maker busca resolver esses desafios utilizando automação para otimizar o processo de geração de documentação.
{{< /hextra/hero-container >}}

# Como Funciona

Um projeto solar para residências, edifícios comerciais e algumas indústrias é composto por diversos documentos que o engenheiro precisa criar e gerenciar. Quatro desses documentos possuem cerca de 10 páginas cada, que devem ser preenchidas com dados pessoais ou dados calculados do projeto. Muitas dessas informações são repetidas em todos os documentos, e o engenheiro precisa preenchê-las manualmente.

O sistema Solar-Maker automatiza esse processo gerando esses documentos com base em parâmetros de entrada e dados do projeto. Todos os cálculos, de acordo com as normas brasileiras, são realizados pelo sistema, e os documentos são gerados em um formato padronizado, garantindo consistência e precisão em toda a documentação do projeto.

Ao automatizar o processo de documentação, o Solar-Maker não apenas economiza tempo e reduz o risco de erros, como também permite que engenheiros se concentrem em aspectos mais críticos de seus projetos, como o design e a implementação.

# Status Atual

A versão inicial do Solar-Maker está pronta para uso em produção e já foi aplicada com sucesso em diversos projetos reais de engenharia solar. Ele é implementado em Python e segue um fluxo estruturado para processamento de dados, modelagem de domínio e geração automatizada de documentação técnica. Os dados de entrada são fornecidos por meio de payloads JSON estruturados, que são analisados e processados pelo mecanismo de cálculo. A geração de documentos é feita com o ReportLab para criação de PDFs e PyMuPDF para pós-processamento e manipulação.

A segunda versão do projeto foi finalizada com um frontend desenvolvido em Tkinter, e o sistema também possui um banco de dados em SQLite para armazenar dados dos projetos e reutilizar informações de projetos anteriores, tornando o processo ainda mais rápido.

Se você quiser adquirir ou entender melhor o projeto, entre em contato comigo através do meu [LinkedIn](https://linkedin.com/in/diegocanafs).