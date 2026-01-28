"use client";

import { Reveal } from "@/components/ui/Reveal";
import { useEffect } from "react";
import { PHILOSOPHY, PRINCIPLES } from "@/lib/constants";

/**
 * About/Philosophy section explaining the approach and values
 */
export function AboutSection() {
  useEffect(() => {
    applySequentialWaveAnimation();
  }, []);

  function applySequentialWaveAnimation() {
    const waveTexts = document.querySelectorAll(".wave-text");

    waveTexts.forEach((element) => {
      const text = element.textContent.trim();
      const words = text.split(/\s+/); // Split by any whitespace
      element.innerHTML = "";

      const delayStep = 0.1; // Delay between words in seconds

      words.forEach((word, index) => {
        const span = document.createElement("span");
        // We append a space to the word to handle wrapping naturally
        span.textContent = word + " ";
        span.style.animationDelay = `${index * delayStep}s`;
        element.appendChild(span);
      });
    });
  }
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
              <p key={index} className={index > 0 ? "mt-8" : ""}>
                {item.emphasis && (
                  <span className="font-normal text-stone-900">
                    {item.text}
                  </span>
                )}{" "}
                {item.paragraph}
              </p>
            ))}

            <div className="card w-full max-w-2xl rounded-2xl p-8  transition-all duration-300 group relative">
              <div className="mb-6 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg quote-icon bounce-quote">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path>
                </svg>
              </div>

              <div className="relative z-10">
                <div id="card-1">
                  <p className="text-stone-700 text-xl font-medium italic wave-text">
                    "Working with this professional has been transformative for
                    our team. Their attention to detail and creative
                    problem-solving helped us launch our product ahead of
                    schedule."
                  </p>
                </div>
              </div>
            </div>

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
      <style>
        {`
          @keyframes bounce-quote {

            0%,
            100% {
                transform: translateY(0) rotate(0deg);
            }

            25% {
                transform: translateY(-8px) rotate(-5deg);
            }

            50% {
                transform: translateY(0) rotate(0deg);
            }

            75% {
                transform: translateY(-4px) rotate(5deg);
            }
        }

        .bounce-quote {
            animation: bounce-quote 2s ease-in-out infinite;
        }

        /* Realistic Wave Animation */
        @keyframes wave {

            0%,
            40%,
            100% {
                transform: translateY(0);
            }

            10% {
                transform: translateY(-12px);
                /* The Peak */
            }

            20% {
                transform: translateY(4px);
                /* The slight settle */
            }
        }

        .wave-text {
            display: block;
            /* Allows natural wrapping */
            line-height: 2;
            /* Added space so waves don't hit lines above */
        }

        .wave-text span {
            display: inline-block;
            animation: wave 3s ease-in-out infinite;
            white-space: pre;
            /* Preserves the space after words */
        }
        `}
      </style>
    </section>
  );
}
