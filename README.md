# Task List App

## Overview
Task List App is a full-stack application for managing tasks. It consists of the following components:

- **task-list-api**: Backend API built with Spring Boot to create, edit and delete tasks.
- **task-list-manager**: User registration, authentication and authorization service.
- **task-list-ui**: Frontend built with React.

## Prerequisites
Docker & Docker Compose should be installed.
```sh
docker --version
docker compose version
```
## Setup & Deployment

### 1. Clone the repository
```sh
git clone https://github.com/yourusername/task-list-app.git
cd task-list-app
```

### 2. Build and Run with Docker
#### Build all services
```sh
docker-compose build
```
#### Start all services
```sh
docker-compose up -d
```
#### Check running containers
```sh
docker-compose ps
```

### 3. How to Use
- **Frontend UI:** http://localhost:3000
- **MailDev for Account Activation Emails:** http://localhost:1080

### 4. Stop Services
```sh
docker-compose down
```
