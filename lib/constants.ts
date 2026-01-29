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
import percent_Img from "../assests/image.webp";
import agile_transformation from "@/assests/Work/agile_transformation.webp";
import production_delivery from "@/assests/Work/production_delivery.webp";
import agile_leadership from "@/assests/Work/agile_leadership.webp";
import { StaticImageData } from "next/image";

export type ProjectImageKey = keyof typeof projectImages;

// Image mapping object
export const projectImages: Record<string, StaticImageData> = {
  agile_transformation,
  production_delivery,
  agile_leadership,
  // Add more images here as you add them
  // product_delivery: product_delivery_img,
  // leadership: leadership_img,
};

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
  { label: "Experience", href: "#experience" },
];

export const CASE_NAV_LINKS: NavLink[] = [
  { label: "Overview", href: "#overview" },
  { label: "Challenges", href: "#challenges" },
  { label: "Solution", href: "#solution" },
];

export const MOBILE_CASE_NAV_LINKS: NavLink[] = [
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
  { label: "Experience", href: "#experience" },
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

export const Percent_Img = percent_Img;

/**
 * Philosophy principles grid
 */
export const PRINCIPLES: Principle[] = portfolioData.philosophy.principles;

/**
 * Projects/Selected works - with resolved images
 */
export const PROJECTS: Project[] = portfolioData.projects.map((project) => ({
  ...project,
  image:
    project.imageKey && projectImages[project.imageKey as ProjectImageKey]
      ? projectImages[project.imageKey as ProjectImageKey]
      : undefined,
}));
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
export const RECOMMENDATIONS: Recommendation[] = portfolioData.recommendations;
