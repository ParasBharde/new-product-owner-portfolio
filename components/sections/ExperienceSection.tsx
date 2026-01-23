import { Reveal } from '@/components/ui/Reveal';
import { ExperienceCard } from '@/components/ui/ExperienceCard';
import { EXPERIENCES } from '@/lib/constants';

/**
 * Experience section displaying career timeline
 */
export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-24 px-6 lg:px-12 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Section Header */}
        <div className="lg:col-span-1">
          <Reveal>
            <h2 className="font-serif text-3xl font-medium mb-4 text-stone-900">
              Experience
            </h2>
          </Reveal>
        </div>

        {/* Timeline */}
        <div className="lg:col-span-2 space-y-12 border-l border-stone-200 pl-8 lg:pl-12">
          {EXPERIENCES.map((experience, index) => (
            <Reveal key={experience.id} delay={index * 100}>
              <ExperienceCard experience={experience} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
