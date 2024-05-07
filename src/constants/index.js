import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm a dedicated front-end developer with expertise in building captivating user interfaces using React.js. With 2 years of experience in web development, I've honed my skills to deliver high-quality solutions that meet clients' needs and exceed expectations.`;

export const ABOUT_TEXT = `Hello! I'm Ali, a passionate frontend developer with a love for creating beautiful and user-friendly interfaces. Programming for me not a hobby or a job neither, it's a jobby. I have experience working with technologies like React, Tailwind CSS, and Framer Motion, Redux which I use to craft engaging web experiences.
My journey in web development started from being a tech lover in my childhood (a nerd you could say.) Since then, I've been honing my skills and exploring new trends in the ever-evolving tech landscape.
When I'm not coding, you can find me playing video games, (trying to 'git gud' in dark souls series). I believe in continuous learning and strive to stay updated with the latest tools and techniques to deliver high-quality solutions.
Feel free to explore my portfolio and reach out if you'd like to collaborate or have any questions!
`;

export const EXPERIENCES = [
  {
    description: `fully functional e-commerce website using React.js, Context API for state management, and styled-components for styling. The project was structured following best practices to ensure scalability and maintainability. Implemented a dynamic product catalog with categories and filtering options for a seamless shopping experience. Integrated a responsive shopping cart that allows users to add, remove, and update items in real-time.  Implemented user authentication and authorization features, including login, registration, and user-specific functionalities.`,
    role: "frontend developer, designer",
    technologies: [
      "Context API",
      "React.js",
      "Styled-components",
      "React-router-dom",
    ],
    keyLearnings: "state management, component lifecycle, routing",
    id: 1,
  },
  {
    description: `dynamic dashboard using React.js and Tailwind CSS, enriched with data visualization capabilities powered by Tremor.so. The project was meticulously structured to ensure efficient data management, visual clarity, and a responsive user interface. Integrated Tremor.so to create interactive and visually appealing charts, graphs, and data representations that provide insights at a glance. Designed a modular dashboard layout with customizable components such as widgets, cards, and tables for displaying diverse data sets.`,
    role: "frontend developer, designer",
    technologies: ["React.js", "Tailwind css"],
    keyLearnings: [
      "interactive user interfaces",
      "state management",
      "integrating third-party libraries",
    ],
    id: 2,
  },
  {
    description: `Brainwave is a captivating website dedicated to exploring the fascinating world of AI (Artificial Intelligence). Leveraging the power of React.js with Tailwind CSS, react-just-parallax, and react-router-dom, this project aims to educate and engage visitors with immersive content and interactive elements. Employed React.js for its component-based architecture, enabling the creation of interactive and dynamic user interfaces with reusable components. Utilized Tailwind CSS for efficient and customizable styling, ensuring a modern and consistent design throughout the website.`,
    role: "frontend developer, designer",
    technologies: [
      "React.js",
      "Tailwind css",
      "React-router-dom",
      "react-just-parallax",
    ],
    keyLearnings: [
      "integrating third-party libraries",
      "managing stateful components.",
    ],
    id: 3,
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description: `fully functional e-commerce website using React.js, Context API for state management, and styled-components for styling. The project was structured following best practices to ensure scalability and maintainability. Implemented a dynamic product catalog with categories and filtering options for a seamless shopping experience. Integrated a responsive shopping cart that allows users to add, remove, and update items in real-time.  Implemented user authentication and authorization features, including login, registration, and user-specific functionalities.`,
    technologies: [
      "Context API",
      "React.js",
      "Styled-components",
      "React-router-dom",
    ],
    id: 1,
  },
  {
    title: "Dashboard UI",
    image: project2,
    description: `dynamic dashboard using React.js and Tailwind CSS, enriched with data visualization capabilities powered by Tremor.so. The project was meticulously structured to ensure efficient data management, visual clarity, and a responsive user interface. Integrated Tremor.so to create interactive and visually appealing charts, graphs, and data representations that provide insights at a glance. Designed a modular dashboard layout with customizable components such as widgets, cards, and tables for displaying diverse data sets.`,
    technologies: ["React.js", "Tailwind css"],
    id: 2,
  },
  {
    title: "Portfolio",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Tailwind css", "React"],
    id: 3,
  },
  {
    title: "Brainwave",
    description: `Brainwave is a captivating website dedicated to exploring the fascinating world of AI (Artificial Intelligence). Leveraging the power of React.js with Tailwind CSS, react-just-parallax, and react-router-dom, this project aims to educate and engage visitors with immersive content and interactive elements. Employed React.js for its component-based architecture, enabling the creation of interactive and dynamic user interfaces with reusable components. Utilized Tailwind CSS for efficient and customizable styling, ensuring a modern and consistent design throughout the website.`,
    image: project4,
    technologies: [
      "React.js",
      "Tailwind css",
      "React-router-dom",
      "react-just-parallax",
    ],
    id: 4,
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
