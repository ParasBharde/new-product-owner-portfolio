"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { CheckCircle2, TrendingUp, Target, Award, Zap, BarChart3 } from "lucide-react";

interface CaseStudyVisualProps {
  category: string;
}

export function CaseStudyVisual({ category }: CaseStudyVisualProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-8, 8]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovering(false);
  };

  // Stats data
  const stats = [
    { label: "Success Rate", value: "100%", icon: CheckCircle2 },
    { label: "Team Growth", value: "3x", icon: TrendingUp },
    { label: "Goals Met", value: "All", icon: Target },
  ];

  // Floating particles
  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: 3 + Math.random() * 5,
    x: 10 + Math.random() * 80,
    y: 10 + Math.random() * 80,
    delay: i * 0.3,
    duration: 3 + Math.random() * 2,
  }));

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-square overflow-hidden rounded-2xl cursor-pointer"
      style={{ perspective: "1000px" }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-orange-50 to-purple-50" />

        {/* Animated gradient mesh */}
        <motion.div
          className="absolute inset-0 opacity-70"
          animate={{
            background: [
              "radial-gradient(ellipse at 30% 30%, rgba(234,88,12,0.3) 0%, transparent 50%)",
              "radial-gradient(ellipse at 70% 70%, rgba(234,88,12,0.3) 0%, transparent 50%)",
              "radial-gradient(ellipse at 50% 50%, rgba(234,88,12,0.3) 0%, transparent 50%)",
              "radial-gradient(ellipse at 30% 30%, rgba(234,88,12,0.3) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Secondary orb */}
        <motion.div
          className="absolute w-48 h-48 rounded-full blur-3xl"
          style={{
            background: "rgba(168,85,247,0.25)",
            right: "10%",
            bottom: "20%",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.2) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
          }}
        />

        {/* Rotating rings */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-orange-300/40 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 border border-purple-300/30 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-stone-300/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-br from-orange-500 to-orange-600"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              boxShadow: "0 0 10px rgba(234,88,12,0.5)",
            }}
            animate={{
              y: [-10, 10, -10],
              x: [-5, 5, -5],
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Central content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
          {/* Large percentage display */}
          <motion.div
            className="relative mb-6"
            animate={{ y: isHovering ? -5 : 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Glow behind text */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 blur-3xl opacity-30"
              animate={{
                scale: isHovering ? 1.2 : 1,
                opacity: isHovering ? 0.5 : 0.3,
              }}
            />

            <div className="relative text-center">
              <motion.span
                className="block text-8xl md:text-9xl font-bold bg-gradient-to-br from-orange-600 via-orange-500 to-purple-600 bg-clip-text text-transparent"
                animate={{
                  scale: isHovering ? 1.05 : 1,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                100
              </motion.span>
              <motion.span
                className="block text-4xl md:text-5xl font-bold text-orange-600 -mt-4"
                animate={{
                  y: isHovering ? -3 : 0,
                }}
              >
                %
              </motion.span>
            </div>
          </motion.div>

          {/* Label */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-stone-200/50 shadow-lg">
              <Award className="w-5 h-5 text-orange-600" />
              <span className="text-sm font-semibold text-stone-700">Success Rate</span>
            </div>
          </motion.div>
        </div>

        {/* Stats cards floating around */}
        <motion.div
          className="absolute top-6 left-6 p-3 bg-white/90 backdrop-blur-sm rounded-xl border border-stone-200/50 shadow-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.05, y: -2 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <p className="text-xs text-stone-500">Delivered</p>
              <p className="text-sm font-bold text-stone-900">On Time</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute top-6 right-6 p-3 bg-white/90 backdrop-blur-sm rounded-xl border border-stone-200/50 shadow-lg"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          whileHover={{ scale: 1.05, y: -2 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-purple-600" />
            </div>
            <div>
              <p className="text-xs text-stone-500">Growth</p>
              <p className="text-sm font-bold text-stone-900">3x Teams</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 p-3 bg-white/90 backdrop-blur-sm rounded-xl border border-stone-200/50 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05, y: -2 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-orange-600" />
            </div>
            <div>
              <p className="text-xs text-stone-500">Impact</p>
              <p className="text-sm font-bold text-stone-900">High Performance</p>
            </div>
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-blue-600" />
            </div>
          </div>
        </motion.div>

        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.5) 45%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.5) 55%, transparent 60%)",
            backgroundSize: "200% 200%",
          }}
          initial={{ backgroundPosition: "200% 0" }}
          animate={{
            backgroundPosition: isHovering ? "-200% 0" : "200% 0",
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
