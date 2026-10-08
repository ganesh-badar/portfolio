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
            createCategory("Core Languages", Arrays.asList(
                createSkill("Java (Core Java, OOP)", 90),
                createSkill("Collections Framework", 85),
                createSkill("Exception Handling", 85),
                createSkill("SQL", 80)
            )),
            createCategory("Backend / Frameworks", Arrays.asList(
                createSkill("JDBC", 85),
                createSkill("Hibernate ORM", 80),
                createSkill("Servlets & JSP", 75),
                createSkill("Spring Framework", 70),
                createSkill("Spring Boot", 65)
            )),
            createCategory("Database", Arrays.asList(
                createSkill("MySQL", 85),
                createSkill("Schema Design", 80),
                createSkill("JOINs & Aggregates", 80),
                createSkill("Stored Procedures", 70)
            )),
            createCategory("Tools & IDEs", Arrays.asList(
                createSkill("IntelliJ IDEA", 85),
                createSkill("Eclipse", 80),
                createSkill("VS Code", 80),
                createSkill("Git & GitHub", 85)
            )),
            createCategory("Other", Arrays.asList(
                createSkill("Microsoft Excel", 70),
                createSkill("Linux / Unix Commands", 65),
                createSkill("HTML / CSS / JavaScript", 75)
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
        proj1.setName("Student Management System");
        proj1.setTechStack("Java · JDBC · MySQL · MVC Architecture");
        proj1.setIcon("🎓");
        proj1.setHighlights(Arrays.asList(
            "Designed and built a console-based CRUD application managing student records (Add, Update, Delete, View) on a live MySQL database.",
            "Applied three-layer MVC architecture (Model, DAO, Controller) to separate business logic, data access, and presentation concerns.",
            "Wrote parameterised JDBC PreparedStatements for all DML operations, eliminating SQL-injection vulnerabilities.",
            "Created reusable entity classes and a centralised DB-connection utility, reducing boilerplate across DAO implementations."
        ));

        Project proj2 = new Project();
        proj2.setName("Hibernate ORM & HQL Application");
        proj2.setTechStack("Java · Hibernate ORM · HQL · MySQL · Git");
        proj2.setIcon("⚡");
        proj2.setHighlights(Arrays.asList(
            "Built a Java application using Hibernate ORM to replace raw JDBC, reducing data-access code by ~40%.",
            "Wrote HQL queries for full CRUD operations; configured entity mappings via XML with proper session factory lifecycle management.",
            "Implemented session and transaction management (open / commit / rollback) to maintain database integrity under concurrent operations.",
            "Managed codebase with Git — feature branches, meaningful commit messages, and structured README following real-world practices."
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
