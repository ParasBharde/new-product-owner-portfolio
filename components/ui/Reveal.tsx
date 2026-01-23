'use client';

import { useIntersectionObserver, usePrefersReducedMotion } from '@/lib/hooks';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Reveal component that animates elements into view on scroll
 * Respects prefers-reduced-motion user preference
 */
export function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const { ref, isVisible } = useIntersectionObserver(0.1);
  const prefersReducedMotion = usePrefersReducedMotion();

  // If user prefers reduced motion, skip animation
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
