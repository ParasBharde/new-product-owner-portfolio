"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useScrollDetection, useMobileMenu } from "@/lib/hooks";
import { ArrowLeft } from "lucide-react";
import { MobileMenu } from "@/components/ui/MobileMenu";
import {
  BRAND_NAME,
  NAV_LINKS,
  MOBILE_NAV_LINKS,
  CASE_NAV_LINKS,
} from "@/lib/constants";
import { handleSmoothScroll } from "@/lib/utils";
import { usePathname } from "next/navigation";

/**
 * Main header component with navigation and mobile menu
 */
export function Header() {
  const isScrolled = useScrollDetection(50);
  const { isOpen, toggle, close } = useMobileMenu();
  const pathname = usePathname();

  const isCaseStudyOpen = pathname.includes("/case-study");

  // Handle smooth scroll and hash removal for "Get in touch" button
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleSmoothScroll(e, "#contact", true);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300
  ${isScrolled ? "bg-[#F9F8F6]/90 backdrop-blur-md shadow-sm py-4" : "py-6"}
`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={`font-serif text-xl font-bold tracking-tight z-50 relative transition-colors focus:outline-none
  ${
    isCaseStudyOpen && !isScrolled
      ? "text-white hover:text-orange-200"
      : "text-stone-900 hover:text-orange-600 focus:text-orange-600"
  }
`}
          aria-label="Home"
        >
          {BRAND_NAME}
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-8"
          role="navigation"
          aria-label="Main navigation"
        >
          {isCaseStudyOpen
            ? CASE_NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className={`text-sm font-medium transition-colors focus:outline-none focus:text-orange-600 ${
                    isScrolled
                      ? "text-stone-600 hover:text-orange-600"
                      : "text-white hover:text-orange-200"
                  }`}
                >
                  {link.label}
                </Link>
              ))
            : NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="text-sm font-medium text-stone-600 hover:text-orange-600 transition-colors focus:outline-none focus:text-orange-600"
                >
                  {link.label}
                </Link>
              ))}
          <Link
            href={isCaseStudyOpen ? "/#work" : "#contact"}
            onClick={(e) => {
              if (!isCaseStudyOpen) handleContactClick(e);
            }}
            className={`text-sm font-medium border px-5 py-2 rounded-full transition-all duration-300 focus:outline-none focus:bg-stone-900 focus:text-white
  ${
    isCaseStudyOpen && !isScrolled
      ? "text-white border-white/30 hover:bg-white hover:text-stone-900"
      : "text-stone-900 border-stone-900/20 hover:bg-stone-900 hover:text-white"
  }
`}
          >
            {isCaseStudyOpen ? (
              <div className="flex justify-between">
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                <span>Back to Home</span>
              </div>
            ) : (
              "Get in touch"
            )}
          </Link>
        </nav>

        {/* Mobile Menu Button - Fixed positioning */}
        <button
          onClick={toggle}
          className={`md:hidden z-50 relative transition-colors focus:outline-none p-2 -mr-2 ${
            isCaseStudyOpen && !isScrolled
              ? "text-white hover:text-orange-200"
              : "text-stone-900 hover:text-orange-600"
          }`}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <MobileMenu
        isOpen={isOpen}
        links={MOBILE_NAV_LINKS}
        onLinkClick={close}
      />
    </header>
  );
}
