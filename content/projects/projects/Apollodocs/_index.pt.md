---
date: '2026-03-12T13:14:09-03:00'
title: 'Apollodocs'
---

{{< hextra/hero-container image="https://www.diegocanafs.com.br/assets/images/apollodocs_image.png" class="ma0 w-75" imageTitle="title" >}}
Apollodocs é uma evolução do Solar-Maker. Ele foi criado para acelerar a produção de documentação técnica para projetos de energia solar. Após desenvolver uma aplicação desktop focada na geração de documentação de engenharia, identifiquei a necessidade de uma solução mais robusta, escalável e acessível. Em vez de executar o software em um ambiente local, decidi transformá-lo em uma aplicação web que pode ser acessada de qualquer lugar. Essa transição permite maior escalabilidade, atualizações centralizadas, manutenção mais simples e a possibilidade de integração com outros sistemas por meio de uma arquitetura orientada a APIs.
{{< /hextra/hero-container >}}

# Como Funciona

O Apollodocs expõe endpoints RESTful que recebem e processam payloads JSON estruturados contendo todos os parâmetros do projeto solar. Uma vez recebidos, os dados de entrada são validados e mapeados em classes de dados fortemente tipadas que modelam o domínio do projeto. Essa representação estruturada garante consistência, segurança de tipos e uma separação clara entre a camada de validação e a camada de lógica de negócio.

O mecanismo principal de cálculo então processa esse modelo de domínio para calcular todos os parâmetros de engenharia necessários, incluindo:

- Estimativas de geração de energia
- Dimensionamento de dispositivos de proteção
- Dimensionamento de cabos
- Perdas elétricas
- Parâmetros de conformidade regulatória

# Status Atual

O Apollodocs está atualmente em estágio inicial de desenvolvimento e, por enquanto, a API pode ser utilizada apenas através do Swagger. O backend da API está sendo desenvolvido em Python com FastAPI, enquanto o frontend está sendo desenvolvido em React. Você pode conferir como utilizar a API neste vídeo no [YouTube](https://www.youtube.com/watch?v=H4Y6HOk3VJw). O projeto atualmente está hospedado no meu servidor web sob o domínio [apollodocs.diegocanafs.com.br](https://apollodocs.diegocanafs.com.br).