"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { RECOMMENDATIONS } from "@/lib/constants";
import { Quote, ChevronLeft, ChevronRight, Star, Sparkles } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";

export function RecommendationsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse parallax for floating elements
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const parallaxX = useSpring(useTransform(mouseX, [-500, 500], [-30, 30]), {
    stiffness: 50,
    damping: 20,
  });
  const parallaxY = useSpring(useTransform(mouseY, [-500, 500], [-30, 30]), {
    stiffness: 50,
    damping: 20,
  });
  const parallaxX2 = useSpring(useTransform(mouseX, [-500, 500], [20, -20]), {
    stiffness: 30,
    damping: 25,
  });
  const parallaxY2 = useSpring(useTransform(mouseY, [-500, 500], [20, -20]), {
    stiffness: 30,
    damping: 25,
  });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    },
    [mouseX, mouseY],
  );

  // Get visible cards (current + neighbors)
  const getVisibleIndices = useCallback(() => {
    const total = RECOMMENDATIONS.length;
    return {
      prev2: (currentIndex - 2 + total) % total,
      prev: (currentIndex - 1 + total) % total,
      current: currentIndex,
      next: (currentIndex + 1) % total,
      next2: (currentIndex + 2) % total,
    };
  }, [currentIndex]);

  const navigate = useCallback((dir: number) => {
    setDirection(dir);
    setCurrentIndex((prev) => {
      const newIndex = prev + dir;
      if (newIndex < 0) return RECOMMENDATIONS.length - 1;
      if (newIndex >= RECOMMENDATIONS.length) return 0;
      return newIndex;
    });
    setExpandedCard(null);
  }, []);

  const handleNext = useCallback(() => {
    navigate(1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  }, [navigate]);

  const handlePrev = useCallback(() => {
    navigate(-1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  }, [navigate]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % RECOMMENDATIONS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Touch handling
  const [touchStart, setTouchStart] = useState(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
    setIsAutoPlaying(false);
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) {
      diff > 0 ? handleNext() : handlePrev();
    }
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const visibleIndices = getVisibleIndices();

  // Card animation variants for positions
  const positionVariants = {
    prev2: {
      x: "-140%",
      scale: 0.65,
      opacity: 0.3,
      rotateY: 35,
      z: -300,
      filter: "blur(4px)",
    },
    prev: {
      x: "-85%",
      scale: 0.8,
      opacity: 0.6,
      rotateY: 25,
      z: -150,
      filter: "blur(2px)",
    },
    center: {
      x: "0%",
      scale: 1,
      opacity: 1,
      rotateY: 0,
      z: 0,
      filter: "blur(0px)",
    },
    next: {
      x: "85%",
      scale: 0.8,
      opacity: 0.6,
      rotateY: -25,
      z: -150,
      filter: "blur(2px)",
    },
    next2: {
      x: "140%",
      scale: 0.65,
      opacity: 0.3,
      rotateY: -35,
      z: -300,
      filter: "blur(4px)",
    },
  };

  const getExitVariant = (dir: number) => ({
    x: dir > 0 ? "-200%" : "200%",
    scale: 0.5,
    opacity: 0,
    rotateY: dir > 0 ? 45 : -45,
  });

  const getCardPosition = (
    index: number,
  ): keyof typeof positionVariants | null => {
    if (index === visibleIndices.prev2) return "prev2";
    if (index === visibleIndices.prev) return "prev";
    if (index === visibleIndices.current) return "center";
    if (index === visibleIndices.next) return "next";
    if (index === visibleIndices.next2) return "next2";
    return null;
  };

  return (
    <section
      id="recommendations"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-stone-100 via-stone-50 to-stone-100"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating gradient orbs */}
        <motion.div
          className="absolute top-20 left-[10%] w-72 h-72 rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(234,88,12,0.3) 0%, transparent 70%)",
            x: parallaxX,
            y: parallaxY,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-[15%] w-96 h-96 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)",
            x: parallaxX2,
            y: parallaxY2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(234,88,12,0.15) 0%, transparent 60%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Decorative floating shapes */}
        <motion.div
          className="absolute top-32 right-[20%] w-4 h-4 bg-orange-400/40 rounded-full"
          animate={{
            y: [-10, 10, -10],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ x: parallaxX }}
        />
        <motion.div
          className="absolute bottom-40 left-[25%] w-3 h-3 bg-purple-400/40 rounded-full"
          animate={{
            y: [10, -10, 10],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{ x: parallaxX2 }}
        />
        <motion.div
          className="absolute top-1/3 left-[8%] w-20 h-20 border border-orange-300/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-[10%] w-16 h-16 border border-purple-300/20 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 relative z-10">
        <Reveal>
          <div className="text-center">
            <motion.div
              className="inline-flex items-center gap-2 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-5 h-5 text-orange-500" />
              <span className="text-orange-600 font-mono text-xs uppercase tracking-widest">
                Testimonials
              </span>
              <Sparkles className="w-5 h-5 text-orange-500" />
            </motion.div>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">
              What People Say
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto text-lg">
              Trusted by colleagues and clients across the industry
            </p>
          </div>
        </Reveal>
      </div>

      {/* 3D Carousel */}
      <div
        className="relative h-[500px] md:h-[550px] perspective-1000"
        style={{ perspective: "1500px" }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            {Object.values(visibleIndices).map((index) => {
              const recommendation = RECOMMENDATIONS[index];
              const position = getCardPosition(index);
              if (!position) return null;

              return (
                <motion.div
                  key={`${recommendation.id}-${index}`}
                  initial={
                    direction > 0
                      ? positionVariants.next2
                      : positionVariants.prev2
                  }
                  animate={positionVariants[position]}
                  exit={getExitVariant(direction)}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    mass: 1,
                  }}
                  className="absolute w-[340px] md:w-[420px] cursor-pointer"
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "center center",
                  }}
                  onClick={() =>
                    position === "center" &&
                    setExpandedCard(expandedCard === index ? null : index)
                  }
                  whileHover={
                    position === "center" ? { scale: 1.02, y: -5 } : {}
                  }
                >
                  {/* Card */}
                  <div
                    className={`
                      relative p-6 md:p-8 rounded-3xl overflow-hidden
                      backdrop-blur-xl bg-white/70
                      border border-white/50
                      shadow-[0_8px_32px_rgba(0,0,0,0.08),0_0_0_1px_rgba(255,255,255,0.5)_inset]
                      transition-all duration-500
                      ${position === "center" ? "ring-2 ring-orange-200/50" : ""}
                    `}
                  >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-transparent to-purple-50/30 pointer-events-none" />

                    {/* Animated quote decoration */}
                    <motion.div
                      className="absolute -top-4 -left-4 text-orange-200/40"
                      animate={
                        position === "center"
                          ? {
                              scale: [1, 1.1, 1],
                              rotate: [-5, 5, -5],
                            }
                          : {}
                      }
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Quote
                        className="w-20 h-20 md:w-24 md:h-24"
                        strokeWidth={1}
                      />
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Quote icon */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/30">
                          <Quote className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-orange-400 fill-orange-400"
                            />
                          ))}
                        </div>
                      </div>

                      {/* Testimonial text */}
                      <div className="relative mb-6">
                        <p
                          className={`
                            text-stone-600 leading-relaxed italic text-sm md:text-base
                            transition-all duration-300
                            ${expandedCard === index ? "" : "line-clamp-5"}
                          `}
                        >
                          &ldquo;{recommendation.content}&rdquo;
                        </p>
                        {position === "center" &&
                          recommendation.content.length > 200 && (
                            <button className="mt-2 text-orange-600 text-sm font-medium hover:text-orange-700 transition-colors flex items-center gap-1">
                              {expandedCard === index
                                ? "Show less"
                                : "Read more"}
                              <ChevronRight
                                className={`w-4 h-4 transition-transform ${expandedCard === index ? "rotate-90" : ""}`}
                              />
                            </button>
                          )}
                      </div>

                      {/* Author info */}
                      <div className="flex items-center gap-4 pt-4 border-t border-stone-200/50">
                        {/* Avatar */}
                        <div className="relative">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center text-stone-600 font-serif text-lg font-semibold shadow-inner">
                            {recommendation.name.charAt(0)}
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />
                        </div>

                        {/* Name & Role */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-stone-900 truncate">
                            {recommendation.name}
                          </h4>
                          <p className="text-stone-500 text-sm truncate">
                            {recommendation.role}
                          </p>
                          <p className="text-orange-600 text-xs font-medium truncate">
                            {recommendation.company}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Decorative corner accent */}
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-orange-100/50 to-transparent rounded-tl-full" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute inset-y-0 left-4 md:left-8 flex items-center z-20">
          <motion.button
            onClick={handlePrev}
            className="group w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/80 backdrop-blur-sm border border-stone-200/50 shadow-lg flex items-center justify-center hover:bg-white hover:shadow-xl transition-all"
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-6 h-6 text-stone-600 group-hover:text-orange-600 transition-colors" />
          </motion.button>
        </div>
        <div className="absolute inset-y-0 right-4 md:right-8 flex items-center z-20">
          <motion.button
            onClick={handleNext}
            className="group w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/80 backdrop-blur-sm border border-stone-200/50 shadow-lg flex items-center justify-center hover:bg-white hover:shadow-xl transition-all"
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-6 h-6 text-stone-600 group-hover:text-orange-600 transition-colors" />
          </motion.button>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="flex justify-center items-center gap-3 mt-8 relative z-10">
        <div className="flex gap-1.5">
          {RECOMMENDATIONS.slice(0, Math.min(10, RECOMMENDATIONS.length)).map(
            (_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 5000);
                }}
                className={`
                h-2 rounded-full transition-all duration-300
                ${
                  index === currentIndex
                    ? "w-8 bg-gradient-to-r from-orange-500 to-orange-600"
                    : "w-2 bg-stone-300 hover:bg-stone-400"
                }
              `}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ),
          )}
        </div>
      </div>

      {/* Auto-play indicator */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`
            text-xs font-mono uppercase tracking-wider px-4 py-2 rounded-full transition-all
            ${
              isAutoPlaying
                ? "bg-orange-100 text-orange-600"
                : "bg-stone-200 text-stone-500"
            }
          `}
        >
          {isAutoPlaying ? "● Auto-playing" : "○ Paused"}
        </button>
      </div>
    </section>
  );
}
