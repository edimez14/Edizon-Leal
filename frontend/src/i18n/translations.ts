export type Lang = "es" | "en";

export type Translation = {
  hero: {
    title1: string;
    title2: string;
    title3: string;
    subtitle: string;
    projectsBtn: string;
    downloadBtn: string;
    cvPdf: string;
  };
  technical: {
    title: string;
    cards: { title: string; desc: string }[];
  };
  stack: {
    core: { title: string; desc: string }[];
    game: { title: string; desc: string }[];
  };
  projects: {
    title: string;
    subtitle: string;
    links: { code: string; demo: string };
    list: {
      badge: string;
      title: string;
      desc: string;
      tags: string[];
      statLabel: string;
      statValue: string;
    }[];
  };
  experience: {
    title: string;
    subtitle: string;
    badge: string;
    cornerTag: string;
    roleTitle: string;
    company: string;
    intro: string;
    achievements: string[];
    tags: string[];
    statLabel: string;
    statValue: string;
    linkLabel: string;
  };
  certificates: {
    title: string;
    list: { title: string; desc: string }[];
    button: string;
    modalPrefix: string;
  };
  footer: { tagline: string };
  whatsapp: { message: string };
};

export const translations: Record<Lang, Translation> = {
  es: {
    hero: {
      title1: "Desarrollador",
      title2: "Backend Junior",
      title3: "en Python y Django",
      subtitle:
        "Junior Backend Engineer enfocado en experimentación de alto rendimiento y arquitectura distribuida.",
      projectsBtn: "PROYECTOS",
      downloadBtn: "DESCARGAR_CV",
      cvPdf: "/assets/data/curriculum edizon meza (es).pdf",
    },
    technical: {
      title: "ENFOQUE_TÉCNICO",
      cards: [
        {
          title: "Resiliencia",
          desc: "Manejo estructurado de errores y excepciones. Implementación de lógicas de recuperación básicas en proyectos para mantener la estabilidad ante fallos de integración.",
        },
        {
          title: "Arquitectura Escalable",
          desc: "Desarrollo orientado a la modularidad y contenedorización. Simulación de entornos reales mediante Docker para estructurar aplicaciones listas para crecer.",
        },
        {
          title: "Optimización",
          desc: "Análisis y reducción de latencia en la ruta petición-respuesta. Refactorización de código y estructuración eficiente de consultas a bases de datos.",
        },
      ],
    },
    stack: {
      core: [
        {
          title: "Python (Django/DRF) & Rust (Axum)",
          desc: "Construcción de APIs REST y servicios backend.",
        },
        {
          title: "PostgreSQL & MongoDB",
          desc: "Modelado de datos relacionales y bases NoSQL.",
        },
        { title: "Docker", desc: "Contenedorización para entornos consistentes." },
        {
          title: "Git & Fly.io",
          desc: "Control de versiones y despliegue de proyectos.",
        },
      ],
      game: [
        {
          title: "Godot Engine & GDScript",
          desc: "Desarrollo de prototipos y lógicas interactivas.",
        },
        {
          title: "Integración de Backend",
          desc: "Conexión de clientes de juego con APIs externas.",
        },
        {
          title: "Sistemas de Físicas",
          desc: "Manejo de colisiones y cinemática en el motor.",
        },
        {
          title: "Gestión de Escenas",
          desc: "Arquitectura basada en nodos y optimización.",
        },
      ],
    },
    projects: {
      title: "PROYECTOS DESTACADOS",
      subtitle:
        "Prototipos y aplicaciones construidos para resolver problemas concretos y explorar tecnologías.",
      links: { code: "CÓDIGO", demo: "DEMO" },
      list: [
        {
          badge: "HERRAMIENTA_WEB",
          title: "Generador de Contraseñas",
          desc: "Aplicación web fullstack (Python/Django) para la gestión segura de contraseñas. Resuelve la necesidad de generar y administrar contraseñas de forma centralizada y controlada. Incluye API backend, autenticación JWT, y gestión completa de datos (CRUD) para usuarios, con frontend funcional y despliegue en producción.",
          tags: ["React", "Django", "Tailwind CSS", "Next.js"],
          statLabel: "SEGURIDAD GARANTIZADA",
          statValue: "256-bit",
        },
        {
          badge: "PLATAFORMA_ERP",
          title: "Sistema ERP",
          desc: "Sistema de planificación empresarial donde administradores gestionan empresas, usuarios y beneficios, con métricas para evaluar qué beneficios impactan más. Mi rol: desarrollo backend (NestJS), frontend y paneles completos. Implementación en Fly.io. Estado: demo funcional.",
          tags: ["NestJS", "React", "Panel Admin", "Fly.io"],
          statLabel: "GESTIÓN CENTRAL",
          statValue: "MULTI-ROL",
        },
        {
          badge: "APRENDIZAJE_PYTHON",
          title: "Plataforma de Aprendizaje Python",
          desc: "Aplicación web educativa para aprender Python con ejercicios y práctica. Los usuarios pueden elegir modo de aprendizaje o modo práctica. Mi rol: desarrollo backend (NestJS) e implementación. Implementación: Render (backend) y Vercel (frontend). Estado: demo funcional.",
          tags: ["NestJS", "API", "Render", "Vercel"],
          statLabel: "MODO DUAL",
          statValue: "LEARN/PRAC",
        },
      ],
    },
    experience: {
      title: "EXPERIENCIA LABORAL",
      subtitle:
        "Prácticas profesionales en una empresa global de experiencia al cliente, aplicando desarrollo fullstack sobre aplicaciones y software en producción.",
      badge: "PRACTICANTE_DEV",
      cornerTag: "PRÁCTICAS_6M",
      roleTitle: "Desarrollador de Aplicaciones Web",
      company:
        "INTOUCHCX // PRÁCTICAS PROFESIONALES · ÁREA ADMINISTRATIVA",
      intro:
        "Seis meses de prácticas en una empresa global de experiencia al cliente, trabajando de punta a punta: desde la corrección de errores en producción hasta el diseño y estructuración de nuevos proyectos.",
      achievements: [
        "Reformé y optimicé código existente, resolviendo errores a nivel de backend y frontend en múltiples aplicaciones y software de la empresa.",
        "Desarrollé aplicaciones web completas (backend + frontend) para optimizar procesos internos.",
        "Me especialicé en desarrollo backend con JavaScript y BigQuery como motor de bases de datos.",
        "Construí programas para migrar datos desde Google Sheets hacia BigQuery de forma automatizada.",
        "Mejoré el rendimiento de aplicaciones y software de automatización de la empresa.",
        "Planifiqué y estructuré la arquitectura de todos los proyectos que desarrollé.",
        "Conocimientos en todo el ecosistema de Google Cloud.",
      ],
      tags: [
        "JavaScript",
        "BigQuery",
        "Google Sheets",
        "Google Cloud",
        "Backend",
        "Frontend",
        "Automatización",
      ],
      statLabel: "DURACIÓN",
      statValue: "6 MESES",
      linkLabel: "INTOUCHCX.COM",
    },
    certificates: {
      title: "CERTIFICATIONS",
      list: [
        {
          title: "Fundamentos de Python 2",
          desc: "Conceptos avanzados de Python, estructuras de datos, programación orientada a objetos y resolución de problemas algorítmicos.",
        },
        {
          title: "JavaScript Essentials 2",
          desc: "Desarrollo avanzado, programación asíncrona, clases, objetos complejos y mejores prácticas en la web.",
        },
        {
          title: "Fundamentos de Linux",
          desc: "Administración de sistemas, navegación por línea de comandos, gestión de permisos y control de procesos.",
        },
      ],
      button: "VER_CREDENCIAL()",
      modalPrefix: "VALIDANDO_FIRMA:",
    },
    footer: {
      tagline: "Simulación de sistemas que escalan hacia el futuro.",
    },
    whatsapp: {
      message:
        "Hola Edizon, vi tu portafolio y me gustaría hablar contigo sobre una oportunidad.",
    },
  },
  en: {
    hero: {
      title1: "Junior",
      title2: "Backend Engineer",
      title3: "in Python & Django",
      subtitle:
        "Junior Backend Engineer focused on high-performance experimentation and distributed architecture.",
      projectsBtn: "PROJECTS",
      downloadBtn: "DOWNLOAD_CV",
      cvPdf: "/assets/data/curriculum edizon meza (en).pdf",
    },
    technical: {
      title: "TECHNICAL_APPROACH",
      cards: [
        {
          title: "Resilience",
          desc: "Structured error and exception handling. Implementation of basic recovery logic in projects to keep systems stable against integration failures.",
        },
        {
          title: "Scalable Architecture",
          desc: "Development oriented to modularity and containerization. Simulation of real environments with Docker to build applications ready to scale.",
        },
        {
          title: "Optimization",
          desc: "Latency analysis and reduction on the request-response path. Code refactoring and efficient structuring of database queries.",
        },
      ],
    },
    stack: {
      core: [
        {
          title: "Python (Django/DRF) & Rust (Axum)",
          desc: "Building REST APIs and backend services.",
        },
        {
          title: "PostgreSQL & MongoDB",
          desc: "Relational data modeling and NoSQL databases.",
        },
        { title: "Docker", desc: "Containerization for consistent environments." },
        {
          title: "Git & Fly.io",
          desc: "Version control and project deployment.",
        },
      ],
      game: [
        {
          title: "Godot Engine & GDScript",
          desc: "Development of prototypes and interactive logic.",
        },
        {
          title: "Backend Integration",
          desc: "Connecting game clients to external APIs.",
        },
        {
          title: "Physics Systems",
          desc: "Collision handling and kinematics in the engine.",
        },
        {
          title: "Scene Management",
          desc: "Node-based architecture and optimization.",
        },
      ],
    },
    projects: {
      title: "FEATURED PROJECTS",
      subtitle:
        "Prototypes and applications built to solve concrete problems and explore technologies.",
      links: { code: "CODE", demo: "DEMO" },
      list: [
        {
          badge: "WEB_TOOL",
          title: "Password Generator",
          desc: "Full-stack web application (Python/Django) for secure password management. Solves the need to generate and manage passwords in a centralized and controlled way. Includes a backend API, JWT authentication, and full data management (CRUD) for users, with a functional frontend and production deployment.",
          tags: ["React", "Django", "Tailwind CSS", "Next.js"],
          statLabel: "GUARANTEED SECURITY",
          statValue: "256-bit",
        },
        {
          badge: "ERP_PLATFORM",
          title: "ERP System",
          desc: "Business planning system where administrators manage companies, users, and benefits, with metrics to evaluate which benefits have the most impact. My role: backend development (NestJS), frontend, and complete panels. Deployment on Fly.io. Status: functional demo.",
          tags: ["NestJS", "React", "Admin Panels", "Fly.io"],
          statLabel: "CENTRAL MANAGEMENT",
          statValue: "MULTI-ROLE",
        },
        {
          badge: "PYTHON_LEARNING",
          title: "Python Learning Platform",
          desc: "Educational web application for learning Python with exercises and practice. Users can choose learning mode or practice mode. My role: backend development (NestJS) and implementation. Deployment: Render (backend) and Vercel (frontend). Status: functional demo.",
          tags: ["NestJS", "API", "Render", "Vercel"],
          statLabel: "DUAL MODE",
          statValue: "LEARN/PRAC",
        },
      ],
    },
    experience: {
      title: "WORK EXPERIENCE",
      subtitle:
        "Professional internship at a global customer experience company, applying full-stack development to applications and production software.",
      badge: "INTERN_DEV",
      cornerTag: "INTERNSHIP_6M",
      roleTitle: "Web Applications Developer",
      company: "INTOUCHCX // PROFESSIONAL INTERNSHIP · ADMINISTRATIVE AREA",
      intro:
        "Six months of internship at a global customer experience company, working end to end: from fixing errors in production to designing and structuring new projects.",
      achievements: [
        "Refactored and optimized existing code, fixing backend and frontend errors across multiple applications and company software.",
        "Developed complete web applications (backend + frontend) to streamline internal processes.",
        "Specialized in backend development with JavaScript and BigQuery as the database engine.",
        "Built programs to automate data migrations from Google Sheets to BigQuery.",
        "Improved the performance of applications and automation software.",
        "Planned and structured the architecture of all the projects I developed.",
        "Knowledge of the entire Google Cloud ecosystem.",
      ],
      tags: [
        "JavaScript",
        "BigQuery",
        "Google Sheets",
        "Google Cloud",
        "Backend",
        "Frontend",
        "Automation",
      ],
      statLabel: "DURATION",
      statValue: "6 MONTHS",
      linkLabel: "INTOUCHCX.COM",
    },
    certificates: {
      title: "CERTIFICATIONS",
      list: [
        {
          title: "Python Essentials 2",
          desc: "Advanced Python concepts: data structures, object-oriented programming, and algorithmic problem solving.",
        },
        {
          title: "JavaScript Essentials 2",
          desc: "Advanced development, asynchronous programming, classes, complex objects, and web best practices.",
        },
        {
          title: "Linux Essentials",
          desc: "System administration, command-line navigation, permission management, and process control.",
        },
      ],
      button: "VIEW_CREDENTIAL()",
      modalPrefix: "VERIFYING_SIGNATURE:",
    },
    footer: {
      tagline: "Simulating systems that scale into the future.",
    },
    whatsapp: {
      message:
        "Hi Edizon, I saw your portfolio and I'd like to talk to you about an opportunity.",
    },
  },
};
