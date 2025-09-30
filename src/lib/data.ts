import { Project, WorkExperience, Education, Skill, SocialLink } from '@/types';

export const personalInfo = {
  name: "Ben Kammerling",
  title: "Developer, Marketer, Designer",
  subtitle: "Creative problem-solver",
  bio: "Based in London, cyclist, tea-lover, bird-watcher, learner.",
  email: "hi@benkammerling.co.uk",
  location: "London, UK",
  avatar: "/images/avatar.jpg"
};

export const projects: Project[] = [
  {
    id: "slack-app",
    title: "Slack App",
    description: "Praise giving app built with NodeJS, Giphy API and Firebase",
    longDescription: `That thing you did? Goodness me that was great.It's a lovely thing to give and receive praise. When Good Humans approached me with the idea of building their own Slack app, I jumped at the opportunity.
With the Praise, you can send thank yous, shoutouts and big praise to your teammates on the General Channel for everyone to see. Type Praise, add one or more teammates, and Praise tells the whole team about it, with an added gif on the theme of praising.
It's built serverless and uses Netlify functions for the oAuth and the shortcode functionality. It had to get through Slack's strict app guidelines to be shown on the marketplace.`,
    image: "/images/projects/slack-app.jpg",
    tags: ["Full-Stack", "UX"],
    technologies: ["Node.js", "Firebase", "RestfulAPIs", "Serverless", "OAuth 2.0"],
    links: {
      live: "https://slack.com/marketplace/A04SFPKV7JQ-praise",
      case_study: "/projects/slack-app"
    },
    featured: true,
    year: 2024,
    role: "Full-Stack Developer",
    challenges: [
      "Implemented real-time inventory management",
      "Optimized database queries for better performance",
      "Created responsive design for mobile users"
    ],
    impact: [
      "Increased conversion rate by 35%",
      "Reduced page load times by 50%",
      "Improved user experience across all devices"
    ]
  },
  {
    id: "design-system",
    title: "Design System",
    description: "Component library and design tokens for consistent UI",
    longDescription: "A comprehensive design system built with Storybook, featuring reusable components, design tokens, and documentation for maintaining consistency across products.",
    image: "/images/projects/design-system.jpg",
    tags: ["Design", "Component Library"],
    technologies: ["Storybook", "TypeScript", "Sass", "Figma"],
    links: {
      live: "https://storybook.example.com",
      github: "https://github.com/example/design-system"
    },
    featured: true,
    year: 2024,
    role: "Design System Lead",
    challenges: [
      "Unified inconsistent UI patterns across 5 products",
      "Created scalable token architecture",
      "Established design-dev workflow"
    ],
    impact: [
      "Reduced development time by 40%",
      "Improved design consistency across products",
      "Enabled faster feature development"
    ]
  },
  {
    id: "marketing-automation",
    title: "Marketing Automation Tool",
    description: "Email marketing platform with drag-and-drop builder",
    longDescription: "A marketing automation platform that allows users to create email campaigns with a visual drag-and-drop builder, featuring A/B testing, analytics, and integration with popular CRMs.",
    image: "/images/projects/marketing-tool.jpg",
    tags: ["Marketing", "SaaS"],
    technologies: ["Vue.js", "Python", "Redis", "AWS", "D3.js"],
    links: {
      live: "https://marketing.example.com",
      case_study: "/projects/marketing-automation"
    },
    featured: true,
    year: 2023,
    role: "Frontend Lead & Growth Marketing",
    challenges: [
      "Built complex drag-and-drop interface",
      "Implemented real-time collaboration features",
      "Created comprehensive analytics dashboard"
    ],
    impact: [
      "Grew user base from 0 to 10k+ users",
      "Achieved 95% customer satisfaction rate",
      "Generated $500k+ ARR within first year"
    ]
  },
  {
    id: "mobile-app",
    title: "Fitness Tracking App",
    description: "React Native app for tracking workouts and nutrition",
    image: "/images/projects/fitness-app.jpg",
    tags: ["Mobile", "Health & Fitness"],
    technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
    links: {
      github: "https://github.com/example/fitness-app"
    },
    featured: false,
    year: 2023,
    role: "Mobile Developer"
  }
];

export const workExperience: WorkExperience[] = [
  {
    id: "senior-frontend-dev",
    company: "TechCorp",
    role: "Senior Frontend Developer",
    period: "2022 - Present",
    startDate: "2022-03-01",
    description: "Leading frontend development for multiple high-traffic web applications",
    achievements: [
      "Led migration from legacy Angular to React, improving performance by 60%",
      "Mentored 5 junior developers and established coding standards",
      "Implemented automated testing pipeline, reducing bugs by 40%",
      "Collaborated with design team to create component library used across 3 products"
    ],
    location: "London, UK"
  },
  {
    id: "growth-marketer",
    company: "StartupXYZ",
    role: "Growth Marketing Manager",
    period: "2020 - 2022",
    startDate: "2020-06-01",
    endDate: "2022-02-28",
    description: "Drove user acquisition and retention strategies for B2B SaaS platform",
    achievements: [
      "Increased monthly active users by 300% through multi-channel campaigns",
      "Implemented data-driven A/B testing framework, improving conversion by 45%",
      "Built and optimized landing pages, increasing sign-up rate by 25%",
      "Managed $100k+ monthly ad spend across Google, LinkedIn, and Facebook"
    ],
    location: "London, UK"
  },
  {
    id: "fullstack-dev",
    company: "Digital Agency Ltd",
    role: "Full Stack Developer",
    period: "2019 - 2020",
    startDate: "2019-01-01",
    endDate: "2020-05-31",
    description: "Developed custom web applications for clients across various industries",
    achievements: [
      "Built 15+ client websites using React, Vue.js, and WordPress",
      "Implemented e-commerce solutions generating £2M+ in client revenue",
      "Created custom CMS solutions reducing content management time by 50%",
      "Maintained 98% client satisfaction rate across all projects"
    ],
    location: "London, UK"
  }
];

export const education: Education[] = [
  {
    id: "bsc-computer-science",
    institution: "University of London",
    degree: "Bachelor of Science",
    field: "Computer Science",
    period: "2015 - 2018",
    description: "First Class Honours. Focus on software engineering, algorithms, and human-computer interaction."
  },
  {
    id: "digital-marketing-cert",
    institution: "Google Digital Garage",
    degree: "Certificate",
    field: "Digital Marketing",
    period: "2020",
    description: "Comprehensive certification covering SEO, PPC, analytics, and social media marketing."
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "frontend", level: "expert", icon: "⚛️" },
  { name: "TypeScript", category: "frontend", level: "advanced", icon: "📘" },
  { name: "Next.js", category: "frontend", level: "advanced", icon: "▲" },
  { name: "Vue.js", category: "frontend", level: "advanced", icon: "💚" },
  { name: "Tailwind CSS", category: "frontend", level: "expert", icon: "🎨" },
  
  // Backend
  { name: "Node.js", category: "backend", level: "advanced", icon: "🟢" },
  { name: "Python", category: "backend", level: "intermediate", icon: "🐍" },
  { name: "PostgreSQL", category: "backend", level: "intermediate", icon: "🐘" },
  
  // Design
  { name: "Figma", category: "design", level: "advanced", icon: "🎯" },
  { name: "Adobe Creative Suite", category: "design", level: "intermediate", icon: "🎨" },
  { name: "UI/UX Design", category: "design", level: "advanced", icon: "✨" },
  
  // Marketing
  { name: "Google Analytics", category: "marketing", level: "advanced", icon: "📊" },
  { name: "SEO", category: "marketing", level: "advanced", icon: "🔍" },
  { name: "A/B Testing", category: "marketing", level: "advanced", icon: "🧪" },
  { name: "Email Marketing", category: "marketing", level: "intermediate", icon: "📧" },
  
  // Tools
  { name: "Git", category: "tools", level: "advanced", icon: "🌿" },
  { name: "Docker", category: "tools", level: "intermediate", icon: "🐳" },
  { name: "AWS", category: "tools", level: "intermediate", icon: "☁️" }
];

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/benkammerling",
    icon: "💼"
  },
  {
    name: "GitHub",
    url: "https://github.com/benkammerling",
    icon: "💻"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/benkammerling",
    icon: "🐦"
  },
  {
    name: "Email",
    url: "mailto:hello@benkammerling.com",
    icon: "📧"
  }
];

export const highlights = [
  {
    title: "Code",
    description: "Building digital experiences with modern web technologies",
    icon: "💻"
  },
  {
    title: "Growth",
    description: "Data-driven marketing strategies that scale businesses",
    icon: "📈"
  },
  {
    title: "UX/UI",
    description: "Crafting intuitive and beautiful user interfaces",
    icon: "🎨"
  },
  {
    title: "Strategy",
    description: "Turning complex problems into simple, elegant solutions",
    icon: "🎯"
  }
];