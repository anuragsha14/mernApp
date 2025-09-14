# MERN Stack Sample App (Local Setup)
We’ll build a Todo Manager where you can:
Add a task ✅
View tasks 📋
Delete a task ❌
Mark as complete ✔️

# All Components
MongoDB → Stores todos.
Express → REST API for CRUD operations.
React → Frontend UI for tasks.
Node.js → Backend runtime for API.
Integration → Shows how frontend calls backend, backend calls DB.

# How This Helps You Explain MERN + DevOps Concepts
Frontend (React) → UI in container.
Backend (Express + Node) → REST API in container.
MongoDB → Database in container with persistent volume.
Docker Compose → Orchestrates services (mini Kubernetes demo).
Networking → mongo hostname works inside containers.
DevOps parallel → Mirrors how microservices run in cloud/K8s.

# URL
Frontend → http://localhost:3000
Backend API → http://localhost:5000/api/todos
MongoDB → mongodb://localhost:27017

# Prerequisites
Before you start, ensure you have these installed:
Node.js (v16+ recommended, v18 is stable)
    Download Node.js
    Verify:
        node -v
        npm -v
MongoDB (if running locally, else use Docker)
MongoDB Community Server
    Or run via Docker:
    docker run -d -p 27017:27017 mongo

npm / yarn → package managers.

Docker & Docker Compose (if you want to containerize and run all services)
    Install Docker Desktop
Verify:
    docker -v
    docker compose version

# how to build from docker compose

docker-compose up --build
