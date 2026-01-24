"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ParallaxSection } from "@/components/ui/ParallaxSection";
import { PROJECTS } from "@/lib/constants";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    // Trigger entrance animation
    setIsLoaded(true);

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
    return () => window.removeEventListener("scroll", handleScroll);
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
    <div className="min-h-screen ">
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
          <div
            className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            {/* Category badge */}
            <div
              className="inline-block mb-6 px-4 py-2 bg-orange-600/20 backdrop-blur-sm border border-orange-600/30 rounded-full transition-all duration-700 delay-200"
              style={{
                transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                opacity: isLoaded ? 1 : 0,
              }}
            >
              <span className="text-orange-400 font-mono text-xs uppercase tracking-widest">
                {project.category}
              </span>
            </div>

            {/* Title with split reveal */}
            <h1
              className="font-serif text-6xl md:text-8xl text-white mb-8 leading-tight transition-all duration-1000 delay-300"
              style={{
                transform: isLoaded ? "translateY(0)" : "translateY(30px)",
                opacity: isLoaded ? 1 : 0,
              }}
            >
              {project.title}
            </h1>

            {/* Description */}
            <p
              className="text-xl md:text-2xl text-stone-300 font-light max-w-3xl mx-auto mb-12 transition-all duration-1000 delay-500"
              style={{
                transform: isLoaded ? "translateY(0)" : "translateY(30px)",
                opacity: isLoaded ? 1 : 0,
              }}
            >
              {project.description}
            </p>

            {/* Meta info */}
            <div
              className="flex flex-wrap justify-center gap-8 text-stone-400 font-mono text-sm transition-all duration-1000 delay-700"
              style={{
                transform: isLoaded ? "translateY(0)" : "translateY(30px)",
                opacity: isLoaded ? 1 : 0,
              }}
            >
              <div>
                <span className="text-stone-500">Role:</span> {project.role}
              </div>
              <div>
                <span className="text-stone-500">Focus:</span> {project.focus}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
          style={{ opacity: heroOpacity }}
        >
          <span className="text-xs font-mono uppercase tracking-wider">
            Scroll to explore
          </span>
        </div>

        {/* Back button */}
        {/* <Link
          href="/#work"
          className="absolute top-8 left-8 flex items-center gap-2 text-white/80 hover:text-white transition-colors z-20 group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          <span className="font-medium">Back to Work</span>
        </Link> */}
      </section>

      {/* Content Section with Parallax Layers */}
      <section id="overview" className="relative ">
        {/* Overview Section */}
        <div className="relative py-32 px-6 lg:px-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-serif text-5xl text-stone-900 mb-6">
                Overview
              </h2>
              <p className="text-xl text-stone-600 leading-relaxed mb-8">
                {project.description}
              </p>
              <div className="space-y-4 border-l-2 border-orange-600 pl-6">
                <div>
                  <h4 className="font-semibold text-stone-900 mb-1">Role</h4>
                  <p className="text-stone-600">{project.role}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-1">Focus</h4>
                  <p className="text-stone-600">{project.focus}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-1">Outcome</h4>
                  <p className="text-stone-600">{project.outcome}</p>
                </div>
              </div>
            </div>

            <ParallaxSection speed={0.2} direction="down">
              <div className="bg-gradient-to-br from-stone-100 to-stone-200 aspect-square rounded-lg shadow-xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-7xl font-serif text-stone-800 mb-4">
                    {project.outcome.match(/\d+/)?.[0] || "100"}%
                  </div>
                  <p className="text-stone-600 font-medium">Success Rate</p>
                </div>
              </div>
            </ParallaxSection>
          </div>
        </div>

        {/* Challenge Section */}
        <div
          id="challenges"
          className="relative py-24 px-6 lg:px-12 bg-gradient-to-b from-stone-50 to-stone-100"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-5xl text-stone-900 mb-12">
              The Challenge
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["User Research", "Design Strategy", "Implementation"].map(
                (item, index) => (
                  <ParallaxSection
                    key={item}
                    speed={0.1 + index * 0.05}
                    className="bg-white p-8 rounded-lg shadow-lg"
                  >
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                      <span className="text-orange-600 font-bold text-xl">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-stone-900 mb-3">
                      {item}
                    </h3>
                    <p className="text-stone-600">
                      Detailed analysis and strategic approach to solving
                      complex user experience challenges through data-driven
                      decisions.
                    </p>
                  </ParallaxSection>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Solution Section with floating elements */}
        <div
          id="solution"
          className="relative py-32 px-6 lg:px-12 max-w-6xl mx-auto overflow-hidden"
        >
          {/* Floating background shapes */}
          <ParallaxSection
            speed={0.8}
            className="absolute top-0 right-0 w-96 h-96 -mr-48"
          >
            <div className="w-full h-full bg-gradient-to-br from-orange-200 to-purple-200 rounded-full blur-3xl opacity-30" />
          </ParallaxSection>

          <ParallaxSection
            speed={0.6}
            className="absolute bottom-0 left-0 w-64 h-64 -ml-32"
          >
            <div className="w-full h-full bg-gradient-to-tr from-blue-200 to-green-200 rounded-full blur-3xl opacity-30" />
          </ParallaxSection>

          <div className="relative z-10">
            <ParallaxSection speed={0.25}>
              <h2 className="font-serif text-5xl text-stone-900 mb-8">
                The Solution
              </h2>
              <p className="text-xl text-stone-600 leading-relaxed max-w-3xl mb-16">
                A comprehensive approach combining user research, iterative
                design, and data-driven decision making to create an intuitive
                experience that exceeded business goals.
              </p>
            </ParallaxSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <ParallaxSection speed={0.35}>
                <div className="bg-white/80 backdrop-blur-sm p-12 rounded-2xl shadow-xl border border-stone-200">
                  <h3 className="text-2xl font-semibold text-stone-900 mb-4">
                    Design Process
                  </h3>
                  <ul className="space-y-3 text-stone-600">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mt-2" />
                      <span>User research and persona development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mt-2" />
                      <span>Wireframing and prototyping</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mt-2" />
                      <span>Usability testing and iteration</span>
                    </li>
                  </ul>
                </div>
              </ParallaxSection>

              <ParallaxSection speed={0.45}>
                <div className="bg-gradient-to-br from-orange-600 to-orange-700 p-12 rounded-2xl shadow-xl text-white">
                  <h3 className="text-2xl font-semibold mb-4">Key Results</h3>
                  <p className="text-orange-100 mb-6">{project.outcome}</p>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all hover:scale-105"
                  >
                    Discuss Your Project
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </ParallaxSection>
            </div>
          </div>
        </div>

        {/* Next Project Teaser */}
        <div className="relative pb-24 px-6 lg:px-12 bg-stone-900 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <ParallaxSection speed={0.2}>
              <h3 className="text-stone-400 font-mono text-sm uppercase tracking-widest mb-4">
                More Work
              </h3>
              <Link
                href="/#work"
                className="inline-flex items-center gap-3 font-serif text-4xl hover:text-orange-600 transition-colors group"
              >
                Explore All Projects
                <ArrowUpRight className="w-8 h-8 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </ParallaxSection>
          </div>
        </div>
      </section>
    </div>
  );
}
