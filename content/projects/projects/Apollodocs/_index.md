---
date: '2026-03-12T13:14:09-03:00'
title: 'Apollodocs'
---


{{< hextra/hero-container image="https://d1aegon-bucket.s3.sa-east-1.amazonaws.com/portfolio-images/apollodocs-logo.png" class="ma0 w-75"  imageTitle="title" >}}
    Apollodocs is an evolution of Solar-Maker. It was created to accelerate the production of technical documentation for solar energy projects. After developing a desktop application focused on generating engineering documentation, I identified the need for a more robust, scalable, and accessible solution. Instead of running the software in a local environment, I decided to transform it into a web-based application that can be accessed from anywhere. This transition enables greater scalability, centralized updates, easier maintenance, and the possibility of integration with other systems through an API-driven architecture. 
{{< /hextra/hero-container >}} 


# How It Works

Apollodocs exposes RESTful endpoints that receive and process structured JSON payloads representing all solar project parameters. Once received, the input data is validated and mapped into strongly typed data classes that model the project domain. This structured representation ensures consistency, type safety, and clear separation between the validation layer and the business logic layer. The core calculation engine then processes this domain model to compute all required engineering parameters, including: 

- Energy generation estimates
- Protection device sizing
- Cable dimensioning
- Electrical losses
- Regulatory compliance parameters 

# Current Status

Apollodocs is currently in the early stages of development and we can only use the API by Swagger. The backend API is being built using Python and FastAPI, while the frontend is being developed with React. You can see check how to use the API on [youtube](https://www.youtube.com/watch?v=H4Y6HOk3VJw), Video. The project is now hosted on my webserver under the domain [apollodocs.diegocanafs.com.br](https://apollodocs.diegocanafs.com.br)