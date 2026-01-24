import Link from "next/link";
import { ArrowDownRight, ArrowDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedImage } from "@/components/ui/AnimatedImage";
import { HERO, Profile_Img } from "@/lib/constants";

/**
 * Hero section - main landing area with headline and abstract visual
 */
export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-20 px-6 lg:px-12 max-w-7xl mx-auto relative">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Content */}
        <div className="lg:col-span-8">
          <Reveal>
            <p className="text-orange-600 font-medium tracking-wide text-sm mb-6 uppercase">
              {HERO.tagline}
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] mb-8 text-stone-900 font-serif">
              {HERO.headline} <br />
              <span className="italic font-light">{HERO.headlineItalic}</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 font-light leading-relaxed max-w-2xl mb-12">
              {HERO.description}
            </p>

            <div className="flex items-center gap-8">
              <Link
                href={HERO.ctaHref}
                className="group flex items-center gap-2 text-stone-900 font-medium link-underline pb-1 focus:outline-none focus:text-orange-600"
              >
                {HERO.ctaText}
                <ArrowDownRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Animated Image Block with 3D effects */}
        <div className="hidden lg:block lg:col-span-4">
          <Reveal delay={200}>
            <AnimatedImage
              src={Profile_Img}
              alt="Profile"
              location={HERO.location}
              experience={HERO.experience}
            />
          </Reveal>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-6 lg:left-12 animate-bounce">
        <ArrowDown className="w-5 h-5 text-stone-400" aria-hidden="true" />
      </div>
    </section>
  );
}
