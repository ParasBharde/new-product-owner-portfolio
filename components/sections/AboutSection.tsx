import { Reveal } from '@/components/ui/Reveal';
import { PHILOSOPHY, PRINCIPLES } from '@/lib/constants';

/**
 * About/Philosophy section explaining the approach and values
 */
export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-stone-200"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Section Header */}
        <div className="lg:col-span-1">
          <Reveal>
            <h2 className="font-serif text-3xl font-medium mb-4 text-stone-900">
              {PHILOSOPHY.title}
            </h2>
            <div className="w-12 h-0.5 bg-orange-600 mb-6" aria-hidden="true" />
            <p className="text-sm font-mono text-stone-500 uppercase tracking-widest">
              {PHILOSOPHY.subtitle}
            </p>
          </Reveal>
        </div>

        {/* Content */}
        <div className="lg:col-span-2 space-y-8 text-lg md:text-xl text-stone-700 font-light leading-relaxed">
          <Reveal delay={100}>
            {PHILOSOPHY.content.map((item, index) => (
              <p key={index} className={index > 0 ? 'mt-8' : ''}>
                {item.emphasis && (
                  <span className="font-normal text-stone-900">
                    {item.text}
                  </span>
                )}{' '}
                {item.paragraph}
              </p>
            ))}

            {/* Principles Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-stone-200 mt-12">
              {PRINCIPLES.map((principle) => (
                <div key={principle.title}>
                  <span className="block font-serif text-3xl text-stone-900 mb-1">
                    {principle.title}
                  </span>
                  <span className="text-sm text-stone-500">
                    {principle.subtitle}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
