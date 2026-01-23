import type { Experience } from '@/lib/types';

interface ExperienceCardProps {
  experience: Experience;
}

/**
 * Experience card component for timeline items
 */
export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="relative">
      {/* Timeline dot */}
      <div
        className={`absolute -left-[41px] lg:-left-[57px] top-2 w-4 h-4 rounded-full border-4 border-[#F9F8F6] ${
          experience.highlighted ? 'bg-orange-600' : 'bg-stone-300'
        }`}
        aria-hidden="true"
      />

      {/* Experience content */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
        <h4 className="text-xl font-bold text-stone-900">{experience.role}</h4>
        <span className="font-mono text-sm text-stone-400">
          {experience.time}
        </span>
      </div>
      <p className="text-stone-800 mb-4 font-medium">{experience.company}</p>
      <p className="text-stone-600 leading-relaxed max-w-2xl">
        {experience.description}
      </p>
    </div>
  );
}
