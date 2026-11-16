---
title: E-Classifier
kind: LLM web app
summary: Web app for classifying e-mails with an LLM — labels each message as productive or unproductive and drafts a suggested reply with its reasoning.
epigraph: Hermes, sorting the mail.
stack: [Python, FastAPI, Google Gemini, HTML, CSS, JavaScript]
image: /images/e-class-image.webp
imageAlt: E-Classifier interface with the e-mail form and the classification result
order: 5
links:
  - { label: GitHub, href: 'https://github.com/Diaegon/Email-Classifier' }
---

This project explores the integration of a Large Language Model (LLM) into a web application to enable fast and accurate email classification.

Many companies handle a high volume of incoming emails that must be categorized, prioritized, and routed to the appropriate department. Manual classification is time-consuming, error-prone, and difficult to scale.

The goal of this project is to automate this process by leveraging an LLM API to analyze email content and return structured classification results. By integrating AI-driven text understanding into a backend service, the system reduces response time, improves consistency, and enables scalable email processing.

## How it works

The E-Classifier system consists of a backend API built with Python and FastAPI, which receives email data as plain text or as a `.pdf` or `.txt` file. The API processes the email content and sends it to an LLM (Gemini - Google) API for analysis. The LLM returns a structured response containing the classification results, which the backend then formats and sends back to the frontend. A database lookup enriches the context so the suggested reply can be personalized.

The frontend, developed with HTML, CSS and JavaScript, provides a user interface for submitting emails and viewing classification results. Users can input email content, and upon submission, the frontend communicates with the backend API to retrieve and display the classification outcomes in real-time.

## Current status

You can see the repository of this project on [GitHub](https://github.com/Diaegon/Email-Classifier).
