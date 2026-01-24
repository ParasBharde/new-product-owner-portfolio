import type {
  NavLink,
  Project,
  Experience,
  Tool,
  Principle,
  SocialLink,
  ContactInfo,
  Recommendation,
} from "./types";
import portfolioData from "../portfolio.json";
import Img from "../assests/Profile.jpg";

/**
 * Brand name
 */
export const BRAND_NAME = portfolioData.personal.brandName;

/**
 * Site title and description for SEO
 */
export const SITE_TITLE = portfolioData.seo.title;
export const SITE_DESCRIPTION = portfolioData.seo.description;
export const SITE_URL = portfolioData.seo.url;
export const SITE_KEYWORDS = portfolioData.seo.keywords;

/**
 * Navigation links for header
 */
export const NAV_LINKS: NavLink[] = [
  { label: "Philosophy", href: "#about" },
  { label: "Selected Work", href: "#work" },
  { label: "Process", href: "#process" },
];

export const CASE_NAV_LINKS: NavLink[] = [
  { label: "Overview", href: "#overview" },
  { label: "Challenges", href: "#challenges" },
  { label: "Solution", href: "#solution" },
];

/**
 * Mobile navigation links (includes Contact)
 */
export const MOBILE_NAV_LINKS: NavLink[] = [
  { label: "Philosophy", href: "#about" },
  { label: "Selected Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

/**
 * Hero section content
 */
export const HERO = {
  tagline: portfolioData.personal.role,
  headline: portfolioData.hero.headline,
  headlineItalic: portfolioData.hero.headlineItalic,
  description: portfolioData.personal.description,
  ctaText: portfolioData.hero.ctaText,
  ctaHref: portfolioData.hero.ctaHref,
  location: portfolioData.personal.location,
  experience: portfolioData.personal.experience,
};

/**
 * About/Philosophy section content
 */
export const PHILOSOPHY = {
  title: portfolioData.philosophy.title,
  subtitle: portfolioData.philosophy.subtitle,
  content: portfolioData.philosophy.content.map((item) => ({
    text: item.emphasis,
    emphasis: !!item.emphasis,
    paragraph: item.paragraph,
  })),
};

export const Profile_Img = Img;

/**
 * Philosophy principles grid
 */
export const PRINCIPLES: Principle[] = portfolioData.philosophy.principles;

/**
 * Projects/Selected works
 */
export const PROJECTS: Project[] = portfolioData.projects;

/**
 * Tools and skills
 */
export const TOOLS: Tool[] = portfolioData.tools;

/**
 * Experience timeline
 */
export const EXPERIENCES: Experience[] = portfolioData.experience;

/**
 * Contact information
 */
export const CONTACT: ContactInfo = {
  email: portfolioData.contact.email,
  linkedin: portfolioData.contact.linkedin,
  location: portfolioData.personal.location,
  status: portfolioData.contact.status,
};

/**
 * Footer social links
 */
export const FOOTER_LINKS: SocialLink[] = portfolioData.social;

/**
 * Copyright year
 */
export const COPYRIGHT_YEAR = portfolioData.footer.copyrightYear;
export const COPYRIGHT_NAME = portfolioData.footer.copyrightName;

/**
 * Recommendations/Testimonials
 */
export const RECOMMENDATIONS: Recommendation[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "VP of Product",
    company: "TechCorp",
    content:
      "An exceptional product owner who consistently delivers value. Their ability to balance user needs with business objectives is remarkable.",
  },
  {
    id: "2",
    name: "David Chen",
    role: "Engineering Lead",
    company: "StartupXYZ",
    content:
      "Working with them was a game-changer for our team. They brought clarity to complex problems and fostered true collaboration.",
  },
  {
    id: "3",
    name: "Maria Rodriguez",
    role: "UX Designer",
    company: "DesignHub",
    content:
      "A visionary leader who understands the importance of user-centered design. Their strategic thinking elevated our entire product.",
  },
  {
    id: "4",
    name: "James Thompson",
    role: "CEO",
    company: "InnovateLabs",
    content:
      "Their agile mindset and ability to drive outcomes made them an invaluable asset. Highly recommend for any product leadership role.",
  },
  {
    id: "5",
    name: "Lisa Wang",
    role: "Scrum Master",
    company: "AgileFirst",
    content:
      "A natural product owner with excellent stakeholder management skills. They transformed how our team approached product development.",
  },
  {
    id: "6",
    name: "Michael Brown",
    role: "CTO",
    company: "CloudTech",
    content:
      "Exceptional at turning ambiguous requirements into clear roadmaps. Their leadership and product intuition are second to none.",
  },
];
