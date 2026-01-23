'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

interface AnimatedImageProps {
  src: any;
  alt: string;
  location: string;
  experience: string;
}

/**
 * Animated Image with 3D tilt, magnetic hover, and floating effect
 * New generation animation for hero section
 */
export function AnimatedImage({ src, alt, location, experience }: AnimatedImageProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [floatOffset, setFloatOffset] = useState(0);

  // Floating animation
  useEffect(() => {
    let animationId: number;
    let startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const offset = Math.sin(elapsed / 1000) * 10; // Slower, smoother float
      setFloatOffset(offset);
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate mouse position relative to center
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);

    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
    setIsHovering(false);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  // Calculate transforms
  const rotateX = -mousePosition.y * 15; // 3D tilt
  const rotateY = mousePosition.x * 15;
  const translateX = mousePosition.x * 20; // Magnetic effect
  const translateY = mousePosition.y * 20 + floatOffset;
  const scale = isHovering ? 1.05 : 1;

  return (
    <div
      ref={imageRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className="relative w-full aspect-[3/4] perspective-1000"
      style={{ perspective: '1000px' }}
    >
      <div
        className="relative w-full h-full transition-all duration-500 ease-out"
        style={{
          transform: `
            translateX(${translateX}px)
            translateY(${translateY}px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(${scale})
          `,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Backdrop glow effect */}
        <div
          className="absolute -inset-8 bg-gradient-to-br from-orange-500/30 to-purple-500/30 blur-3xl opacity-0 transition-opacity duration-500"
          style={{
            opacity: isHovering ? 0.8 : 0.4,
            transform: 'translateZ(-50px)',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          }}
        />

        {/* Main image container with custom blob shape */}
        <div
          className="relative w-full h-full overflow-hidden shadow-2xl"
          style={{
            borderRadius: isHovering
              ? '60% 40% 30% 70% / 60% 30% 70% 40%'
              : '50% 50% 30% 70% / 50% 50% 70% 30%',
            transition: 'border-radius 1s ease-in-out',
          }}
        >
          {/* Animated gradient background */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-orange-200 via-purple-200 to-pink-200 animate-gradient"
            style={{
              transform: `translateZ(-30px) scale(1.1) translateX(${-mousePosition.x * 5}px) translateY(${-mousePosition.y * 5}px)`,
            }}
          />

          {/* Decorative rings */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              transform: `translateZ(-15px) translateX(${mousePosition.x * 10}px) translateY(${mousePosition.y * 10}px)`,
            }}
          >
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border-4 border-orange-400 rounded-full animate-spin-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border-4 border-purple-400 rounded-full animate-spin-reverse" />
          </div>

          {/* Image layer with mask */}
          <div
            className="absolute inset-0 flex items-center justify-center h-[85%]"
            style={{
              transform: `translateZ(20px)`,
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover transition-all duration-500"
                style={{
                  filter: isHovering
                    ? 'brightness(1.1) contrast(1.08) saturate(1.1)'
                    : 'brightness(1) contrast(1) saturate(1)',
                }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent" />
            </div>
          </div>

          {/* Shine effect on hover */}
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none"
            style={{
              opacity: isHovering ? 0.4 : 0,
              transform: `translateX(${mousePosition.x * 50}%) translateY(${mousePosition.y * 50}%)`,
              background: 'radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, transparent 70%)',
            }}
          />

          {/* Info overlay with modern design */}
          <div
            id="img"
            className="absolute bottom-8 left-8 right-8 z-10"
            style={{
              transform: `translateZ(40px)`,
            }}
          >
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 shadow-2xl">
              <div className="flex justify-between items-center text-xs font-mono text-white uppercase tracking-wide">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                  <span className="font-bold">Location</span>
                  <span className="text-white/80">{location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">Experience</span>
                  <span className="text-white/80">{experience}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating particles effect */}
          {isHovering && (
            <>
              <div
                className="absolute w-3 h-3 bg-orange-400 rounded-full opacity-70 blur-sm shadow-lg shadow-orange-400/50"
                style={{
                  top: '20%',
                  left: '30%',
                  transform: `translateZ(60px) translateY(${Math.sin(floatOffset / 10) * 20}px)`,
                  animation: 'pulse 2s infinite',
                }}
              />
              <div
                className="absolute w-4 h-4 bg-purple-400 rounded-full opacity-50 blur-sm shadow-lg shadow-purple-400/50"
                style={{
                  top: '60%',
                  right: '25%',
                  transform: `translateZ(70px) translateY(${Math.cos(floatOffset / 8) * 25}px)`,
                  animation: 'pulse 3s infinite',
                }}
              />
              <div
                className="absolute w-2 h-2 bg-pink-400 rounded-full opacity-60 blur-sm shadow-lg shadow-pink-400/50"
                style={{
                  top: '40%',
                  right: '40%',
                  transform: `translateZ(65px) translateY(${Math.sin(floatOffset / 12) * 15}px)`,
                  animation: 'pulse 2.5s infinite',
                }}
              />
            </>
          )}
        </div>

        {/* 3D border frame with blob shape */}
        <div
          className="absolute inset-0 border-4 border-white/30 pointer-events-none"
          style={{
            transform: 'translateZ(35px)',
            borderRadius: isHovering
              ? '60% 40% 30% 70% / 60% 30% 70% 40%'
              : '50% 50% 30% 70% / 50% 50% 70% 30%',
            transition: 'border-radius 1s ease-in-out',
          }}
        />
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
      `}</style>
    </div>
  );
}
