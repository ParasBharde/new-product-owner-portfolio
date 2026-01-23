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
          className="absolute -inset-4 bg-gradient-to-br from-orange-500/20 to-purple-500/20 blur-3xl opacity-0 transition-opacity duration-500"
          style={{
            opacity: isHovering ? 0.6 : 0,
            transform: 'translateZ(-50px)',
          }}
        />

        {/* Main image container with layers */}
        <div className="relative w-full h-full rounded-sm overflow-hidden shadow-2xl">
          {/* Background layer - moves slower (parallax) */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-orange-100 to-purple-100"
            style={{
              transform: `translateZ(-30px) scale(1.1) translateX(${-mousePosition.x * 5}px) translateY(${-mousePosition.y * 5}px)`,
            }}
          />

          {/* Middle decorative layer */}
          <div
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"
            style={{
              transform: `translateZ(-15px) translateX(${mousePosition.x * 10}px) translateY(${mousePosition.y * 10}px)`,
            }}
          />

          {/* Image layer */}
          <div
            className="absolute inset-0 flex items-center justify-center h-[85%]"
            style={{
              transform: `translateZ(20px)`,
            }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover transition-all duration-500"
              style={{
                filter: isHovering ? 'brightness(1.1) contrast(1.05)' : 'brightness(1) contrast(1)',
              }}
            />
          </div>

          {/* Shine effect on hover */}
          <div
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-transparent opacity-0 transition-opacity duration-500"
            style={{
              opacity: isHovering ? 0.3 : 0,
              transform: `translateX(${mousePosition.x * 50}%) translateY(${mousePosition.y * 50}%)`,
              background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.5) 50%, transparent 100%)',
            }}
          />

          {/* Info overlay with parallax */}
          <div
            id="img"
            className="absolute bottom-6 left-6 right-6 z-10"
            style={{
              transform: `translateZ(40px)`,
            }}
          >
            <div className="flex justify-between text-xs font-mono text-stone-700 uppercase backdrop-blur-sm bg-white/50 p-3 rounded">
              <span>Loc: {location}</span>
              <span>Exp: {experience}</span>
            </div>
          </div>

          {/* Floating particles effect */}
          {isHovering && (
            <>
              <div
                className="absolute w-2 h-2 bg-orange-500 rounded-full opacity-60 blur-sm"
                style={{
                  top: '20%',
                  left: '30%',
                  transform: `translateZ(60px) translateY(${Math.sin(floatOffset / 10) * 20}px)`,
                  animation: 'pulse 2s infinite',
                }}
              />
              <div
                className="absolute w-3 h-3 bg-purple-500 rounded-full opacity-40 blur-sm"
                style={{
                  top: '60%',
                  right: '25%',
                  transform: `translateZ(70px) translateY(${Math.cos(floatOffset / 8) * 25}px)`,
                  animation: 'pulse 3s infinite',
                }}
              />
            </>
          )}
        </div>

        {/* 3D border frame effect */}
        <div
          className="absolute inset-0 border-2 border-white/20 rounded-sm pointer-events-none"
          style={{
            transform: 'translateZ(30px)',
          }}
        />
      </div>
    </div>
  );
}