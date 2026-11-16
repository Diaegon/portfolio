---
title: Solar-Maker
kind: Desktop automation · own product
summary: Desktop application made with Python to generate technical documentation for solar energy — the origin of ApolloDocs.
epigraph: The origin myth of ApolloDocs.
status: Production-ready · used in real solar engineering projects
stack: [Python, Tkinter, SQLite, ReportLab, PyMuPDF]
image: /images/solarmaker-image.webp
imageAlt: Solar-Maker desktop interface built with Tkinter
order: 6
links:
  - { label: LinkedIn, href: 'https://linkedin.com/in/diegocanafs' }
---

This project comes from the necessity of automating the creation of technical documentation for solar energy projects.

In the solar energy industry, creating technical documentation is a critical but time-consuming task. It involves gathering and organizing vast amounts of information, including system specifications, installation guidelines, maintenance procedures. This process can be labor-intensive and prone to human error, leading to inconsistencies and delays in project delivery.

The Solar-Maker project aims to address these challenges by leveraging automation to streamline the documentation process.

## How it works

A solar project for a residence, commercial building and some industries is made of several documents that the engineer must create and manage. Four of these documents have about 10 pages to fill with personal data or calculated project data; all this information is repeated across the documents, and the engineer must fill it in manually.

The Solar-Maker system automates this process by generating these documents based on input parameters and project data. All the calculations, in accordance with Brazilian standards, are made by the system, and the documents are generated in a standardized format, ensuring consistency and accuracy across all project documentation.

By automating the documentation process, Solar-Maker not only saves time and reduces the risk of errors but also allows engineers to focus on more critical aspects of their projects, such as design and implementation.

## Current status

The initial version of Solar-Maker is production-ready and has been successfully applied in multiple real-world solar engineering projects. It is implemented in Python and follows a structured workflow for data processing, domain modeling, and automated technical document generation. Input data is provided through structured JSON payloads, which are parsed and processed by the calculation engine. Document rendering is handled through ReportLab for PDF generation and PyMuPDF for post-processing and manipulation.

The second version of the project was finished with a frontend made in Tkinter, and the system also has a SQLite database to store project data and to reuse data from previous projects, making the process even faster.

The validated generation logic and document formats became the technical and domain foundation of [ApolloDocs](../apollodocs/).

If you want to buy it or understand more about the project, please contact me through my [LinkedIn](https://linkedin.com/in/diegocanafs).
