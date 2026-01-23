'use client';

import Link from 'next/link';
import type { NavLink } from '@/lib/types';
import { handleSmoothScroll } from '@/lib/utils';
import { BRAND_NAME } from '@/lib/constants';

interface MobileMenuProps {
  isOpen: boolean;
  links: NavLink[];
  onLinkClick: () => void;
}

export function MobileMenu({ isOpen, links, onLinkClick }: MobileMenuProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    handleSmoothScroll(e, href);
    onLinkClick();
  };

  return (
    <div
      className={`fixed inset-0 h-[100dvh] bg-[#F9F8F6] z-[100] flex flex-col transition-all duration-300 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}
      aria-hidden={!isOpen}
      id="mobile-menu"
    >
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10">
        <span className="font-serif text-2xl font-bold text-stone-900 tracking-tight">
          {BRAND_NAME}
        </span>

        <button
          onClick={onLinkClick}
          className="p-2 text-stone-900 hover:text-orange-600 transition-colors focus:outline-none"
          aria-label="Close menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* --- Navigation Links --- */}
      <nav className="flex-1 flex flex-col justify-center items-center space-y-8 text-center" role="navigation">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className="font-serif text-4xl text-stone-900 hover:text-orange-600 transition-colors focus:outline-none focus:text-orange-600"
            tabIndex={isOpen ? 0 : -1}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}