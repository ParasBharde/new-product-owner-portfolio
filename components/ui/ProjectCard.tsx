import Link from "next/link";
import type { Project } from "@/lib/types";
import Image from "next/image";

// 👇 CHANGE THIS INTERFACE
interface ProjectCardProps {
  project: Project;
  reversed?: boolean;
}

// 👇 CHANGE THIS FUNCTION
export function ProjectCard({ project, reversed = false }: ProjectCardProps) {
  return (
    <div className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
      {/* Project Mockup */}
      <div
        className={`lg:col-span-7 ${
          reversed ? "order-2" : "order-2 lg:order-1"
        }`}
      >
        <div className="relative overflow-hidden bg-stone-200 aspect-[16/10] transition-all duration-700 ease-out group-hover:shadow-2xl group-hover:shadow-stone-200/50">
          {/* 👇 CHANGE THIS IMAGE TAG */}
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-all duration-500"
              placeholder="blur"
            />
          )}
        </div>
      </div>

      {/* Project Details */}
      <div
        className={`lg:col-span-5 ${
          reversed ? "order-1" : "order-1 lg:order-2"
        }`}
      >
        <span className="text-orange-600 font-mono text-xs uppercase tracking-widest mb-4 block">
          {project.category}
        </span>
        <h3 className="font-serif text-4xl text-stone-900 mb-6 leading-tight group-hover:italic transition-all">
          {project.title}
        </h3>
        <p className="text-stone-600 mb-8 leading-relaxed">
          {project.description}
        </p>
        <ul className="text-sm font-mono text-stone-500 space-y-2 mb-8 border-l border-stone-300 pl-4">
          <li>Role: {project.role}</li>
          <li>Focus: {project.focus}</li>
          <li>Outcome: {project.outcome}</li>
        </ul>
        <Link
          href={`/case-study/${project.id}`}
          className="inline-flex items-center text-stone-900 font-medium border-b border-stone-900 pb-0.5 hover:text-orange-600 hover:border-orange-600 transition-colors focus:outline-none focus:text-orange-600 focus:border-orange-600"
        >
          Read Case Study
        </Link>
      </div>
    </div>
  );
}

/**
 * Dashboard mockup for SaaS projects
 */
function DashboardMockup() {
  return (
    <div className="absolute inset-10 bg-white shadow-lg flex flex-col">
      <div className="h-6 bg-stone-50 border-b border-stone-100 flex items-center px-4 space-x-2">
        <div className="w-2 h-2 rounded-full bg-stone-300" />
        <div className="w-2 h-2 rounded-full bg-stone-300" />
      </div>
      <div className="flex-1 p-6 space-y-4">
        <div className="w-1/3 h-4 bg-stone-100 rounded" />
        <div className="flex gap-4">
          <div className="w-2/3 h-32 bg-stone-50 rounded border border-stone-100" />
          <div className="w-1/3 h-32 bg-stone-50 rounded border border-stone-100" />
        </div>
      </div>
    </div>
  );
}

/**
 * Mobile mockup for mobile projects
 */
function MobileMockup() {
  return (
    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 h-full bg-white shadow-xl rounded-t-3xl border border-stone-200">
      <div className="h-full p-4 space-y-4">
        <div className="w-full h-32 bg-stone-50 rounded-xl" />
        <div className="w-full h-8 bg-stone-100 rounded" />
        <div className="w-2/3 h-4 bg-stone-50 rounded" />
        <div className="absolute bottom-8 left-4 right-4 h-12 bg-stone-900 rounded-full" />
      </div>
    </div>
  );
}
