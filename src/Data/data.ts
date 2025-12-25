
export interface Project {
  id: number;
  title: string;
  description: string;
  liveLink?: string;
  githubLink: string;
  technologies?: string[];
  keyFeatures?: string[];
  users?: number;
}

export const skillsData: string[] = [
  "C",
  "C++",
  "Rust",
  "Nix",
  "Shell",
  "PHP",
  "Lua",
  "Python",
  "Just",
  "Zig",
  "CMake",
  "Git",
  "Vim",
  "Tmux",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Bootstrap",
  "Sass",
  "JavaScript",
  "React",
  "React Router",
  "React Hook Form",
  "Git",
  "GitHub",
  "GitHub Actions",
  "Node.js",
  "Express",
  "JQuery",
  "Markdown",
  "TypeScript",
  "Next.js",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Postman",
  "Bash",
  "Docker",
  "Kubernetes",
  ];

export const projectsData = [
  {
    id: 1,
    users: 220,
    title: "Go Installer",
    description: "A quick Go installer written in Rust.",
    githubLink: "https://github.com/c0d3h01/go-installer",
    liveLink: "https://crates.io/crates/go-installer",
    technologies: [ "Rust", "CLI" ],
    keyFeatures: [
      "Quick and easy installation of the Go programming language",
      "Written in Rust for performance and safety",
      "Command-line interface for user-friendly operation",
    ],
  },
];

export const resumeData = {
  isAvailable: false,
  url: "https://drive.google.com/file/d/YOUR_FILE_ID/view",
  fallbackRoute: "/not-found",
};
