export const siteConfig = {
  name: "William Brandon",
  title: "Senior Software Engineer",
  description: "Portfolio website of William Brandon",
  accentColor: "#1d4ed8",
  social: {
    email: "brandonomballa@gmail.com",
    linkedin: "https://www.linkedin.com/in/brandon-omballa/",
    github: "https://github.com/Omballa",
  },
  aboutMe:
    "I'm Brandon — a Senior Software Engineer and Backend Architect who builds scalable, high-performance systems for real-world products. I specialize in backend development, APIs, cloud architecture, and DevOps, with experience across fintech, e-commerce, gaming, and AI. I focus on writing clean, maintainable code, designing reliable distributed systems, and delivering solutions that are fast, secure, and built to scale.",
  skills: ["JavaScript", "Next.js", "Node.js", "Python", "AWS", "Docker", "PostgreSQL", "MongoDB", "CI/CD", "DevOps"],
  projects: [
    {
      name: "ExaMek E-commerce Platform",
      description:
        "A full-featured e-commerce platform built with Next.js, Node.js, PostgreSQL and Redis featuring user authentication, product management, and payment integration.",
      link: "https://examek.com",
      skills: ["Next.js", "Node.js", "AWS", "PostgreSQL", "Redis", "DevOps"],
    },
    {
      name: "Bet Joto Gambling Platform",
      description:
        "A cutting-edge gambling platform built with Python, JavaScript, and AWS, featuring real-time betting, user authentication, and secure payment processing.",
      link: "https://betjoto.com",
      skills: ["JavaScript", "AWS", "PostgreSQL", "Redis"],
    },
  ],
  experience: [
    {
      company: "Kalimani AI",
      title: "Senior Software Engineer",
      dateRange: "Jan 2022 - Present",
      bullets: [
        "Architected and led the migration to a distributed microservices platform (Node.js + TypeScript + Kotlin) currently serving 1.2M+ MAU with 99.99% uptime",
        "Designed and implemented event-driven backend systems using Kafka and Redis, reducing end-to-end latency by 45% and cutting infrastructure costs 30%",
        "Owned the full-stack development of core product features (React 18 + Next.js + NestJS), shipping production code weekly in an Agile environment",
        "Reduced average API response time from 850ms to <300ms through query optimization, connection pooling, and strategic caching, and database indexing",
        "Established engineering standards: TypeScript best practices, code review processes, and testing pyramid (95%+ unit test coverage)",
        "Mentored 6 engineers (junior to mid-level), conducted 1:1s, and ran internal tech talks on system design and performance",
      ],
    },
    {
      company: "Ibibe Africa",
      title: "Full Stack Developer",
      dateRange: "Jun 2020 - Dec 2021",
      bullets: [
        "Single-handedly built and shipped the company’s flagship MVP from zero to production in 4 months using React + Next.js frontend and Node.js + NestJS + PostgreSQL backend",
        "Designed RESTful and GraphQL APIs handling payment processing, real-time notifications, and multi-tenant authentication (JWT + Redis sessions)",
        "Implemented end-to-end CI/CD pipeline with GitHub Actions, Docker, and AWS ECS, reducing deployment time from hours to under 8 minutes",
        "Integrated third-party services (Stripe, SendGrid, AWS S3, Google Maps) and built resilient retry/error-handling mechanisms",
        "Led technical decision-making and collaborated directly with CEO and product team to prioritize roadmap and define scalable architecture",
      ],
    },
    {
      company: "Brisk Solutions",
      title: "Frontend Developer → Full Stack Engineer (promoted)",
      dateRange: "Aug 2018 - May 2020",
      bullets: [
        "Delivered 25+ client projects (React, Vue.js, Angular) for industries including fintech, e-commerce, and healthtech, consistently achieving 95+ Lighthouse scores",
        "Modernized multiple legacy codebases by introducing TypeScript, Redux Toolkit, and component-driven architecture",
        "Took ownership of backend tasks (Node.js + Express + MongoDB/PostgreSQL) as the team grew, eventually handling full-stack features independently",
        "Improved average page load time 40% through code splitting, lazy loading, image optimization, and critical CSS inlining",
        "Introduced testing culture with Jest + React Testing Library, raising frontend test coverage from <10% to 85%",
      ],
    },
  ],
  education: [
    {
      school: "Moringa School",
      degree: "Data Science & Machine Learning Bootcamp",
      dateRange: "2023 – 2024",
      achievements: [
        "Intensive 6-month program focused on Python, Pandas, Scikit-learn, TensorFlow, and production ML pipelines",
        "Built end-to-end ML projects including recommendation systems and predictive analytics dashboards",
        "Gained practical experience with MLOps tools (MLflow, Docker, FastAPI) and cloud deployment (AWS SageMaker, GCP)",
      ],
    },
    {
      school: "KCA University",
      degree: "Bachelor of Science in Software Development",
      dateRange: "2017 – 2021",
      achievements: [
        "Focused coursework in Algorithms, Data Structures, Software Engineering, Distributed Systems, and Databases",
        "Final-year project: Real-time logistics tracking platform using React, Node.js, and Socket.io (awarded Best Project in cohort)",
        "Consistently ranked in top 10% of class",
      ],
    },
    {
      school: "Emmobilis Mobile & Web Development Academy",
      degree: "Full Stack Web & Mobile Development (Android + Web)",
      dateRange: "2016 – 2017",
      achievements: [
        "12-month intensive bootcamp (1,000+ coding hours)",
        "Mastered Java (Android), JavaScript, HTML/CSS, PHP, MySQL, and early Node.js",
        "Built and published 3 Android apps and 5 full-stack web projects as part of the curriculum",
        "Graduated as valedictorian of cohort",
      ],
    },
  ],
};
