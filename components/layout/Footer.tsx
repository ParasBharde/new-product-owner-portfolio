import Link from "next/link";
import { Mail, MapPin, Github, Linkedin, Twitter, PenTool } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import {
  CONTACT,
  FOOTER_LINKS,
  COPYRIGHT_YEAR,
  COPYRIGHT_NAME,
} from "@/lib/constants";

// Icon mapping
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github,
  Linkedin,
  Twitter,
  PenTool,
};

/**
 * Footer section with contact information and social links
 */
export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-stone-900 text-stone-300 py-24 px-6 lg:px-12 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-stone-800 rounded-full blur-3xl opacity-20 -mr-20 -mt-20 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 bg-orange-600 rounded-full blur-3xl opacity-5 -ml-20 -mb-20 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Contact Information */}
          <Reveal>
            <h2 className="font-serif text-5xl md:text-6xl text-white mb-8 leading-tight">
              Let&apos;s build something <br />
              <span className="text-orange-600 italic">remarkable.</span>
            </h2>

            {/* Contact Links with Icons */}
            <div className="space-y-4">
              <Link
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 text-stone-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg">{CONTACT.email}</span>
              </Link>

              <Link
                href={`https://${CONTACT.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-stone-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-lg">{CONTACT.linkedin}</span>
              </Link>

              <div className="flex items-center gap-3 text-stone-500 mt-6">
                <MapPin className="w-5 h-5" />
                <span>{CONTACT.location}</span>
              </div>
            </div>
          </Reveal>

          {/* Status and Availability */}
          <Reveal delay={100}>
            <div className="flex w-full  flex-col justify-end h-full">
              <div className="bg-stone-800/50 rounded-lg p-6 border border-stone-700">
                <h3 className="text-white font-semibold mb-3 text-lg">
                  Current Status
                </h3>
                <p className="text-stone-400 leading-relaxed">
                  {CONTACT.status}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Divider */}
        <div className="border-t border-stone-800 mb-12" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Social Links */}
          <Reveal delay={150}>
            <div className="flex items-center gap-4">
              <span className="text-stone-500 text-sm mr-2">Connect:</span>
              {FOOTER_LINKS.map((link, index) => {
                const Icon = iconMap[link.icon] || Github;
                return (
                  <Link
                    key={`${link.label}-${index}`}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-orange-600 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-900"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                );
              })}
            </div>
          </Reveal>

          {/* Copyright */}
          <Reveal delay={200}>
            <p className="text-stone-600 text-sm">
              &copy; {COPYRIGHT_YEAR} {COPYRIGHT_NAME}. All rights reserved.
            </p>
          </Reveal>
        </div>
      </div>
    </footer>
  );
}
