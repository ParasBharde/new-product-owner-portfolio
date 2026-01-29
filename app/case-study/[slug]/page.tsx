"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ChevronRight, Sparkles } from "lucide-react";
import { ParallaxSection } from "@/components/ui/ParallaxSection";
import { CaseStudyVisual } from "@/components/ui/CaseStudyVisual";
import { PROJECTS } from "@/lib/constants";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Case Study Detail Page with Parallax Effect
 * Opens with cool layered parallax animation
 */
export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const project = PROJECTS.find((p) => p.id === slug);
  const currentIndex = PROJECTS.findIndex((p) => p.id === slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  useEffect(() => {
    // Trigger entrance animation with a slight delay for smoother experience
    const timer = setTimeout(() => setIsLoaded(true), 100);

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Case Study Not Found</h1>
          <Link href="/#work" className="text-orange-600 hover:underline">
            Return to Work
          </Link>
        </div>
      </div>
    );
  }

  // Parallax calculations for hero
  const heroOpacity = Math.max(1 - scrollY / 800, 0);
  const heroScale = Math.max(1 - scrollY / 3000, 0.85);

  return (
    <div className="min-h-screen">
      {/* Parallax Hero Section */}
      <section className="relative h-screen overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-orange-900">
        {/* Animated background layers */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-purple-600/20"
          style={{
            transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0002})`,
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 30% 50%, rgba(251, 146, 60, 0.15), transparent 50%)",
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 70% 60%, rgba(168, 85, 247, 0.1), transparent 50%)",
            transform: `translateY(${scrollY * 0.25}px)`,
          }}
        />

        {/* Hero Content with layered parallax */}
        <div
          className="relative z-10 h-full flex items-center justify-center px-6 lg:px-12"
          style={{
            opacity: heroOpacity,
            transform: `scale(${heroScale}) translateY(${scrollY * 0.1}px)`,
          }}
        >
          <div className="max-w-5xl mx-auto text-center">
            {/* Category badge */}
            <motion.div
              className="inline-block mb-6 px-4 py-2 bg-orange-600/20 backdrop-blur-sm border border-orange-600/30 rounded-full"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-orange-400 font-mono text-xs uppercase tracking-widest">
                {project.category}
              </span>
            </motion.div>

            {/* Title with split reveal */}
            <motion.h1
              className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {project.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-stone-300 font-light max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {project.description}
            </motion.p>

            {/* Meta info */}
            <motion.div
              className="flex flex-wrap justify-center gap-6 md:gap-8 text-stone-400 font-mono text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <span className="text-stone-500">Role:</span>
                <span className="text-stone-300">{project.role}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-stone-500">Focus:</span>
                <span className="text-stone-300">{project.focus}</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/60"
          style={{ opacity: heroOpacity }}
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: heroOpacity } : {}}
          transition={{ delay: 0.8 }}
        >
          <span className="text-xs font-mono uppercase tracking-wider">
            Scroll to explore
          </span>
          <motion.div
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 bg-white/70 rounded-full"
              animate={{ opacity: [1, 0.5, 1], y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Content Section with Parallax Layers */}
      <section id="overview" className="relative">
        {/* Overview Section */}
        <div className="relative py-24 md:py-32 px-6 lg:px-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-orange-500" />
                <span className="text-orange-600 font-mono text-xs uppercase tracking-widest">
                  Overview
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">
                Project Details
              </h2>
              <p className="text-lg md:text-xl text-stone-600 leading-relaxed mb-8">
                {project.description}
              </p>
              <div className="space-y-4 border-l-2 border-orange-600 pl-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <h4 className="font-semibold text-stone-900 mb-1">Role</h4>
                  <p className="text-stone-600">{project.role}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <h4 className="font-semibold text-stone-900 mb-1">Focus</h4>
                  <p className="text-stone-600">{project.focus}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="font-semibold text-stone-900 mb-1">Outcome</h4>
                  <p className="text-stone-600">{project.outcome}</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ParallaxSection speed={0.15} direction="down">
                <CaseStudyVisual category={project.category} />
              </ParallaxSection>
            </motion.div>
          </div>
        </div>

        {/* Challenge Section */}
        <div
          id="challenges"
          className="relative py-24 px-6 lg:px-12 bg-gradient-to-b from-stone-50 to-stone-100"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-orange-500" />
                <span className="text-orange-600 font-mono text-xs uppercase tracking-widest">
                  Challenges
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-stone-900">
                The Challenge
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["User Research", "Design Strategy", "Implementation"].map(
                (item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                  >
                    <ParallaxSection
                      speed={0.02 + index * 0.01}
                      className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center mb-4">
                        <span className="text-orange-600 font-bold text-xl">
                          {index + 1}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-stone-900 mb-3">
                        {item}
                      </h3>
                      <p className="text-stone-600 leading-relaxed">
                        Detailed analysis and strategic approach to solving
                        complex user experience challenges through data-driven
                        decisions.
                      </p>
                    </ParallaxSection>
                  </motion.div>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Solution Section with floating elements */}
        <div
          id="solution"
          className="relative py-24 md:py-32 px-6 lg:px-12 max-w-6xl mx-auto overflow-hidden"
        >
          {/* Floating background shapes */}
          <ParallaxSection
            speed={0.5}
            className="absolute top-0 right-0 w-96 h-96 -mr-48 -mt-24"
          >
            <div className="w-full h-full bg-gradient-to-br from-orange-200 to-purple-200 rounded-full blur-3xl opacity-30" />
          </ParallaxSection>

          <ParallaxSection
            speed={0.4}
            className="absolute bottom-0 left-0 w-64 h-64 -ml-32 -mb-16"
          >
            <div className="w-full h-full bg-gradient-to-tr from-blue-200 to-green-200 rounded-full blur-3xl opacity-30" />
          </ParallaxSection>

          <div className="relative z-10">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-orange-500" />
                <span className="text-orange-600 font-mono text-xs uppercase tracking-widest">
                  Solution
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">
                The Solution
              </h2>
              <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-3xl">
                A comprehensive approach combining user research, iterative
                design, and data-driven decision making to create an intuitive
                experience that exceeded business goals.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <ParallaxSection speed={0.2}>
                  <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-xl border border-stone-200 hover:shadow-2xl transition-shadow duration-300">
                    <h3 className="text-2xl font-semibold text-stone-900 mb-6">
                      Design Process
                    </h3>
                    <ul className="space-y-4 text-stone-600">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                        <span>User research and persona development</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                        <span>Wireframing and prototyping</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                        <span>Usability testing and iteration</span>
                      </li>
                    </ul>
                  </div>
                </ParallaxSection>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
              >
                <ParallaxSection speed={0.2}>
                  <div className="bg-gradient-to-br from-orange-600 to-orange-700 p-8 md:p-12 rounded-2xl shadow-xl text-white hover:shadow-2xl transition-shadow duration-300">
                    <h3 className="text-2xl font-semibold mb-4">Key Results</h3>
                    <p className="text-orange-100 mb-6 leading-relaxed">
                      {project.outcome}
                    </p>
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all hover:scale-105 group"
                    >
                      Discuss Your Project
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </ParallaxSection>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Next Project Footer */}
        <div className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-3xl" />
          </div>

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />

          <div className="relative z-10 py-20 md:py-28 px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              {/* Navigation back */}
              <motion.div
                className="mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/#work"
                  className="inline-flex items-center gap-2 text-stone-400 hover:text-white transition-colors group"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <span className="font-mono text-sm uppercase tracking-wider">
                    Back to all projects
                  </span>
                </Link>
              </motion.div>

              {/* Next project teaser */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="text-stone-500 font-mono text-xs uppercase tracking-widest mb-3">
                    Next Case Study
                  </p>
                  <h3 className="font-serif text-3xl md:text-5xl text-white mb-4 leading-tight">
                    {nextProject.title}
                  </h3>
                  <p className="text-stone-400 mb-6 leading-relaxed">
                    {nextProject.description}
                  </p>
                  <Link
                    href={`/case-study/${nextProject.id}`}
                    className="inline-flex items-center gap-3 text-orange-400 hover:text-orange-300 transition-colors group font-medium"
                  >
                    <span>View Project</span>
                    <span className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </Link>
                </motion.div>

                <motion.div
                  className="hidden lg:block"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="relative">
                    {/* Decorative elements */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-20 h-20 border border-orange-500/30 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <motion.div
                      className="absolute -bottom-4 -left-4 w-16 h-16 border border-purple-500/20 rounded-full"
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    {/* Project number */}
                    <div className="relative text-center py-16 px-8 bg-gradient-to-br from-stone-800/50 to-stone-900/50 backdrop-blur-sm rounded-2xl border border-stone-700/50">
                      <span className="text-8xl md:text-9xl font-bold bg-gradient-to-br from-orange-500 via-orange-400 to-purple-500 bg-clip-text text-transparent">
                        {String(
                          (currentIndex + 2) % PROJECTS.length ||
                            PROJECTS.length,
                        ).padStart(2, "0")}
                      </span>
                      <p className="text-stone-500 font-mono text-xs uppercase tracking-widest mt-4">
                        {nextProject.category}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Bottom bar */}
              <motion.div
                className="mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-stone-500 text-sm">
                  &copy; {new Date().getFullYear()} All rights reserved.
                </p>
                <Link
                  href="/#work"
                  className="inline-flex items-center gap-2 text-stone-400 hover:text-orange-400 transition-colors group"
                >
                  <span className="font-mono text-sm">
                    Explore All Projects
                  </span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
