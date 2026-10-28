// ─── Translations ────────────────────────────────────────────────────────────

const translations = {
  es: {
    'meta.title': "Cristian Dávila - Java & Python Developer",
    'meta.desc': "Cristian Dávila, desarrollador Java y Python (Spring Boot, Django REST Framework) y Test Automation Engineer con más de 11 años de experiencia.",
    'nav.about': "Acerca de",
    'nav.skills': "Habilidades",
    'nav.experience': "Experiencia",
    'nav.education': "Educación",
    'nav.projects': "Proyectos",
    'nav.contact': "Contacto",
    'hero.desc': "Más de 11 años escribiendo software en Java y Python: servicios REST con Spring Boot y Django REST Framework, y frameworks de automatización UI y API tratados como código de producción. Hoy sumo IA Generativa y AI Agents en Python a mi forma de desarrollar.",
    'hero.cta1': "Ver Proyectos Java & Python",
    'hero.cta2': "Ver Experiencia",
    'hero.cv': "Descargar CV",
    'about.title': "Acerca de Mí",
    'about.lead': "Desarrollador con más de 11 años en el SDLC, enfocado en Java y Python. Construyo servicios backend y frameworks de automatización con el mismo rigor: código limpio, versionado, integrado en CI/CD y listo para escalar.",
    'about.p1.title': "Desarrollo Java:",
    'about.p1.desc': "Spring Boot y Spring para servicios REST y sistemas empresariales (financieros, contables, POS), y frameworks de automatización en Java con Selenium WebDriver, TestNG, Cucumber y SerenityBDD.",
    'about.p2.title': "Desarrollo Python:",
    'about.p2.desc': "REST APIs con Django REST Framework y PostgreSQL, suites de automatización UI/API en Python (Selenium, Robot Framework) y, actualmente, desarrollo de AI Agents.",
    'about.p3.title': "Calidad como código (SDET):",
    'about.p3.desc': "5+ años diseñando frameworks de pruebas UI y API, con pipelines en Azure DevOps, GitLab y Jenkins, y gestión ágil en Jira.",
    'about.p5.title': "Innovación con IA:",
    'about.p5.desc': "Early adopter de Cursor AI y GitHub Copilot para acelerar ciclos de desarrollo, y constructor de agentes conversacionales con Python.",
    'about.p4.title': "Idiomas:",
    'about.p4.desc': "Español (nativo - C2) y Inglés (avanzado - B2).",
    'skills.title': "Habilidades Técnicas",
    'skills.cat1': "Ecosistema Java",
    'skills.cat2': "Ecosistema Python",
    'skills.cat3': "Automatización (SDET)",
    'skills.cat4': "DevOps & Herramientas",
    'exp.title': "Experiencia Profesional",
    'exp.g1.date': "Jun. 2025 – Presente",
    'exp.g1.role': "Test Automation Engineer · Python",
    'exp.g1.client': "Cliente: Empower",
    'exp.g1.li1': "Desarrollo en Python de pruebas automatizadas de UI y API para los flujos de apertura de cuentas de una plataforma fintech.",
    'exp.g1.li2': "Automatización en Python de los escenarios del dashboard de Net Worth.",
    'exp.g1.li3': "Diseño de casos de prueba, reporte de errores y aseguramiento de calidad con Jira.",
    'exp.im.date': "Ago. 2023 – Jun. 2025",
    'exp.im.role': "QA Automation Engineer · Java",
    'exp.im.li1': "Desarrollo en Java del proyecto de automatización E2E Sales para una compañía de salud y seguros construida con tecnologías modernas.",
    'exp.im.li2': "Mantenimiento del código del framework con Git workflow para mantenerlo actualizado junto al producto.",
    'exp.im.li3': "Configuración de pipelines en Azure DevOps para ejecutar el proyecto de automatización.",
    'exp.im.li4': "Diseño de casos de prueba, gestión de bugs y revisión semanal de reportes de ejecución bajo metodologías ágiles.",
    'exp.g2.client': "Cliente: Disney",
    'exp.g2.li0': "Academia de automatización web y móvil con Java, Selenium WebDriver, Appium, TestNG y Cucumber.",
    'exp.g2.li1': "Desarrollo de pruebas automatizadas en Python para Salesforce (C&W Communications), Media Search, M360 y Media service – Transform Project.",
    'exp.g2.li2': "Automatización de pruebas de API con Robot Framework y Postman.",
    'exp.g2.li3': "Creación de pipelines de CI/CD en GitLab/Jenkins e integración con Report Portal.",
    'exp.in.date': "Ene. 2019 – Feb. 2020",
    'exp.in.li1': "Desarrollo de servicios REST API para Poste Italiane (software de venta y mantenimiento de POS).",
    'exp.in.li2': "Desarrollo para SAVA (portal de turismo español para gestión y venta de productos turísticos).",
    'exp.in.li3': "Construcción de queries SQL en Postgres.",
    'exp.sena.date': "Feb. 2016 – Dic. 2018",
    'exp.sena.li1': "Diseño, implementación y mantenimiento de Objetos Virtuales de Aprendizaje (VLO).",
    'exp.sena.li2': "Creación y mantenimiento del documento de estándares front-end.",
    'exp.sena.li3': "Gestión de contenido web en Blackboard LMS y construcción de servicios SCORM.",
    'exp.utp.date': "Feb. 2015 – Dic. 2015",
    'exp.utp.li1': "Mejoras y mantenimiento del sistema financiero web (ExtJS, Java, Spring, PL/SQL, Oracle).",
    'exp.utp.li2': "Diseño e implementación del subsistema de \"compras y suministros\" en Java.",
    'exp.utp.li3': "Diseño e implementación del subsistema de \"contratación\".",
    'exp.oc.date': "Abr. 2011 – Nov. 2013",
    'exp.oc.li1': "Desarrollo y mantenimiento de aplicaciones financieras, contables y de punto de venta.",
    'exp.oc.li2': "Construcción de reportes y queries de base de datos para clientes.",
    'edu.title': "Educación",
    'edu.date': "Ago. 2002 – Dic. 2008",
    'edu.degree': "Ingeniería de Sistemas",
    'proj.title': "Proyectos",
    'proj.filter.all': "Todos",
    'proj.filter.auto': "Automatización",
    'cat.auto': "Automatización",
    'cat.backend': "Backend",
    'cat.web': "Web",
    'cat.ai': "IA",
    'badge.current': "Actual",
    'proj0.title': "Alter Ego IA – Agente Conversacional",
    'proj0.role': "Proyecto personal (2025 – Presente)",
    'proj0.desc': "Agente conversacional en Python que responde sobre mi trayectoria profesional en nombre propio. Desplegado en Hugging Face Spaces y embebido en este portafolio (botón de chat).",
    'proj1.title': "Empower – Apertura de Cuentas",
    'proj1.role': "Test Automation Engineer · Globant (2025 – Presente)",
    'proj1.desc': "Suites de pruebas UI y API desarrolladas en Python para la apertura de cuentas y el dashboard de Net Worth de una plataforma fintech de gestión de patrimonio.",
    'proj2.title': "E2E Sales – Salud & Seguros",
    'proj2.role': "QA Automation Engineer · Imagemaker (2023 – 2025)",
    'proj2.desc': "Framework de automatización end-to-end desarrollado en Java para el proceso de ventas de una empresa de salud y seguros, versionado con Git workflow y ejecutado en pipelines de Azure DevOps.",
    'proj3.title': "Salesforce CRM – C&W Communications",
    'proj3.role': "Java/Python Developer & TAE · Globant / Disney (2020 – 2023)",
    'proj3.desc': "Automatización en Python de flujos CRM complejos sobre Salesforce para C&W Communications y el proyecto M360, con casos de regresión e integración.",
    'proj4.title': "Media Search & Transform – Plataforma Streaming",
    'proj4.role': "Java/Python Developer & TAE · Globant / Disney (2020 – 2023)",
    'proj4.desc': "Pruebas automatizadas de API y UI en Python y Robot Framework para plataformas de búsqueda y transformación de medios, con pipelines CI/CD en GitLab y Jenkins y reportes en Report Portal.",
    'proj5.title': "Poste Italiane – REST API para POS",
    'proj5.role': "Python Developer · Indra (2019 – 2020)",
    'proj5.desc': "Servicios REST API con Django REST Framework para el sistema de venta y mantenimiento de terminales POS de Poste Italiane: diseño de endpoints, integración con base de datos y queries optimizados en PostgreSQL.",
    'proj6.title': "SAVA – Portal Turístico",
    'proj6.role': "Python Developer · Indra (2019 – 2020)",
    'proj6.desc': "Backend de un portal de turismo español para la gestión y venta de productos turísticos: API RESTful en Django para integrar el front-end y servicios externos.",
    'proj7.title': "Sistema Financiero UTP",
    'proj7.role': "Software Engineer · U. Tecnológica de Pereira (2015)",
    'proj7.desc': "Mejoras y mantenimiento de un sistema financiero web institucional. Diseño e implementación en Java/Spring de los subsistemas de \"compras y suministros\" y \"contratación\" sobre Oracle.",
    'proj8.title': "Aplicaciones Financieras y POS – Oceanic",
    'proj8.role': "Software Engineer · Oceanic Casa de Software (2011 – 2013)",
    'proj8.desc': "Desarrollo y mantenimiento en Java de aplicaciones financieras, contables y de punto de venta, con reportes y queries SQL a la medida de cada cliente.",
    'proj9.title': "Objetos Virtuales de Aprendizaje – SENA",
    'proj9.role': "Web Developer · SENA (2013 – 2014 / 2016 – 2018)",
    'proj9.desc': "Diseño e implementación de Objetos Virtuales de Aprendizaje (VLO) interactivos integrados en Blackboard LMS. Construcción de servicios SCORM y definición del estándar front-end de la institución.",
    'contact.title': "Contacto",
    'contact.subtitle': "¿Interesado en colaborar? ¡Hablemos!",
    'contact.name': "Tu Nombre",
    'contact.email': "Tu Email",
    'contact.message': "Tu Mensaje",
    'contact.send': "Enviar Mensaje",
    'contact.cv': "Descargar CV",
    'footer.copy': "© 2026 Cristian Dávila. Todos los derechos reservados.",
    'chat.title': "Alter Ego IA",
    'chat.badge': "IA",
  },

  en: {
    'meta.title': "Cristian Dávila - Java & Python Developer",
    'meta.desc': "Cristian Dávila, Java and Python developer (Spring Boot, Django REST Framework) and Test Automation Engineer with 11+ years of experience.",
    'nav.about': "About",
    'nav.skills': "Skills",
    'nav.experience': "Experience",
    'nav.education': "Education",
    'nav.projects': "Projects",
    'nav.contact': "Contact",
    'hero.desc': "11+ years writing software in Java and Python: REST services with Spring Boot and Django REST Framework, and UI and API automation frameworks treated as production code. Today I bring Generative AI and Python AI Agents into the way I build.",
    'hero.cta1': "View Java & Python Projects",
    'hero.cta2': "View Experience",
    'hero.cv': "Download CV",
    'about.title': "About Me",
    'about.lead': "Developer with 11+ years across the SDLC, focused on Java and Python. I build backend services and automation frameworks with the same rigor: clean, versioned code, wired into CI/CD and ready to scale.",
    'about.p1.title': "Java Development:",
    'about.p1.desc': "Spring Boot and Spring for REST services and enterprise systems (financial, accounting, POS), plus Java automation frameworks with Selenium WebDriver, TestNG, Cucumber and SerenityBDD.",
    'about.p2.title': "Python Development:",
    'about.p2.desc': "REST APIs with Django REST Framework and PostgreSQL, Python UI/API automation suites (Selenium, Robot Framework) and, currently, AI Agent development.",
    'about.p3.title': "Quality as Code (SDET):",
    'about.p3.desc': "5+ years designing UI and API test frameworks, with pipelines in Azure DevOps, GitLab and Jenkins, and agile management in Jira.",
    'about.p5.title': "AI Innovation:",
    'about.p5.desc': "Early adopter of Cursor AI and GitHub Copilot to accelerate development cycles, and builder of conversational agents in Python.",
    'about.p4.title': "Languages:",
    'about.p4.desc': "Spanish (native - C2) and English (advanced - B2).",
    'skills.title': "Technical Skills",
    'skills.cat1': "Java Ecosystem",
    'skills.cat2': "Python Ecosystem",
    'skills.cat3': "Automation (SDET)",
    'skills.cat4': "DevOps & Tools",
    'exp.title': "Professional Experience",
    'exp.g1.date': "Jun. 2025 – Present",
    'exp.g1.role': "Test Automation Engineer · Python",
    'exp.g1.client': "Client: Empower",
    'exp.g1.li1': "Developed automated UI and API tests in Python for the account opening flows of a fintech platform.",
    'exp.g1.li2': "Automated the Net Worth dashboard scenarios in Python.",
    'exp.g1.li3': "Designed test cases, reported errors and ensured quality using Jira.",
    'exp.im.date': "Aug. 2023 – Jun. 2025",
    'exp.im.role': "QA Automation Engineer · Java",
    'exp.im.li1': "Developed in Java the E2E Sales automation project for a health and insurance company built on modern technologies.",
    'exp.im.li2': "Maintained the framework codebase with a Git workflow to keep it in sync with the product.",
    'exp.im.li3': "Configured Azure DevOps pipelines to run the automation project.",
    'exp.im.li4': "Designed test cases, managed bugs and reviewed execution reports weekly following agile methodologies.",
    'exp.g2.client': "Client: Disney",
    'exp.g2.li0': "Completed a Web and Mobile Automation Academy with Java, Selenium WebDriver, Appium, TestNG and Cucumber.",
    'exp.g2.li1': "Developed automated tests in Python for Salesforce (C&W Communications), Media Search, M360 and Media service – Transform Project.",
    'exp.g2.li2': "Automated API testing with Robot Framework and Postman.",
    'exp.g2.li3': "Created CI/CD pipelines in GitLab/Jenkins and integrated reports with Report Portal.",
    'exp.in.date': "Jan. 2019 – Feb. 2020",
    'exp.in.li1': "Developed REST API services for Poste Italiane (POS system sales and maintenance software).",
    'exp.in.li2': "Developed for SAVA (a Spanish tourism portal to manage and sell tourist products).",
    'exp.in.li3': "Built SQL queries in PostgreSQL.",
    'exp.sena.date': "Feb. 2016 – Dec. 2018",
    'exp.sena.li1': "Designed, implemented, and maintained Virtual Learning Objects (VLO).",
    'exp.sena.li2': "Created and maintained the front-end standards document.",
    'exp.sena.li3': "Managed Blackboard LMS web content and built SCORM services.",
    'exp.utp.date': "Feb. 2015 – Dec. 2015",
    'exp.utp.li1': "Enhancements and maintenance of the financial web system (ExtJS, Java, Spring, PL/SQL, Oracle).",
    'exp.utp.li2': "Detailed design and implementation of the \"purchasing and supply\" subsystem in Java.",
    'exp.utp.li3': "Detailed design and implementation of the \"hiring\" subsystem.",
    'exp.oc.date': "Apr. 2011 – Nov. 2013",
    'exp.oc.li1': "Developed and maintained financial, accounting, and point-of-sale applications.",
    'exp.oc.li2': "Built database reports and queries for clients.",
    'edu.title': "Education",
    'edu.date': "Aug. 2002 – Dec. 2008",
    'edu.degree': "Systems Engineering",
    'proj.title': "Projects",
    'proj.filter.all': "All",
    'proj.filter.auto': "Automation",
    'cat.auto': "Automation",
    'cat.backend': "Backend",
    'cat.web': "Web",
    'cat.ai': "AI",
    'badge.current': "Current",
    'proj0.title': "AI Alter Ego – Conversational Agent",
    'proj0.role': "Personal project (2025 – Present)",
    'proj0.desc': "Python conversational agent that answers questions about my professional background on my behalf. Deployed on Hugging Face Spaces and embedded in this portfolio (chat button).",
    'proj1.title': "Empower – Account Opening",
    'proj1.role': "Test Automation Engineer · Globant (2025 – Present)",
    'proj1.desc': "UI and API test suites developed in Python for account opening and the Net Worth dashboard of a fintech wealth management platform.",
    'proj2.title': "E2E Sales – Health & Insurance",
    'proj2.role': "QA Automation Engineer · Imagemaker (2023 – 2025)",
    'proj2.desc': "End-to-end automation framework developed in Java for the sales process of a health and insurance company, versioned with a Git workflow and run in Azure DevOps pipelines.",
    'proj3.title': "Salesforce CRM – C&W Communications",
    'proj3.role': "Java/Python Developer & TAE · Globant / Disney (2020 – 2023)",
    'proj3.desc': "Python automation of complex CRM flows on Salesforce for C&W Communications and the M360 project, with regression and integration test cases.",
    'proj4.title': "Media Search & Transform – Streaming Platform",
    'proj4.role': "Java/Python Developer & TAE · Globant / Disney (2020 – 2023)",
    'proj4.desc': "Automated API and UI tests in Python and Robot Framework for media search and transformation platforms, with CI/CD pipelines in GitLab and Jenkins and reporting in Report Portal.",
    'proj5.title': "Poste Italiane – REST API for POS",
    'proj5.role': "Python Developer · Indra (2019 – 2020)",
    'proj5.desc': "REST API services built with Django REST Framework for the Poste Italiane POS sales and maintenance system: endpoint design, database integration and optimized PostgreSQL queries.",
    'proj6.title': "SAVA – Tourism Portal",
    'proj6.role': "Python Developer · Indra (2019 – 2020)",
    'proj6.desc': "Backend for a Spanish tourism portal to manage and sell tourist products: RESTful API in Django integrating the front-end and external services.",
    'proj7.title': "UTP Financial System",
    'proj7.role': "Software Engineer · U. Tecnológica de Pereira (2015)",
    'proj7.desc': "Enhancements and maintenance of an institutional financial web system. Design and implementation in Java/Spring of the \"purchasing & supply\" and \"hiring\" subsystems on Oracle.",
    'proj8.title': "Financial & POS Applications – Oceanic",
    'proj8.role': "Software Engineer · Oceanic Casa de Software (2011 – 2013)",
    'proj8.desc': "Development and maintenance in Java of financial, accounting and point-of-sale applications, with custom SQL reports and queries for each client.",
    'proj9.title': "Virtual Learning Objects – SENA",
    'proj9.role': "Web Developer · SENA (2013 – 2014 / 2016 – 2018)",
    'proj9.desc': "Design and implementation of interactive Virtual Learning Objects (VLO) integrated into Blackboard LMS. Built SCORM services and defined the institution's front-end standard.",
    'contact.title': "Contact",
    'contact.subtitle': "Interested in collaborating? Let's talk!",
    'contact.name': "Your Name",
    'contact.email': "Your Email",
    'contact.message': "Your Message",
    'contact.send': "Send Message",
    'contact.cv': "Download CV",
    'footer.copy': "© 2026 Cristian Dávila. All rights reserved.",
    'chat.title': "AI Alter Ego",
    'chat.badge': "AI",
  }
};

// ─── Language switcher ────────────────────────────────────────────────────────

let currentLang = localStorage.getItem('lang') || 'es';

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);

  const t = translations[lang];

  // Text elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Placeholder elements
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // <title> and <meta description>
  if (t['meta.title']) document.title = t['meta.title'];
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && t['meta.desc']) metaDesc.setAttribute('content', t['meta.desc']);

  // Toggle button label (shows the OTHER language)
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = lang === 'es' ? 'EN' : 'ES';
}

// ─── EmailJS config ───────────────────────────────────────────────────────────

const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';   // reemplazar
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';   // reemplazar
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // reemplazar

emailjs.init(EMAILJS_PUBLIC_KEY);

// ─── DOM ready ────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {

  // Apply saved language on load
  setLanguage(currentLang);

  // Language toggle click
  document.getElementById('lang-toggle').addEventListener('click', () => {
    setLanguage(currentLang === 'es' ? 'en' : 'es');
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Mobile Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
      if (navLinks.style.display === 'flex') {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'rgba(15, 23, 42, 0.98)';
        navLinks.style.padding = '20px 0';
        navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
      }
    });
  }

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 50 ? '0 2px 10px rgba(0,0,0,0.3)' : 'none';
  });

  // Scroll animation (Intersection Observer)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.section-title, .skill-card, .project-card, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
  });

  // Contact form
  const contactForm = document.getElementById('contact-form');
  const contactBtn = document.getElementById('contact-btn');
  const feedback = document.getElementById('form-feedback');

  const feedbackMessages = {
    sending: { es: 'Enviando...', en: 'Sending...' },
    success: { es: '¡Mensaje enviado! Te responderé pronto.', en: 'Message sent! I\'ll get back to you soon.' },
    error: { es: 'Hubo un error al enviar. Intentá de nuevo.', en: 'Something went wrong. Please try again.' },
  };

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const originalText = contactBtn.textContent;
    contactBtn.disabled = true;
    contactBtn.textContent = feedbackMessages.sending[currentLang];
    feedback.className = 'form-feedback hidden';

    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, contactForm);
      feedback.textContent = feedbackMessages.success[currentLang];
      feedback.className = 'form-feedback success';
      contactForm.reset();
    } catch {
      feedback.textContent = feedbackMessages.error[currentLang];
      feedback.className = 'form-feedback error';
    } finally {
      contactBtn.disabled = false;
      contactBtn.textContent = originalText;
    }
  });

  // Portfolio filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      projectCards.forEach(card => {
        const match = filter === 'all' || card.dataset.category.split(' ').includes(filter);
        card.classList.toggle('hidden', !match);
        if (match) {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          requestAnimationFrame(() => {
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
        }
      });
    });
  });

  // Chat widget
  const chatToggle  = document.getElementById('chat-toggle');
  const chatWindow  = document.getElementById('chat-window');
  const chatClose   = document.getElementById('chat-close');
  const chatIframe  = document.getElementById('chat-iframe');
  const iconOpen    = document.getElementById('chat-icon-open');
  const iconClose   = document.getElementById('chat-icon-close');
  let   chatLoaded  = false;

  function openChat() {
    chatWindow.classList.remove('hidden');
    iconOpen.style.display  = 'none';
    iconClose.style.display = 'block';
    if (!chatLoaded) {
      chatIframe.src = chatIframe.dataset.src;
      chatLoaded = true;
    }
  }

  function closeChat() {
    chatWindow.classList.add('hidden');
    iconOpen.style.display  = 'block';
    iconClose.style.display = 'none';
  }

  chatToggle.addEventListener('click', () => {
    chatWindow.classList.contains('hidden') ? openChat() : closeChat();
  });
  chatClose.addEventListener('click', closeChat);
});
