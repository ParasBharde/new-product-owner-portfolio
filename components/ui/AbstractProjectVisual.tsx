"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Lightbulb, Users, Target, TrendingUp, Zap, Layers, GitBranch, Compass } from "lucide-react";

interface AbstractProjectVisualProps {
  projectIndex: number;
  category: string;
  title: string;
}

// Color schemes for different project types
const colorSchemes = [
  {
    primary: "from-orange-500 to-amber-500",
    secondary: "from-orange-400/30 to-amber-400/20",
    accent: "orange",
    bgGradient: "from-orange-50 via-amber-50 to-orange-100",
    orb1: "rgba(234,88,12,0.4)",
    orb2: "rgba(251,191,36,0.3)",
    ring: "border-orange-300/40",
  },
  {
    primary: "from-purple-500 to-violet-500",
    secondary: "from-purple-400/30 to-violet-400/20",
    accent: "purple",
    bgGradient: "from-purple-50 via-violet-50 to-purple-100",
    orb1: "rgba(168,85,247,0.4)",
    orb2: "rgba(139,92,246,0.3)",
    ring: "border-purple-300/40",
  },
  {
    primary: "from-emerald-500 to-teal-500",
    secondary: "from-emerald-400/30 to-teal-400/20",
    accent: "emerald",
    bgGradient: "from-emerald-50 via-teal-50 to-emerald-100",
    orb1: "rgba(16,185,129,0.4)",
    orb2: "rgba(20,184,166,0.3)",
    ring: "border-emerald-300/40",
  },
];

// Icons for different categories
const categoryIcons: Record<string, typeof Lightbulb> = {
  "Agile Transformation": GitBranch,
  "Product Delivery": Target,
  "Leadership Development": Users,
  default: Compass,
};

export function AbstractProjectVisual({ projectIndex, category, title }: AbstractProjectVisualProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [floatOffset, setFloatOffset] = useState(0);

  // Mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [-200, 200], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-10, 10]), springConfig);
  const translateX = useSpring(useTransform(mouseX, [-200, 200], [-15, 15]), springConfig);
  const translateY = useSpring(useTransform(mouseY, [-200, 200], [-15, 15]), springConfig);

  // Get color scheme based on project index
  const colors = colorSchemes[projectIndex % colorSchemes.length];
  const Icon = categoryIcons[category] || categoryIcons.default;

  // Floating animation
  useEffect(() => {
    let animationId: number;
    let startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      setFloatOffset(Math.sin(elapsed / 1500) * 8);
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

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

  // Generate floating particles
  const particles = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: 4 + Math.random() * 6,
    x: 15 + Math.random() * 70,
    y: 15 + Math.random() * 70,
    delay: i * 0.5,
    duration: 3 + Math.random() * 2,
  }));

  // Decorative lines
  const lines = Array.from({ length: 4 }, (_, i) => ({
    id: i,
    rotation: i * 45,
    length: 40 + i * 15,
    delay: i * 0.2,
  }));

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl cursor-pointer"
      style={{
        perspective: "1000px",
      }}
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
        <div className={`absolute inset-0 bg-gradient-to-br ${colors.bgGradient}`} />

        {/* Animated gradient mesh */}
        <motion.div
          className="absolute inset-0 opacity-60"
          animate={{
            background: [
              `radial-gradient(ellipse at 20% 30%, ${colors.orb1} 0%, transparent 50%)`,
              `radial-gradient(ellipse at 80% 70%, ${colors.orb1} 0%, transparent 50%)`,
              `radial-gradient(ellipse at 50% 50%, ${colors.orb1} 0%, transparent 50%)`,
              `radial-gradient(ellipse at 20% 30%, ${colors.orb1} 0%, transparent 50%)`,
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
          className="absolute w-64 h-64 rounded-full blur-3xl"
          style={{
            background: colors.orb2,
            right: "10%",
            bottom: "20%",
            x: translateX,
            y: translateY,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.15) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Decorative rotating rings */}
        <motion.div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 ${colors.ring} rounded-full`}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            transform: `translateZ(20px)`,
          }}
        />
        <motion.div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border ${colors.ring} rounded-full opacity-50`}
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{
            transform: `translateZ(10px)`,
          }}
        />
        <motion.div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border ${colors.ring} rounded-full opacity-30`}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute rounded-full bg-gradient-to-br ${colors.primary}`}
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              boxShadow: `0 0 10px ${colors.orb1}`,
            }}
            animate={{
              y: [-15, 15, -15],
              x: [-8, 8, -8],
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Decorative lines */}
        <div className="absolute inset-0 flex items-center justify-center">
          {lines.map((line) => (
            <motion.div
              key={line.id}
              className={`absolute h-[1px] bg-gradient-to-r ${colors.secondary}`}
              style={{
                width: line.length,
                rotate: line.rotation,
                transformOrigin: "center",
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{
                scaleX: isHovering ? 1 : 0.6,
                opacity: isHovering ? 1 : 0.4,
              }}
              transition={{
                duration: 0.5,
                delay: line.delay,
              }}
            />
          ))}
        </div>

        {/* Large project number */}
        <motion.div
          className="absolute top-6 left-6 font-serif text-8xl md:text-9xl font-bold opacity-[0.08] select-none"
          style={{
            transform: `translateZ(30px) translateY(${floatOffset}px)`,
          }}
        >
          {String(projectIndex + 1).padStart(2, "0")}
        </motion.div>

        {/* Central icon container */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            transform: `translateZ(50px)`,
          }}
          animate={{
            y: floatOffset,
          }}
        >
          {/* Icon background glow */}
          <motion.div
            className={`absolute inset-0 -m-8 rounded-full bg-gradient-to-br ${colors.primary} blur-2xl`}
            animate={{
              opacity: isHovering ? 0.6 : 0.3,
              scale: isHovering ? 1.3 : 1,
            }}
            transition={{ duration: 0.5 }}
          />

          {/* Icon container */}
          <motion.div
            className={`
              relative w-24 h-24 md:w-28 md:h-28 rounded-2xl
              bg-white/90 backdrop-blur-sm
              border border-white/50
              shadow-[0_8px_32px_rgba(0,0,0,0.12)]
              flex items-center justify-center
            `}
            animate={{
              scale: isHovering ? 1.1 : 1,
              rotate: isHovering ? 5 : 0,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Icon className={`w-12 h-12 md:w-14 md:h-14 text-${colors.accent}-600`} strokeWidth={1.5} />
          </motion.div>
        </motion.div>

        {/* Category badge */}
        <motion.div
          className="absolute top-6 right-6"
          style={{
            transform: `translateZ(40px)`,
          }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className={`
            px-4 py-2 rounded-full
            bg-white/80 backdrop-blur-sm
            border border-white/50
            shadow-lg
          `}>
            <span className="text-xs font-mono uppercase tracking-wider text-stone-600">
              {category}
            </span>
          </div>
        </motion.div>

        {/* Bottom info bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-6"
          style={{
            transform: `translateZ(35px)`,
          }}
        >
          <div className={`
            p-4 rounded-xl
            bg-white/60 backdrop-blur-md
            border border-white/40
            shadow-lg
          `}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <motion.div
                  className={`w-3 h-3 rounded-full bg-gradient-to-br ${colors.primary}`}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <span className="text-sm font-medium text-stone-700">
                  Case Study #{String(projectIndex + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className={`w-4 h-4 text-${colors.accent}-500`} />
                <TrendingUp className={`w-4 h-4 text-${colors.accent}-500`} />
                <Layers className={`w-4 h-4 text-${colors.accent}-500`} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hover overlay */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-t ${colors.secondary} pointer-events-none`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovering ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.4) 45%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.4) 55%, transparent 60%)",
            backgroundSize: "200% 200%",
          }}
          initial={{ backgroundPosition: "200% 0" }}
          animate={{
            backgroundPosition: isHovering ? "-200% 0" : "200% 0",
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
