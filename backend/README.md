<div align="center">

# 🚀 Portfolio Backend — Spring Boot

<p>
  <img src="https://img.shields.io/badge/Java-17+-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
  <img src="https://img.shields.io/badge/Spring_Boot-3.4.1-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" alt="Spring Boot" />
  <img src="https://img.shields.io/badge/Maven-3.9.6-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white" alt="Maven" />
  <img src="https://img.shields.io/badge/REST_API-JSON-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="REST API" />
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="License" />
</p>

<p><strong>A robust Spring Boot backend powering Ganesh Badar's career portfolio website.</strong></p>
<p>Exposes RESTful APIs for resume data and an AI-powered chat assistant.</p>

<br/>

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" alt="divider" />

</div>

<br/>

## ✨ Features

| Feature | Description |
|---------|-------------|
| 📄 **Resume API** | Serves structured portfolio data (skills, experience, projects, education) as JSON |
| 🤖 **AI Chat Endpoint** | Intelligent keyword-matching chatbot that answers questions about the portfolio |
| 🔒 **CORS Configured** | Pre-configured for React frontend dev server |
| 📊 **Spring Actuator** | Health check and monitoring endpoints out of the box |
| 🏗️ **Clean Architecture** | Layered MVC with Controller → Service → Model separation |

<br/>

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Spring Boot App                       │
│                     (Port 8080)                          │
│                                                         │
│  ┌──────────────┐   ┌──────────────┐   ┌─────────────┐ │
│  │  Controller   │──▶│   Service    │──▶│    Model    │ │
│  │   Layer       │   │   Layer      │   │    Layer    │ │
│  └──────┬───────┘   └──────────────┘   └─────────────┘ │
│         │                                               │
│  ┌──────┴───────────────────────────────────┐          │
│  │  PortfolioController  → /api/resume      │          │
│  │  AiChatController     → /api/chat        │          │
│  │  Health               → /api/health      │          │
│  └──────────────────────────────────────────┘          │
│                                                         │
│  ┌──────────────────────────────────────────┐          │
│  │  Config: CORS · Actuator · Properties    │          │
│  └──────────────────────────────────────────┘          │
└─────────────────────────────────────────────────────────┘
```

<br/>

## 📁 Project Structure

```
portfolio-backend/
├── pom.xml                                    # Maven configuration
└── src/
    └── main/
        ├── java/com/ganesh/portfolio/
        │   ├── PortfolioApplication.java      # Spring Boot entry point
        │   ├── config/
        │   │   └── WebConfig.java             # CORS configuration
        │   ├── controller/
        │   │   ├── PortfolioController.java   # Resume REST endpoints
        │   │   └── AiChatController.java      # AI chat REST endpoint
        │   ├── model/
        │   │   └── ResumeData.java            # Data models & DTOs
        │   └── service/
        │       └── ResumeService.java         # Business logic & data
        └── resources/
            └── application.properties         # App configuration
```

<br/>

## 🔌 API Endpoints

### `GET /api/resume`
Returns the complete resume data as structured JSON.

<details>
<summary>📋 Response Example (click to expand)</summary>

```json
{
  "personalInfo": {
    "name": "Ganesh Badar",
    "phone": "+91-9022201351",
    "email": "ganeshbadar01@gmail.com",
    "linkedin": "https://linkedin.com/in/ganeshbadar",
    "github": "https://github.com/ganeshbadar",
    "location": "Pune, Maharashtra",
    "title": "Java Backend Developer"
  },
  "professionalSummary": "Results-driven Java Backend Developer...",
  "technicalSkills": { "categories": [...] },
  "experience": [...],
  "projects": [...],
  "education": [...],
  "certifications": [...],
  "keyStrengths": [...]
}
```
</details>

### `POST /api/chat`
AI-powered chat assistant. Send a message, get an intelligent response about the portfolio.

```bash
curl -X POST http://localhost:8080/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "What are his skills?"}'
```

### `GET /api/health`
Simple health check endpoint.

```bash
curl http://localhost:8080/api/health
# → "Portfolio API is running!"
```

<br/>

## 🚀 Quick Start

### Prerequisites
- ☕ **Java 17+** installed
- 📦 **Maven 3.9+** installed

### Run the Application

```bash
# Clone the repository
git clone https://github.com/ganesh-badar/portfolio-backend.git
cd portfolio-backend

# Build and run
mvn spring-boot:run
```

The server starts at **http://localhost:8080**

### Build for Production

```bash
mvn clean package
java -jar target/portfolio-1.0.0.jar
```

<br/>

## ⚙️ Configuration

| Property | Default | Description |
|----------|---------|-------------|
| `server.port` | `8080` | Server port |
| `app.cors.allowed-origins` | `http://localhost:5173` | Allowed CORS origins |
| `management.endpoints.web.exposure.include` | `health,info` | Actuator endpoints |

<br/>

## 🔗 Related

| | Repository |
|---|---|
| ⚛️ **Frontend** | [portfolio-frontend](https://github.com/ganesh-badar/portfolio-frontend) — React + Vite |

<br/>

## 👤 Author

<table>
  <tr>
    <td align="center">
      <strong>Ganesh Badar</strong><br/>
      Java Backend Developer<br/><br/>
      <a href="mailto:ganeshbadar01@gmail.com">📧 Email</a> · 
      <a href="https://linkedin.com/in/ganeshbadar">🔗 LinkedIn</a> · 
      <a href="https://github.com/ganesh-badar">💻 GitHub</a>
    </td>
  </tr>
</table>

<br/>

<div align="center">

---

<p>Built with ❤️ using <strong>Spring Boot</strong> + <strong>Spring Web</strong> + <strong>Maven</strong></p>

<p>
  <img src="https://img.shields.io/badge/Spring-6DB33F?style=flat-square&logo=spring&logoColor=white" />
  <img src="https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white" />
  <img src="https://img.shields.io/badge/Maven-C71A36?style=flat-square&logo=apachemaven&logoColor=white" />
</p>

</div>
