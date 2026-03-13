---
date: '2026-03-12T13:14:09-03:00'
title: 'Solar-maker'
---


{{< hextra/hero-container image="https://www.diegocanafs.com.br/assets/images/solarmaker-image1.png" class="ma0 w-75"  imageTitle="title" >}}
This project comes from the necessity of automating the creation of technical documentation for solar energy projects.

In the solar energy industry, creating technical documentation is a critical but time-consuming task. It involves gathering and organizing vast amounts of information, including system specifications, installation guidelines, maintenance procedures. This process can be labor-intensive and prone to human error, leading to inconsistencies and delays in project delivery.

The Solar-Maker project aims to address these challenges by leveraging automation to streamline the documentation process. 
{{< /hextra/hero-container >}} 


# How it Works

A solar project for a residence, comercial building and some industries is made by several documents that the engineer must create and manage. Four of these documents has 10 pages to fill with personal data or calculated project data, all this information is repeated in all documents, and the engineer must fill it manually.

The Solar-Maker system automates this process by generating these documents based on input parameters and project data. All the calculations acorded with brazilian standards are made by the system, and the documents are generated in a standardized format, ensuring consistency and accuracy across all project documentation.

By automating the documentation process, Solar-Maker not only saves time and reduces the risk of errors but also allows engineers to focus on more critical aspects of their projects, such as design and implementation. 

# Current Status

The initial version of Solar-Maker is production-ready and has been successfully applied in multiple real-world solar engineering projects. It is implemented in Python and follows a structured workflow for data processing, domain modeling, and automated technical document generation. Input data is provided through structured JSON payloads, which are parsed and processed by the calculation engine. Document rendering is handled through ReportLab for PDF generation and PyMuPDF for post-processing and manipulation.

The second version of the project was finished with a frontend made in Tkinter, and the system also have a database made in SQLite to store project datata and to reuse data from previous projects making the process even faster.

If you wanna buy or understand more about the project, please contact me through my [LinkedIn](https://linkedin.com/in/diegocanafs). 