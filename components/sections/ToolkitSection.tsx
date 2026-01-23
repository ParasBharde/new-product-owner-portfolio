import { Reveal } from '@/components/ui/Reveal';
import { TOOLS } from '@/lib/constants';

/**
 * Toolkit section displaying tools and skills
 */
export function ToolkitSection() {
  return (
    <section
      id="process"
      className="py-20 border-y border-stone-200 bg-stone-100"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Section Header */}
          <Reveal>
            <h3 className="font-serif text-2xl mb-4 text-stone-900">
              The Toolkit
            </h3>
            <p className="text-stone-500 max-w-sm">
              Tools are just a means to an end, but I am proficient in the
              modern product stack.
            </p>
          </Reveal>

          {/* Tools Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-12">
            {TOOLS.map((tool, index) => (
              <Reveal key={tool.name} delay={index * 50}>
                <div className="flex flex-col">
                  <span className="font-bold text-stone-900 mb-1">
                    {tool.name}
                  </span>
                  <span className="text-xs text-stone-500">
                    {tool.category}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
