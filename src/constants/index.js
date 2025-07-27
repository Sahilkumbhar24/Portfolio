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
  tailwind,
  nodejs,
  mongodb,
  git,
  codeclause,
  edunet,
  movie,
  steganography,
  tripguide,
  threejs,
  python,
  java,
  cpp,

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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C Plus Plus",
    icon: cpp,
  },
  {
    name: "Python",
    icon: python,
  },
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

  
];

const experiences = [
  {
    title: "Java Developer Intern",
    company_name: "CodeClause",
    icon: codeclause,
    iconBg: "#383E56",
    date: "Nov 2024 - Dec 2024",
    points: [
      "Developed and enhanced real-world projects using Java, resulting in improved functionality and code efficiency.",
    "Collaborated remotely, applying object-oriented programming principles.",
    "Demonstrated growth in development skills through impactful project contributions.",
    ],
  },
  {
    title: "AI/ML Intern",
    company_name: "Edunet",
    icon: edunet,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Feb 2025",
    points: [
      "Developed an AI Resume Ranker web app using machine learning to evaluate and rank resumes based on job criteria.",
    "Designed automated pipelines for resume data parsing, feature extraction, and predictive scoring.",
    "Collaborated remotely with a team, applying AI/ML frameworks like Python, scikit-learn, and TensorFlow.",
    "Enhanced project efficiency through code optimization and software development best practices.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Aditya",
    designation: "Student",
    company: "GSMCOEP",
    image: "https://img.freepik.com/premium-photo/young-student-avatar-generative-ai_138015-2483.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Aakash",
    designation: "Student",
    company: "GSMCOEP",
    image: "https://img.freepik.com/premium-photo/young-student-avatar-generative-ai_138015-2502.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Aarya",
    designation: "Student",
    company: "GSMCOEP",
    image: "https://tse2.mm.bing.net/th/id/OIP.EUu3WozfMyWl9z6_Vi4gGgHaHa?r=0&w=626&h=626&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];

const projects = [
  {
    name: "Movie Recommendation System",
    description:
      "Designed and implemented a scalable movie recommendation system using collaborative filtering on the MovieLens 20M dataset,generating personalized suggestions via user/item-based similarity.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Pandas",
        color: "green-text-gradient",
      },
      {
        name: "NumPy",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://github.com/Sahilkumbhar24/Movie-Recommendation-System",
  },
  {
    name: "Steganography",
    description:
      "Developed a steganography tool to securely embed text or files within images, enabling private communication through imperceptible data hiding. Built a user-friendly GUI with Tkinter for encoding/decoding data,supporting drag and drop.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Tkinter",
        color: "green-text-gradient",
      },
      {
        name: "OpenCV",
        color: "pink-text-gradient",
      },
    ],
    image: steganography,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
