import Link from "next/link";
import { ArrowDownRight, ArrowDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { HERO, Profile_Img } from "@/lib/constants";
import Image from "next/image";

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
            <h1 className="text-5xl md:text-7xl lg:text-5xl font-medium leading-[1.1] mb-8 text-stone-900 font-serif">
              {HERO.headline} <br />
              <span className="italic font-light">{HERO.headlineItalic}</span>
            </h1>
            <p className="text-xl md:text-xl text-stone-600 font-light leading-relaxed max-w-2xl mb-12">
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

        {/* Abstract Image Block */}
        <div className="hidden lg:block lg:col-span-4">
          <Reveal delay={200}>
            <div className="relative w-full aspect-[3/4] rounded-sm overflow-hidden ">
              <div className="absolute inset-0 flex items-center justify-center h-[85%] rounded-m">
                <Image src={Profile_Img} alt="" fill className="object-cover" />
              </div>
              <div id="img" className="absolute bottom-6 left-6 right-6">
                <div className="flex justify-between text-xs font-mono text-stone-500 uppercase">
                  <span>Loc: {HERO.location}</span>
                  <span>Exp: {HERO.experience}</span>
                </div>
              </div>
            </div>
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
