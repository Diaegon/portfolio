---
date: '2026-03-12T13:14:09-03:00'
title: 'dserver'
---


{{< hextra/hero-container image="https://d1aegon-bucket.s3.sa-east-1.amazonaws.com/portfolio-images/dserver.jpeg" class="ma0 w-75"  imageTitle="title" >}}
The idea of having my own server came from the need to host applications I developed and my personal website.

Static websites can be hosted for free on GitHub, and applications can be hosted on cloud platforms with free tiers, though with limitations.

Another option is paying for a VPS. While it is a good solution, I chose to build my own server for learning purposes and cost efficiency. 
{{< /hextra/hero-container >}} 


# Learning

Beyond practical experience with programming languages and
tools, the main concepts I learned were:

- Computer fundamentals
- Internet and network fundamentals

When I migrated from Windows to Linux, it took time to adapt. However, I only truly understood how computers work when I operated a system entirely through the terminal. The same happened with networking. When I attempted to host a website from my home server, I encountered real-world problems. Solving them helped me understand concepts I previously knew only superficially — such as dealing with dynamic public IPs using Cloudflare Tunnel. 

# Current Status

This server has been operating continuously since February 4th 2026, in a self-hosted production environment. It currently handles static content delivery, Python backend applications, and a PostgreSQL database, all running on repurposed hardware. The complete infrastructure setup and configuration details are available on GitHub. A comprehensive PDF guide with additional explanations and architectural notes can be see below. 

\
{{< pdf "https://d1aegon-bucket.s3.sa-east-1.amazonaws.com/portfolio-pdfs/pdf-dserver.pdf" >}}