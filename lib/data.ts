// All factual content in this file is sourced strictly from Ponraj C's resume.
// Update PERSONAL.resumeUrl, projects[].repoUrl and projects[].liveUrl as new
// information becomes available — nothing here is invented.

export const PERSONAL = {
  name: "Ponraj C",
  titles: [
  "Data Analyst",
  "Business Data Analyst",
  "Data Scientist",
  "Python Developer"
  ],
  location: "Tamil Nadu, India",
  email: "chandruponraj06@gmail.com",
  phone: "+91 9677690323",
  whatsapp: "https://wa.me/919677690323",
  github: "https://github.com/ponrajc918-art",
  linkedin: "https://www.linkedin.com/in/ponrajdeveloper",
  statement:
    "Building intelligent systems, predictive analytics solutions, and scalable software that transform data into meaningful business decisions.",
  resumeUrl: "/resume/Ponraj-C-Resume.pdf",
  heroImage: "/images/hero-portrait.webp",
} as const;

export const ABOUT = {
  summary:
  "Motivated Artificial Intelligence and Machine Learning student with strong skills in data analytics, Python, SQL, machine learning, and data visualization. Skilled in data preprocessing, exploratory data analysis, feature engineering, predictive modeling, and extracting meaningful insights from datasets. Built practical projects including financial analysis and student performance prediction using Python and Scikit-learn. Interested in applying data-driven approaches to solve real-world business problems.",
  focusAreas: [
   "Data Analytics & Business Intelligence",
   "Python & SQL",
   "Data Visualization & EDA",
   "Machine Learning & Predictive Modeling",
   ],
  education: {
    degree: "Bachelor of Technology in Artificial Intelligence & Machine Learning",
    school: "IFET College of Engineering",
    grad: "Expected Graduation: 2027",
  },
  softSkills: [
    "Problem Solving",
    "Communication & Teamwork",
    "Analytical Thinking",
    "Adaptability",
    "Time Management",
  ],
  awards: [
    "Completed Skillrack Python Course Certification",
    "Built multiple end-to-end AI/ML projects with real-world applications",
    "Strong foundation in Data Analytics and Predictive Modeling",
    "Hands-on experience with Flask-based deployment and backend integration",
  ],
} as const;

export type SkillCategory = {
  title: string;
  description: string;
  items: string[];
};

export const SKILLS: SkillCategory[] = [
  {
    title: "Programming",
    description: "Core programming & querying",
    items: ["Python", "SQL"],
  },
  {
    title: "Data Analytics",
    description: "Analyzing and preparing data",
    items: [
      "Pandas",
      "NumPy",
      "Exploratory Data Analysis",
      "Data Preprocessing",
      "Feature Engineering",
    ],
  },
  {
    title: "Data Visualization",
    description: "Communicating data insights",
    items: ["Matplotlib", "Data Visualization"],
  },
  {
    title: "Machine Learning",
    description: "Prediction & analytical modeling",
    items: [
      "Scikit-learn",
      "Regression",
      "Classification",
      "Random Forest",
      "XGBoost",
      "Model Evaluation",
      "Predictive Analytics",
    ],
  },
  {
    title: "Backend Development",
    description: "Building data-driven APIs",
    items: ["FastAPI", "REST APIs", "PostgreSQL"],
  },
  {
    title: "Problem Solving",
    description: "Data structures & algorithms",
    items: [
      "Arrays",
      "Linked Lists",
      "Stack",
      "Queue",
      "HashMap",
      "Recursion",
      "Sorting",
      "Searching",
    ],
  },
];


export type Project = {
  slug: string;
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  video?: {
    src: string;
    poster: string;
    mode: "loop" | "click-to-play";
    durationLabel?: string;
  };
  layout: "text-left" | "text-right";
};

export const PROJECTS: Project[] = [
  {
    slug: "finud",
    name: "FinUD",
    tagline: "AI Financial Understanding System",
    problem:
      "Loan officers need a fast, defensible way to gauge approval risk instead of relying on manual, inconsistent review of applicant data.",
    solution:
      "An AI-powered loan approval prediction and financial risk scoring system that screens applications, surfaces the key risk drivers, and visualizes portfolio health for decision-makers.",
    features: [
      "AI-powered loan approval prediction and financial risk scoring",
      "Preprocessing, feature selection, and exploratory data analysis for model optimization",
      "Power BI dashboards for business insight visualization",
    ],
    stack: ["Python", "Scikit-learn", "Pandas", "EDA", "Flask"],
    liveUrl: "https://finud.onrender.com/",
    repoUrl: "https://github.com/ponrajc918-art",
    video: {
      src: "/videos/finud-demo.mp4",
      poster: "/images/finud-poster.webp",
      mode: "loop",
    },
    layout: "text-left",
  },
  {
    slug: "student-analytics",
    name: "Student Performance Analytics",
    tagline: "Predictive Academic Performance System",
    problem:
      "Educators often spot at-risk students too late in the term, after performance gaps are already difficult to close.",
    solution:
      "A predictive analytics model that estimates student academic performance ahead of time, using regression modeling on historical marks data so interventions can happen earlier.",
    features: [
      "Predictive analytics model to estimate student academic performance",
      "Linear Regression modeling implemented with Scikit-learn",
      "Prediction outputs visualized with Matplotlib for quick interpretation",
    ],
    stack: ["Python", "Scikit-learn", "Linear Regression", "Matplotlib"],
    liveUrl: "https://ai-smart-analytics-1.onrender.com/",
    repoUrl: "https://github.com/ponrajc918-art",
    layout: "text-right",
  },
  {
    slug: "findecide-ai",
    name: "FinDecide AI",
    tagline: "Financial Decision Intelligence System",
    problem:
      "Financial decision-making spans many disconnected tools — calculators, credit checks, scenario planning — making consistent, explainable lending decisions hard to scale.",
    solution:
      "An AI-driven financial decision intelligence system that unifies loan analysis, EMI calculation, and what-if scenario testing behind a conversational interface backed by Flask and FastAPI services.",
    features: [
      "AI-driven financial decision intelligence for loan prediction",
      "REST APIs and backend services built with Flask and FastAPI",
      "Power BI dashboards for interactive business intelligence reporting",
    ],
    stack: ["Python", "Flask", "FastAPI", "REST APIs", "Power BI"],
    repoUrl: "https://github.com/ponrajc918-art",
    video: {
      src: "/videos/findecide-demo.mp4",
      poster: "/images/findecide-poster.webp",
      mode: "click-to-play",
      durationLabel: "3:53 demo walkthrough",
    },
    layout: "text-left",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;
