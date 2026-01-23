import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';
import {
  CONTACT,
  FOOTER_LINKS,
  COPYRIGHT_YEAR,
  COPYRIGHT_NAME,
} from '@/lib/constants';

/**
 * Footer section with contact information and social links
 */
export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-stone-900 text-stone-300 py-24 px-6 lg:px-12 relative overflow-hidden"
    >
      {/* Decorative background element */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-stone-800 rounded-full blur-3xl opacity-20 -mr-20 -mt-20 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        {/* Contact Information */}
        <Reveal>
          <h2 className="font-serif text-5xl md:text-6xl text-white mb-8">
            Let&apos;s build something <br />
            <span className="text-orange-600 italic">remarkable.</span>
          </h2>
          <div className="flex flex-col gap-4 items-start">
            <Link
              href={`mailto:${CONTACT.email}`}
              className="text-2xl hover:text-white transition-colors border-b border-stone-700 hover:border-white pb-1 focus:outline-none focus:text-white focus:border-white"
            >
              {CONTACT.email}
            </Link>
            <Link
              href={`https://${CONTACT.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-white transition-colors border-b border-stone-700 hover:border-white pb-1 focus:outline-none focus:text-white focus:border-white"
            >
              {CONTACT.linkedin}
            </Link>
          </div>
        </Reveal>

        {/* Status and Links */}
        <Reveal
          delay={100}
          className="flex flex-col justify-end items-start lg:items-end w-full"
        >
          <p className="text-stone-500 mb-8 max-w-xs text-left lg:text-right">
            {CONTACT.status}
          </p>
          <nav
            className="flex gap-8"
            role="navigation"
            aria-label="Footer navigation"
          >
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="hover:text-white transition-colors focus:outline-none focus:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="text-stone-600 text-sm mt-12">
            &copy; {COPYRIGHT_YEAR} {COPYRIGHT_NAME}
          </p>
        </Reveal>
      </div>
    </footer>
  );
}
