---
title: E-Classifier
kind: Aplicação web com LLM
summary: Webapp para rotulação de e-mails usando LLM — classifica cada mensagem como produtiva ou improdutiva e sugere uma resposta com a justificativa.
epigraph: Hermes, separando a correspondência.
stack: [Python, FastAPI, Google Gemini, HTML, CSS, JavaScript]
image: /images/e-class-image.webp
imageAlt: Interface do E-Classifier com o formulário de e-mail e o resultado da classificação
order: 5
links:
  - { label: GitHub, href: 'https://github.com/Diaegon/Email-Classifier' }
---

Este projeto explora a integração de um Large Language Model (LLM) em uma aplicação web para permitir a classificação rápida e precisa de e-mails.

Muitas empresas lidam com um grande volume de e-mails recebidos que precisam ser categorizados, priorizados e encaminhados para o departamento apropriado. A classificação manual é demorada, propensa a erros e difícil de escalar.

O objetivo deste projeto é automatizar esse processo utilizando uma API de LLM para analisar o conteúdo dos e-mails e retornar resultados de classificação estruturados. Ao integrar a compreensão de texto baseada em IA em um serviço backend, o sistema reduz o tempo de resposta, melhora a consistência e permite um processamento de e-mails escalável.

## Como funciona

O sistema E-Classifier consiste em uma API backend construída com Python e FastAPI, que recebe dados de e-mail em formato texto, arquivo `.pdf` ou `.txt`. A API processa o conteúdo do e-mail e o envia para uma API de LLM (Gemini - Google) para análise. O LLM retorna uma resposta estruturada contendo os resultados da classificação, que o backend então formata e envia de volta para o frontend. Uma consulta a banco de dados enriquece o contexto para personalizar a resposta sugerida.

O frontend, desenvolvido com HTML, CSS e JavaScript, fornece uma interface para envio de e-mails e visualização dos resultados da classificação. Os usuários podem inserir o conteúdo do e-mail e, ao enviá-lo, o frontend se comunica com a API backend para recuperar e exibir os resultados da classificação em tempo real.

## Status atual

Você pode ver o repositório deste projeto no [GitHub](https://github.com/Diaegon/Email-Classifier).
