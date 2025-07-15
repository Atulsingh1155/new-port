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
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Game Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    title: "Game Developer Intern",
    company_name: "Aicade",
    icon: aicade, // Replace with your Aicade logo/icon
    iconBg: "#383E56",
    date: "July 2023 - Sept 2024",
    points: [
      "Developed and maintained 2D/3D games using Phaser.js and JavaScript.",
      "Collaborated with artists and designers to deliver visually appealing gameplay experiences.",
      "Optimized game performance and handled state management across different game levels.",
      "Integrated sound effects, animations, and responsive UI to enhance player engagement."
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "ON GO",
    icon: ongo, // Replace with your ON GO logo/icon
    iconBg: "#E6DEDD",
    date: "Jan 2024 - March 2024",
    points: [
      "Built web applications using React.js and TypeScript with backend integration.",
      "Worked on AI-powered components to improve personalization and automation.",
      "Implemented REST APIs and managed state with Redux for scalable frontend behavior.",
      "Collaborated in Agile sprints, handling both development and testing tasks."
    ],
  },
  {
    title: "Freelance Web & Game Developer",
    company_name: "Self-Employed",
    icon: freelance, // You can use a generic freelance icon here
    iconBg: "#383E56",
    date: "March 2024 - Present",
    points: [
      "Designing and developing full-stack web apps using React, Node.js, and MongoDB.",
      "Creating interactive browser-based games and AI/ML features for client projects.",
      "Leveraging tools like TensorFlow, scikit-learn for integrating smart features.",
      "Delivering responsive, user-friendly interfaces with modern UI libraries."
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "Atul's technical brilliance and dedication impressed me. His work on intelligent systems shows great potential for solving real-world challenges.",
    name: "Amitanshu Pattanaik",
    designation: "Senior Scientist",
    company: "DRDO",
    image: "https://randomuser.me/api/portraits/men/11.jpg", // Replace with real image if available
  },
  {
    testimonial:
      "Atul was one of the most talented developers at Aicade. His creativity and commitment to game development helped shape several of our core projects.",
    name: "Pushkar",
    designation: "Founder",
    company: "Aicade",
    image: "https://randomuser.me/api/portraits/men/12.jpg", // Replace with real image if available
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Atul does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];


const projects = [
  {
    name: "Bike Rent",
    description:
      "Web-based platform that allows users to search, book, and manage Bike rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://atulsingh1155.github.io/Bike-rental-website/",
  },
 {
  name: "Parlour Wallah",
  description:
    "A modern web platform that connects customers with nearby barber shops. Users can view available barbers, check timings, and book appointments online with ease. The platform also allows barbers to register their shops and manage their schedules.",
  tags: [
    {
      name: "typescript",
      color: "blue-text-gradient",
    },
    {
      name: "nodejs",
      color: "green-text-gradient",
    },
    {
      name: "tailwindcss",
      color: "pink-text-gradient",
    },
  ],
  image: jobit, // replace with your image variable
  source_code_link: "https://parlourwallahbackend.onrender.com/", // add your actual repo link
},

  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
 {
  name: "Waste Prediction for Floods ans Earthquake",
  description:
    "An AI-powered web application designed to forecast disaster-induced waste in mountainous regions. It uses historical data and machine learning algorithms to predict the volume of waste, helping local authorities plan effective cleanup and resource allocation.",
  tags: [
    {
      name: "python",
      color: "blue-text-gradient",
    },
    {
      name: "tensorflow",
      color: "green-text-gradient",
    },
    {
      name: "data-visualization",
      color: "pink-text-gradient",
    },
  ],
  image: tripguide, // replace with your image variable
  source_code_link: "https://github.com/", // add your actual repo link
},

];

export { services, technologies, experiences, testimonials, projects };
