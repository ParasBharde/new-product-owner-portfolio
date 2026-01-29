"use client";

import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { HERO, PHILOSOPHY, PRINCIPLES } from "@/lib/constants";
import { Quote, Sparkles } from "lucide-react";

/**
 * About/Philosophy section explaining the approach and values
 */
export function AboutSection() {
  const quoteText =
    "The best products come from the right mix of people, tools, and processes—not from having the best of all. I make that mix happen.";

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

            {/* Modern Quote Card */}
            <motion.div
              className="relative w-full max-w-2xl mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Animated gradient border wrapper */}
              <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-orange-500 via-purple-500 to-orange-500 opacity-75 blur-sm animate-gradient-border" />
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-orange-500 via-purple-500 to-orange-500 animate-gradient-border" />

              {/* Card content */}
              <div className="relative rounded-3xl bg-gradient-to-br from-white via-stone-50 to-orange-50 p-8 md:p-10 overflow-hidden">
                {/* Background decorations */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-orange-200/40 to-transparent rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-200/30 to-transparent rounded-full blur-2xl" />

                {/* Floating decorative elements */}
                <motion.div
                  className="absolute top-6 right-6 w-2 h-2 bg-orange-400 rounded-full"
                  animate={{
                    y: [-5, 5, -5],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-10 right-12 w-1.5 h-1.5 bg-purple-400 rounded-full"
                  animate={{
                    y: [5, -5, 5],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute top-1/2 right-8 w-1 h-1 bg-orange-300 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />

                {/* Large decorative quote */}
                <motion.div
                  className="absolute -top-4 -left-2 text-orange-100"
                  animate={{
                    rotate: [-5, 5, -5],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Quote
                    className="w-24 h-24 md:w-32 md:h-32"
                    strokeWidth={1}
                  />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Quote icon badge */}
                  <motion.div
                    className="inline-flex items-center gap-2 mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30">
                      <Quote className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-orange-500" />
                      <span className="text-xs font-mono text-orange-600 uppercase tracking-wider">
                        {PHILOSOPHY.name}
                      </span>
                    </div>
                  </motion.div>

                  {/* Quote text with animated reveal */}
                  <motion.blockquote
                    className="relative"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    <p className="text-stone-700 text-xl md:text-2xl font-serif italic leading-relaxed">
                      {PHILOSOPHY.quote.split(" ").map((word, index) => (
                        <motion.span
                          key={index}
                          className="inline-block mr-[0.3em]"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: 0.5 + index * 0.03,
                            duration: 0.4,
                          }}
                        >
                          {word}
                        </motion.span>
                      ))}
                    </p>
                  </motion.blockquote>

                  {/* Author attribution */}
                  <motion.div
                    className="mt-8 flex items-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="w-px h-12 bg-gradient-to-b from-orange-500 to-purple-500" />
                    <div>
                      <p className="font-semibold text-stone-900">
                        {PHILOSOPHY.tagline}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-purple-500 to-orange-500"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  style={{ transformOrigin: "left" }}
                />
              </div>
            </motion.div>

            {/* Principles Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-stone-200 mt-12">
              {PRINCIPLES.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <span className="block font-serif text-3xl text-stone-900 mb-1 group-hover:text-orange-600 transition-colors">
                    {principle.title}
                  </span>
                  <span className="text-sm text-stone-500">
                    {principle.subtitle}
                  </span>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Gradient border animation styles */}
      <style jsx>{`
        @keyframes gradient-border {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-border {
          background-size: 200% 200%;
          animation: gradient-border 4s ease infinite;
        }
      `}</style>
    </section>
  );
}
