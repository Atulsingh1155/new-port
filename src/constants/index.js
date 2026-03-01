import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  aicade,
  meta,
  starbucks,
  tesla,
  shopify,
  freelance,
  ongo,
  carrent,
  jobit,
  tripguide,
  threejs,
  unrealgame,
  escapeplace,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "vlc-contribution",
    title: "VLC Contribution",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Open Source Contributor",
    icon: web,
  },
  {
    title: "Full-Stack Developer",
    icon: backend,
  },
  {
    title: "Game Developer",
    icon: mobile,
  },
  {
    title: "AI/ML Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Open Source Contributor",
    company_name: "VLC Media Player (VideoLAN)",
    icon: tesla, // We'll use this temporarily, can be updated with VLC logo
    iconBg: "#FF8C00",
    date: "February 2026 - Present",
    points: [
      "Successfully merged major privacy feature into VLC Media Player codebase, impacting millions of users worldwide.",
      "Implemented 'Clear History' button in network URL dialog to address NSFW URL privacy concerns.",
      "Developed Qt-based solution with persistent QSettings storage management and smart button state handling.",
      "Collaborated with VideoLAN team to resolve critical user privacy issue #29607.",
      "Contributed to one of the world's most popular media players with over 3 billion downloads."
    ],
  },
  {
    title: "Game Developer Intern",
    company_name: "Aicade",
    icon: aicade,
    iconBg: "#383E56",
    date: "July 2023 - Sept 2024",
    points: [
      "Developed and maintained 2D/3D games using Phaser.js and JavaScript, delivering engaging gameplay experiences.",
      "Collaborated with cross-functional teams including artists and designers to create visually stunning games.",
      "Optimized game performance through efficient state management and resource optimization techniques.",
      "Integrated sound effects, animations, and responsive UI components to enhance player engagement and retention."
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "ON GO",
    icon: ongo,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - March 2024",
    points: [
      "Built scalable web applications using React.js and TypeScript with seamless backend integration.",
      "Developed AI-powered components to improve personalization and automation for end users.",
      "Implemented robust REST APIs and managed complex state with Redux for enterprise-level applications.",
      "Participated in Agile development cycles, contributing to both development and quality assurance processes."
    ],
  },
  {
    title: "Freelance Full-Stack Developer",
    company_name: "Independent Contractor",
    icon: freelance,
    iconBg: "#383E56",
    date: "March 2024 - Present",
    points: [
      "Design and develop full-stack web applications using React, Node.js, and MongoDB for diverse clients.",
      "Create interactive browser-based games and integrate AI/ML features for enhanced user experiences.",
      "Leverage TensorFlow and scikit-learn for intelligent system development and data-driven solutions.",
      "Deliver responsive, user-friendly interfaces with modern UI libraries and cutting-edge technologies."
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "Atul's contribution to VLC Media Player demonstrates exceptional problem-solving skills and attention to user privacy concerns. His implementation was clean, efficient, and thoroughly tested.",
    name: "VideoLAN Community",
    designation: "Open Source Project",
    company: "VLC Media Player",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    testimonial:
      "Atul's technical brilliance and dedication impressed me throughout his work. His contributions to intelligent systems show great potential for solving real-world challenges.",
    name: "Dr. Amitanshu Pattanaik",
    designation: "Senior Scientist",
    company: "DRDO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    testimonial:
      "Atul was one of the most talented developers at Aicade. His creativity and commitment to game development helped shape several of our core projects and delivered exceptional results.",
    name: "Pushkar",
    designation: "Founder",
    company: "Aicade",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
  },
];


const projects = [
  {
    name: "Bike Rental Platform",
    description:
      "Enterprise-grade web platform enabling users to search, book, and manage bike rentals from multiple providers. Features real-time availability, secure payment integration, and comprehensive admin dashboard for fleet management.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://atulsingh1155.github.io/Bike-rental-website/",
  },
 {
  name: "Parlour Wallah - Service Platform",
  description:
    "Modern web platform connecting customers with nearby barber shops and beauty services. Features real-time appointment booking, service provider registration, schedule management, and integrated payment solutions for seamless user experience.",
  tags: [
    {
      name: "TypeScript",
      color: "blue-text-gradient",
    },
    {
      name: "Node.js",
      color: "green-text-gradient",
    },
    {
      name: "PostgreSQL",
      color: "pink-text-gradient",
    },
  ],
  image: jobit,
  source_code_link: "https://parlourwallahbackend.onrender.com/",
},
 {
  name: "AI Disaster Waste Prediction",
  description:
    "Advanced AI-powered web application that forecasts disaster-induced waste in mountainous regions. Utilizes machine learning algorithms, historical data analysis, and predictive modeling to help authorities plan effective cleanup operations and resource allocation.",
  tags: [
    {
      name: "Python",
      color: "blue-text-gradient",
    },
    {
      name: "TensorFlow",
      color: "green-text-gradient",
    },
    {
      name: "Data Science",
      color: "pink-text-gradient",
    },
  ],
  image: tripguide,
  source_code_link: "https://github.com/Atulsingh1155/disaster-waste-prediction",
},
 {
    name: "3D Adventure Game - Unreal Engine",
    description:
      "Immersive 3D adventure game built with Unreal Engine 5, featuring dynamic environments, advanced physics systems, and engaging gameplay mechanics. Includes custom character interactions, combat systems, and rich world exploration elements.",
    tags: [
      {
        name: "Unreal Engine",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
      {
        name: "Blueprints",
        color: "pink-text-gradient",
      },
    ],
    image: unrealgame,
    source_code_link: "https://drive.google.com/drive/folders/1LUstloRuUuf8ZuzQheGyGL-NZ4CbX_uc?usp=sharing",
  },
  {
    name: "Escape the Place - Puzzle Game",
    description:
      "Thrilling escape room game built with Unreal Engine 5, featuring complex puzzle-solving mechanics, atmospheric environments, and interactive object systems. Players must solve mysteries and navigate challenging scenarios to escape.",
    tags: [
      {
        name: "Unreal Engine",
        color: "blue-text-gradient",
      },
      {
        name: "Game Design",
        color: "green-text-gradient",
      },
      {
        name: "Level Design",
        color: "pink-text-gradient",
      },
    ],
    image: escapeplace,
    source_code_link: "https://drive.google.com/drive/folders/1LUstloRuUuf8ZuzQheGyGL-NZ4CbX_uc?usp=sharing",
  },
  

];

export { services, technologies, experiences, testimonials, projects };
