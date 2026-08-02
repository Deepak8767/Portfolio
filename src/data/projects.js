// Single source of truth for project data.
// Used by both the Projects grid (Projects.jsx) and the individual
// project detail pages (ProjectDetail.jsx).

export const THEMES = {
  cyan: {
    text: "text-cyan-300",
    textStrongHover: "group-hover:text-cyan-400",
    border: "hover:border-cyan-400/50",
    shadow: "hover:shadow-cyan-500/25",
    glow: "from-cyan-500/25 to-emerald-500/25",
    chip: "bg-cyan-500/10 border-cyan-500/25 text-cyan-300",
    btn: "from-cyan-500 to-emerald-500",
    outline:
      "border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400",
    dot: "bg-cyan-400",
    badge: "bg-cyan-500/15 text-cyan-300 border-cyan-400/30",
    ring: "ring-cyan-500/30",
    heroGlow: "bg-cyan-500/20",
  },
  violet: {
    text: "text-violet-300",
    textStrongHover: "group-hover:text-violet-400",
    border: "hover:border-violet-400/50",
    shadow: "hover:shadow-violet-500/25",
    glow: "from-violet-500/25 to-fuchsia-500/25",
    chip: "bg-violet-500/10 border-violet-500/25 text-violet-300",
    btn: "from-violet-500 to-fuchsia-500",
    outline:
      "border-violet-500/30 text-violet-300 hover:bg-violet-500/10 hover:border-violet-400",
    dot: "bg-violet-400",
    badge: "bg-violet-500/15 text-violet-300 border-violet-400/30",
    ring: "ring-violet-500/30",
    heroGlow: "bg-violet-500/20",
  },
  amber: {
    text: "text-amber-300",
    textStrongHover: "group-hover:text-amber-400",
    border: "hover:border-amber-400/50",
    shadow: "hover:shadow-amber-500/25",
    glow: "from-amber-500/25 to-orange-500/25",
    chip: "bg-amber-500/10 border-amber-500/25 text-amber-300",
    btn: "from-amber-500 to-orange-500",
    outline:
      "border-amber-500/30 text-amber-300 hover:bg-amber-500/10 hover:border-amber-400",
    dot: "bg-amber-400",
    badge: "bg-amber-500/15 text-amber-300 border-amber-400/30",
    ring: "ring-amber-500/30",
    heroGlow: "bg-amber-500/20",
  },
  rose: {
    text: "text-rose-300",
    textStrongHover: "group-hover:text-rose-400",
    border: "hover:border-rose-400/50",
    shadow: "hover:shadow-rose-500/25",
    glow: "from-rose-500/25 to-pink-500/25",
    chip: "bg-rose-500/10 border-rose-500/25 text-rose-300",
    btn: "from-rose-500 to-pink-500",
    outline:
      "border-rose-500/30 text-rose-300 hover:bg-rose-500/10 hover:border-rose-400",
    dot: "bg-rose-400",
    badge: "bg-rose-500/15 text-rose-300 border-rose-400/30",
    ring: "ring-rose-500/30",
    heroGlow: "bg-rose-500/20",
  },
};

export const projects = [
  {
    id: 1,
    slug: "healthtrack-plus",
    name: "HealthTrack+",
    tagline: "AI-Powered Healthcare Operating System",
    description:
      "AI-powered healthcare ecosystem connecting patients, doctors and pharmacies into one intelligent platform.",
    longDescription:
      "HealthTrack+ is a full-stack healthcare platform that brings patients, doctors and pharmacies together in one place. It uses AI to help predict potential health risks from symptoms, connects users to nearby hospitals via Google Maps, and keeps every prescription and appointment organized in a single dashboard. The goal was to reduce the friction people face juggling multiple apps and paper records for their healthcare needs.",
    tech: ["React", "Flask", "MySQL", "MongoDB", "Redis", "Gemini AI"],
    github: "https://github.com/Durvesh-code/HealthTrack-",
    live: "https://health-track-mauve.vercel.app/",
    theme: "cyan",
    featured: true,
    role: "Full-Stack Developer",
    features: [
      "AI-powered disease prediction",
      "Google Maps hospital finder",
      "Wearable health tracking",
      "Appointment booking system",
      "Digital prescriptions",
      "Multi-role authentication",
    ],
    highlights: [
      "Built a Flask + Gemini AI microservice for symptom-based risk prediction",
      "Designed a hybrid MySQL/MongoDB data layer for structured and unstructured health records",
      "Used Redis for caching frequently accessed doctor and hospital data",
    ],
  },
  {
    id: 2,
    slug: "careerpilot-ai",
    name: "CareerPilot AI",
    tagline: "AI Resume Analysis Platform",
    description:
      "AI-powered resume analysis and career guidance platform with intelligent job matching.",
    longDescription:
      "CareerPilot AI helps job seekers understand where their resume stands and what to improve. It parses uploaded resumes, scores them against target roles, highlights skill gaps, and recommends relevant openings. The platform also handles secure authentication and automated email notifications so users stay in the loop as their applications progress.",
    tech: ["Spring Boot", "React", "MySQL", "JWT", "Brevo", "AI APIs"],
    github: "https://github.com/Deepakdeore5650/CareerPilot-AI",
    live: "https://careerpilot-ai-1-cgrw.onrender.com",
    theme: "violet",
    featured: true,
    role: "Backend & AI Integration",
    features: [
      "Resume analysis",
      "Skill gap identification",
      "Career recommendations",
      "Job matching",
      "Email notifications",
      "JWT authentication",
    ],
    highlights: [
      "Built secure REST APIs with Spring Boot and JWT-based auth",
      "Integrated AI APIs to parse and score resumes against job descriptions",
      "Automated transactional email flow with Brevo",
    ],
  },
  {
    id: 3,
    slug: "local-service-provider",
    name: "Local Service Provider",
    tagline: "Service Booking Platform",
    description:
      "Location-based service booking application with provider management and payments.",
    longDescription:
      "A location-based marketplace that connects customers with nearby local service providers — think electricians, plumbers, cleaners and more. Customers can search by location, book in real time, and pay securely through Razorpay, while providers get a dashboard to manage bookings and track their ratings.",
    tech: ["Spring Boot", "React", "MySQL", "Razorpay"],
    github: "https://github.com/Deepakdeore5650/LocalService-Provider",
    live: null,
    theme: "amber",
    role: "Full-Stack Developer",
    features: [
      "Provider search",
      "Real-time booking",
      "Razorpay integration",
      "Ratings & reviews",
      "Analytics dashboard",
    ],
    highlights: [
      "Implemented location-based provider search and filtering",
      "Integrated Razorpay for secure end-to-end payments",
      "Built an analytics dashboard for providers to track bookings and earnings",
    ],
  },
  {
    id: 4,
    slug: "ecommerce-platform",
    name: "E-Commerce Platform",
    tagline: "Full-Stack Shopping System",
    description:
      "Complete shopping platform with authentication, cart management and admin dashboard.",
    longDescription:
      "A complete e-commerce system built with Spring Boot and Hibernate, covering the full shopping flow — browsing products, managing a cart, placing orders and tracking them — alongside an admin dashboard for managing inventory and monitoring orders.",
    tech: ["Spring Boot", "Hibernate", "MySQL"],
    github:
      "https://github.com/Deepakdeore5650/E-Commerce-Shopping-Cart-App-built-with-Spring-Boot",
    live: null,
    theme: "rose",
    role: "Backend Developer",
    features: [
      "Shopping cart",
      "Product management",
      "Admin dashboard",
      "Authentication",
      "Order tracking",
    ],
    highlights: [
      "Designed relational schema and Hibernate entity mappings for products, orders and users",
      "Built role-based authentication for customers and admins",
      "Implemented order lifecycle tracking from cart to delivery",
    ],
  },
];

export const getProjectBySlug = (slug) =>
  projects.find((p) => p.slug === slug);
