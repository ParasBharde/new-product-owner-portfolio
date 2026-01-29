"use client";

import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/lib/constants";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

/**
 * Work section displaying featured projects with animated visuals
 */
export function WorkSection() {
  return (
    <section id="work" className="relative py-24 px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle gradient orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(234,88,12,0.2) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <Reveal>
        <div className="mb-24 relative">
          {/* Section label */}
          <motion.div
            className="flex items-center gap-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-5 h-5 text-orange-500" />
            <span className="text-orange-600 font-mono text-xs uppercase tracking-widest">
              Portfolio
            </span>
          </motion.div>

          {/* Section title */}
          <motion.h2
            className="font-serif text-5xl md:text-6xl text-stone-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Selected Works
          </motion.h2>

          {/* Section description */}
          <motion.p
            className="text-stone-500 max-w-xl text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A collection of complex problems simplified into intuitive
            experiences through Agile methodologies and strategic thinking.
          </motion.p>

          {/* Decorative line */}
          <motion.div
            className="absolute -bottom-8 left-0 h-[2px] bg-gradient-to-r from-orange-500 via-orange-300 to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: "200px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </div>
      </Reveal>

      <div className="space-y-32 relative">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            reversed={index % 2 !== 0}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
