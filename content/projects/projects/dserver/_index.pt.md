---
date: '2026-03-12T13:14:09-03:00'
title: 'dserver'
---

{{< hextra/hero-container image="https://d1aegon-bucket.s3.sa-east-1.amazonaws.com/portfolio-images/dserver.jpeg" class="ma0 w-75"  imageTitle="title" >}}
A ideia de ter meu próprio servidor surgiu da necessidade de hospedar aplicações que desenvolvi e meu site pessoal.

Sites estáticos podem ser hospedados gratuitamente no GitHub, e aplicações podem ser hospedadas em plataformas de nuvem que oferecem camadas gratuitas, embora com algumas limitações.

Outra opção é pagar por um VPS. Embora seja uma boa solução, eu escolhi construir meu próprio servidor com o objetivo de aprender e também por eficiência de custo.
{{< /hextra/hero-container >}} 

# Aprendizado

Além da experiência prática com linguagens de programação e ferramentas, os principais conceitos que aprendi foram:

- Fundamentos de computadores
- Fundamentos de internet e redes

Quando migrei do Windows para o Linux, levei algum tempo para me adaptar. No entanto, só entendi realmente como os computadores funcionam quando passei a operar um sistema inteiramente pelo terminal. O mesmo aconteceu com redes. Quando tentei hospedar um site a partir do meu servidor doméstico, enfrentei problemas do mundo real. Resolver esses problemas me ajudou a compreender conceitos que antes eu conhecia apenas superficialmente — como lidar com IP público dinâmico utilizando o Cloudflare Tunnel.

# Status Atual

Este servidor está operando continuamente desde 4 de fevereiro de 2026, em um ambiente de produção auto-hospedado. Atualmente ele gerencia a entrega de conteúdo estático, aplicações backend em Python e um banco de dados PostgreSQL, tudo rodando em hardware reaproveitado.

A configuração completa da infraestrutura e os detalhes de implementação estão disponíveis no GitHub. Um guia completo em PDF com explicações adicionais e observações sobre a arquitetura pode ser visto abaixo.

\
{{< pdf "https://d1aegon-bucket.s3.sa-east-1.amazonaws.com/portfolio-pdfs/pdf-dserver.pdf" >}}