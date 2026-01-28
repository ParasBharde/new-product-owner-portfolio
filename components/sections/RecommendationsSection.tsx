"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { RECOMMENDATIONS } from "@/lib/constants";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useAnimationControls, AnimatePresence } from "framer-motion";

export function RecommendationsSection() {
  const controls = useAnimationControls();

  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // 🔥 Read More state (per card)
  const [expandedMap, setExpandedMap] = useState<Record<string, boolean>>({});

  const duplicatedRecommendations = [...RECOMMENDATIONS, ...RECOMMENDATIONS];

  const toggleReadMore = (key: string) => {
    setExpandedMap((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const mobileSlideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;

    if (distance > 50) {
      setDirection(1);
      setCurrentIndex((p) => (p + 1) % RECOMMENDATIONS.length);
    }

    if (distance < -50) {
      setDirection(-1);
      setCurrentIndex(
        (p) => (p - 1 + RECOMMENDATIONS.length) % RECOMMENDATIONS.length,
      );
    }

    setTouchStart(0);
    setTouchEnd(0);
    setTimeout(() => setIsAutoPlaying(true), 2000);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((p) => (p + 1) % RECOMMENDATIONS.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 2000);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (p) => (p - 1 + RECOMMENDATIONS.length) % RECOMMENDATIONS.length,
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 2000);
  };

  // Desktop infinite scroll
  useEffect(() => {
    if (!isPaused && !isMobile) {
      controls.start({
        x: -1920,
        transition: {
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        },
      });
    } else {
      controls.stop();
    }
  }, [isPaused, isMobile, controls]);

  // Mobile autoplay
  useEffect(() => {
    if (isMobile && isAutoPlaying) {
      const interval = setInterval(() => {
        setDirection(1);
        setCurrentIndex((p) => (p + 1) % RECOMMENDATIONS.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isMobile, isAutoPlaying]);

  // Check mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // 🔥 Reset expanded state on slide change
  useEffect(() => {
    setExpandedMap({});
  }, [currentIndex]);

  return (
    <section
      id="recommendations"
      className="py-20 px-4 bg-gradient-to-b from-stone-50 to-stone-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto mb-12">
        <Reveal>
          <div className="text-center">
            <h2 className="font-serif text-4xl text-stone-900 mb-4">
              What People Say
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Testimonials from colleagues, clients, and partners.
            </p>
          </div>
        </Reveal>
      </div>

      {/* ================= DESKTOP ================= */}
      {!isMobile ? (
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div animate={controls} className="flex gap-6">
            {duplicatedRecommendations.map((r, index) => {
              const key = `desktop-${index}`;
              const isExpanded = expandedMap[key];

              return (
                <div
                  key={key}
                  className="w-[400px] h-[450px] flex-shrink-0 bg-white rounded-2xl p-8 shadow-xl border flex flex-col"
                >
                  <Quote className="w-10 h-10 text-orange-500 mb-4" />

                  {/* Read More Content */}
                  <div
                    className={`text-content mb-3 pr-2 ${
                      isExpanded
                        ? "expanded overflow-y-auto scrollbar-thin scrollbar-thumb-stone-300"
                        : "overflow-hidden"
                    }`}
                  >
                    <p className="italic text-stone-700">"{r.content}"</p>
                  </div>

                  {/* Read More Button */}
                  <button
                    onClick={() => toggleReadMore(key)}
                    className="mt-auto flex items-center gap-1 text-orange-600 font-semibold text-sm"
                  >
                    {isExpanded ? "Read less" : "Read more"}
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isExpanded ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                </div>
              );
            })}
          </motion.div>
        </div>
      ) : (
        /* ================= MOBILE ================= */
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative h-[520px] overflow-hidden"
        >
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow"
          >
            <ChevronRight />
          </button>

          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={mobileSlideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 flex justify-center items-center px-4"
            >
              <div className="bg-white rounded-2xl p-6 shadow-xl border max-w-md w-full">
                <Quote className="w-10 h-10 text-orange-500 mb-4" />

                <div
                  className={`text-content ${
                    expandedMap[`mobile-${currentIndex}`]
                      ? "expanded overflow-y-auto"
                      : "overflow-hidden"
                  }`}
                >
                  <p className="italic text-stone-700">
                    "{RECOMMENDATIONS[currentIndex].content}"
                  </p>
                </div>

                <button
                  onClick={() => {
                    toggleReadMore(`mobile-${currentIndex}`);
                    setIsAutoPlaying(false);
                  }}
                  className="mt-3 flex items-center gap-1 text-orange-600 font-semibold text-sm"
                >
                  {expandedMap[`mobile-${currentIndex}`]
                    ? "Read less"
                    : "Read more"}
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      expandedMap[`mobile-${currentIndex}`] ? "rotate-90" : ""
                    }`}
                  />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {/* ================= STYLES ================= */}
      <style jsx>{`
        .text-content {
          position: relative;
          max-height: 140px;
          transition: max-height 0.4s ease;
        }

        .text-content.expanded {
          max-height: 500px;
        }

        .text-content::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 60px;
          background: linear-gradient(to bottom, transparent, white);
        }

        .text-content.expanded::after {
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
