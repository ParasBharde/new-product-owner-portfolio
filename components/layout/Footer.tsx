'use client';

import Link from "next/link";
import { Mail, MapPin, Github, Linkedin, Twitter, PenTool, ArrowUpRight, Send, Sparkles } from "lucide-react";
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
const iconByLabel: Record<string, React.ComponentType<{ className?: string }>> = {
  'LinkedIn': Linkedin,
  'Github': Github,
  'GitHub': Github,
  'Twitter': Twitter,
  'Medium': PenTool,
  'Blog': PenTool,
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
      className="relative overflow-hidden bg-gradient-to-br from-stone-950 via-stone-900 to-orange-950"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-600/30 to-purple-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/20 to-green-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24">
        {/* Main CTA Section */}
        <div className="mb-24 text-center">
          <ParallaxSection speed={0.3}>
            <Reveal>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-orange-600/20 backdrop-blur-sm border border-orange-600/30 rounded-full">
                <Sparkles className="w-4 h-4 text-orange-400" />
                <span className="text-orange-400 font-mono text-xs uppercase tracking-widest">
                  Let's Connect
                </span>
              </div>
              <h2 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight">
                Ready to create <br />
                <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent italic">
                  something amazing?
                </span>
              </h2>
              <p className="text-xl text-stone-300 font-light max-w-2xl mx-auto mb-12">
                Let's turn your vision into reality. Reach out and let's discuss how we can work together.
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
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-orange-600/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-orange-600/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Mail className="w-7 h-7 text-orange-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">Email Me</h3>
                  <p className="text-stone-400 text-sm mb-4">Drop me a line anytime</p>
                  <span className="text-orange-400 text-sm font-medium group-hover:underline">
                    {CONTACT.email}
                  </span>
                  <ArrowUpRight className="absolute top-6 right-6 w-5 h-5 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            </Reveal>

            {/* LinkedIn Card */}
            <Reveal delay={100}>
              <Link
                href={`https://${CONTACT.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-blue-600/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Linkedin className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">LinkedIn</h3>
                  <p className="text-stone-400 text-sm mb-4">Let's connect professionally</p>
                  <span className="text-blue-400 text-sm font-medium group-hover:underline">
                    View Profile
                  </span>
                  <ArrowUpRight className="absolute top-6 right-6 w-5 h-5 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            </Reveal>

            {/* Location Card */}
            <Reveal delay={200}>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 overflow-hidden md:col-span-2">
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-600/20 rounded-full blur-2xl" />
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-14 h-14 bg-purple-600/20 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Based in</h3>
                    <p className="text-stone-400">{CONTACT.location}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Status & Newsletter */}
          <div className="lg:col-span-5 space-y-6">
            {/* Status Card */}
            <Reveal delay={150}>
              <div className="relative bg-gradient-to-br from-orange-600/20 to-purple-600/20 backdrop-blur-sm border border-orange-600/30 rounded-2xl p-8 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-600/30 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <h3 className="text-white font-semibold text-lg">Current Status</h3>
                  </div>
                  <p className="text-stone-300 leading-relaxed">
                    {CONTACT.status}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Newsletter Card */}
            <Reveal delay={200}>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-white font-semibold text-lg mb-2">Stay Updated</h3>
                  <p className="text-stone-400 text-sm mb-4">
                    Get notified about new projects and insights
                  </p>
                  <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-stone-500 focus:outline-none focus:border-orange-600/50 transition-colors"
                    />
                    <button
                      type="submit"
                      className="bg-orange-600 hover:bg-orange-700 text-white p-2 rounded-lg transition-colors"
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
            <p className="text-stone-500 text-sm mb-6 uppercase tracking-wider font-mono">
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
                    <div className={`absolute inset-0 bg-orange-600/30 rounded-full blur-xl transition-opacity duration-300 ${hoveredSocial === index ? 'opacity-100' : 'opacity-0'}`} />

                    {/* Icon container */}
                    <div className="relative w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-orange-600 hover:border-orange-600 hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                      <Icon className="w-6 h-6 text-stone-400 group-hover:text-white transition-colors" />
                    </div>

                    {/* Label on hover */}
                    <span className={`absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-stone-400 whitespace-nowrap transition-opacity duration-300 ${hoveredSocial === index ? 'opacity-100' : 'opacity-0'}`}>
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <Reveal delay={300}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-stone-500 text-sm">
                &copy; {COPYRIGHT_YEAR} {COPYRIGHT_NAME}. Crafted with passion.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <Link href="#about" className="text-stone-500 hover:text-orange-400 transition-colors">
                  About
                </Link>
                <Link href="#work" className="text-stone-500 hover:text-orange-400 transition-colors">
                  Work
                </Link>
                <Link href="#process" className="text-stone-500 hover:text-orange-400 transition-colors">
                  Process
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </footer>
  );
}
