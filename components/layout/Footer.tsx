"use client";

import Link from "next/link";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  PenTool,
  ArrowUpRight,
  Send,
  Sparkles,
  Facebook,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ParallaxSection } from "@/components/ui/ParallaxSection";
import {
  CONTACT,
  FOOTER_LINKS,
  COPYRIGHT_YEAR,
  COPYRIGHT_NAME,
} from "@/lib/constants";
import { useState } from "react";

// Icon mapping by label
const iconByLabel: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  LinkedIn: Linkedin,
  Github: Github,
  GitHub: Github,
  Twitter: Twitter,
  Facebook: Facebook,
  Medium: PenTool,
  Blog: PenTool,
};

/**
 * Modern redesigned footer with cool interactive elements
 */
export function Footer() {
  const [email, setEmail] = useState("");
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/15 to-emerald-500/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24">
        {/* Main CTA Section */}
        <div className="mb-24 text-center">
          <ParallaxSection speed={0.3}>
            <Reveal>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-orange-500/30 backdrop-blur-sm border border-orange-500/50 rounded-full shadow-lg">
                <Sparkles className="w-4 h-4 text-orange-300" />
                <span className="text-orange-300 font-mono text-xs uppercase tracking-widest font-semibold">
                  Let's Connect
                </span>
              </div>
              <h2 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight drop-shadow-lg">
                Ready to create <br />
                <span className="bg-gradient-to-r from-orange-300 via-orange-400 to-purple-400 bg-clip-text text-transparent italic">
                  something amazing?
                </span>
              </h2>
              <p className="text-xl text-slate-50 font-light max-w-2xl mx-auto mb-12 drop-shadow-md">
                Let's turn your vision into reality. Reach out and let's discuss
                how we can work together.
              </p>
            </Reveal>
          </ParallaxSection>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Contact Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email Card */}
            <Reveal>
              <Link
                href={`mailto:${CONTACT.email}`}
                className=" block group relative bg-slate-800/80 backdrop-blur-md border border-slate-600/70 rounded-2xl p-8 hover:bg-slate-700/80 hover:border-orange-500/80 transition-all duration-300 overflow-hidden shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/40 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-orange-500/40 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <Mail className="w-7 h-7 text-orange-300" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    Email Me
                  </h3>
                  <p className="text-slate-200 text-sm mb-4 font-medium">
                    Drop me a line anytime
                  </p>
                  <span className="text-orange-300 text-sm font-semibold group-hover:underline">
                    {CONTACT.email}
                  </span>
                  <ArrowUpRight className="absolute top-6 right-6 w-5 h-5 text-orange-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            </Reveal>

            {/* LinkedIn Card */}
            <Reveal delay={100}>
              <Link
                href={`https://${CONTACT.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block group relative bg-slate-800/80 backdrop-blur-md border border-slate-600/70 rounded-2xl p-8 hover:bg-slate-700/80 hover:border-blue-500/80 transition-all duration-300 overflow-hidden shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/40 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-blue-500/40 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <Linkedin className="w-7 h-7 text-blue-300" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    LinkedIn
                  </h3>
                  <p className="text-slate-200 text-sm mb-4 font-medium">
                    Let's connect professionally
                  </p>
                  <span className="text-blue-300 text-sm font-semibold group-hover:underline">
                    View Profile
                  </span>
                  <ArrowUpRight className="absolute top-6 right-6 w-5 h-5 text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            </Reveal>

            {/* Location Card */}
            <Reveal delay={200} className="md:col-span-2">
              <div className="relative bg-slate-800/80 backdrop-blur-md border border-slate-600/70 rounded-2xl p-8 overflow-hidden shadow-2xl">
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/40 rounded-full blur-2xl" />
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-14 h-14 bg-purple-500/40 rounded-2xl flex items-center justify-center shadow-lg">
                    <MapPin className="w-7 h-7 text-purple-300" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">
                      Based in
                    </h3>
                    <p className="text-slate-200 font-medium">
                      {CONTACT.location}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Status & Newsletter */}
          <div className="lg:col-span-5 space-y-6">
            {/* Status Card */}
            <Reveal delay={150}>
              <div className="relative bg-gradient-to-br from-orange-500/30 to-purple-500/30 backdrop-blur-md border border-orange-500/60 rounded-2xl p-8 overflow-hidden shadow-2xl">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/50 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/70" />
                    <h3 className="text-white font-bold text-lg">
                      Current Status
                    </h3>
                  </div>
                  <p className="text-white leading-relaxed font-medium">
                    {CONTACT.status}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Newsletter Card */}
            <Reveal delay={200}>
              <div className="relative bg-slate-800/80 backdrop-blur-md border border-slate-600/70 rounded-2xl p-8 overflow-hidden shadow-2xl">
                <div className="relative z-10">
                  <h3 className="text-white font-bold text-lg mb-2">
                    Stay Updated
                  </h3>
                  <p className="text-slate-200 text-sm mb-4 font-medium">
                    Get notified about new projects and insights
                  </p>
                  <form
                    onSubmit={handleNewsletterSubmit}
                    className="flex gap-2"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="flex-1 bg-slate-700/60 border border-slate-600/70 rounded-lg px-4 py-2 text-white placeholder-slate-300 focus:outline-none focus:border-orange-500/80 focus:bg-slate-700/80 transition-colors shadow-inner"
                    />
                    <button
                      type="submit"
                      className="bg-orange-600 hover:bg-orange-500 text-white p-2 rounded-lg transition-colors shadow-lg hover:shadow-orange-500/60"
                      aria-label="Subscribe"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Social Links Section */}
        <Reveal delay={250}>
          <div className="mb-16 text-center">
            <p className="text-slate-400 text-sm mb-6 uppercase tracking-wider font-mono">
              Connect With Me
            </p>
            <div className="flex justify-center items-center gap-4">
              {FOOTER_LINKS.map((link, index) => {
                const Icon = iconByLabel[link.label] || Linkedin;
                return (
                  <Link
                    key={`${link.label}-${index}`}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    onMouseEnter={() => setHoveredSocial(index)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    className="relative group"
                    aria-label={link.label}
                  >
                    {/* Glow effect */}
                    <div
                      className={`absolute inset-0 bg-orange-500/40 rounded-full blur-xl transition-opacity duration-300 ${hoveredSocial === index ? "opacity-100" : "opacity-0"}`}
                    />

                    {/* Icon container */}
                    <div className="relative w-14 h-14 bg-slate-800/80 border border-slate-600/70 rounded-full flex items-center justify-center hover:bg-orange-600 hover:border-orange-600 hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-xl">
                      <Icon className="w-6 h-6 text-slate-200 group-hover:text-white transition-colors" />
                    </div>

                    {/* Label on hover */}
                    <span
                      className={`absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-slate-200 whitespace-nowrap transition-opacity duration-300 font-semibold ${hoveredSocial === index ? "opacity-100" : "opacity-0"}`}
                    >
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Bottom Bar */}
        <div className="border-t border-slate-600/60 pt-8">
          <Reveal delay={300}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-300 text-sm font-medium text-center w-full">
                &copy; {COPYRIGHT_YEAR} {COPYRIGHT_NAME}. Crafted with passion.
              </p>
              {/* <div className="flex items-center gap-6 text-sm">
                <Link
                  href="#about"
                  className="text-slate-300 hover:text-orange-400 transition-colors font-semibold"
                >
                  About
                </Link>
                <Link
                  href="#work"
                  className="text-slate-300 hover:text-orange-400 transition-colors font-semibold"
                >
                  Work
                </Link>
                <Link
                  href="#process"
                  className="text-slate-300 hover:text-orange-400 transition-colors font-semibold"
                >
                  Process
                </Link>
              </div> */}
            </div>
          </Reveal>
        </div>
      </div>
    </footer>
  );
}
