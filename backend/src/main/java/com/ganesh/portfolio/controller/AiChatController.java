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
                   "**Core Languages:** Java (Core Java, OOP, Collections, Exception Handling), SQL\n\n" +
                   "**Backend/Frameworks:** JDBC, Hibernate ORM (HQL, entity mapping, session & transaction management), Servlets, JSP, Spring Framework\n\n" +
                   "**Database:** MySQL — schema design, JOINs, GROUP BY, aggregates, stored procedures\n\n" +
                   "**Tools:** IntelliJ IDEA, Eclipse, VS Code, Git & GitHub\n\n" +
                   "He's constantly learning and expanding his skill set!";
        }

        if (q.contains("experience") || q.contains("work") || q.contains("intern") || q.contains("job")) {
            return "💼 **Work Experience:**\n\n" +
                   "**Web Development Intern — Prodigy InfoTech** (Dec 2024 – Jan 2025)\n\n" +
                   "• Developed frontend components (HTML, CSS, JS) improving UI responsiveness\n" +
                   "• Followed the complete project lifecycle — requirements to review\n" +
                   "• Collaborated with senior developers to debug and refine UI behaviour\n\n" +
                   "Ganesh gained valuable team-based delivery experience during this internship!";
        }

        if (q.contains("project") || q.contains("built") || q.contains("develop")) {
            return "🚀 **Notable Projects:**\n\n" +
                   "**1. Student Management System** (Java · JDBC · MySQL · MVC)\n" +
                   "• Console-based CRUD app with three-layer MVC architecture\n" +
                   "• Used PreparedStatements to eliminate SQL-injection vulnerabilities\n\n" +
                   "**2. Hibernate ORM & HQL Application** (Java · Hibernate · MySQL · Git)\n" +
                   "• Replaced raw JDBC with Hibernate ORM, reducing data-access code by ~40%\n" +
                   "• Implemented proper session and transaction management\n\n" +
                   "Both projects demonstrate strong backend architecture skills!";
        }

        if (q.contains("education") || q.contains("degree") || q.contains("college") || q.contains("university") || q.contains("study")) {
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

        if (q.contains("contact") || q.contains("reach") || q.contains("email") || q.contains("phone") || q.contains("hire")) {
            return "📬 **Contact Information:**\n\n" +
                   "📱 Phone: +91-9022201351\n" +
                   "📧 Email: ganeshbadar01@gmail.com\n" +
                   "🔗 LinkedIn: linkedin.com/in/ganeshbadar\n" +
                   "💻 GitHub: github.com/ganeshbadar\n" +
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

        if (q.contains("who") || q.contains("about") || q.contains("tell me") || q.contains("intro") || q.contains("summary")) {
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
