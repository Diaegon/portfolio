---
date: '2026-03-12T13:14:09-03:00'
title: 'E-class'
---


{{< hextra/hero-container image="https://www.diegocanafs.com.br/assets/images/E-class-image.png" class="ma0 w-75"  imageTitle="title" >}}
This project explores the integration of a Large Language Model (LLM) into a web application to enable fast and accurate email classification.

Many companies handle a high volume of incoming emails that must be categorized, prioritized, and routed to the appropriate department. Manual classification is time-consuming, error-prone, and difficult to scale.

The goal of this project is to automate this process by leveraging an LLM API to analyze email content and return structured classification results. By integrating AI-driven text understanding into a backend service, the system reduces response time, improves consistency, and enables scalable email processing. 
{{< /hextra/hero-container >}} 


# How it Works

The E-Classifier system consists of a backend API built with Python and FastAPI, which receives email data in text, pdf or .txt format. The API processes the email content and sends it to an LLM (Gemini - Google) API for analysis. The LLM returns a structured response containing the classification results, which the backend then formats and sends back to the frontend.

The frontend, developed with HTML, CSS and JavaScript, provides a user interface for submitting emails and viewing classification results. Users can input email content, and upon submission, the frontend communicates with the backend API to retrieve and display the classification outcomes in real-time. Cloudflare Tunnel. 

# Current Status

You can see the repository of this project on [GitHub](https://github.com/Diaegon/Email-Classifier).