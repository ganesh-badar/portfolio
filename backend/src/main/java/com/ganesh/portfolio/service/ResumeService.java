package com.ganesh.portfolio.service;

import com.ganesh.portfolio.model.ResumeData;
import com.ganesh.portfolio.model.ResumeData.*;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class ResumeService {

    public ResumeData getResumeData() {
        ResumeData resume = new ResumeData();

        // Personal Info
        PersonalInfo info = new PersonalInfo();
        info.setName("Ganesh Badar");
        info.setPhone("+91-9022201351");
        info.setEmail("ganeshbadar01@gmail.com");
        info.setLinkedin("https://www.linkedin.com/in/ganesh-badar2004");
        info.setGithub("https://github.com/ganesh-badar/");
        info.setLocation("Pune, Maharashtra");
        info.setTitle("Java Backend Developer");
        resume.setPersonalInfo(info);

        // Professional Summary
        resume.setProfessionalSummary(
                "Results-driven Full-Stack Java Developer with a B.E. in Computer Science (CGPA 8.0, 2025). " +
                        "Proficient in Java 17, Spring Boot 3, Spring Data JPA, Hibernate ORM, MySQL, and React 18. " +
                        "Hands-on experience architecting production-ready enterprise applications featuring asynchronous request-reply workflows, " +
                        "Server-Sent Events (SSE), ACID-compliant transactional checkout, and AI integrations (OpenAI GPT-4o-mini). " +
                        "Committed to writing clean, maintainable code with strong architectural fundamentals.");

        // Technical Skills
        TechnicalSkills skills = new TechnicalSkills();
        skills.setCategories(Arrays.asList(
                createCategory("Languages", Arrays.asList(
                        createSkill("Java (Java 17, Core & Advanced)", 95),
                        createSkill("JavaScript (ES6+)", 85),
                        createSkill("SQL", 90),
                        createSkill("HTML5 & CSS3", 85))),
                createCategory("Backend & Frameworks", Arrays.asList(
                        createSkill("Spring Boot 3", 90),
                        createSkill("Spring Data JPA", 90),
                        createSkill("Hibernate ORM", 85),
                        createSkill("RESTful APIs", 90),
                        createSkill("Servlets & JDBC", 85),
                        createSkill("Spring Security (Basic)", 75))),
                createCategory("Frontend & Web", Arrays.asList(
                        createSkill("React 18 (Hooks, State)", 88),
                        createSkill("Vite", 85),
                        createSkill("Bootstrap 5.3", 85),
                        createSkill("JSON", 90))),
                createCategory("Databases & Cloud", Arrays.asList(
                        createSkill("MySQL 8.0", 90),
                        createSkill("PostgreSQL (Familiar)", 75),
                        createSkill("H2 In-Memory DB", 80),
                        createSkill("AWS S3 (Working Knowledge)", 75))),
                createCategory("Working Knowledge & Integrations", Arrays.asList(
                        createSkill("Server-Sent Events (SSE)", 88),
                        createSkill("HikariCP Connection Pooling", 85),
                        createSkill("Apache PDFBox 3.x", 85),
                        createSkill("OpenAI API Integration", 85))),
                createCategory("Core Architectural Concepts", Arrays.asList(
                        createSkill("Concurrency & ThreadPoolTaskExecutor", 88),
                        createSkill("Asynchronous Request-Reply (HTTP 202)", 90),
                        createSkill("Transaction Management (@Transactional)", 90),
                        createSkill("OOP Principles & MVC Architecture", 92))),
                createCategory("Tools & Developer Environment", Arrays.asList(
                        createSkill("Git & GitHub", 90),
                        createSkill("Maven", 88),
                        createSkill("Postman", 88),
                        createSkill("VS Code & Eclipse", 85),
                        createSkill("Cursor (AI-assisted workflows)", 85),
                        createSkill("Apache Tomcat & Docker (Basic)", 80),
                        createSkill("Linux (Basic)", 75)))));
        resume.setTechnicalSkills(skills);

        // Experience
        Experience exp1 = new Experience();
        exp1.setRole("Web Development Intern");
        exp1.setCompany("Prodigy InfoTech");
        exp1.setDuration("Dec 2024 – Jan 2025");
        exp1.setHighlights(Arrays.asList(
                "Developed and delivered frontend components (HTML, CSS, JavaScript), improving UI responsiveness and cross-browser consistency.",
                "Followed the complete project lifecycle — requirements gathering, implementation, and review — gaining team-based delivery experience.",
                "Collaborated with senior developers to debug and refine UI behaviour, reducing reported interface issues on tested pages."));
        resume.setExperience(List.of(exp1));

        // Projects
        Project proj1 = new Project();
        proj1.setName("NexusTech — Full-Stack Enterprise E-Commerce Platform");
        proj1.setTechStack("Java 17 · Spring Boot 3 · Spring Data JPA · MySQL · React 18 · Vite · Bootstrap 5 · Docker");
        proj1.setIcon("🛒");
        proj1.setLiveUrl("https://ganesh-badar.github.io/nexus-ecommerce-platform/");
        proj1.setGithubUrl("https://github.com/ganesh-badar/nexus-ecommerce-platform");
        proj1.setHighlights(Arrays.asList(
                "Architected and deployed an enterprise-grade full-stack e-commerce application supporting dual-role workflows (Customer Storefront and Merchant Operations).",
                "Engineered ACID-compliant transactional checkout with multi-channel payment integration (Prepaid UPI/QR, Credit/Debit Cards, Net Banking, and COD) with atomic inventory management.",
                "Built real-time courier tracking stepper with estimated arrival logic and a merchant back-office portal with stock alerts and fulfillment controls.",
                "Resolved Hibernate N+1 query bottlenecks by optimizing JPA entities with @EntityGraph, reducing database query latency by over 60%.",
                "Fully containerized and deployed live on the cloud, with complete source code, architectural guides, and API documentation published on GitHub."));

        Project proj2 = new Project();
        proj2.setName("HireScope AI — Enterprise AI Resume Screener & Real-Time ATS");
        proj2.setTechStack("Java 17 · Spring Boot 3 · React 18 · MySQL · SSE · OpenAI · AWS S3");
        proj2.setIcon("🤖");
        proj2.setLiveUrl("https://ganesh-badar.github.io/ai-resume-screener-ats/");
        proj2.setGithubUrl("https://github.com/ganesh-badar/ai-resume-screener-ats");
        proj2.setHighlights(Arrays.asList(
                "Architected a full-stack, asynchronous applicant tracking system leveraging Spring Boot 3 and React 18 to evaluate candidate resumes against technical requisitions in real time.",
                "Eliminated Tomcat servlet thread starvation and 504 gateway timeouts by implementing the Asynchronous Request-Reply Pattern (HTTP 202 Accepted), reducing initial API response latency to < 50ms.",
                "Integrated Server-Sent Events (SSE) with a thread-safe emitter registry (ConcurrentHashMap) to stream live multi-stage extraction and LLM scoring updates without the protocol overhead of WebSockets.",
                "Configured a bounded ThreadPoolTaskExecutor with CallerRunsPolicy for graceful backpressure, and engineered automated document text parsing via Apache PDFBox 3.x feeding into OpenAI GPT-4o-mini with strict JSON schema validation."));
        resume.setProjects(Arrays.asList(proj1, proj2));

        // Education
        Education edu1 = new Education();
        edu1.setDegree("B.E. – Computer Science & Engineering");
        edu1.setInstitution("Anuradha Engineering College, Chikhli");
        edu1.setScore("CGPA: 8.0/10");
        edu1.setYear("2021–2025");

        Education edu2 = new Education();
        edu2.setDegree("HSC (12th)");
        edu2.setInstitution("Maharashtra State Board");
        edu2.setScore("87.50%");
        edu2.setYear("2021");

        Education edu3 = new Education();
        edu3.setDegree("SSC (10th)");
        edu3.setInstitution("Maharashtra State Board");
        edu3.setScore("78.80%");
        edu3.setYear("2019");

        resume.setEducation(Arrays.asList(edu1, edu2, edu3));

        // Certifications
        resume.setCertifications(Arrays.asList(
                "Complete Core Java + DSA — Udemy",
                "Web Design: Beginner to Advanced — Udemy",
                "Learn HTML: Basic to Advanced — Udemy"));

        // Key Strengths
        resume.setKeyStrengths(Arrays.asList(
                "Strong verbal & written English communication",
                "Follows SOPs diligently in process-driven environments",
                "Available for 24/7 rotational shifts including nights",
                "Analytical mindset with keen attention to detail",
                "Quick learner; comfortable with IT systems and databases",
                "Collaborative team player with a growth-oriented attitude"));

        return resume;
    }

    private SkillCategory createCategory(String name, List<Skill> skills) {
        SkillCategory category = new SkillCategory();
        category.setCategory(name);
        category.setSkills(skills);
        return category;
    }

    private Skill createSkill(String name, int proficiency) {
        Skill skill = new Skill();
        skill.setName(name);
        skill.setProficiency(proficiency);
        return skill;
    }

    public String getResumeContext() {
        return """
                Ganesh Badar is a Full-Stack Java Developer based in Pune, Maharashtra, India.
                He has a B.E. in Computer Science & Engineering from Anuradha Engineering College (CGPA: 8.0/10, 2021-2025).

                Technical Skills:
                - Languages: Java (Java 17, Core & Advanced Java), JavaScript (ES6+), SQL, HTML5, CSS3
                - Backend & Frameworks: Spring Boot 3, Spring Data JPA, Hibernate ORM, RESTful APIs, Servlets, JDBC, Spring Security (Basic)
                - Frontend & Web: React 18 (Components, Hooks, State), Vite, Bootstrap 5.3, JSON
                - Databases & Cloud: MySQL 8.0, PostgreSQL (Familiar), H2 In-Memory DB, AWS S3 (Object Storage - Working Knowledge)
                - Integrations: Server-Sent Events (SSE), HikariCP Connection Pooling, Apache PDFBox 3.x, OpenAI API Integration
                - Core Architecture: Concurrency (ThreadPoolTaskExecutor), Asynchronous Request-Reply (HTTP 202), Transaction Management (@Transactional), OOP Principles, MVC Architecture
                - Tools: Git, GitHub, Maven, Postman, VS Code, Eclipse, Cursor (AI-assisted workflows), Apache Tomcat, Docker (Basic), Linux (Basic)

                Experience:
                - Web Development Intern at Prodigy InfoTech (Dec 2024 – Jan 2025)
                  - Built frontend components with HTML, CSS, JavaScript
                  - Followed complete project lifecycle
                  - Collaborated with senior developers on debugging

                Flagship Projects:
                1. NexusTech — Full-Stack Enterprise E-Commerce Platform (Java 17, Spring Boot 3, Spring Data JPA, MySQL, React 18, Vite, Bootstrap 5, Docker)
                   - ACID-compliant transactional checkout, multi-channel payment integration (UPI/QR, Cards, Net Banking, COD), real-time courier tracking stepper, Hibernate N+1 query optimization with @EntityGraph (>60% lower latency)
                   - Live Demo: https://ganesh-badar.github.io/nexus-ecommerce-platform/
                   - GitHub: https://github.com/ganesh-badar/nexus-ecommerce-platform
                2. HireScope AI — Enterprise AI Resume Screener & Real-Time ATS (Java 17, Spring Boot 3, React 18, MySQL, SSE, OpenAI, AWS S3)
                   - Asynchronous Request-Reply pattern (HTTP 202) reducing response latency to <50ms, Server-Sent Events (SSE) live multi-stage streaming, ThreadPoolTaskExecutor backpressure, Apache PDFBox + GPT-4o-mini parsing
                   - Live Demo: https://ganesh-badar.github.io/ai-resume-screener-ats/
                   - GitHub: https://github.com/ganesh-badar/ai-resume-screener-ats

                Certifications:
                - Complete Core Java + DSA (Udemy)
                - Web Design: Beginner to Advanced (Udemy)
                - Learn HTML: Basic to Advanced (Udemy)

                Key Strengths: Strong communication, analytical mindset, quick learner, team player

                Contact: +91-9022201351, ganeshbadar01@gmail.com, LinkedIn: https://www.linkedin.com/in/ganesh-badar2004, GitHub: https://github.com/ganesh-badar/
                """;
    }
}
