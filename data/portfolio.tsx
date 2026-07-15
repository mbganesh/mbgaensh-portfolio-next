// data/portfolio.tsx
import { ReactNode } from "react";
import {
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiJavascript,
  SiHtml5, SiTailwindcss, SiMongodb, SiGit, SiLeetcode
} from "react-icons/si";
import {
  FaLink, FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaXTwitter,
  FaWhatsapp, FaYoutube, FaSnapchat, FaDiscord, FaEnvelope, FaSpotify,
  FaCode
} from "react-icons/fa6";

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  isCurrent?: boolean;
}

export interface Project {
  title: string;
  description: string;
  url?: string;
  tags: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: ReactNode;
  color: string;
}

export interface StackOverflowStats {
  reputation: number;
  reach: string;
  answers: number;
  goldBadges: number;
  silverBadges: number;
  bronzeBadges: number;
  profileUrl: string;
}

export const yearsOfExperience = '5+'

export const personalInfo = {
  name: "Ganesh",
  fullName: "Ganesh MB",
  greeting: "Hi There, I'm Ganesh.",
  experienceBadge: `${yearsOfExperience} Years Experience`,
  tagline: "I'm always looking for new challenges, to push my skills to the next level",
  email: "mbganesh.jdev@gmail.com",
  phone: "+91 84899 91253",
  roles: [
    "Frontend Development",
    "React JS Development",
    "Blockchain Development",
    "Web Designing",
    "MERN Stack Development",
    "Backend Development",
  ],
  bio: `Senior Frontend Developer with ${yearsOfExperience} years of experience building scalable, high-performance web applications using React.js, Next.js, TypeScript, and JavaScript. Experienced in developing enterprise applications from scratch, architecting reusable frontend systems, integrating RESTful APIs with TanStack Query, implementing secure authentication using NextAuth.js, and optimizing application performance, SEO, and user experience. Strong experience collaborating with cross-functional teams in Agile environments while delivering production-ready solutions.`,
  skillTags: [
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Web Designer",
  ],
};

export const skills = [
  { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-text-primary" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { name: "HTML/CSS", icon: <SiHtml5 className="text-[#E34F26]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "Blockchain", icon: <FaLink className="text-[#1A1A5A] dark:text-[#E2E8F0]" /> },
  { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
];

export const experiences: Experience[] = [
  {
    title: "Senior Frontend Developer",
    company: "Yitro Tech Pvt Ltd",
    period: "Mar 2026 – Jul 2026",
    description:
      ["Architected the AfricanoEv platform from scratch using Next.js, TypeScript, and Tailwind CSS.",
        "Integrated RESTful APIs using TanStack Query, implementing efficient caching, background refetching, and query invalidation.",
        "Implemented secure authentication and authorization using NextAuth.js.",
        "Built reusable UI components and scalable frontend architecture to accelerate feature development.",
        "Worked closely with backend teams to integrate APIs and deliver production-ready features.",
        "Optimized frontend performance and improved overall user experience."],
    isCurrent: false
  },
  {
    title: "Full Stack Developer",
    company: "Nibav Lifts",
    period: "Mar 2024 – Mar 2026",
    description: [
      "Developed customer-facing applications for Nibav Customer Site and Elite Customer Site using React.js, Next.js, and TypeScript.",
      "Built Lift Configurator modules allowing customers to customize residential and commercial elevators.",
      "Implemented authentication, REST API integration, and reusable component architecture.",
      "Improved website SEO, Core Web Vitals, and application performance.",
      "Collaborated with UI/UX designers and backend developers in Agile sprints.",
      "Participated in code reviews and maintained high coding standards."
    ],
    isCurrent: false
  },
  {
    title: "MERN Stack Developer",
    company: "Osiz Technologies",
    period: "Jul 2022 – Jan 2024",
    description: ["Developed scalable frontend applications using React.js, Redux Toolkit, RTK Query, and Tailwind CSS.",
      "Built major frontend modules for Champion City Poker and BigShot ICO.",
      "Developed NFT Marketplace features and integrated Web3.js wallet connectivity.",
      "Implemented social authentication and referral management systems.",
      "Integrated Unity WebGL games into React applications.",
      "Developed REST APIs using Node.js and Express.js.",
      "Collaborated with cross-functional teams following Agile methodologies."],
    isCurrent: false
  },
  {
    title: "Programmer",
    company: "Netcom Computers Pvt Ltd",
    period: "Jan 2021 – Jul 2022",
    description: [
      "Developed frontend modules for GilGal, an e-learning platform similar to Udemy.",
      "Built reusable React components using Material UI and Redux.",
      "Implemented Firebase Authentication including Google Sign-In.",
      "Developed CRM modules and integrated REST APIs.",
      "Contributed to backend API development using Node.js, Express.js, and MongoDB.",
      "Worked with UI/UX designers to deliver responsive web applications."
    ],
    isCurrent: false
  },
];

export const projects: Project[] = [
  {
    title: "Nibav Lifts",
    description:
      "Nibav Lifts is a lift sales company where customers can order and customize home lifts through the website, as well as track their orders seamlessly.",
    url: "https://nibavlifts.in/",
    tags: ["React.js", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "E-commerce"],
  },
  {
    title: "Elite Elevators",
    description:
      "Elite Elevators is a lift sales company that enables customers to order and customize commercial lifts online while conveniently tracking their orders.",
    url: "https://www.eliteelevators.in/",
    tags: ["React.js", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "E-commerce"],
  },
  {
    title: "AfricanoEv",
    description:
      "Developed the frontend architecture from scratch using Next.js and TypeScript, implementing TanStack Query for efficient server-state management. Built reusable UI components and integrated secure authentication with NextAuth.",
    tags: [
      "Next.js", "TypeScript", "Tailwind CSS", "TanStack Query", "NextAuth.js"
    ]
  },
  {
    title: "Champion City Poker",
    description:
      "Champion City Poker is a game environment site, it allows users to buy our native token to play poker games and win rewards. It implements NFT and blockchain game tournaments.",
    url: "https://staging.ccpoker.games/",
    tags: ["React.js", "Redux Toolkit", "RTK Query", "Web3.js", "Node.js", "NFT"]
  },
  {
    title: "BigShot",
    description:
      "BigShot is a Crypto Trade site with Ethereum Blockchain Decentralized, Polygon platform for exchange, profitable farming using BEP-20 tokens, which holds entire concepts of blockchain as trade, liquidity, swap, borrow, lending, deposit, withdraw, stake, and governance.",
    tags: ["DeFi", "Ethereum", "Polygon", "Smart Contracts"],
  },
  {
    title: "PWA Collection",
    description:
      "PWA is developing web applications to provide traditional web apps the look and feel of native apps. This app includes music player, e-commerce, calendar, chat, etc.",
    tags: ["PWA", "React", "Redux Toolkit", "RTK Query", "Mobile-First"],
  },
  {
    title: "GilGal",
    description:
      "Gilgal is an online learning app personalized for CBSE, ICSE & State Board students.",
    tags: ["EdTech", "React", "Node.js"],
  }
];

export const stackOverflow: StackOverflowStats = {
  reputation: 1179,
  reach: "317k",
  answers: 85,
  goldBadges: 2,
  silverBadges: 17,
  bronzeBadges: 31,
  profileUrl: "https://stackoverflow.com/users/ganesh-mb",
};

export const codingProfiles = [
  {
    name: "Edabit",
    url: "https://edabit.com/user/wNwFfk4beypxgvLve",
    icon: <FaCode className="text-[#36B63E]" />,
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/user8794VT/",
    icon: <SiLeetcode className="text-[#FFA116]" />,
  },
];

export const socialLinks: SocialLink[] = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/ganesh-jdev/", icon: <FaLinkedin />, color: "#0A66C2" },
  { name: "GitHub", url: "https://github.com/mbganesh", icon: <FaGithub />, color: "var(--text-primary)" },
  { name: "Facebook", url: "https://www.facebook.com/ganesh.jdev", icon: <FaFacebook />, color: "#1877F2" },
  { name: "Instagram", url: "https://www.instagram.com/mb_ga.ne.sh_dev", icon: <FaInstagram />, color: "#E4405F" },
  { name: "X", url: "https://x.com/Ganesh_jdev", icon: <FaXTwitter />, color: "var(--text-primary)" },
  { name: "WhatsApp", url: "https://wa.me/+918489991253", icon: <FaWhatsapp />, color: "#25D366" },
  { name: "YouTube", url: "https://www.youtube.com/@GaneshJDev", icon: <FaYoutube />, color: "#FF0000" },
  { name: "Snapchat", url: "https://www.snapchat.com/add/ganesh_dev17", icon: <FaSnapchat />, color: "#FFFC00" },
  { name: "Discord", url: "https://discord.com/users/1346413120310083594", icon: <FaDiscord />, color: "#5865F2" },
  { name: "Gmail", url: "mailto:mbganesh.jdev@gmail.com", icon: <FaEnvelope />, color: "#EA4335" },
  { name: "Spotify", url: "https://open.spotify.com/user/t1fab1nvzpqh9jo05lwls0uuz", icon: <FaSpotify />, color: "#1DB954" },
];
