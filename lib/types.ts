import { Interface } from "node:readline";
import { StaticImageData } from "next/image";

/**
 * Navigation link structure
 */
export interface NavLink {
  label: string;
  href: string;
}

/**
 * Project/work item structure
 */
export interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  role: string;
  focus: string;
  outcome: string;
  link: string;
}

/**
 * Experience/timeline item structure
 */
export interface Experience {
  id: string;
  role: string;
  time: string;
  company: string;
  description: string;
  highlighted: boolean;
}

/**
 * Tool/skill item structure
 */
export interface Tool {
  name: string;
  category: string;
}

/**
 * Philosophy principle structure
 */
export interface Principle {
  title: string;
  subtitle: string;
}

/**
 * Social link structure
 */
export interface SocialLink {
  label: string;
  href: string;
  external?: boolean;
}

/**
 * Contact information structure
 */
export interface ContactInfo {
  email: string;
  linkedin: string;
  location: string;
  status: string;
}

/**
 * Recommendation/Testimonial structure
 */
export interface Recommendation {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}
