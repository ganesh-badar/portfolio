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
        info.setLinkedin("https://linkedin.com/in/ganeshbadar");
        info.setGithub("https://github.com/ganeshbadar");
        info.setLocation("Pune, Maharashtra");
        info.setTitle("Java Backend Developer");
        resume.setPersonalInfo(info);

        // Professional Summary
        resume.setProfessionalSummary(
            "Results-driven Java Backend Developer with a B.E. in Computer Science (CGPA 8.0, 2025). " +
            "Proficient in Core Java, JDBC, Hibernate ORM, and MySQL, with hands-on experience building " +
            "layered MVC applications and RESTful data-access layers. Comfortable with the full backend " +
            "development cycle — from database schema design through ORM mapping, transaction management, " +
            "and version-controlled deployment via Git. Eager to contribute clean, maintainable Java code " +
            "in a collaborative engineering environment."
        );

        // Technical Skills
        TechnicalSkills skills = new TechnicalSkills();
        skills.setCategories(Arrays.asList(
            createCategory("Languages", Arrays.asList(
                createSkill("Java (Java 17, Core & Advanced)", 95),
                createSkill("JavaScript (ES6+)", 85),
                createSkill("SQL", 90),
                createSkill("HTML5 & CSS3", 90)
            )),
            createCategory("Backend & Frameworks", Arrays.asList(
                createSkill("Spring Boot 3", 92),
                createSkill("Spring Data JPA & Hibernate", 90),
                createSkill("RESTful APIs", 92),
                createSkill("Servlets & JDBC", 85),
                createSkill("Spring Security (Basic)", 80)
            )),
            createCategory("Frontend & Web", Arrays.asList(
                createSkill("React 18 (Components, Hooks)", 88),
                createSkill("Vite", 90),
                createSkill("Bootstrap 5.3", 88),
                createSkill("JSON", 92)
            )),
            createCategory("Databases & Cloud", Arrays.asList(
                createSkill("MySQL 8.0", 90),
                createSkill("PostgreSQL (Familiar)", 75),
                createSkill("H2 In-Memory DB", 85),
                createSkill("AWS S3 (Object Storage)", 80)
            )),
            createCategory("Working Knowledge & Integrations", Arrays.asList(
                createSkill("Server-Sent Events (SSE)", 85),
                createSkill("HikariCP Connection Pooling", 88),
                createSkill("Apache PDFBox 3.x", 82),
                createSkill("OpenAI API (GPT-4o-mini)", 88)
            )),
            createCategory("Core Architectural Concepts", Arrays.asList(
                createSkill("Concurrency & ThreadPoolTaskExecutor", 88),
                createSkill("Asynchronous Request-Reply (HTTP 202)", 90),
                createSkill("Transaction Management (@Transactional)", 88),
                createSkill("OOP Principles & MVC Architecture", 92)
            )),
            createCategory("Tools & Developer Environment", Arrays.asList(
                createSkill("Git & GitHub", 92),
                createSkill("Maven", 88),
                createSkill("Postman", 90),
                createSkill("VS Code & Eclipse", 90),
                createSkill("Cursor (AI-assisted workflows)", 92),
                createSkill("Docker (Basic) & Apache Tomcat", 80),
                createSkill("Linux (Basic)", 78)
            ))
        ));
        resume.setTechnicalSkills(skills);

        // Experience
        Experience exp1 = new Experience();
        exp1.setRole("Web Development Intern");
        exp1.setCompany("Prodigy InfoTech");
        exp1.setDuration("Dec 2024 – Jan 2025");
        exp1.setHighlights(Arrays.asList(
            "Developed and delivered frontend components (HTML, CSS, JavaScript), improving UI responsiveness and cross-browser consistency.",
            "Followed the complete project lifecycle — requirements gathering, implementation, and review — gaining team-based delivery experience.",
            "Collaborated with senior developers to debug and refine UI behaviour, reducing reported interface issues on tested pages."
        ));
        resume.setExperience(List.of(exp1));

        // Projects
        Project proj1 = new Project();
        proj1.setName("NexusTech — Full-Stack Enterprise E-Commerce Platform");
        proj1.setTechStack("Java 17 · Spring Boot 3 · Spring Data JPA · MySQL · React 18 · Vite · Bootstrap 5 · Docker");
        proj1.setIcon("🛍️");
        proj1.setLiveUrl("https://ganesh-badar.github.io/nexus-ecommerce-platform/");
        proj1.setGithubUrl("https://github.com/ganesh-badar/nexus-ecommerce-platform");
        proj1.setHighlights(Arrays.asList(
            "Architected and deployed an enterprise-grade full-stack e-commerce application supporting dual-role workflows (Customer Storefront and Merchant Operations).",
            "Engineered ACID-compliant transactional checkout with multi-channel payment integration (Prepaid UPI/QR, Credit/Debit Cards, Net Banking, and COD) with atomic inventory management.",
            "Built real-time courier tracking stepper with estimated arrival logic and a merchant back-office portal with stock alerts and fulfillment controls.",
            "Resolved Hibernate N+1 query bottlenecks by optimizing JPA entities with @EntityGraph, reducing database query latency by over 60%.",
            "Fully containerized and deployed live on the cloud, with complete source code, architectural guides, and API documentation published on GitHub."
        ));

        Project proj2 = new Project();
        proj2.setName("HireScope AI — Enterprise AI Resume Screener & Real-Time ATS");
        proj2.setTechStack("Java 17 · Spring Boot 3 · React 18 · MySQL · SSE · OpenAI · AWS S3");
        proj2.setIcon("⚡");
        proj2.setLiveUrl("https://ganesh-badar.github.io/ai-resume-screener-ats/");
        proj2.setGithubUrl("https://github.com/ganesh-badar/ai-resume-screener-ats");
        proj2.setHighlights(Arrays.asList(
            "Architected a full-stack, asynchronous applicant tracking system leveraging Spring Boot 3 and React 18 to evaluate candidate resumes against technical requisitions in real time.",
            "Eliminated Tomcat servlet thread starvation and 504 gateway timeouts by implementing the Asynchronous Request-Reply Pattern (HTTP 202 Accepted), reducing initial API response latency to < 50ms.",
            "Integrated Server-Sent Events (SSE) with a thread-safe emitter registry (ConcurrentHashMap) to stream live multi-stage extraction and LLM scoring updates without the protocol overhead of WebSockets.",
            "Configured a bounded ThreadPoolTaskExecutor with CallerRunsPolicy for graceful backpressure, and engineered automated document text parsing via Apache PDFBox 3.x feeding into OpenAI GPT-4o-mini with strict JSON schema validation."
        ));
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
            "Learn HTML: Basic to Advanced — Udemy"
        ));

        // Key Strengths
        resume.setKeyStrengths(Arrays.asList(
            "Strong verbal & written English communication",
            "Follows SOPs diligently in process-driven environments",
            "Available for 24/7 rotational shifts including nights",
            "Analytical mindset with keen attention to detail",
            "Quick learner; comfortable with IT systems and databases",
            "Collaborative team player with a growth-oriented attitude"
        ));

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
            Ganesh Badar is a Java Backend Developer based in Pune, Maharashtra, India.
            He has a B.E. in Computer Science & Engineering from Anuradha Engineering College (CGPA: 8.0/10, 2021-2025).
            
            Technical Skills:
            - Core Java (OOP, Collections, Exception Handling), SQL
            - JDBC, Hibernate ORM (HQL, entity mapping, session & transaction management), Servlets, JSP, Spring Framework
            - MySQL (schema design, JOINs, GROUP BY, aggregates, stored procedures, CRUD)
            - Tools: IntelliJ IDEA, Eclipse, VS Code, Git, GitHub
            
            Experience:
            - Web Development Intern at Prodigy InfoTech (Dec 2024 – Jan 2025)
              - Built frontend components with HTML, CSS, JavaScript
              - Followed complete project lifecycle
              - Collaborated with senior developers on debugging
            
            Projects:
            1. Student Management System (Java, JDBC, MySQL, MVC) - Console-based CRUD application
            2. Hibernate ORM & HQL Application (Java, Hibernate, HQL, MySQL, Git) - Replaced raw JDBC with Hibernate ORM
            
            Certifications:
            - Complete Core Java + DSA (Udemy)
            - Web Design: Beginner to Advanced (Udemy)
            - Learn HTML: Basic to Advanced (Udemy)
            
            Key Strengths: Strong communication, analytical mindset, quick learner, team player
            
            Contact: +91-9022201351, ganeshbadar01@gmail.com
            """;
    }
}
