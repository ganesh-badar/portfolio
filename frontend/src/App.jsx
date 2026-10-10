import { useState, useEffect, useRef } from 'react'
import './index.css'

const API_BASE = 'http://localhost:8080/api'

// ===== Clean SVG Vector Icons (Zero Emojis) =====
function IconTerminal({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  )
}

function IconServer({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  )
}

function IconDatabase({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  )
}

function IconCode({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function IconLayers({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  )
}

function IconShield({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function IconExternalLink({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function IconGitHub({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

function IconLinkedIn({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function IconMail({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function IconPhone({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function IconMapPin({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function IconCheck({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function IconBook({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  )
}

function IconAward({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  )
}

function IconArrowLeft({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  )
}

function IconFileText({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  )
}

// ===== Category Icon Resolver =====
function getCategoryIcon(category) {
  switch (category) {
    case 'Languages':
      return <IconCode size={18} className="category-icon" />
    case 'Backend & Frameworks':
      return <IconServer size={18} className="category-icon" />
    case 'Frontend & Web':
      return <IconLayers size={18} className="category-icon" />
    case 'Databases & Cloud':
      return <IconDatabase size={18} className="category-icon" />
    case 'Core Architectural Concepts':
      return <IconShield size={18} className="category-icon" />
    default:
      return <IconTerminal size={18} className="category-icon" />
  }
}

// ===== Navbar Component =====
function Navbar({ onViewChange, activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Technical Stack' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Flagship Projects' },
    { id: 'education', label: 'Credentials' },
    { id: 'console', label: 'Profile Console' },
    { id: 'contact', label: 'Inquiries' },
  ]

  const handleNavClick = (id) => {
    onViewChange('portfolio')
    setMenuOpen(false)
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div
          className="navbar-logo"
          onClick={() => {
            onViewChange('portfolio')
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <img
            src={`${import.meta.env.BASE_URL}profile.jpg`}
            alt="Ganesh Badar"
            className="navbar-avatar"
          />
          <span className="navbar-brand">
            ganeshbadar<span>.dev</span>
          </span>
        </div>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={activeSection === link.id ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.id)
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="nav-cta"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('contact')
              }}
            >
              Direct Contact
            </a>
          </li>
        </ul>

        <button
          className="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <IconTerminal size={20} />
        </button>
      </div>
    </nav>
  )
}

// ===== Hero Section =====
function Hero({ data, onOpenConsole }) {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-layout">
          <div className="hero-main">
            <div className="hero-status-tag">
              <span className="status-indicator"></span>
              Available for Backend Engineering Roles • Pune / Remote
            </div>

            <h1 className="hero-name">Ganesh Badar</h1>

            <p className="hero-headline">
              <strong>Java Backend Developer & Distributed Systems Engineer</strong>
            </p>

            <p className="hero-summary">
              {data?.professionalSummary ||
                'Results-driven Java Developer proficient in Java 17, Spring Boot 3, Hibernate ORM, and MySQL. Experienced in architecting asynchronous request-reply systems, Server-Sent Events (SSE), and transactional integrity in enterprise environments.'}
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn-primary">
                View Flagship Systems <IconExternalLink size={15} />
              </a>
              <a href="#contact" className="btn-secondary">
                Contact & Inquiries
              </a>
              <button onClick={onOpenConsole} className="btn-secondary">
                <IconTerminal size={15} /> Interactive Query Console
              </button>
            </div>

            <div className="hero-specs-grid">
              <div className="spec-cell">
                <div className="spec-value">8.0 / 10</div>
                <div className="spec-label">B.E. CGPA (2025)</div>
              </div>
              <div className="spec-cell">
                <div className="spec-value">2</div>
                <div className="spec-label">Production Deployments</div>
              </div>
              <div className="spec-cell">
                <div className="spec-value">&lt; 50ms</div>
                <div className="spec-label">Async Request Latency</div>
              </div>
              <div className="spec-cell">
                <div className="spec-value">Java 17</div>
                <div className="spec-label">Spring Boot 3 • MySQL</div>
              </div>
            </div>
          </div>

          <div className="hero-portrait-frame">
            <img
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt="Ganesh Badar"
              className="hero-portrait-img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// ===== About Section =====
function About({ data }) {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Background & Focus</span>
          <h2 className="section-title">Architectural Engineering Mindset</h2>
          <p className="section-subtitle">
            Solid foundations in Computer Science with a disciplined approach to backend concurrency, database normalization, and clean code principles.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-summary-panel">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              Profile Specifications
            </h3>
            <ul className="about-meta-list">
              <li className="about-meta-item">
                <div className="meta-icon-wrapper">
                  <IconBook size={16} />
                </div>
                <div>
                  <div className="meta-item-label">Degree</div>
                  <div className="meta-item-value">B.E. Computer Science (2025)</div>
                </div>
              </li>
              <li className="about-meta-item">
                <div className="meta-icon-wrapper">
                  <IconMapPin size={16} />
                </div>
                <div>
                  <div className="meta-item-label">Location</div>
                  <div className="meta-item-value">Pune, Maharashtra, India</div>
                </div>
              </li>
              <li className="about-meta-item">
                <div className="meta-icon-wrapper">
                  <IconServer size={16} />
                </div>
                <div>
                  <div className="meta-item-label">Specialization</div>
                  <div className="meta-item-value">Java Backend & Spring Data JPA</div>
                </div>
              </li>
              <li className="about-meta-item">
                <div className="meta-icon-wrapper">
                  <IconShield size={16} />
                </div>
                <div>
                  <div className="meta-item-label">Working Standard</div>
                  <div className="meta-item-value">SOP Diligence & 24/7 Shift Ready</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="about-narrative">
            <p>
              I am an engineering graduate specializing in enterprise backend architecture. My technical journey is anchored in <strong>Java 17</strong>, <strong>Spring Boot 3</strong>, and relational database management with <strong>MySQL</strong>.
            </p>
            <p>
              Rather than generic CRUD applications, my portfolio reflects production concerns: handling thread starvation via the <strong>Asynchronous Request-Reply Pattern (HTTP 202)</strong>, eliminating Hibernate N+1 query overhead using <strong>@EntityGraph</strong> optimizations, and streaming real-time status pipelines via <strong>Server-Sent Events (SSE)</strong>.
            </p>
            <p>
              I prioritize maintainability, structured logging, defensive validation, and transparent systems architecture ready for enterprise production.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ===== Technical Skills Section =====
function Skills({ data }) {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Capabilities Matrix</span>
          <h2 className="section-title">Technical Competencies</h2>
          <p className="section-subtitle">
            Core frameworks, database management, concurrency patterns, and developer toolchains utilized across real-world deployments.
          </p>
        </div>

        <div className="skills-grid">
          {data?.technicalSkills?.categories?.map((cat, idx) => (
            <div key={idx} className="skill-category-card">
              <div className="skill-category-header">
                {getCategoryIcon(cat.category)}
                <span className="skill-category-name">{cat.category}</span>
              </div>
              <div className="skills-list">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-row">
                    <div className="skill-label-row">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.proficiency}%</span>
                    </div>
                    <div className="skill-meter">
                      <div
                        className="skill-meter-fill"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===== Experience Section =====
function Experience({ data }) {
  return (
    <section className="section" id="experience" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Track Record</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            Hands-on collaborative delivery in team-based engineering environments.
          </p>
        </div>

        <div className="timeline">
          {data?.experience?.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <div className="timeline-company">{exp.company}</div>
                  </div>
                  <span className="timeline-duration">{exp.duration}</span>
                </div>
                <ul className="timeline-bullets">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===== Featured Projects Section =====
function Projects({ data }) {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Architecture In Practice</span>
          <h2 className="section-title">Flagship Production Applications</h2>
          <p className="section-subtitle">
            End-to-end full-stack systems engineered with enterprise concurrency, data integrity, and production-grade query optimization.
          </p>
        </div>

        <div className="projects-grid">
          {data?.projects?.map((proj, idx) => (
            <div key={idx} className="project-card">
              <div>
                <div className="project-header">
                  <div className="project-icon-box">
                    <IconServer size={22} />
                  </div>
                  <div>
                    <h3 className="project-title">{proj.name}</h3>
                    <div className="project-tech-line">{proj.techStack}</div>
                  </div>
                </div>

                <ul className="project-highlights">
                  {proj.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="project-tags">
                  {proj.techStack.split(' · ').map((tag, tIdx) => (
                    <span key={tIdx} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn primary"
                    >
                      <IconExternalLink size={14} /> Production Live Demo
                    </a>
                  )}
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                    >
                      <IconGitHub size={14} /> GitHub Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===== Credentials & Academic Qualifications =====
function Credentials({ data }) {
  return (
    <section className="section" id="education" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Academic & Professional Validation</span>
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-subtitle">
            Formal technical education and continuous verified coursework.
          </p>
        </div>

        <div className="dual-grid">
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <IconBook size={18} color="var(--accent-cyan)" /> Formal Education
            </h3>
            {data?.education?.map((edu, idx) => (
              <div key={idx} className="edu-card">
                <div className="edu-degree">{edu.degree}</div>
                <div className="edu-institution">{edu.institution}</div>
                <div className="edu-meta">
                  <span>Score: {edu.score}</span>
                  <span>Year: {edu.year}</span>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <IconAward size={18} color="var(--accent-cyan)" /> Verified Certifications
            </h3>
            {data?.certifications?.map((cert, idx) => {
              const parts = cert.split(' — ')
              return (
                <div key={idx} className="cert-card">
                  <div className="cert-name">{parts[0]}</div>
                  <div className="cert-provider">{parts[1] || 'Verified Accreditation'}</div>
                </div>
              )
            })}
          </div>
        </div>

        <div style={{ marginTop: '3.5rem' }}>
          <div className="section-header" style={{ marginBottom: '1.5rem' }}>
            <span className="section-label">Core Attributes</span>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              Workplace Strengths & Reliability
            </h3>
          </div>
          <div className="strengths-grid">
            {data?.keyStrengths?.map((strength, idx) => (
              <div key={idx} className="strength-cell">
                <div className="strength-icon-box">
                  <IconCheck size={16} />
                </div>
                <span>{strength}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ===== Local Knowledge Query Resolver =====
function generateLocalResponse(question) {
  const q = question.toLowerCase()

  if (q.includes('skill') || q.includes('tech') || q.includes('stack') || q.includes('language') || q.includes('framework')) {
    return (
      "Technical Competencies Overview:\n\n" +
      "• Languages: Java 17 (Core & Advanced), JavaScript (ES6+), SQL, HTML5, CSS3\n" +
      "• Backend: Spring Boot 3, Spring Data JPA, Hibernate ORM, RESTful APIs, Servlets, JDBC\n" +
      "• Databases: MySQL 8.0, PostgreSQL (familiar), HikariCP Connection Pooling\n" +
      "• Architecture: Asynchronous Request-Reply (HTTP 202), Server-Sent Events (SSE), Concurrency via ThreadPoolTaskExecutor, ACID Transaction Management\n" +
      "• Tools & Integrations: Git, GitHub, Maven, Postman, Docker, AWS S3, Apache PDFBox 3.x"
    )
  }

  if (q.includes('project') || q.includes('built') || q.includes('nexus') || q.includes('ats') || q.includes('hirescope')) {
    return (
      "Flagship Enterprise Projects:\n\n" +
      "1. NexusTech — Full-Stack Enterprise E-Commerce Platform\n" +
      "   • Stack: Java 17, Spring Boot 3, Spring Data JPA, MySQL, React 18, Docker\n" +
      "   • ACID-compliant transactional checkout, atomic inventory management, multi-channel payment flows.\n" +
      "   • Resolved Hibernate N+1 bottlenecks via @EntityGraph, reducing query latency by >60%.\n" +
      "   • Demo: https://ganesh-badar.github.io/nexus-ecommerce-platform/\n\n" +
      "2. HireScope AI — Real-Time Asynchronous ATS\n" +
      "   • Stack: Java 17, Spring Boot 3, React 18, MySQL, SSE, OpenAI GPT-4o-mini, AWS S3\n" +
      "   • Eliminates Tomcat thread starvation via HTTP 202 Asynchronous Request-Reply (<50ms initial latency).\n" +
      "   • Real-time SSE streaming with thread-safe ConcurrentHashMap emitter registry.\n" +
      "   • Demo: https://ganesh-badar.github.io/ai-resume-screener-ats/"
    )
  }

  if (q.includes('experience') || q.includes('work') || q.includes('intern') || q.includes('prodigy')) {
    return (
      "Professional Experience:\n\n" +
      "Web Development Intern — Prodigy InfoTech (Dec 2024 – Jan 2025)\n" +
      "• Developed and delivered responsive frontend components with cross-browser consistency.\n" +
      "• Participated in end-to-end delivery lifecycle: requirements gathering, implementation, and code review.\n" +
      "• Collaborated on debugging UI state and API integration issues."
    )
  }

  if (q.includes('education') || q.includes('college') || q.includes('degree') || q.includes('cgpa')) {
    return (
      "Education Credentials:\n\n" +
      "• B.E. in Computer Science & Engineering (2021–2025)\n" +
      "  Anuradha Engineering College, Chikhli | CGPA: 8.0 / 10\n" +
      "• Higher Secondary Certificate (12th): 87.50%\n" +
      "• Secondary School Certificate (10th): 78.80%"
    )
  }

  if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('reach') || q.includes('hire')) {
    return (
      "Direct Inquiries & Contact Channels:\n\n" +
      "• Email: ganeshbadar01@gmail.com\n" +
      "• Phone: +91-9022201351\n" +
      "• LinkedIn: https://www.linkedin.com/in/ganesh-badar2004\n" +
      "• GitHub: https://github.com/ganesh-badar/\n" +
      "• Location: Pune, Maharashtra, India"
    )
  }

  return (
    "Interactive Query Console:\n\n" +
    "You can query verified information regarding Ganesh's background:\n" +
    "• Technical Stack & Backend Skills\n" +
    "• Flagship Projects: NexusTech & HireScope AI\n" +
    "• Work Experience & Internships\n" +
    "• Education Credentials & CGPA\n" +
    "• Direct Contact Information"
  )
}

// ===== Interactive Developer Profile Console =====
function DeveloperConsole() {
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      content:
        'Developer Profile Console active.\nQuery verified details regarding Ganesh Badar\'s architecture background, flagship systems, technical stack, or credentials.',
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleQuery = async (queryText) => {
    const text = queryText || input.trim()
    if (!text) return

    setMessages((prev) => [...prev, { role: 'user', content: text }])
    setInput('')
    setLoading(true)

    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 2000)
      const res = await fetch(`${API_BASE}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
        signal: controller.signal,
      })
      clearTimeout(timeoutId)
      if (!res.ok) throw new Error('Remote endpoint unreachable')
      const data = await res.json()
      setMessages((prev) => [...prev, { role: 'bot', content: data.response }])
    } catch {
      // High-reliability offline local response
      const fallback = generateLocalResponse(text)
      setMessages((prev) => [...prev, { role: 'bot', content: fallback }])
    } finally {
      setLoading(false)
    }
  }

  const presets = [
    'Technical Stack & Skills',
    'Flagship Projects Overview',
    'Education & CGPA Details',
    'Internship Experience',
    'Contact Information',
  ]

  return (
    <section className="section" id="console">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Interactive Query Console</span>
          <h2 className="section-title">Developer Profile Terminal</h2>
          <p className="section-subtitle">
            Directly query verified technical specifications, project architecture details, and qualifications.
          </p>
        </div>

        <div className="console-container">
          <div className="console-header">
            <div className="console-title-area">
              <div className="console-dot"></div>
              <span className="console-title">ganesh-profile-query-cli v1.0</span>
            </div>
            <span className="console-badge">Verified Data Source</span>
          </div>

          <div className="console-output">
            {messages.map((m, idx) => (
              <div key={idx} className={`console-message ${m.role}`}>
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="console-message bot" style={{ opacity: 0.7 }}>
                Processing query...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="console-presets">
            {presets.map((preset, idx) => (
              <button
                key={idx}
                className="console-preset-btn"
                onClick={() => handleQuery(preset)}
              >
                {preset}
              </button>
            ))}
          </div>

          <div className="console-input-bar">
            <input
              type="text"
              className="console-input"
              placeholder="Enter query (e.g. 'Explain NexusTech architecture', 'Spring Boot skills')..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleQuery()}
              disabled={loading}
            />
            <button
              className="console-submit"
              onClick={() => handleQuery()}
              disabled={loading || !input.trim()}
            >
              Submit Query
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// ===== Contact Section =====
function Contact({ data }) {
  const contactChannels = [
    {
      icon: <IconMail size={20} />,
      label: 'Email Inquiries',
      value: data?.personalInfo?.email || 'ganeshbadar01@gmail.com',
      href: `mailto:${data?.personalInfo?.email || 'ganeshbadar01@gmail.com'}`,
    },
    {
      icon: <IconPhone size={20} />,
      label: 'Direct Phone',
      value: data?.personalInfo?.phone || '+91-9022201351',
      href: `tel:${data?.personalInfo?.phone || '+91-9022201351'}`,
    },
    {
      icon: <IconLinkedIn size={20} />,
      label: 'LinkedIn Profile',
      value: 'linkedin.com/in/ganesh-badar2004',
      href: data?.personalInfo?.linkedin || 'https://www.linkedin.com/in/ganesh-badar2004',
    },
    {
      icon: <IconGitHub size={20} />,
      label: 'GitHub Repositories',
      value: 'github.com/ganesh-badar',
      href: data?.personalInfo?.github || 'https://github.com/ganesh-badar/',
    },
    {
      icon: <IconMapPin size={20} />,
      label: 'Location & Availability',
      value: 'Pune, Maharashtra (Open to Relocation / Remote)',
      href: '#',
    },
  ]

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Direct Communication</span>
          <h2 className="section-title">Contact & Hiring Inquiries</h2>
          <p className="section-subtitle">
            Open to full-time backend developer roles, systems engineering positions, and collaborative technical projects.
          </p>
        </div>

        <div className="contact-grid">
          {contactChannels.map((c, idx) => (
            <a
              key={idx}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="contact-card"
            >
              <div className="contact-icon-wrapper">{c.icon}</div>
              <div className="contact-label">{c.label}</div>
              <div className="contact-value">{c.value}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===== Standalone Legal Views: Privacy Policy =====
function PrivacyPolicyPage({ onBack }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="legal-page">
      <div className="container">
        <button onClick={onBack} className="legal-back-btn">
          <IconArrowLeft size={16} /> Return to Portfolio
        </button>

        <div className="legal-document">
          <h1 className="legal-title">Privacy Policy</h1>
          <div className="legal-effective-date">
            Effective Date: January 1, 2026 • Host: ganesh-badar.github.io/portfolio
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">1. Introduction & Overview</h2>
            <p className="legal-text">
              This Privacy Policy applies to the personal developer portfolio hosted at{' '}
              <strong>https://ganesh-badar.github.io/portfolio/</strong>. This portfolio exists solely to showcase software architecture projects, technical credentials, and professional contact details of Ganesh Badar.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">2. Information Collection</h2>
            <p className="legal-text">
              This website operates on privacy-first principles:
            </p>
            <ul className="legal-list">
              <li>
                <strong>No Active Tracking:</strong> We do not deploy advertising pixels, third-party analytics trackers, or commercial profiling cookies.
              </li>
              <li>
                <strong>Direct Communications:</strong> When you initiate contact via email or phone links, your email address, phone number, and message content are received solely for responding to your inquiry.
              </li>
              <li>
                <strong>Server Logs:</strong> Standard web hosting infrastructure may record ephemeral technical data (IP addresses, user agents) for security and HTTP request delivery.
              </li>
            </ul>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">3. Use of Information</h2>
            <p className="legal-text">
              Any information communicated directly will only be used to respond to employment inquiries, discuss technical projects, or coordinate professional collaboration. Information is never sold, leased, or shared with third-party marketers.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">4. External Links & Demonstrations</h2>
            <p className="legal-text">
              This portfolio links to external services such as GitHub, LinkedIn, and live project deployments. Once you leave this domain, the privacy policies of those external hosts govern your interactions.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">5. Data Retention & User Rights</h2>
            <p className="legal-text">
              You retain the right to request deletion or modification of any direct email communication history by contacting <strong>ganeshbadar01@gmail.com</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ===== Standalone Legal Views: Terms and Conditions =====
function TermsPage({ onBack }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="legal-page">
      <div className="container">
        <button onClick={onBack} className="legal-back-btn">
          <IconArrowLeft size={16} /> Return to Portfolio
        </button>

        <div className="legal-document">
          <h1 className="legal-title">Terms and Conditions</h1>
          <div className="legal-effective-date">
            Effective Date: January 1, 2026 • Host: ganesh-badar.github.io/portfolio
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">1. Acceptance of Terms</h2>
            <p className="legal-text">
              By accessing and reviewing the portfolio at <strong>https://ganesh-badar.github.io/portfolio/</strong>, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please discontinue using this site.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">2. Intellectual Property Rights</h2>
            <p className="legal-text">
              Unless otherwise indicated, all original written content, architectural diagrams, and portfolio design elements are the intellectual property of Ganesh Badar.
            </p>
            <p className="legal-text">
              Featured open-source repositories (such as NexusTech and HireScope AI) remain licensed under their respective project repository licenses (e.g., MIT License) as published in their official GitHub repositories.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">3. Permitted Use</h2>
            <p className="legal-text">
              You are permitted to view, inspect, and evaluate this portfolio for prospective recruitment, technical evaluation, code review, and professional collaboration. You may not misrepresent this work or clone this portfolio's identity for deceptive purposes.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">4. Disclaimer of Warranties</h2>
            <p className="legal-text">
              All materials, project demos, and interactive widgets are provided on an "as is" and "as available" basis without warranties of any kind. While every effort is made to maintain complete technical accuracy, no guarantee of uninterrupted uptime or error-free execution is made.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">5. Governing Law & Contact</h2>
            <p className="legal-text">
              These terms are governed by the laws of India. For any inquiries regarding these terms, contact <strong>ganeshbadar01@gmail.com</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ===== Footer Component =====
function Footer({ onViewChange }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-layout">
          <div>
            <div className="footer-brand">
              GB<span>.dev</span>
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-tertiary)', marginTop: '0.25rem' }}>
              Java Backend Developer & Distributed Systems Engineer
            </div>
          </div>

          <ul className="footer-nav">
            <li>
              <button onClick={() => onViewChange('privacy')}>Privacy Policy</button>
            </li>
            <li>
              <button onClick={() => onViewChange('terms')}>Terms and Conditions</button>
            </li>
            <li>
              <a href="https://github.com/ganesh-badar" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ganesh-badar2004" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:ganeshbadar01@gmail.com">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} Ganesh Badar. All rights reserved.</div>
          <div>
            Deployed on GitHub Pages: <a href="https://ganesh-badar.github.io/portfolio/" target="_blank" rel="noopener noreferrer" className="footer-domain">ganesh-badar.github.io/portfolio</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ===== Root Application =====
export default function App() {
  const [currentView, setCurrentView] = useState('portfolio') // 'portfolio' | 'privacy' | 'terms'
  const [resumeData, setResumeData] = useState(null)
  const [activeSection, setActiveSection] = useState('hero')

  // Listen to hash changes for deep linking
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash
      if (hash === '#privacy') setCurrentView('privacy')
      else if (hash === '#terms') setCurrentView('terms')
    }
    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  // Track active scroll section when on main portfolio view
  useEffect(() => {
    if (currentView !== 'portfolio') return
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'console', 'contact']
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [currentView])

  // Data retrieval
  useEffect(() => {
    const fetchResume = async () => {
      try {
        const res = await fetch(`${API_BASE}/resume`)
        if (!res.ok) throw new Error('API offline')
        const data = await res.json()
        setResumeData(data)
      } catch {
        setResumeData(getFallbackData())
      }
    }
    fetchResume()
  }, [])

  const handleOpenConsole = () => {
    setCurrentView('portfolio')
    setTimeout(() => {
      const el = document.getElementById('console')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  return (
    <>
      <Navbar onViewChange={setCurrentView} activeSection={activeSection} />

      <main>
        {currentView === 'privacy' && (
          <PrivacyPolicyPage onBack={() => setCurrentView('portfolio')} />
        )}

        {currentView === 'terms' && (
          <TermsPage onBack={() => setCurrentView('portfolio')} />
        )}

        {currentView === 'portfolio' && (
          <>
            <Hero data={resumeData} onOpenConsole={handleOpenConsole} />
            <About data={resumeData} />
            <Skills data={resumeData} />
            <Experience data={resumeData} />
            <Projects data={resumeData} />
            <Credentials data={resumeData} />
            <DeveloperConsole />
            <Contact data={resumeData} />
          </>
        )}
      </main>

      <Footer onViewChange={setCurrentView} />
    </>
  )
}

// ===== Verified Profile Data Source =====
function getFallbackData() {
  return {
    personalInfo: {
      name: 'Ganesh Badar',
      phone: '+91-9022201351',
      email: 'ganeshbadar01@gmail.com',
      linkedin: 'https://www.linkedin.com/in/ganesh-badar2004',
      github: 'https://github.com/ganesh-badar/',
      location: 'Pune, Maharashtra',
      title: 'Java Backend Developer',
    },
    professionalSummary:
      'Results-driven Full-Stack Java Developer with a B.E. in Computer Science (CGPA 8.0, 2025). Proficient in Java 17, Spring Boot 3, Spring Data JPA, Hibernate ORM, MySQL, and React 18. Hands-on experience architecting production-ready enterprise applications featuring asynchronous request-reply workflows, Server-Sent Events (SSE), ACID-compliant transactional checkout, and AI integrations (OpenAI GPT-4o-mini). Committed to writing clean, maintainable code with strong architectural fundamentals.',
    technicalSkills: {
      categories: [
        {
          category: 'Languages',
          skills: [
            { name: 'Java (Java 17, Core & Advanced)', proficiency: 95 },
            { name: 'SQL', proficiency: 90 },
            { name: 'JavaScript (ES6+)', proficiency: 85 },
            { name: 'HTML5 & CSS3', proficiency: 85 },
          ],
        },
        {
          category: 'Backend & Frameworks',
          skills: [
            { name: 'Spring Boot 3', proficiency: 90 },
            { name: 'Spring Data JPA', proficiency: 90 },
            { name: 'Hibernate ORM', proficiency: 85 },
            { name: 'RESTful APIs', proficiency: 90 },
            { name: 'Servlets & JDBC', proficiency: 85 },
            { name: 'Spring Security (Basic)', proficiency: 75 },
          ],
        },
        {
          category: 'Frontend & Web',
          skills: [
            { name: 'React 18 (Hooks, State)', proficiency: 88 },
            { name: 'Vite', proficiency: 85 },
            { name: 'Bootstrap 5.3', proficiency: 85 },
            { name: 'JSON', proficiency: 90 },
          ],
        },
        {
          category: 'Databases & Cloud',
          skills: [
            { name: 'MySQL 8.0', proficiency: 90 },
            { name: 'PostgreSQL (Familiar)', proficiency: 75 },
            { name: 'H2 In-Memory DB', proficiency: 80 },
            { name: 'AWS S3 (Working Knowledge)', proficiency: 75 },
          ],
        },
        {
          category: 'Core Architectural Concepts',
          skills: [
            { name: 'Concurrency & ThreadPoolTaskExecutor', proficiency: 88 },
            { name: 'Asynchronous Request-Reply (HTTP 202)', proficiency: 90 },
            { name: 'Transaction Management (@Transactional)', proficiency: 90 },
            { name: 'OOP Principles & MVC Architecture', proficiency: 92 },
          ],
        },
        {
          category: 'Tools & Developer Environment',
          skills: [
            { name: 'Git & GitHub', proficiency: 90 },
            { name: 'Maven', proficiency: 88 },
            { name: 'Postman', proficiency: 88 },
            { name: 'VS Code & Eclipse', proficiency: 85 },
            { name: 'Apache Tomcat & Docker (Basic)', proficiency: 80 },
            { name: 'Linux (Basic)', proficiency: 75 },
          ],
        },
      ],
    },
    experience: [
      {
        role: 'Web Development Intern',
        company: 'Prodigy InfoTech',
        duration: 'Dec 2024 – Jan 2025',
        highlights: [
          'Developed and delivered frontend components (HTML, CSS, JavaScript), improving UI responsiveness and cross-browser consistency.',
          'Followed the complete project lifecycle — requirements gathering, implementation, and review — gaining team-based delivery experience.',
          'Collaborated with senior developers to debug and refine UI behaviour, reducing reported interface issues on tested pages.',
        ],
      },
    ],
    projects: [
      {
        name: 'NexusTech — Full-Stack Enterprise E-Commerce Platform',
        techStack: 'Java 17 · Spring Boot 3 · Spring Data JPA · MySQL · React 18 · Vite · Bootstrap 5 · Docker',
        liveUrl: 'https://ganesh-badar.github.io/nexus-ecommerce-platform/',
        githubUrl: 'https://github.com/ganesh-badar/nexus-ecommerce-platform',
        highlights: [
          'Architected and deployed an enterprise-grade full-stack e-commerce application supporting dual-role workflows (Customer Storefront and Merchant Operations).',
          'Engineered ACID-compliant transactional checkout with multi-channel payment integration (Prepaid UPI/QR, Credit/Debit Cards, Net Banking, COD) and atomic inventory deductions.',
          'Built real-time courier tracking stepper with estimated arrival logic and a merchant back-office portal with stock alerts and fulfillment controls.',
          'Resolved Hibernate N+1 query bottlenecks by optimizing JPA entities with @EntityGraph, reducing database query latency by over 60%.',
        ],
      },
      {
        name: 'HireScope AI — Enterprise AI Resume Screener & Real-Time ATS',
        techStack: 'Java 17 · Spring Boot 3 · React 18 · MySQL · SSE · OpenAI · AWS S3',
        liveUrl: 'https://ganesh-badar.github.io/ai-resume-screener-ats/',
        githubUrl: 'https://github.com/ganesh-badar/ai-resume-screener-ats',
        highlights: [
          'Architected a full-stack, asynchronous applicant tracking system leveraging Spring Boot 3 and React 18 to evaluate candidate resumes against technical requisitions in real time.',
          'Eliminated Tomcat servlet thread starvation and 504 gateway timeouts by implementing the Asynchronous Request-Reply Pattern (HTTP 202 Accepted), reducing initial API response latency to < 50ms.',
          'Integrated Server-Sent Events (SSE) with a thread-safe emitter registry (ConcurrentHashMap) to stream live multi-stage extraction and LLM scoring updates without WebSocket overhead.',
          'Configured bounded ThreadPoolTaskExecutor with CallerRunsPolicy backpressure, automated PDF text parsing via Apache PDFBox 3.x, and strict schema validation.',
        ],
      },
    ],
    education: [
      {
        degree: 'B.E. – Computer Science & Engineering',
        institution: 'Anuradha Engineering College, Chikhli',
        score: 'CGPA: 8.0/10',
        year: '2021–2025',
      },
      {
        degree: 'HSC (12th)',
        institution: 'Maharashtra State Board',
        score: '87.50%',
        year: '2021',
      },
      {
        degree: 'SSC (10th)',
        institution: 'Maharashtra State Board',
        score: '78.80%',
        year: '2019',
      },
    ],
    certifications: [
      'Complete Core Java + DSA — Udemy',
      'Web Design: Beginner to Advanced — Udemy',
      'Learn HTML: Basic to Advanced — Udemy',
    ],
    keyStrengths: [
      'Strong verbal & written English communication',
      'Follows SOPs diligently in process-driven environments',
      'Available for 24/7 rotational shifts including nights',
      'Analytical mindset with keen attention to detail',
      'Quick learner; comfortable with IT systems and databases',
      'Collaborative team player with a growth-oriented attitude',
    ],
  }
}
