import passwordAnalyzer from "../assets/images/projects/password-analyzer.webp";
import fazilverse from "../assets/images/projects/fazilverse.webp";
import turfbooker from "../assets/images/projects/turfbooker.webp";
import Evesta from "../assets/images/projects/Evesta.webp";
import Expenso from "../assets/images/projects/Expenso.webp";
import TextoQuest from "../assets/images/projects/TextoQuest.webp";
import ABDU from "../assets/images/projects/ABDU.webp";
import Cybrews from "../assets/images/projects/Cybrews.webp";
import RestoCafeMenu from "../assets/images/projects/RestoCafeMenu.webp";
import BarberQueue from "../assets/images/projects/BarberQueue.png";

// Featured projects — shown as large, priority-ordered cards.
export const featuredProjects = [
  {
    id: "barberqueue",
    priority: "01",
    title: "BarberQueue",
    category: "Full-Stack SaaS",
    description:
      "A real-time queue management platform for barbershops that helps customers join queues, barbers manage appointments and services, and admins monitor operations through dedicated dashboards.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Socket.IO",
      "React Query",
    ],
    features: [
      "Customer workflow",
      "Barber workflow",
      "Admin dashboard",
      "Role-based access control",
      "Real-time queue updates",
      "Queue management",
      "Analytics",
      "Authentication",
      "REST APIs",
      "Responsive interface",
    ],
    image: BarberQueue,
    github: "https://github.com/Anufazil/BarberQueue",
    live: "https://barberqueue-fawn.vercel.app/",
    caseStudy: {
      problem:
        "Traditional barbershop queues can be difficult to manage during busy periods. Customers may not know their position in the queue, while staff need an efficient way to manage customers, services, and daily operations.",
      solution:
        "BarberQueue provides a centralized digital queue system where customers can join and track queues while barbers manage active customers and administrators oversee operations through dedicated role-based dashboards.",
      architecture: true,
      challenges:
        "Designing separate workflows for customers, barbers, and administrators while keeping queue state synchronized in real time required careful API design, authentication, role management, and real-time event handling.",
      learned:
        "Strengthened understanding of full-stack SaaS architecture, role-based access control, real-time communication with Socket.IO, API integration, and building applications around multiple user roles.",
    },
  },
  {
    id: "password-security-analyzer",
    priority: "02",
    title: "Password Security Analyzer",
    category: "Cybersecurity / Full-Stack",
    description:
      "A cybersecurity-focused web application that analyzes password strength, estimates resistance to brute-force attacks, detects common passwords, and provides actionable security feedback.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "FastAPI",
      "Python",
    ],
    features: [
      "Password strength analysis",
      "Entropy calculation",
      "Crack-time estimation",
      "Common password detection",
      "Secure password generation",
      "Breached-password checking",
      "Interactive security feedback",
      "Security metrics",
      "Responsive dashboard",
    ],
    image: passwordAnalyzer,
    github: "https://github.com/Anufazil/PasswordSecurityAnalyser",
    live: "https://password-security-analyser.vercel.app/",
    caseStudy: {
      problem:
        "Users often create passwords without understanding how predictable they are or how quickly weak passwords could potentially be attacked.",
      solution:
        "The application analyzes passwords using multiple security indicators such as strength, entropy, common-password detection, estimated crack time, and breach information, presenting the results through an interactive security-focused interface.",
      architecture: true,
      challenges:
        "Combining frontend password analysis with a Python backend while keeping security information understandable required careful handling of calculations, API communication, validation, and user feedback.",
      learned:
        "Developed practical understanding of password security concepts, entropy, password-cracking estimates, breached-password checking, FastAPI, Python APIs, and security-focused frontend design.",
    },
  },
  {
    id: "cybrews",
    priority: "03",
    title: "CYBREWS",
    category: "Cybersecurity Platform",
    description:
      "An automated cybersecurity news platform that collects security news from multiple sources and presents it through a centralized, source-attributed feed.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Node.js",
      "RSS",
    ],
    features: [
      "Cybersecurity news feed",
      "RSS ingestion",
      "Automated updates",
      "Database-backed content",
      "Source attribution",
      "Article categorization",
      "Automated content pipeline",
      "Responsive interface",
    ],
    image: Cybrews,
    github: "https://github.com/Anufazil/Cybrews",
    live: "https://cybrews.vercel.app/",
    caseStudy: {
      problem:
        "Cybersecurity news is distributed across security blogs, advisories, research sites, and other sources, making it difficult to monitor relevant developments from one place.",
      solution:
        "CYBREWS centralizes cybersecurity news through an automated RSS-based ingestion pipeline, stores processed content in a database, and presents articles while maintaining attribution to their original sources.",
      architecture: true,
      challenges:
        "Building an automated ingestion pipeline required handling RSS feeds, inconsistent source formats, duplicate content, database storage, and scheduled updates while keeping the frontend fast and reliable.",
      learned:
        "Learned more about Next.js, PostgreSQL and Supabase, RSS processing, automated data ingestion, scheduled workflows, source attribution, and designing content-driven platforms.",
    },
  },
  {
    id: "expenso",
    priority: "04",
    title: "Expenso",
    category: "Full-Stack Web Application",
    description:
      "A full-stack personal finance application for managing income, expenses, transactions, and financial insights through an interactive dashboard.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "bcrypt",
      "Chart.js",
      "Tailwind CSS",
    ],
    features: [
      "User authentication",
      "Income tracking",
      "Expense tracking",
      "Transaction management",
      "Dashboard analytics",
      "Interactive charts",
      "REST API",
      "Secure password hashing",
      "Responsive UI",
    ],
    image: Expenso,
    github: "https://github.com/Anufazil/Expenso",
    live: "https://expenso-taupe.vercel.app/",
    caseStudy: {
      problem:
        "Tracking personal income and expenses manually can make it difficult to understand spending patterns and maintain an accurate overview of finances.",
      solution:
        "Expenso provides a centralized dashboard for recording income and expenses, managing transactions, and visualizing financial information through charts and analytics.",
      architecture: true,
      challenges:
        "Connecting the React frontend with an Express API and MongoDB database while implementing authentication, protected data, transaction management, and financial calculations required coordination across the full stack.",
      learned:
        "Improved practical knowledge of MERN stack development, JWT authentication, bcrypt password hashing, REST APIs, MongoDB data modeling, deployment, and data visualization with Chart.js.",
    },
  },
];

// Other projects — compact grid, less visual weight than Featured.
export const otherProjects = [
  {
    id: "textoquest",
    title: "TextoQuest",
    category: "EdTech / AI",
    description:
      "An AI-powered learning application that transforms study material into interactive quizzes to make revision and self-assessment more engaging.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Python",
      "Gemini API",
    ],
    features: [
      "AI-powered quiz generation",
      "Text-to-quiz conversion",
      "Study material processing",
      "Interactive quizzes",
      "User authentication",
      "Quiz history",
      "Learning-focused interface",
      "Document-based learning",
    ],
    image: TextoQuest,
    github: "https://github.com/Anufazil/TextoQuest",
    live: "https://textoquest.vercel.app/",
    caseStudy: {
      problem:
        "Traditional study materials can make revision repetitive, and manually creating practice questions from large amounts of content can be time-consuming.",
      solution:
        "TextoQuest uses AI to transform learning material into interactive quizzes, allowing users to turn study content into structured practice sessions and test their understanding.",
      architecture: true,
      challenges:
        "Handling AI-generated content reliably while connecting the frontend, backend, database, and AI services required careful API integration, validation, and management of generated quiz data.",
      learned:
        "Gained practical experience integrating AI into a full-stack application, working with APIs, handling generated content, designing learning workflows, and connecting multiple technologies into a single product.",
    }
  },
  {
    id: "restomenu",
    title: "RestoMenu",
    category: "Business / Hospitality",
    description:
      "A digital QR-based restaurant menu that allows customers to browse categorized food and beverage offerings directly from their mobile devices.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
    ],
    features: [
      "QR-based menu access",
      "Digital menu browsing",
      "Category-based navigation",
      "Arabic and English menu",
      "Responsive design",
      "Mobile-first interface",
      "Animated UI",
      "No-app-required access",
    ],
    image: RestoCafeMenu,
    github: "https://github.com/Anufazil/RestoMenu",
    live: "https://restomenu-five.vercel.app/",
    caseStudy: {
      problem:
        "Traditional printed restaurant menus can be inconvenient to update, costly to replace, and less flexible for customers using mobile devices.",
      solution:
        "RestoMenu provides a mobile-friendly digital menu that customers can access through a QR code, with categorized food and beverage items presented in Arabic and English.",
      architecture: true,
      challenges:
        "Designing a menu that remains easy to navigate on different mobile screen sizes while supporting multiple languages and maintaining a visually appealing restaurant-focused interface required careful responsive design.",
      learned:
        "Improved skills in responsive frontend development, multilingual interface design, UI animation, component organization, and building practical web solutions for real-world businesses.",
    }
  },
  {
    id: "turfbooker",
    title: "TurfBooker",
    category: "Business / Booking Platform",
    description:
      "A sports turf booking platform designed to simplify venue discovery, reservations, and management through role-based dashboards and a centralized booking system.",
    technologies: [
      "Flask",
      "Python",
      "JavaScript",
      "PostgreSQL",
      "SQLAlchemy",
      "Bootstrap",
    ],
    features: [
      "Turf discovery",
      "Online booking",
      "User authentication",
      "Role-based dashboards",
      "Booking management",
      "Turf management",
      "PostgreSQL database",
      "Responsive interface",
    ],
    image: turfbooker,
    github: "https://github.com/Anufazil/TurfBooker",
    live: "https://turfbooker.onrender.com/",
    caseStudy: {
      problem:
        "Booking sports turfs manually can lead to scheduling conflicts, limited visibility into available slots, and unnecessary communication between customers and turf operators.",
      solution:
        "TurfBooker provides a centralized platform where users can discover turfs, view availability, and make bookings while turf administrators can manage venues and reservations through dedicated workflows.",
      architecture: true,
      challenges:
        "Implementing authentication, role-based workflows, booking logic, database relationships, and availability management required careful coordination between the Flask backend, PostgreSQL database, and frontend.",
      learned:
        "Strengthened understanding of Python Flask, SQLAlchemy, PostgreSQL, authentication, relational data modeling, CRUD operations, booking workflows, and full-stack application development.",
    }
  },
  {
    id: "fazilverse",
    title: "FazilVerse",
    category: "Personal Portfolio",
    description:
      "A personal developer portfolio designed to showcase projects, technical skills, achievements, and professional experience through an interactive animated interface.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "EmailJS",
    ],
    features: [
      "Animated portfolio interface",
      "Project showcase",
      "Skills section",
      "Achievements section",
      "Contact form",
      "Responsive design",
      "Interactive animations",
      "Modern UI",
    ],
    image: fazilverse,
    github: "https://github.com/Anufazil/Fazilverse",
    live: "https://fazilverse.vercel.app/",
    caseStudy: {
      problem:
        "A traditional portfolio can make it difficult to communicate technical skills, projects, and personality in a way that is both professional and visually engaging.",
      solution:
        "FazilVerse was created as an interactive personal portfolio that combines project showcases, technical skills, achievements, animations, and a contact system into a single responsive experience.",
      architecture: true,
      challenges:
        "Creating a visually distinctive interface while maintaining responsive layouts, reusable components, smooth animations, and reliable contact functionality required balancing design and frontend engineering.",
      learned:
        "Strengthened React component development, responsive UI design, Tailwind CSS, Framer Motion animations, frontend architecture, deployment, and personal branding through a real-world portfolio project.",
    }
  },
  {
    id: "evesta",
    title: "EVESTA",
    category: "Academic / Event Management",
    description:
      "A full-stack event discovery and management platform designed to connect users with local events while providing organizers and administrators with tools to manage event operations.",
    technologies: [
      "Django",
      "Python",
      "Flutter",
      "MySQL",
      "REST APIs",
    ],
    features: [
      "Event discovery",
      "Event management",
      "User dashboard",
      "Admin dashboard",
      "Organizer functionality",
      "AI-based recommendations",
      "REST APIs",
      "MySQL database",
      "Role-based workflows",
    ],
    image: Evesta,
    github: "https://github.com/Anufazil/Evesta",
    live: null,
    caseStudy: {
      problem:
        "Finding and managing local events can be fragmented, while event organizers need a centralized way to handle event information, users, and administrative operations.",
      solution:
        "EVESTA was developed as an event-focused platform that helps users discover events while providing management workflows for organizers and administrators. The project also incorporated AI-based event recommendations.",
      architecture: true,
      challenges:
        "Building a multi-role event platform required coordinating the Flutter application, Django backend, REST APIs, MySQL database, and multiple dashboards while managing different user workflows.",
      learned:
        "Gained experience working as part of a development team while strengthening skills in Django, REST APIs, Flutter, MySQL, UI design, project coordination, documentation, and implementing role-based application workflows.",
    }
  },
  {
    id: "abdu",
    title: "ABDU — Artificial Brain for Digital Utility",
    category: "AI Assistant",
    description:
      "An AI-powered digital companion designed to provide concise conversational assistance and support users with information, ideas, and everyday digital tasks.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Groq API",
    ],
    features: [
      "AI conversation",
      "Natural language interaction",
      "Concise responses",
      "Prompt-based assistance",
      "Conversational interface",
      "Responsive UI",
      "AI API integration",
    ],
    image: ABDU,
    github: "https://github.com/Anufazil/ABDU",
    live: "https://abdu-orpin.vercel.app/",
    caseStudy: {
      problem:
        "Many AI interfaces can feel unnecessarily complex when users simply want quick, concise assistance with information, ideas, or everyday digital tasks.",
      solution:
        "ABDU was designed as a lightweight AI companion focused on a simple conversational experience, using an AI API to provide concise responses through a minimal web interface.",
      architecture: true,
      challenges:
        "Creating a responsive conversational interface while handling API requests, loading states, errors, and prompt-response interactions required careful frontend logic and API integration.",
      learned:
        "Learned practical AI API integration, asynchronous JavaScript, conversational UI design, API error handling, prompt-based interactions, and building lightweight AI-powered web applications.",
    }
  },
];

export const projects = [...featuredProjects, ...otherProjects];
