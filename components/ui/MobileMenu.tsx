'use client';

import Link from 'next/link';
import type { NavLink } from '@/lib/types';

interface MobileMenuProps {
  isOpen: boolean;
  links: NavLink[];
  onLinkClick: () => void;
}

/**
 * Full-screen mobile navigation menu
 */
export function MobileMenu({ isOpen, links, onLinkClick }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 bg-[#F9F8F6] z-40 flex flex-col justify-center items-center transition-all duration-300 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}
      aria-hidden={!isOpen}
    >
      <nav className="flex flex-col space-y-8 text-center" role="navigation">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onLinkClick}
            className="font-serif text-3xl text-stone-900 hover:text-orange-600 transition-colors focus:outline-none focus:text-orange-600"
            tabIndex={isOpen ? 0 : -1}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
