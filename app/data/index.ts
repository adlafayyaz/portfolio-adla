// ─── Personal Info ───
export const personalInfo = {
  name: "adlafayyaz",
  title: "Mobile Developer • Web Developer • UI/UX Designer",
  tagline:
    "Exploring web development, mobile apps, and UI/UX design. Mostly building things for fun and curiosity.",
  greeting: "Hi, I'm adlafayyaz",
  introText:
    "Currently pursuing a Bachelor's degree in Information Systems at UPN Veteran Jakarta, with a strong interest in mobile and web development. I'm passionate about learning new technologies, building intuitive digital experiences, and exploring innovative solutions.",
  expandedText: {
    background:
      "It all started with a simple curiosity about how things work on the internet. What began as tinkering with code has grown into a genuine passion for creating digital experiences that are both beautiful and functional.",
    interests:
      "When I'm not coding, you'll probably find me exploring clean design trends, trying out new tech tools, or brainstorming my next creative side project. I love finding ways to make everyday tasks simpler through technology.",
    journey:
      "Every project is a stepping stone. As an Information Systems student, my focus has sharpened around UI/UX design, and web & mobile development. I'm always looking forward to the next challenge that pushes my skills further.",
  },
};

// ─── Experience ───
export interface ExperienceItem {
  role: string;
  company: string;
  year: string;
  description: string;
}

export const experiences: ExperienceItem[] = [
  {
    role: "Logistic Officer",
    company: "Lombakan",
    year: "2026 — Present",
    description:
      "Prepared technical requirements for events (Zoom, tools, documentation). Managed equipment and operational needs. Provided comprehensive support during program execution.",
  },
  {
    role: "Member",
    company: "KSM Veterantech",
    year: "2025 — Present",
    description:
      "Actively participating in tech communities, collaborating on innovative projects, and expanding knowledge in software development and UI/UX design.",
  },
];

// ─── Projects ───
export interface ProjectItem {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;
  pitchDeckUrl?: string;
  downloadUrl?: string;
}

export type ProjectCategory =
  | "UI/UX Design"
  | "Mobile Development"
  | "Web Development";

export const projects: Record<ProjectCategory, ProjectItem[]> = {
  "UI/UX Design": [
    {
      title: "MULA",
      description:
        "A sleek mobile app redefining the coffee ordering experience for young consumers. MULA answers common pain points, like complex navigation and hidden promos, with a fast, aesthetic interface, making every coffee run delightful.",
      techStack: ["Figma", "Mobile UI", "Prototyping"],
      image: "/projects/mula-banner.png",
      figmaUrl:
        "https://www.figma.com/proto/U8saGUtgmcXsPLQyUTbTYo/MULA-Prototype?page-id=0%3A1&node-id=1-3&starting-point-node-id=1%3A2&t=AaM7NyQkO1YgFnR7-1",
      pitchDeckUrl:
        "https://www.canva.com/design/DAGqnATJ9aQ/Cb1nW6EYry8o7rShRnA2BA/view?utm_content=DAGqnATJ9aQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h655111bf37",
    },
  ],
  "Mobile Development": [],
  "Web Development": [
    {
      title: "CARDENZA",
      description:
        "A robust fashion e-commerce platform featuring comprehensive shopping flows for men, women, and children. Built with CodeIgniter 3 and Bootstrap, it includes a full dashboard for seamless store management.",
      techStack: ["CodeIgniter 3", "Bootstrap"],
      image: "/projects/cardenza-banner.png",
      githubUrl: "https://github.com/adlafayyaz/Cardenza-ProjectECommerce",
    },
    {
      title: "NIKIUniverse",
      description:
        "A dedicated fansite celebrating the discography of Nicole Zefanya (NIKI). Handcrafted with pure HTML and CSS to showcase responsive layouts and elegant typography inspired by her artistic journey.",
      techStack: ["HTML", "CSS"],
      image: "/projects/nikiuniverse-banner.png",
      githubUrl: "https://github.com/adlafayyaz/NIKIUniverse",
      liveUrl: "https://nikiuniverse.vercel.app/",
    },
    {
      title: "Prambanan Temple",
      description:
        "An interactive tourism portal highlighting the architectural beauty of Prambanan Temple. Engineered with HTML, CSS, and Vanilla JavaScript to deliver a smooth and culturally enriching exploration experience.",
      techStack: ["HTML", "CSS", "JavaScript"],
      image: "/projects/prambanantemple-banner.png",
      githubUrl: "https://github.com/adlafayyaz/Prambanan-Temple",
      liveUrl: "https://prambanan-temple.vercel.app/",
    },
  ],
};

// ─── Skills ───
export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["JavaScript", "Dart", "Kotlin"],
  },
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
  {
    category: "Mobile",
    skills: ["Flutter", "Android (Kotlin)"],
  },
  {
    category: "Backend / Database",
    skills: ["MySQL", "Firebase"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Figma", "Android Studio"],
  },
];

// ─── Contact ───
export interface ContactLink {
  label: string;
  url: string;
  icon: string;
}

export const contactLinks: ContactLink[] = [
  { label: "Email", url: "mailto:adlafayyaz@example.com", icon: "✉️" },
  { label: "LinkedIn", url: "https://linkedin.com/in/adlafayyaz", icon: "🔗" },
  { label: "GitHub", url: "https://github.com/adlafayyaz", icon: "💻" },
];

export const contactCTA =
  "Have a project idea or just want to say hi? Feel free to reach out.";
