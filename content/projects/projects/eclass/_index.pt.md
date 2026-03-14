---
date: '2026-03-12T13:14:09-03:00'
title: 'E-class'
---

{{< hextra/hero-container image="https://d1aegon-bucket.s3.sa-east-1.amazonaws.com/portfolio-images/E-class-image.png" class="ma0 w-75"  imageTitle="title" >}}
Este projeto explora a integração de um Large Language Model (LLM) em uma aplicação web para permitir a classificação rápida e precisa de e-mails.

Muitas empresas lidam com um grande volume de e-mails recebidos que precisam ser categorizados, priorizados e encaminhados para o departamento apropriado. A classificação manual é demorada, propensa a erros e difícil de escalar.

O objetivo deste projeto é automatizar esse processo utilizando uma API de LLM para analisar o conteúdo dos e-mails e retornar resultados de classificação estruturados. Ao integrar a compreensão de texto baseada em IA em um serviço backend, o sistema reduz o tempo de resposta, melhora a consistência e permite um processamento de e-mails escalável.
{{< /hextra/hero-container >}}

# Como Funciona

O sistema E-Classifier consiste em uma API backend construída com Python e FastAPI, que recebe dados de e-mail em formato texto, arquivo `.pdf` ou `.txt`. A API processa o conteúdo do e-mail e o envia para uma API de LLM (Gemini - Google) para análise. O LLM retorna uma resposta estruturada contendo os resultados da classificação, que o backend então formata e envia de volta para o frontend.

O frontend, desenvolvido com HTML, CSS e JavaScript, fornece uma interface para envio de e-mails e visualização dos resultados da classificação. Os usuários podem inserir o conteúdo do e-mail e, ao enviá-lo, o frontend se comunica com a API backend para recuperar e exibir os resultados da classificação em tempo real.

# Status Atual

Você pode ver o repositório deste projeto no [GitHub](https://github.com/Diaegon/Email-Classifier).