---
title: "Chatbot + API"
publishedAt: 2023-05-24
description: "Sophisticated interface that enables real-time interaction with our business database, providing access to customer records, item inventory, delivery notes, and financial metrics using AI."
slug: "chatbot-api"
image:
  src: "/post_img/chatbot_screen.webp"
  alt: "Chatbot API"
img_logo:
  src: "/post_img/chatbot.webp"
  alt: "Chatbot API logo"
github: "https://github.com/1dvlpr/"
website: "https://github.com/1dvlpr/"
technologies:
  - name: "Python"
    route: "/svg/python.svg"
  - name: "Streamlit"
    route: "/svg/streamlit.svg"
  - name: "OpenAI"
    route: "/svg/openai.svg"
  - name: "Flask"
    route: "/svg/flask.svg"
  - name: "MongoDB"
    route: "/svg/mongodb.svg"
  - name: "Docker"
    route: "/svg/docker.svg"
---

## ChatBot API

Creation of the chatbot using Streamlit. The user asks questions, and the chatbot with the fine-tuning model returns a response via a request to the API URL.

Additionally, the chatbot has quick access to view statistics directly connected to the database through the API. Successful results will be returned to GPT-3.5 Turbo to generate a response. If there are no successful results, or it is a general question, a GPT-3.5 Finetuned model will be used to generate the response.

You can upload documents for RAG ( Retrieval-Augmented Generation) and Q&A (Question Answering) models. The chatbot also has a feedback system for responses, which is used to improve the chatbot's responses.

## Technologies

### [Python](https://www.python.org/):

Language used for the project backend and frontend.

### [Flask](https://flask.palletsprojects.com/en/2.0.x/):

Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries. API for connection to MongoDB database.

### [Streamlit](https://streamlit.io/)

Streamlit is an open-source Python library that makes it easy to create and share beautiful, custom web apps for machine learning and data science.

### [Streamlit-Echarts](https://github.com/andfanilo/streamlit-echarts)

Streamlit component for Apache ECharts, a powerful, interactive charting and visualization library for browser.

### [OpenAI](https://openai.com/)

Using models from OpenAI API. a babbage model was used for fine-tuning, GPT-3.5 Turbo for generating responses, and GPT-3.5 Finetuned for generating responses if there are no results in the database.

### [Mistral-7B](https://huggingface.co/TheBloke/Mistral-7B-Instruct-v0.1-GGUF)

Mistral-7B is a OpenSource Model for Question Answering and Chatbot.

### [Helicone](https://helicone.ai/)

Helicone is a tool for collecting feedback on the quality of the chatbot's responses.

### [Lakera](https://lakera.ai/)

Lakera is a tool for detecting hate speech and sexual messages.

### [Llama-Index](https://docs.llamaindex.ai/en/stable/)

Llama Index is a tool for creating embeddings for documents.

### [Langchain](https://python.langchain.com/docs/get_started/introduction)

Langchain is a tool for creating embeddings for words.

### [MongoDB](https://www.mongodb.com/)

MongoDB is a document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. Used for storing data and vector embeddings.

## Roadmap

- [x] [Script for data preparation](https://github.com/1dvlpr/Script-SQL-API): Script for training preparation.
- [x] [Script for automatic connection and fine-tuning (new OpenAI API)](https://github.com/1dvlpr/Script-SQL-API): Script for connection to OpenAI and automatic fine-tuning.
- [x] [Flask API](https://github.com/1dvlpr/Streamlit-API-Flask-Mistral): API for connection to MongoDB database.
- [x] [StreamLit Chatbot](https://github.com/1dvlpr/Streamlit-API-Flask-Mistral): Chatbot for user interaction.
- [x] Responses with graphs: Bar, line, radar, etc. Streamlit-Echarts.
- [x] Last question/answer context, and API errors
- [x] GPT-3.5 Turbo Finetuned response for answers without database results
- [x] Feedback for chatbot responses (Helicone)
- [x] Lakera Guard for prompt injection messages and hate/sexual messages
- [x] Data with embeddings (Langchain/Llama-Index) for chatting with documents
- [ ] Creation of Agents and Custom Functions

<div style="display: flex; justify-content: center; padding-top: 40px">
  <img src="https://img.shields.io/github/stars/1dvlpr/StreamLit-Api.svg" alt="GitHub Stars" style="margin-right: 10px;"/>
  <img src="https://img.shields.io/github/last-commit/1dvlpr/Streamlit-API-Flask-Mistral.svg" alt="GitHub Last Commit" />
</div>
