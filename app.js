/**
 * ==============================================================================
 * GANESH BADAR - FRONTEND DEVELOPER PORTFOLIO (app.js)
 * ------------------------------------------------------------------------------
 * Pure Vanilla JavaScript (ES6+) • Zero Framework Overhead
 * Features:
 *  1. Theme Engine: Dark & Light Mode with LocalStorage Persistence
 *  2. Live CSS Variable Accent Theme Customizer
 *  3. Interactive Project Category Filtering
 *  4. Accessible Mobile Navigation Drawer
 *  5. Clipboard Copy Utility with Toast Notification
 *  6. Client-Side Contact Form Validation
 *  7. Scrollspy Active Navigation & Smooth Scroll to Top
 * ==============================================================================
 */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
     1. ACCENT THEMES CONFIGURATION
     -------------------------------------------------------------------------- */
  const ACCENT_THEMES = {
    cyan: {
      accent: '#00f0ff',
      hover: '#00c8d6',
      rgb: '0, 240, 255',
      gradStart: '#00f0ff',
      gradEnd: '#7928ca'
    },
    emerald: {
      accent: '#10b981',
      hover: '#059669',
      rgb: '16, 185, 129',
      gradStart: '#10b981',
      gradEnd: '#0ea5e9'
    },
    violet: {
      accent: '#8b5cf6',
      hover: '#7c3aed',
      rgb: '139, 92, 246',
      gradStart: '#8b5cf6',
      gradEnd: '#ec4899'
    },
    orange: {
      accent: '#f08804',
      hover: '#d67400',
      rgb: '240, 136, 4',
      gradStart: '#f08804',
      gradEnd: '#febd69'
    }
  };

  /* --------------------------------------------------------------------------
     2. DOM ELEMENTS CACHE
     -------------------------------------------------------------------------- */
  const DOM = {
    html: document.documentElement,
    header: document.querySelector('.header'),
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    themeIcon: document.getElementById('themeIcon'),
    accentButtons: document.querySelectorAll('.accent-btn'),
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    mobileDrawer: document.getElementById('mobileDrawer'),
    mobileDrawerClose: document.getElementById('mobileDrawerClose'),
    mobileBackdrop: document.getElementById('mobileBackdrop'),
    mobileNavLinks: document.querySelectorAll('.mobile-nav-link'),
    navLinks: document.querySelectorAll('.nav-link'),
    filterBtns: document.querySelectorAll('.filter-btn'),
    projectCards: document.querySelectorAll('.project-card'),
    copyEmailHeroBtn: document.getElementById('copyEmailHeroBtn'),
    copyEmailContactBtn: document.getElementById('copyEmailContactBtn'),
    contactForm: document.getElementById('contactForm'),
    userName: document.getElementById('userName'),
    userEmail: document.getElementById('userEmail'),
    userSubject: document.getElementById('userSubject'),
    userMessage: document.getElementById('userMessage'),
    nameError: document.getElementById('nameError'),
    emailError: document.getElementById('emailError'),
    messageError: document.getElementById('messageError'),
    backToTopBtn: document.getElementById('backToTopBtn'),
    toast: document.getElementById('toast'),
    sections: document.querySelectorAll('section[id]')
  };

  /* --------------------------------------------------------------------------
     3. TOAST NOTIFICATION UTILITY
     -------------------------------------------------------------------------- */
  let toastTimer;
  function showToast(message, iconClass = 'fa-circle-check') {
    if (!DOM.toast) return;
    DOM.toast.innerHTML = `<i class="fa-solid ${iconClass}"></i> <span>${message}</span>`;
    DOM.toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      DOM.toast.classList.remove('show');
    }, 3400);
  }

  /* --------------------------------------------------------------------------
     4. THEME ENGINE (DARK / LIGHT MODE)
     -------------------------------------------------------------------------- */
  function initTheme() {
    const savedTheme = localStorage.getItem('gb_portfolio_theme') || 'dark';
    setTheme(savedTheme, false);

    if (DOM.themeToggleBtn) {
      DOM.themeToggleBtn.addEventListener('click', () => {
        const currentTheme = DOM.html.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme, true);
      });
    }
  }

  function setTheme(theme, notify = false) {
    DOM.html.setAttribute('data-theme', theme);
    localStorage.setItem('gb_portfolio_theme', theme);

    if (DOM.themeIcon) {
      if (theme === 'light') {
        DOM.themeIcon.classList.remove('fa-moon');
        DOM.themeIcon.classList.add('fa-sun');
      } else {
        DOM.themeIcon.classList.remove('fa-sun');
        DOM.themeIcon.classList.add('fa-moon');
      }
    }

    if (notify) {
      showToast(`Switched to ${theme === 'dark' ? 'Dark' : 'Light'} Mode`, theme === 'dark' ? 'fa-moon' : 'fa-sun');
    }
  }

  /* --------------------------------------------------------------------------
     5. LIVE ACCENT CUSTOMIZER
     -------------------------------------------------------------------------- */
  function initAccentThemes() {
    const savedAccent = localStorage.getItem('gb_portfolio_accent') || 'cyan';
    applyAccent(savedAccent, false);

    DOM.accentButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const color = btn.getAttribute('data-color');
        applyAccent(color, true);
      });
    });
  }

  function applyAccent(colorKey, notify = false) {
    const theme = ACCENT_THEMES[colorKey];
    if (!theme) return;

    DOM.html.style.setProperty('--color-accent', theme.accent);
    DOM.html.style.setProperty('--color-accent-hover', theme.hover);
    DOM.html.style.setProperty('--color-accent-rgb', theme.rgb);
    DOM.html.style.setProperty('--color-accent-glow', `rgba(${theme.rgb}, 0.25)`);
    DOM.html.style.setProperty('--color-gradient-start', theme.gradStart);
    DOM.html.style.setProperty('--color-gradient-end', theme.gradEnd);

    localStorage.setItem('gb_portfolio_accent', colorKey);

    DOM.accentButtons.forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-color') === colorKey);
    });

    if (notify) {
      const formatted = colorKey.charAt(0).toUpperCase() + colorKey.slice(1);
      showToast(`Theme accent updated to ${formatted}`, 'fa-palette');
    }
  }

  /* --------------------------------------------------------------------------
     6. PROJECT FILTERING
     -------------------------------------------------------------------------- */
  function initProjectFiltering() {
    DOM.filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        DOM.filterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        DOM.projectCards.forEach((card) => {
          const categories = card.getAttribute('data-category') || '';
          if (filter === 'all' || categories.includes(filter)) {
            card.style.display = 'flex';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  /* --------------------------------------------------------------------------
     7. MOBILE NAVIGATION DRAWER
     -------------------------------------------------------------------------- */
  function openMobileDrawer() {
    DOM.mobileDrawer.classList.add('open');
    DOM.mobileDrawer.setAttribute('aria-hidden', 'false');
    DOM.mobileBackdrop.classList.add('open');
    if (DOM.mobileMenuBtn) DOM.mobileMenuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileDrawer() {
    DOM.mobileDrawer.classList.remove('open');
    DOM.mobileDrawer.setAttribute('aria-hidden', 'true');
    DOM.mobileBackdrop.classList.remove('open');
    if (DOM.mobileMenuBtn) DOM.mobileMenuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function initMobileMenu() {
    if (DOM.mobileMenuBtn) DOM.mobileMenuBtn.addEventListener('click', openMobileDrawer);
    if (DOM.mobileDrawerClose) DOM.mobileDrawerClose.addEventListener('click', closeMobileDrawer);
    if (DOM.mobileBackdrop) DOM.mobileBackdrop.addEventListener('click', closeMobileDrawer);

    DOM.mobileNavLinks.forEach((link) => {
      link.addEventListener('click', closeMobileDrawer);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && DOM.mobileDrawer && DOM.mobileDrawer.classList.contains('open')) {
        closeMobileDrawer();
      }
    });
  }

  /* --------------------------------------------------------------------------
     8. CLIPBOARD EMAIL COPY
     -------------------------------------------------------------------------- */
  function copyEmailToClipboard() {
    const email = 'ganeshbadar355@gmail.com';
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(email)
        .then(() => {
          showToast(`Copied ${email} to clipboard!`, 'fa-copy');
        })
        .catch(() => {
          fallbackCopyText(email);
        });
    } else {
      fallbackCopyText(email);
    }
  }

  function fallbackCopyText(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
      showToast(`Copied ${text} to clipboard!`, 'fa-copy');
    } catch (err) {
      showToast(`Contact: ${text}`);
    }
    document.body.removeChild(tempInput);
  }

  function initCopyButtons() {
    if (DOM.copyEmailHeroBtn) DOM.copyEmailHeroBtn.addEventListener('click', copyEmailToClipboard);
    if (DOM.copyEmailContactBtn) DOM.copyEmailContactBtn.addEventListener('click', copyEmailToClipboard);
  }

  /* --------------------------------------------------------------------------
     9. CLIENT-SIDE CONTACT FORM VALIDATION
     -------------------------------------------------------------------------- */
  function initContactForm() {
    if (!DOM.contactForm) return;

    DOM.contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const name = DOM.userName.value.trim();
      const email = DOM.userEmail.value.trim();
      const subject = DOM.userSubject.value.trim() || 'Frontend Opportunity';
      const message = DOM.userMessage.value.trim();

      // Reset errors
      DOM.nameError.textContent = '';
      DOM.emailError.textContent = '';
      DOM.messageError.textContent = '';
      DOM.userName.classList.remove('invalid');
      DOM.userEmail.classList.remove('invalid');
      DOM.userMessage.classList.remove('invalid');

      // Validate Name
      if (name.length < 2) {
        DOM.nameError.textContent = 'Please provide your name (at least 2 characters).';
        DOM.userName.classList.add('invalid');
        isValid = false;
      }

      // Validate Email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        DOM.emailError.textContent = 'Please enter a valid email address.';
        DOM.userEmail.classList.add('invalid');
        isValid = false;
      }

      // Validate Message
      if (message.length < 5) {
        DOM.messageError.textContent = 'Please include a message (at least 5 characters).';
        DOM.userMessage.classList.add('invalid');
        isValid = false;
      }

      if (isValid) {
        // Construct mailto link as direct fallback
        const mailtoUri = `mailto:ganeshbadar355@gmail.com?subject=${encodeURIComponent(
          `[Portfolio Contact] ${subject}`
        )}&body=${encodeURIComponent(`Hi Ganesh,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

        showToast('Thank you! Opening your email client to send message...', 'fa-paper-plane');

        setTimeout(() => {
          window.location.href = mailtoUri;
          DOM.contactForm.reset();
        }, 800);
      }
    });
  }

  /* --------------------------------------------------------------------------
     10. SCROLLSPY & BACK TO TOP
     -------------------------------------------------------------------------- */
  function initScrollBehavior() {
    // Header shadow on scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        DOM.header.classList.add('scrolled');
      } else {
        DOM.header.classList.remove('scrolled');
      }

      updateActiveNavLink();
    });

    // Back to top button
    if (DOM.backToTopBtn) {
      DOM.backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  function updateActiveNavLink() {
    const scrollPos = window.scrollY + 120;

    DOM.sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        DOM.navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }

  /* --------------------------------------------------------------------------
     11. INITIALIZATION
     -------------------------------------------------------------------------- */
  function init() {
    initTheme();
    initAccentThemes();
    initProjectFiltering();
    initMobileMenu();
    initCopyButtons();
    initContactForm();
    initScrollBehavior();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
