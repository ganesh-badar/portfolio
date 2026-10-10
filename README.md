# Ganesh Badar — Java Backend Developer & Systems Architecture Portfolio

[![Java](https://img.shields.io/badge/Java-17%2B-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.4.1-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![Maven](https://img.shields.io/badge/Maven-3.9+-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white)](https://maven.apache.org/)
[![React](https://img.shields.io/badge/React-18%2F19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![Live Portfolio](https://img.shields.io/badge/Live_Portfolio-GitHub_Pages-2ea44f?style=for-the-badge&logo=github)](https://ganesh-badar.github.io/portfolio/)

A modern, full-stack personal developer portfolio and systems engineering showcase built by **Ganesh Badar**.

🌐 **Live Deployment on GitHub Pages:** [https://ganesh-badar.github.io/portfolio/](https://ganesh-badar.github.io/portfolio/)  
📖 **Deployment & Operations Guide:** [DEPLOYMENT_GUIDE.md](file:///c:/Users/ganes/OneDrive/Desktop/Anti_Workspace/portfolio/DEPLOYMENT_GUIDE.md)

### 🚀 Featured Flagship Projects Showcased
- **NexusTech — Full-Stack Enterprise E-Commerce Platform**
  - [Live Demo](https://ganesh-badar.github.io/nexus-ecommerce-platform/) | [GitHub Repository](https://github.com/ganesh-badar/nexus-ecommerce-platform)
  - Java 17, Spring Boot 3, Spring Data JPA, MySQL, React 18, Vite, Bootstrap 5, Docker
- **HireScope AI — Enterprise AI Resume Screener & Real-Time ATS**
  - [Live Demo](https://ganesh-badar.github.io/ai-resume-screener-ats/) | [GitHub Repository](https://github.com/ganesh-badar/ai-resume-screener-ats)
  - Java 17, Spring Boot 3, React 18, MySQL, Server-Sent Events (SSE), OpenAI GPT-4o-mini, AWS S3

Combines a **Spring Boot 3** REST API backend delivering verified resume models and an intelligent query terminal with a high-performance **React + Vite** frontend featuring clean architectural typography, zero-lag micro-interactions, responsive grids, and dedicated legal compliance pages.

---

## 🏛️ System Architecture

```mermaid
graph TD
    subgraph Client ["Frontend (React 19 + Vite 8)"]
        UI_Hero["Hero & Bio Section"]
        UI_Skills["Technical Competencies Matrix"]
        UI_Projects["Flagship Project Showcases"]
        UI_Console["Developer Profile Terminal"]
        UI_Legal["Privacy Policy & Terms Pages"]
        Client_API["API Fetch Client"]
    end

    subgraph Server ["Backend (Spring Boot 3.4 REST API - Port 8080)"]
        Ctrl_Resume["PortfolioController (/api/resume)"]
        Ctrl_Chat["AiChatController (/api/chat)"]
        Svc_Resume["ResumeService"]
        Cfg_CORS["WebConfig (Cross-Origin Resource Sharing)"]
        Actuator["Spring Boot Actuator (/actuator/health)"]
    end

    UI_Hero --> Client_API
    UI_Skills --> Client_API
    UI_Projects --> Client_API
    UI_Console --> Client_API

    Client_API -->|GET /api/resume| Ctrl_Resume
    Client_API -->|POST /api/chat| Ctrl_Chat

    Ctrl_Resume --> Svc_Resume
    Ctrl_Chat --> Svc_Resume
```

---

## ✨ Key Features & Capabilities

### 🎨 Frontend Highlights
- **Architectural UI:** Crisp obsidian theme (`#09090b` / `#18181b`), hairline borders (`#27272a`), zero purple gradients, zero pill buttons, and high-contrast typography.
- **Pure Vector SVG Iconography:** 100% minimalist SVG vector stroke icons replacing all emojis.
- **Legal Compliance Pages:** Fully standalone, dedicated **Privacy Policy** and **Terms and Conditions** pages with hash routing and instant return navigation.
- **Developer Profile Terminal:** Clean, high-performance query terminal trained on Ganesh's background and project architecture.
- **Sub-Second Hot-Reloading:** Optimized production bundling powered by Vite 8.

### ⚙️ Backend Highlights
- **Layered Clean Architecture:** Strict separation of concerns (Controller &rarr; Service &rarr; Model).
- **RESTful Endpoints:** Serves structured resume models (`ResumeData.java`) with contact details, technical skill proficiency ratings, and project links.
- **Conversational Chatbot Engine:** Keyword analysis and intent-mapping service generating context-aware answers to user queries.
- **CORS Configured:** Pre-configured `WebMvcConfigurer` allowing secure cross-origin communication with the React development server.
- **Production Health Checks:** Integrated Spring Boot Actuator for health monitoring (`/actuator/health`).

---

## 📁 Monorepo Project Structure

```text
portfolio/
├── DEPLOYMENT_GUIDE.md                  # Comprehensive GitHub Pages deployment guide
├── backend/                             # Spring Boot REST API
│   ├── src/main/java/com/ganesh/portfolio/
│   │   ├── config/WebConfig.java        # CORS Configuration
│   │   ├── controller/
│   │   │   ├── PortfolioController.java # /api/resume endpoints
│   │   │   └── AiChatController.java    # /api/chat conversational assistant
│   │   ├── model/ResumeData.java        # Data transfer models
│   │   ├── service/ResumeService.java   # Business logic & chat intelligence
│   │   └── PortfolioApplication.java    # Application entry point
│   ├── src/main/resources/
│   │   └── application.properties       # Server port & properties
│   └── pom.xml                          # Maven build configuration
│
└── frontend/                            # React 18/19 + Vite Client
    ├── public/                          # Static assets (custom SVG favicon, profile photo)
    ├── src/
    │   ├── assets/                      # Graphic assets
    │   ├── App.jsx                      # Main portfolio application, terminal & legal views
    │   ├── index.css                    # Architectural CSS design system
    │   └── main.jsx                     # React root bootstrap
    ├── index.html                       # HTML5 entry with canonical tags & metadata
    ├── vite.config.js                   # Vite configuration (base: '/portfolio/')
    └── package.json                     # Dependencies & scripts
```

---

## 🚀 Quickstart & Local Setup

### Prerequisites
- **Java 17+** & **Maven 3.8+**
- **Node.js 18+** & **npm**

### 1. Run the Spring Boot Backend
```bash
cd backend
mvn spring-boot:run
```
*The backend server starts on `http://localhost:8080`.*
- Test Resume API: `http://localhost:8080/api/resume`
- Test Health Check: `http://localhost:8080/actuator/health`

### 2. Run the React Frontend
```bash
cd frontend
npm install
npm run dev
```
*The frontend development server starts on `http://localhost:5173`.*

---

## 📡 REST API Reference

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/resume` | Returns complete structured resume, experience, skills, and projects |
| `POST` | `/api/chat` | Accepts `{ "message": "tell me about Ganesh's projects" }` and returns AI response |
| `GET` | `/actuator/health` | Spring Boot Actuator system health status |

---

## 📄 License
This project is open-source under the [MIT License](LICENSE).
