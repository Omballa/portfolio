export const siteConfig = {
  name: "William Brandon",
  title: "Junior Software Engineer",
  description: "Portfolio website of William Brandon",
  accentColor: "#1d4ed8",
  social: {
    email: "brandonomballa@gmail.com",
    linkedin: "https://www.linkedin.com/in/brandon-omballa/",
    github: "https://github.com/Omballa",
  },
  aboutMe:
    "I'm Brandon, an early-career software engineer with a degree in Software Development, completed in 2022. I build web applications and backend services using JavaScript, Node.js, and Python. I enjoy learning from experienced teammates, contributing to practical product work, and improving my skills through hands-on projects.",
  skills: ["JavaScript", "Next.js", "Node.js", "Python", "PostgreSQL", "MongoDB", "Docker", "AWS"],
  projects: [
    {
      name: "ExaMek E-commerce Platform",
      description:
        "An e-commerce platform built with Next.js, Node.js, and PostgreSQL, with user authentication, product management, and payment integration.",
      link: "https://examek.com",
      skills: ["Next.js", "Node.js", "AWS", "PostgreSQL", "Redis", "DevOps"],
    },
    {
      name: "Low Resource Translation Model",
      description:
        "A language translation model exploring ways to translate text for low-resource languages with limited computational requirements.",
      link: "https://huggingface.co/Omballa/nllb-200-swa-dholuo",
      skills: ["Python", "NLP", "Machine Learning", "AI"],
    },
  ],
  experience: [
    {
      company: "Kalimani AI",
      title: "Software Engineer",
      dateRange: "2022 - Present",
      bullets: [
        "Contribute to web application features using React, Next.js, Node.js, and Python (Django).",
        "Build and maintain API endpoints and work with PostgreSQL and Redis for application data and caching.",
        "Collaborate with teammates to review changes, troubleshoot bugs, and deliver updates in an Agile workflow.",
        "Use Docker and AWS as part of the development and deployment workflow.",
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
      dateRange: "Graduated 2022",
      achievements: [
        "Studied software engineering, algorithms, data structures, and databases.",
        "Completed a final-year software development project using React, Node.js, and Socket.io.",
      ],
    },
    {
      school: "Emmobilis Mobile & Web Development Academy",
      degree: "Full Stack Web & Mobile Development (Android + Web)",
      dateRange: "2016 – 2017",
      achievements: [
        "3-month intensive bootcamp (1,000+ coding hours)",
        "Mastered Java (Android), JavaScript, HTML/CSS, PHP, MySQL, and early Node.js",
        "Built and published 3 Android apps and 5 full-stack web projects as part of the curriculum",
      ],
    },
  ],
};
