"use client";
import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { RECOMMENDATIONS } from "@/lib/constants";
import { Quote } from "lucide-react";
import { motion, useAnimationControls } from "framer-motion";

/**
 * Recommendations Section with infinite scroll animation
 * Cards move from right to left continuously
 */
export function RecommendationsSection() {
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimationControls();

  // Duplicate recommendations for seamless loop
  const duplicatedRecommendations = [...RECOMMENDATIONS, ...RECOMMENDATIONS];

  useEffect(() => {
    const animateCarousel = async () => {
      if (!isPaused) {
        await controls.start({
          x: -1920,
          transition: {
            duration: 30,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          },
        });
      } else {
        controls.stop();
      }
    };

    animateCarousel();
  }, [isPaused, controls]);
  return (
    <section
      id="recommendations"
      className="py-24 px-6 lg:px-12 bg-gradient-to-b from-stone-50 to-stone-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto mb-16">
        <Reveal>
          <div className="text-center">
            <h2 className="font-serif text-5xl text-stone-900 mb-4">
              What People Say
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Testimonials from colleagues, clients, and partners who've
              experienced the impact firsthand.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Scrolling Container */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          animate={controls}
          className="gap-6 relative w-full h-full flex items-center justify-center text-3xl font-bold  rounded-xl"
        >
          {duplicatedRecommendations.map((recommendation, index) => (
            <div
              key={`${recommendation.id}-${index}`}
              className="flex-shrink-0 w-[400px] bg-white rounded-2xl p-8 shadow-xl border border-stone-200 hover:shadow-2xl hover:scale-105 hover:border-orange-500/50 transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <div className="mb-6 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Quote className="w-6 h-6 text-white" fill="currentColor" />
              </div>

              {/* Content */}
              <p className="text-stone-700 leading-relaxed mb-6 text-base italic">
                "{recommendation.content}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 border-t border-stone-200 pt-6">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-purple-500 flex items-center justify-center shadow-md flex-shrink-0">
                  <span className="text-white font-bold text-lg">
                    {recommendation.name.charAt(0)}
                  </span>
                </div>

                {/* Name and Role */}
                <div className="min-w-0">
                  <h4 className="text-stone-900 font-semibold text-base truncate">
                    {recommendation.name}
                  </h4>
                  <p className="text-stone-600 text-sm truncate">
                    {recommendation.role} at {recommendation.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Add animation styles */}
    </section>
  );
}
