<div align="center">

# ⚛️ Portfolio Frontend — React + Vite

<p>
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/CSS3-Custom_Properties-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="License" />
</p>

<p><strong>A stunning, premium dark-themed career portfolio for Ganesh Badar.</strong></p>
<p>Features glassmorphism UI, smooth animations, animated skill bars, AI chat, and responsive design.</p>

<br/>

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" alt="divider" />

</div>

<br/>

## 🎨 Design Highlights

<table>
  <tr>
    <td align="center" width="25%">
      <br/>
      <strong>🌑</strong><br/>
      <strong>Dark Theme</strong><br/>
      <sub>Premium dark UI with<br/>purple & cyan accents</sub>
      <br/><br/>
    </td>
    <td align="center" width="25%">
      <br/>
      <strong>✨</strong><br/>
      <strong>Glassmorphism</strong><br/>
      <sub>Frosted glass cards with<br/>backdrop blur & glow</sub>
      <br/><br/>
    </td>
    <td align="center" width="25%">
      <br/>
      <strong>🎭</strong><br/>
      <strong>Animations</strong><br/>
      <sub>Particle system, typing effect,<br/>scroll & hover animations</sub>
      <br/><br/>
    </td>
    <td align="center" width="25%">
      <br/>
      <strong>📱</strong><br/>
      <strong>Responsive</strong><br/>
      <sub>Mobile-first design with<br/>adaptive layouts</sub>
      <br/><br/>
    </td>
  </tr>
</table>

<br/>

## ✨ Features

| Section | Description | Animations |
|---------|-------------|------------|
| 🦸 **Hero** | Name, typing role titles, stats counters | Particle system, fade-in, typing effect |
| 👤 **About** | Professional summary, avatar, quick facts | Floating badges, scroll reveal |
| 🛠️ **Skills** | 5 skill categories with progress bars | Animated bar fill on scroll, shimmer |
| 💼 **Experience** | Timeline with role details | Glowing dot, slide-in cards |
| 🚀 **Projects** | Project cards with tech tags | Hover glow, gradient borders |
| 🎓 **Education** | Academic background cards | Scale & fade-in on scroll |
| 📜 **Certifications** | Course completion badges | Hover lift effect |
| 💪 **Strengths** | Key qualities grid | Staggered reveal |
| 🤖 **AI Chat** | Interactive chat with suggestions | Message animations, typing indicator |
| 📬 **Contact** | Phone, email, LinkedIn, GitHub, location | Card hover glow |

<br/>

## 🎨 Design System

### Color Palette

```
Primary Background ████  #0a0a0f
Card Background    ████  rgba(20, 20, 30, 0.7)
Accent Purple      ████  #6c5ce7
Accent Lavender    ████  #a29bfe
Accent Cyan        ████  #00cec9
Accent Pink        ████  #fd79a8
Accent Green       ████  #00b894
Text Primary       ████  #f1f1f7
Text Secondary     ████  #a0a0b4
```

### Typography

| Usage | Font | Weight |
|-------|------|--------|
| Headings | Inter | 700–900 |
| Body text | Inter | 400–500 |
| Code / Tags | JetBrains Mono | 400–500 |

### Effects
- **Glassmorphism** — `backdrop-filter: blur(20px)` with translucent borders
- **Gradient glow** — Purple → Lavender → Blue accent gradient
- **Particles** — 30 floating particles with random paths
- **Shimmer** — Animated gradient sweep on skill bars
- **Scroll reveal** — Intersection Observer-powered fade + slide animations

<br/>

## 📁 Project Structure

```
portfolio-frontend/
├── index.html                 # SEO-optimized HTML with meta tags
├── package.json               # Dependencies & scripts
├── vite.config.js             # Vite configuration
└── src/
    ├── main.jsx               # React entry point
    ├── index.css              # Complete design system (800+ lines)
    │   ├── CSS Custom Properties (design tokens)
    │   ├── Global reset & scrollbar
    │   ├── Glass card component
    │   ├── Background effects (grid, gradient orbs)
    │   ├── Navbar (fixed, blur on scroll)
    │   ├── Hero (particles, typing, stats)
    │   ├── About (avatar, floating badges)
    │   ├── Skills (animated progress bars)
    │   ├── Experience (timeline)
    │   ├── Projects (cards with tags)
    │   ├── Education, Certifications, Strengths
    │   ├── AI Chat (window, messages, suggestions)
    │   ├── Contact & Footer
    │   ├── Scroll animations
    │   └── Responsive breakpoints
    └── App.jsx                # All React components
        ├── Navbar             # Fixed nav with scroll detection
        ├── Hero               # Typing animation + particle system
        ├── About              # Profile summary + floating badges
        ├── Skills             # Intersection Observer animated bars
        ├── Experience         # Timeline layout
        ├── Projects           # Card grid with tech tags
        ├── EducationSection   # Academic cards
        ├── Certifications     # Certificate badges
        ├── Strengths          # Qualities grid
        ├── AiChat             # Chat widget with Spring Boot API
        ├── Contact            # Contact information cards
        └── Footer             # Social links + copyright
```

<br/>

## 🚀 Quick Start

### Prerequisites
- 📦 **Node.js 18+** installed
- 🌱 **Backend running** at `http://localhost:8080` (optional — has fallback data)

### Install & Run

```bash
# Clone the repository
git clone https://github.com/ganesh-badar/portfolio-frontend.git
cd portfolio-frontend

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open **http://localhost:5173** in your browser 🎉

### Build for Production

```bash
npm run build
npm run preview
```

<br/>

## ⚙️ Configuration

### Backend API
The frontend calls the Spring Boot backend at `http://localhost:8080/api`. This is configured in `App.jsx`:

```javascript
const API_BASE = 'http://localhost:8080/api'
```

### Fallback Mode
If the backend is not running, the frontend **automatically uses embedded fallback data**, so the portfolio is always viewable.

<br/>

## 🔗 Related

| | Repository |
|---|---|
| ☕ **Backend** | [portfolio-backend](https://github.com/ganesh-badar/portfolio-backend) — Spring Boot + Maven |

<br/>

## 👤 Author

<table>
  <tr>
    <td align="center">
      <strong>Ganesh Badar</strong><br/>
      Java Backend Developer · Pune, Maharashtra<br/><br/>
      <a href="mailto:ganeshbadar01@gmail.com">📧 Email</a> · 
      <a href="https://linkedin.com/in/ganeshbadar">🔗 LinkedIn</a> · 
      <a href="https://github.com/ganesh-badar">💻 GitHub</a>
    </td>
  </tr>
</table>

<br/>

<div align="center">

---

<p>Designed & built with ❤️ using <strong>React</strong> + <strong>Vite</strong></p>

<p>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" />
</p>

</div>
