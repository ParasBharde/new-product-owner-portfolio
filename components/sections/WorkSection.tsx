import { Reveal } from '@/components/ui/Reveal';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { PROJECTS } from '@/lib/constants';

/**
 * Work section displaying featured projects
 */
export function WorkSection() {
  return (
    <section id="work" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      <Reveal>
        <div className="mb-24">
          <h2 className="font-serif text-5xl text-stone-900 mb-6">
            Selected Works
          </h2>
          <p className="text-stone-500 max-w-xl">
            A collection of complex problems simplified into intuitive
            experiences.
          </p>
        </div>
      </Reveal>

      <div className="space-y-32">
        {PROJECTS.map((project, index) => (
          <Reveal key={project.id}>
            <ProjectCard project={project} reversed={index % 2 !== 0} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
