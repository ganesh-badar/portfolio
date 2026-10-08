import { useState, useEffect, useRef } from 'react'
import './index.css'

const API_BASE = 'http://localhost:8080/api'

// ===== Navbar Component =====
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'chat', 'contact']
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
  }, [])

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#chat', label: 'AI Chat' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <div className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="/profile.jpg" alt="Ganesh Badar" className="navbar-avatar-img" />
          <span className="navbar-logo-text">GB<span>.dev</span></span>
        </div>
        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={activeSection === link.href.slice(1) ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Contact</a>
          </li>
        </ul>
        <button className={`nav-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  )
}

// ===== Hero Component =====
function Hero({ data }) {
  const [typedText, setTypedText] = useState('')
  const titles = ['Java Backend Developer', 'Spring Boot Engineer', 'Database Architect', 'Problem Solver']
  const [titleIndex, setTitleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentTitle = titles[titleIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentTitle.substring(0, charIndex + 1))
        setCharIndex(prev => prev + 1)
        if (charIndex + 1 === currentTitle.length) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setTypedText(currentTitle.substring(0, charIndex - 1))
        setCharIndex(prev => prev - 1)
        if (charIndex === 0) {
          setIsDeleting(false)
          setTitleIndex((prev) => (prev + 1) % titles.length)
        }
      }
    }, isDeleting ? 50 : 100)
    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, titleIndex])

  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 20,
    duration: 10 + Math.random() * 20,
    size: 1 + Math.random() * 3,
  }))

  return (
    <section className="hero" id="hero">
      <div className="hero-particles">
        {particles.map(p => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>
      <div className="hero-content container">
        <div className="hero-avatar-wrapper">
          <div className="hero-avatar-glow"></div>
          <div className="hero-avatar-frame">
            <img
              src="/profile.jpg"
              alt={data?.personalInfo?.name || 'Ganesh Badar'}
              className="hero-avatar-img"
            />
          </div>
          <span className="hero-avatar-badge" title="Open to opportunities">
            <span className="dot"></span>
          </span>
        </div>
        <div className="hero-badge">
          <span className="dot"></span>
          Available for opportunities
        </div>
        <h1 className="hero-name">
          Hi, I'm <span className="gradient-text">{data?.personalInfo?.name || 'Ganesh Badar'}</span>
        </h1>
        <p className="hero-title">
          I'm a <span className="typed-text">{typedText}<span style={{ borderRight: '2px solid var(--accent-cyan)', animation: 'pulse 1s infinite' }}>|</span></span>
        </p>
        <p className="hero-description">
          {data?.professionalSummary?.substring(0, 180) || 'Building robust backend systems with Java, Spring Boot, and MySQL.'}...
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            ⚡ View My Work
          </a>
          <a href="#contact" className="btn-secondary">
            📬 Get In Touch
          </a>
          <a href="#chat" className="btn-secondary">
            🤖 Ask AI About Me
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-value">8.0</div>
            <div className="stat-label">CGPA</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">2+</div>
            <div className="stat-label">Projects</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">3</div>
            <div className="stat-label">Certifications</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">10+</div>
            <div className="stat-label">Technologies</div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ===== About Component =====
function About({ data }) {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">A passionate developer with a strong foundation in Computer Science</p>
        </div>
        <div className="about-grid animate-on-scroll">
          <div className="about-image-container">
            <div className="about-avatar">
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt={data?.personalInfo?.name || 'Ganesh Badar'}
                className="about-avatar-img"
              />
              <div className="about-avatar-overlay">
                <div className="avatar-status-pill">
                  <span className="dot"></span> Open to Work • Pune, IN
                </div>
              </div>
            </div>
            <div className="about-floating-badges">
              <div className="floating-badge">☕ Java Expert</div>
              <div className="floating-badge">🗄️ MySQL Pro</div>
              <div className="floating-badge">🌱 Spring Boot</div>
            </div>
          </div>
          <div className="about-text">
            <h3>Building the Future, One Line at a Time</h3>
            <p>{data?.professionalSummary}</p>
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🎓</span>
                <span>B.E. Computer Science</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">📍</span>
                <span>Pune, Maharashtra</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">💼</span>
                <span>Backend Developer</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🚀</span>
                <span>2025 Graduate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ===== Skills Component =====
function Skills({ data }) {
  const [animated, setAnimated] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true)
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const categoryIcons = {
    'Languages': '💻',
    'Backend & Frameworks': '⚙️',
    'Frontend & Web': '🎨',
    'Databases & Cloud': '🗄️',
    'Working Knowledge & Integrations': '⚡',
    'Core Architectural Concepts': '🏗️',
    'Tools & Developer Environment': '🛠️',
  }

  return (
    <section className="section" id="skills" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Technologies and tools I work with to build robust backend systems</p>
        </div>
        <div className="skills-grid">
          {data?.technicalSkills?.categories?.map((cat, idx) => (
            <div key={idx} className="glass-card skill-category-card animate-on-scroll" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="skill-category-title">
                <span className="skill-category-icon">{categoryIcons[cat.category] || '📌'}</span>
                {cat.category}
              </div>
              {cat.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.proficiency}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-bar-fill"
                      style={{ width: animated ? `${skill.proficiency}%` : '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===== Experience Component =====
function Experience({ data }) {
  return (
    <section className="section" id="experience" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">My professional journey and contributions</p>
        </div>
        <div className="timeline animate-on-scroll">
          {data?.experience?.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="glass-card timeline-card">
                <div className="timeline-header">
                  <div>
                    <div className="timeline-role">{exp.role}</div>
                    <div className="timeline-company">{exp.company}</div>
                  </div>
                  <span className="timeline-duration">{exp.duration}</span>
                </div>
                <ul className="timeline-highlights">
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

// ===== Projects Component =====
function Projects({ data }) {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Real-world applications demonstrating backend architecture skills</p>
        </div>
        <div className="projects-grid">
          {data?.projects?.map((proj, idx) => (
            <div key={idx} className="glass-card project-card animate-on-scroll">
              <div className="project-card-header">
                <span className="project-icon">{proj.icon}</span>
                <div>
                  <div className="project-title">{proj.name}</div>
                  <div className="project-tech">{proj.techStack}</div>
                </div>
              </div>
              <div className="project-card-body">
                <ul className="project-highlights">
                  {proj.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
                <div className="project-tags">
                  {proj.techStack.split(' · ').map((tag, tIdx) => (
                    <span key={tIdx} className="project-tag">{tag}</span>
                  ))}
                </div>
                {(proj.liveUrl || proj.githubUrl) && (
                  <div className="project-actions">
                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn project-btn-primary"
                      >
                        <span>🌐</span> Live Demo
                      </a>
                    )}
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn project-btn-outline"
                      >
                        <span>💻</span> GitHub Repository
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===== Education Component =====
function EducationSection({ data }) {
  const icons = ['🎓', '📚', '📖']
  return (
    <section className="section" id="education" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My academic journey and achievements</p>
        </div>
        <div className="education-grid">
          {data?.education?.map((edu, idx) => (
            <div key={idx} className="glass-card education-card animate-on-scroll">
              <div className="education-icon">{icons[idx] || '📄'}</div>
              <div className="education-degree">{edu.degree}</div>
              <div className="education-institution">{edu.institution}</div>
              <div className="education-meta">
                <span className="education-score">{edu.score}</span>
                <span className="education-year">{edu.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===== Certifications Component =====
function Certifications({ data }) {
  const icons = ['🏆', '🎨', '🌐']
  return (
    <section className="section" id="certifications">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Continuous learning and professional development</p>
        </div>
        <div className="certs-grid">
          {data?.certifications?.map((cert, idx) => {
            const parts = cert.split(' — ')
            return (
              <div key={idx} className="glass-card cert-card animate-on-scroll">
                <span className="cert-icon">{icons[idx] || '📜'}</span>
                <div className="cert-info">
                  <div className="cert-name">{parts[0]}</div>
                  <div className="cert-provider">{parts[1] || ''}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ===== Strengths Component =====
function Strengths({ data }) {
  const icons = ['🗣️', '📋', '🕐', '🔍', '🚀', '🤝']
  return (
    <section className="section" id="strengths" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Key Strengths</h2>
          <p className="section-subtitle">What makes me a valuable addition to any team</p>
        </div>
        <div className="strengths-grid">
          {data?.keyStrengths?.map((strength, idx) => (
            <div key={idx} className="glass-card strength-card animate-on-scroll">
              <span className="strength-icon">{icons[idx] || '⭐'}</span>
              <span className="strength-text">{strength}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===== AI Chat Component =====
function AiChat() {
  const [messages, setMessages] = useState([
    { role: 'bot', content: "👋 Hi! I'm Ganesh's AI portfolio assistant. Ask me anything about his skills, experience, projects, or education!" }
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

  const sendMessage = async (messageText) => {
    const text = messageText || input.trim()
    if (!text) return

    setMessages(prev => [...prev, { role: 'user', content: text }])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch(`${API_BASE}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      })
      const data = await res.json()
      setMessages(prev => [...prev, { role: 'bot', content: data.response }])
    } catch {
      setMessages(prev => [...prev, {
        role: 'bot',
        content: "⚠️ I'm having trouble connecting to the server. Please make sure the backend is running on port 8080."
      }])
    } finally {
      setLoading(false)
    }
  }

  const suggestions = [
    'What are his skills?',
    'Tell me about his projects',
    'What is his education?',
    'Work experience?',
    'How to contact him?',
  ]

  return (
    <section className="section chat-section" id="chat">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">🤖 AI Assistant</h2>
          <p className="section-subtitle">Chat with AI to learn more about my profile — powered by Spring AI</p>
        </div>
        <div className="chat-container">
          <div className="chat-window">
            <div className="chat-header">
              <img src="/profile.jpg" alt="Ganesh AI" className="chat-avatar-img" />
              <div className="chat-header-details">
                <div className="chat-header-main">
                  <div className="chat-header-dot"></div>
                  <span className="chat-header-text">Portfolio AI Assistant</span>
                </div>
                <span className="chat-header-subtitle">Trained on Ganesh's Resume & Experience</span>
              </div>
            </div>
            <div className="chat-messages">
              {messages.map((msg, idx) => (
                <div key={idx} className={`chat-message ${msg.role}`}>
                  {msg.content}
                </div>
              ))}
              {loading && (
                <div className="chat-message bot" style={{ opacity: 0.6 }}>
                  Thinking...
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <div className="chat-suggestions">
              {suggestions.map((s, idx) => (
                <button key={idx} className="chat-suggestion" onClick={() => sendMessage(s)}>
                  {s}
                </button>
              ))}
            </div>
            <div className="chat-input-area">
              <input
                type="text"
                className="chat-input"
                placeholder="Ask about Ganesh's skills, projects, experience..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                disabled={loading}
              />
              <button className="chat-send" onClick={() => sendMessage()} disabled={loading || !input.trim()}>
                Send ✨
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ===== Contact Component =====
function Contact({ data }) {
  const contactItems = [
    { icon: '📱', label: 'Phone', value: data?.personalInfo?.phone, href: `tel:${data?.personalInfo?.phone}` },
    { icon: '📧', label: 'Email', value: data?.personalInfo?.email, href: `mailto:${data?.personalInfo?.email}` },
    { icon: '🔗', label: 'LinkedIn', value: 'LinkedIn Profile', href: data?.personalInfo?.linkedin },
    { icon: '💻', label: 'GitHub', value: 'GitHub Profile', href: data?.personalInfo?.github },
    { icon: '📍', label: 'Location', value: data?.personalInfo?.location, href: '#' },
  ]

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Ready to collaborate? Let's connect and build something amazing together</p>
        </div>
        <div className="contact-grid">
          {contactItems.map((item, idx) => (
            <a key={idx} href={item.href} target={item.href?.startsWith('http') ? '_blank' : ''} rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div className="glass-card contact-card animate-on-scroll">
                <div className="contact-icon">{item.icon}</div>
                <div className="contact-label">{item.label}</div>
                <div className="contact-value">{item.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===== Footer Component =====
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-socials">
            <a href="https://linkedin.com/in/ganeshbadar" target="_blank" rel="noopener noreferrer" className="footer-social-link" title="LinkedIn">in</a>
            <a href="https://github.com/ganeshbadar" target="_blank" rel="noopener noreferrer" className="footer-social-link" title="GitHub">GH</a>
            <a href="mailto:ganeshbadar01@gmail.com" className="footer-social-link" title="Email">@</a>
          </div>
          <p className="footer-text">
            © {new Date().getFullYear()} Ganesh Badar. Built with <span className="heart">♥</span> using Spring Boot + React
          </p>
        </div>
      </div>
    </footer>
  )
}

// ===== Main App Component =====
function App() {
  const [resumeData, setResumeData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const res = await fetch(`${API_BASE}/resume`)
        const data = await res.json()
        setResumeData(data)
      } catch (err) {
        console.warn('Backend not available, using fallback data')
        // Fallback data if backend is not running
        setResumeData(getFallbackData())
      } finally {
        setTimeout(() => setLoading(false), 1000)
      }
    }
    fetchResume()
  }, [])

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated')
          }
        })
      },
      { threshold: 0.1 }
    )

    setTimeout(() => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el))
    }, 500)

    return () => observer.disconnect()
  }, [resumeData])

  return (
    <>
      {/* Loading Screen */}
      <div className={`loading-screen ${!loading ? 'hidden' : ''}`}>
        <div className="loading-spinner"></div>
        <div className="loading-text">Loading Portfolio...</div>
      </div>

      {/* Background Effects */}
      <div className="bg-grid"></div>
      <div className="bg-gradient-orb orb-1"></div>
      <div className="bg-gradient-orb orb-2"></div>
      <div className="bg-gradient-orb orb-3"></div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero data={resumeData} />
        <About data={resumeData} />
        <Skills data={resumeData} />
        <Experience data={resumeData} />
        <Projects data={resumeData} />
        <EducationSection data={resumeData} />
        <Certifications data={resumeData} />
        <Strengths data={resumeData} />
        <AiChat />
        <Contact data={resumeData} />
      </main>

      <Footer />
    </>
  )
}

// ===== Fallback Data =====
function getFallbackData() {
  return {
    personalInfo: {
      name: "Ganesh Badar",
      phone: "+91-9022201351",
      email: "ganeshbadar01@gmail.com",
      linkedin: "https://linkedin.com/in/ganeshbadar",
      github: "https://github.com/ganeshbadar",
      location: "Pune, Maharashtra",
      title: "Java Backend Developer"
    },
    professionalSummary: "Results-driven Full-Stack Java Developer with a B.E. in Computer Science (CGPA 8.0, 2025). Proficient in Java 17, Spring Boot 3, Spring Data JPA, Hibernate ORM, MySQL, and React 18. Hands-on experience architecting production-ready enterprise applications featuring asynchronous request-reply workflows, Server-Sent Events (SSE), ACID-compliant transactional checkout, and AI integrations (OpenAI GPT-4o-mini). Committed to writing clean, maintainable code with strong architectural fundamentals.",
    technicalSkills: {
      categories: [
        {
          category: "Languages",
          skills: [
            { name: "Java (Java 17, Core & Advanced)", proficiency: 95 },
            { name: "JavaScript (ES6+)", proficiency: 85 },
            { name: "SQL", proficiency: 90 },
            { name: "HTML5 & CSS3", proficiency: 85 }
          ]
        },
        {
          category: "Backend & Frameworks",
          skills: [
            { name: "Spring Boot 3", proficiency: 90 },
            { name: "Spring Data JPA", proficiency: 90 },
            { name: "Hibernate ORM", proficiency: 85 },
            { name: "RESTful APIs", proficiency: 90 },
            { name: "Servlets & JDBC", proficiency: 85 },
            { name: "Spring Security (Basic)", proficiency: 75 }
          ]
        },
        {
          category: "Frontend & Web",
          skills: [
            { name: "React 18 (Hooks, State)", proficiency: 88 },
            { name: "Vite", proficiency: 85 },
            { name: "Bootstrap 5.3", proficiency: 85 },
            { name: "JSON", proficiency: 90 }
          ]
        },
        {
          category: "Databases & Cloud",
          skills: [
            { name: "MySQL 8.0", proficiency: 90 },
            { name: "PostgreSQL (Familiar)", proficiency: 75 },
            { name: "H2 In-Memory DB", proficiency: 80 },
            { name: "AWS S3 (Working Knowledge)", proficiency: 75 }
          ]
        },
        {
          category: "Working Knowledge & Integrations",
          skills: [
            { name: "Server-Sent Events (SSE)", proficiency: 88 },
            { name: "HikariCP Connection Pooling", proficiency: 85 },
            { name: "Apache PDFBox 3.x", proficiency: 85 },
            { name: "OpenAI API Integration", proficiency: 85 }
          ]
        },
        {
          category: "Core Architectural Concepts",
          skills: [
            { name: "Concurrency & ThreadPoolTaskExecutor", proficiency: 88 },
            { name: "Asynchronous Request-Reply (HTTP 202)", proficiency: 90 },
            { name: "Transaction Management (@Transactional)", proficiency: 90 },
            { name: "OOP Principles & MVC Architecture", proficiency: 92 }
          ]
        },
        {
          category: "Tools & Developer Environment",
          skills: [
            { name: "Git & GitHub", proficiency: 90 },
            { name: "Maven", proficiency: 88 },
            { name: "Postman", proficiency: 88 },
            { name: "VS Code & Eclipse", proficiency: 85 },
            { name: "Cursor (AI-assisted workflows)", proficiency: 85 },
            { name: "Apache Tomcat & Docker (Basic)", proficiency: 80 },
            { name: "Linux (Basic)", proficiency: 75 }
          ]
        }
      ]
    },
    experience: [
      {
        role: "Web Development Intern",
        company: "Prodigy InfoTech",
        duration: "Dec 2024 – Jan 2025",
        highlights: [
          "Developed and delivered frontend components (HTML, CSS, JavaScript), improving UI responsiveness and cross-browser consistency.",
          "Followed the complete project lifecycle — requirements gathering, implementation, and review — gaining team-based delivery experience.",
          "Collaborated with senior developers to debug and refine UI behaviour, reducing reported interface issues on tested pages."
        ]
      }
    ],
    projects: [
      {
        name: "NexusTech — Full-Stack Enterprise E-Commerce Platform",
        techStack: "Java 17 · Spring Boot 3 · Spring Data JPA · MySQL · React 18 · Vite · Bootstrap 5 · Docker",
        icon: "🛒",
        liveUrl: "https://ganesh-badar.github.io/nexus-ecommerce-platform/",
        githubUrl: "https://github.com/ganesh-badar/nexus-ecommerce-platform",
        highlights: [
          "Architected and deployed an enterprise-grade full-stack e-commerce application supporting dual-role workflows (Customer Storefront and Merchant Operations).",
          "Engineered ACID-compliant transactional checkout with multi-channel payment integration (Prepaid UPI/QR, Credit/Debit Cards, Net Banking, and COD) with atomic inventory management.",
          "Built real-time courier tracking stepper with estimated arrival logic and a merchant back-office portal with stock alerts and fulfillment controls.",
          "Resolved Hibernate N+1 query bottlenecks by optimizing JPA entities with @EntityGraph, reducing database query latency by over 60%.",
          "Fully containerized and deployed live on the cloud, with complete source code, architectural guides, and API documentation published on GitHub."
        ]
      },
      {
        name: "HireScope AI — Enterprise AI Resume Screener & Real-Time ATS",
        techStack: "Java 17 · Spring Boot 3 · React 18 · MySQL · SSE · OpenAI · AWS S3",
        icon: "🤖",
        liveUrl: "https://ganesh-badar.github.io/ai-resume-screener-ats/",
        githubUrl: "https://github.com/ganesh-badar/ai-resume-screener-ats",
        highlights: [
          "Architected a full-stack, asynchronous applicant tracking system leveraging Spring Boot 3 and React 18 to evaluate candidate resumes against technical requisitions in real time.",
          "Eliminated Tomcat servlet thread starvation and 504 gateway timeouts by implementing the Asynchronous Request-Reply Pattern (HTTP 202 Accepted), reducing initial API response latency to < 50ms.",
          "Integrated Server-Sent Events (SSE) with a thread-safe emitter registry (ConcurrentHashMap) to stream live multi-stage extraction and LLM scoring updates without the protocol overhead of WebSockets.",
          "Configured a bounded ThreadPoolTaskExecutor with CallerRunsPolicy for graceful backpressure, and engineered automated document text parsing via Apache PDFBox 3.x feeding into OpenAI GPT-4o-mini with strict JSON schema validation."
        ]
      }
    ],
    education: [
      { degree: "B.E. – Computer Science & Engineering", institution: "Anuradha Engineering College, Chikhli", score: "CGPA: 8.0/10", year: "2021–2025" },
      { degree: "HSC (12th)", institution: "Maharashtra State Board", score: "87.50%", year: "2021" },
      { degree: "SSC (10th)", institution: "Maharashtra State Board", score: "78.80%", year: "2019" }
    ],
    certifications: [
      "Complete Core Java + DSA — Udemy",
      "Web Design: Beginner to Advanced — Udemy",
      "Learn HTML: Basic to Advanced — Udemy"
    ],
    keyStrengths: [
      "Strong verbal & written English communication",
      "Follows SOPs diligently in process-driven environments",
      "Available for 24/7 rotational shifts including nights",
      "Analytical mindset with keen attention to detail",
      "Quick learner; comfortable with IT systems and databases",
      "Collaborative team player with a growth-oriented attitude"
    ]
  }
}

export default App
