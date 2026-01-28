"use client";
import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { RECOMMENDATIONS } from "@/lib/constants";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useAnimationControls, AnimatePresence } from "framer-motion";

/**
 * Recommendations Section with infinite scroll animation
 * Desktop: Cards move from right to left continuously
 * Mobile: Swipe to navigate through cards
 */
export function RecommendationsSection() {
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimationControls();
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [direction, setDirection] = useState(1);

  // Duplicate recommendations for seamless loop on desktop
  const duplicatedRecommendations = [...RECOMMENDATIONS, ...RECOMMENDATIONS];

  // Mobile swipe variants
  const mobileSlideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsAutoPlaying(false); // Pause auto-play on touch
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % RECOMMENDATIONS.length);
    }
    if (isRightSwipe) {
      setDirection(-1);
      setCurrentIndex(
        (prev) => (prev - 1 + RECOMMENDATIONS.length) % RECOMMENDATIONS.length,
      );
    }

    setTouchStart(0);
    setTouchEnd(0);

    // Resume auto-play after 2 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 2000);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % RECOMMENDATIONS.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 2000);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + RECOMMENDATIONS.length) % RECOMMENDATIONS.length,
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 2000);
  };

  // Desktop infinite scroll animation
  useEffect(() => {
    const animateCarousel = async () => {
      if (!isPaused && !isMobile) {
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
  }, [isPaused, controls, isMobile]);

  // Mobile auto-play
  useEffect(() => {
    if (isMobile && isAutoPlaying) {
      const interval = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % RECOMMENDATIONS.length);
      }, 4000); // Change card every 4 seconds

      return () => clearInterval(interval);
    }
  }, [isMobile, isAutoPlaying]);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

      {/* Desktop: Infinite Scroll */}
      {!isMobile ? (
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div animate={controls} className="flex gap-6 relative">
            {duplicatedRecommendations.map((recommendation, index) => (
              <div
                key={`${recommendation.id}-${index}`}
                className="flex-shrink-0 w-[400px] h-[450px] flex flex-col bg-white rounded-2xl p-8 shadow-xl border border-stone-200 hover:shadow-2xl hover:scale-105 hover:border-orange-500/50 transition-all duration-300 group"
              >
                {/* Quote Icon */}
                <div className="mb-6 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Quote className="w-6 h-6 text-white" fill="currentColor" />
                </div>

                {/* Content */}
                <div className="flex-grow overflow-y-auto mb-6 pr-2">
                  <p className="text-stone-700 leading-relaxed text-base italic">
                    "{recommendation.content}"
                  </p>
                </div>

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
                      {recommendation.role} at{" "}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="hover:text-orange-600 transition-colors"
                      >
                        {recommendation.company}
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      ) : (
        /* Mobile: Swipe Cards */
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative h-[500px] overflow-hidden cursor-grab active:cursor-grabbing"
        >
          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-stone-100 text-stone-600 hover:text-orange-600 hover:bg-white transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-stone-100 text-stone-600 hover:text-orange-600 hover:bg-white transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={mobileSlideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute inset-0 flex items-center justify-center px-4"
            >
              <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-stone-200 h-[420px] flex flex-col">
                  {/* Quote Icon */}
                  <div className="flex-shrink-0 mb-6 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Quote className="w-6 h-6 text-white" fill="currentColor" />
                  </div>

                  {/* Content */}
                  <div className="flex-grow overflow-y-auto mb-6 pr-2">
                    <p className="text-stone-700 leading-relaxed text-base italic">
                      "{RECOMMENDATIONS[currentIndex].content}"
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="flex-shrink-0 flex items-center gap-4 border-t border-stone-200 pt-6">
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-purple-500 flex items-center justify-center shadow-md flex-shrink-0">
                      <span className="text-white font-bold text-lg">
                        {RECOMMENDATIONS[currentIndex].name.charAt(0)}
                      </span>
                    </div>

                    {/* Name and Role */}
                    <div className="min-w-0">
                      <h4 className="text-stone-900 font-semibold text-base truncate">
                        {RECOMMENDATIONS[currentIndex].name}
                      </h4>
                      <p className="text-stone-600 text-sm truncate">
                        {RECOMMENDATIONS[currentIndex].role} at{" "}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                          className="hover:text-orange-600 transition-colors"
                        >
                          {RECOMMENDATIONS[currentIndex].company}
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile Indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {RECOMMENDATIONS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 2000);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-orange-500 w-8"
                    : "bg-stone-300 hover:bg-stone-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
