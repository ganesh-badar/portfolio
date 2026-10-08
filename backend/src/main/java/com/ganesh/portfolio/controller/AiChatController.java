package com.ganesh.portfolio.controller;

import com.ganesh.portfolio.service.ResumeService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/chat")
public class AiChatController {

    private final ResumeService resumeService;

    public AiChatController(ResumeService resumeService) {
        this.resumeService = resumeService;
    }

    @PostMapping
    public Map<String, String> chat(@RequestBody Map<String, String> request) {
        String userMessage = request.getOrDefault("message", "");

        if (userMessage.isBlank()) {
            return Map.of("response", "Please ask me something about Ganesh's profile!");
        }

        String response = generateResponse(userMessage);
        return Map.of("response", response);
    }

    private String generateResponse(String question) {
        String q = question.toLowerCase();

        if (q.contains("skill") || q.contains("technology") || q.contains("tech stack") || q.contains("know")) {
            return "🛠️ Ganesh is proficient in:\n\n" +
                    "• **Languages:** Java (Java 17, Core & Advanced Java), JavaScript (ES6+), SQL, HTML5, CSS3\n\n" +
                    "• **Backend & Frameworks:** Spring Boot 3, Spring Data JPA, Hibernate ORM, RESTful APIs, Servlets, JDBC, Spring Security (Basic)\n\n" +
                    "• **Frontend & Web:** React 18 (Components, Hooks, State), Vite, Bootstrap 5.3, JSON\n\n" +
                    "• **Databases & Cloud:** MySQL 8.0, PostgreSQL (Familiar), H2 In-Memory DB, AWS S3 (Object Storage - Working Knowledge)\n\n" +
                    "• **Integrations:** Server-Sent Events (SSE), HikariCP, Apache PDFBox 3.x, OpenAI API Integration\n\n" +
                    "• **Architectural Concepts:** Concurrency (ThreadPoolTaskExecutor), Asynchronous Request-Reply (HTTP 202), Transaction Management (@Transactional), OOP & MVC\n\n" +
                    "• **Tools:** Git, GitHub, Maven, Postman, VS Code, Eclipse, Cursor (AI-assisted workflows), Apache Tomcat, Docker (Basic), Linux (Basic)";
        }

        if (q.contains("experience") || q.contains("work") || q.contains("intern") || q.contains("job")) {
            return "💼 **Work Experience:**\n\n" +
                    "**Web Development Intern — Prodigy InfoTech** (Dec 2024 – Jan 2025)\n\n" +
                    "• Developed frontend components (HTML, CSS, JS) improving UI responsiveness\n" +
                    "• Followed the complete project lifecycle — requirements to review\n" +
                    "• Collaborated with senior developers to debug and refine UI behaviour\n\n" +
                    "Ganesh gained valuable team-based delivery experience during this internship!";
        }

        if (q.contains("project") || q.contains("built") || q.contains("develop") || q.contains("ecommerce") || q.contains("ats")) {
            return "🚀 **Flagship Projects:**\n\n" +
                    "**1. NexusTech — Full-Stack Enterprise E-Commerce Platform**\n" +
                    "• Tech: Java 17, Spring Boot 3, Spring Data JPA, MySQL, React 18, Vite, Bootstrap 5, Docker\n" +
                    "• Dual-role workflows (Customer & Merchant back-office)\n" +
                    "• ACID-compliant transactional checkout, multi-channel payments, real-time courier tracking\n" +
                    "• Optimized Hibernate queries with @EntityGraph (reduced DB query latency by >60%)\n" +
                    "• Live Demo: https://ganesh-badar.github.io/nexus-ecommerce-platform/\n" +
                    "• GitHub: https://github.com/ganesh-badar/nexus-ecommerce-platform\n\n" +
                    "**2. HireScope AI — Enterprise AI Resume Screener & Real-Time ATS**\n" +
                    "• Tech: Java 17, Spring Boot 3, React 18, MySQL, SSE, OpenAI, AWS S3\n" +
                    "• Asynchronous Request-Reply Pattern (HTTP 202) reducing API response latency to < 50ms\n" +
                    "• Live multi-stage streaming via Server-Sent Events (SSE)\n" +
                    "• Bounded ThreadPoolTaskExecutor with CallerRunsPolicy and PDFBox parsing + GPT-4o-mini\n" +
                    "• Live Demo: https://ganesh-badar.github.io/ai-resume-screener-ats/\n" +
                    "• GitHub: https://github.com/ganesh-badar/ai-resume-screener-ats\n\n" +
                    "Both projects are live and production-grade!";
        }

        if (q.contains("education") || q.contains("degree") || q.contains("college") || q.contains("university")
                || q.contains("study")) {
            return "🎓 **Education:**\n\n" +
                    "**B.E. – Computer Science & Engineering**\n" +
                    "Anuradha Engineering College, Chikhli | CGPA: 8.0/10 | 2021–2025\n\n" +
                    "**HSC (12th)** — Maharashtra State Board | 87.50% | 2021\n\n" +
                    "**SSC (10th)** — Maharashtra State Board | 78.80% | 2019\n\n" +
                    "Ganesh has a strong academic foundation in Computer Science!";
        }

        if (q.contains("certif") || q.contains("course") || q.contains("learn")) {
            return "📜 **Certifications:**\n\n" +
                    "• Complete Core Java + DSA — Udemy\n" +
                    "• Web Design: Beginner to Advanced — Udemy\n" +
                    "• Learn HTML: Basic to Advanced — Udemy\n\n" +
                    "Ganesh is committed to continuous learning and professional development!";
        }

        if (q.contains("contact") || q.contains("reach") || q.contains("email") || q.contains("phone")
                || q.contains("hire")) {
            return "📬 **Contact Information:**\n\n" +
                    "📱 Phone: +91-9022201351\n" +
                    "📧 Email: ganeshbadar01@gmail.com\n" +
                    "🔗 LinkedIn: https://www.linkedin.com/in/ganesh-badar2004\n" +
                    "💻 GitHub: https://github.com/ganesh-badar/\n" +
                    "📍 Location: Pune, Maharashtra\n\n" +
                    "Feel free to reach out — Ganesh is open to opportunities!";
        }

        if (q.contains("strength") || q.contains("quality") || q.contains("soft skill")) {
            return "💪 **Key Strengths:**\n\n" +
                    "• Strong verbal & written English communication\n" +
                    "• Follows SOPs diligently in process-driven environments\n" +
                    "• Analytical mindset with keen attention to detail\n" +
                    "• Quick learner — comfortable with IT systems and databases\n" +
                    "• Collaborative team player with a growth-oriented attitude\n" +
                    "• Available for 24/7 rotational shifts including nights";
        }

        if (q.contains("who") || q.contains("about") || q.contains("tell me") || q.contains("intro")
                || q.contains("summary")) {
            return "👋 **About Ganesh Badar:**\n\n" +
                    "Ganesh is a results-driven Java Backend Developer based in Pune, Maharashtra. " +
                    "He holds a B.E. in Computer Science (CGPA 8.0, 2025) and is proficient in " +
                    "Core Java, JDBC, Hibernate ORM, and MySQL.\n\n" +
                    "He has hands-on experience building layered MVC applications and RESTful " +
                    "data-access layers, and is comfortable with the full backend development cycle.\n\n" +
                    "Ganesh is eager to contribute clean, maintainable Java code in a collaborative engineering environment!";
        }

        return "👋 Thanks for your question! I'm Ganesh's portfolio assistant.\n\n" +
                "Here are some things you can ask me about:\n" +
                "• **Skills** — What technologies does Ganesh know?\n" +
                "• **Experience** — Where has Ganesh worked?\n" +
                "• **Projects** — What has Ganesh built?\n" +
                "• **Education** — What is Ganesh's academic background?\n" +
                "• **Certifications** — What courses has Ganesh completed?\n" +
                "• **Contact** — How can I reach Ganesh?\n" +
                "• **Strengths** — What are Ganesh's key qualities?\n\n" +
                "Ask me anything about Ganesh's career!";
    }
}
