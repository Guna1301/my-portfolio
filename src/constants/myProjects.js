export const myProjects = [
  {
    id: 1,
    title: "Cognitive Retraining Application",
    description: "An educational platform designed to assist children with autism and dyslexia by offering cognitive games and personalized exercises.",
    subDescription: [
      "Developed personalized cognitive games and assessment modules using ReactJS and machine learning models (SVM Regression) to support children with autism and dyslexia.",
      "Implemented secure JWT-based user authentication and progress tracking.",
      "Designed a responsive and accessible user interface using Bootstrap to ensure usability for children.",
      "Integrated adaptive learning logic that modifies cognitive exercises based on user performance and survey outcomes."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/cognitive.jpg",
    tags: [
      {
        id: 1,
        name: "ReactJS",
        path: "/assets/logos/react.svg"
      },
      {
        id: 2,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg"
      },
      {
        id: 3,
        name: "JWT",
        path: "/assets/logos/jwt.svg"
      },
      {
        id: 4,
        name: "Bootstrap",
        path: "/assets/logos/bootstrap.svg"
      },
      {
        id: 5,
        name: "SVM Regression",
        path: "/assets/logos/ml.svg"
      }
    ]
  },

  {
    id: 2,
    title: "Authentication & Authorization System",
    description:
      "A secure authentication and authorization system using Auth0 for seamless user management.",
    subDescription: [
      "Integrated Auth0 for authentication, supporting OAuth, JWT, and multi-factor authentication.",
      "Implemented role-based access control (RBAC) for fine-grained user permissions.",
      "Developed a React-based frontend with Tailwind CSS for a sleek user experience.",
      "Connected to a secure SQLite database for user data storage.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/auth-system.jpg",
    tags: [
      {
        id: 1,
        name: "Auth0",
        path: "/assets/logos/auth0.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Blazor Web App",
    description:
      "A modern, interactive web application built with Blazor WebAssembly and .NET Core.",
    subDescription: [
      "Developed a fully interactive Single Page Application (SPA) using Blazor WebAssembly.",
      "Implemented API interactions using .NET Core for a robust backend.",
      "Designed responsive UI components with Tailwind CSS for an enhanced UX.",
      "Integrated SQLite for efficient client-side database storage.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/blazor-app.jpg",
    tags: [
      {
        id: 1,
        name: "Blazor",
        path: "/assets/logos/blazor.svg",
      },
      {
        id: 2,
        name: ".NET Core",
        path: "/assets/logos/dotnetcore.svg",
      },
      {
        id: 3,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
];