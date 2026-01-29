"use client";

import Link from "next/link";
import type { Project } from "@/lib/types";
import { AbstractProjectVisual } from "./AbstractProjectVisual";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  reversed?: boolean;
  index: number;
}

export function ProjectCard({ project, reversed = false, index }: ProjectCardProps) {
  return (
    <motion.div
      className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Project Visual */}
      <motion.div
        className={`lg:col-span-7 ${
          reversed ? "order-2" : "order-2 lg:order-1"
        }`}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <div className="relative">
          {/* Glow effect on hover */}
          <motion.div
            className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
            style={{
              background: index === 0
                ? "radial-gradient(ellipse at center, rgba(234,88,12,0.15) 0%, transparent 70%)"
                : index === 1
                ? "radial-gradient(ellipse at center, rgba(168,85,247,0.15) 0%, transparent 70%)"
                : "radial-gradient(ellipse at center, rgba(16,185,129,0.15) 0%, transparent 70%)",
            }}
          />

          {/* Abstract Visual Component */}
          <AbstractProjectVisual
            projectIndex={index}
            category={project.category}
            title={project.title}
          />
        </div>
      </motion.div>

      {/* Project Details */}
      <div
        className={`lg:col-span-5 ${
          reversed ? "order-1" : "order-1 lg:order-2"
        }`}
      >
        {/* Category badge */}
        <motion.div
          initial={{ opacity: 0, x: reversed ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 mb-4"
        >
          <Sparkles className="w-4 h-4 text-orange-500" />
          <span className="text-orange-600 font-mono text-xs uppercase tracking-widest">
            {project.category}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h3
          className="font-serif text-3xl md:text-4xl text-stone-900 mb-6 leading-tight group-hover:text-orange-700 transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {project.title}
        </motion.h3>

        {/* Description */}
        <motion.p
          className="text-stone-600 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {project.description}
        </motion.p>

        {/* Project Details */}
        <motion.ul
          className="text-sm font-mono text-stone-500 space-y-3 mb-8 border-l-2 border-stone-200 pl-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <li className="flex items-start gap-2">
            <span className="text-orange-500 font-semibold">Role:</span>
            <span>{project.role}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500 font-semibold">Focus:</span>
            <span>{project.focus}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500 font-semibold">Outcome:</span>
            <span>{project.outcome}</span>
          </li>
        </motion.ul>

        {/* CTA Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href={`/case-study/${project.id}`}
            className="group/link inline-flex items-center gap-2 text-stone-900 font-medium relative overflow-hidden"
          >
            <span className="relative">
              Read Case Study
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-orange-600 transform origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300" />
            </span>
            <motion.span
              className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 group-hover/link:bg-orange-100 transition-colors"
              whileHover={{ x: 4 }}
            >
              <ArrowRight className="w-4 h-4 text-stone-600 group-hover/link:text-orange-600 transition-colors" />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
