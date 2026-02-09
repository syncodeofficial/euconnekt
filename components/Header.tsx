"use client";

import Link from "next/link";
import { Menu, X, ChevronDown, Mail, Facebook, Instagram } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="block w-48 h-12 bg-[url('/images/logo.png')] bg-cover bg-center"
          >
            <span className="sr-only">Home</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/how-we-work"
              className="text-sm font-medium hover:text-accent"
            >
              How We Work
            </Link>

            {/* Work Permit Types */}
            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-medium hover:text-accent"
              >
                Work Permit Types <ChevronDown size={14} />
              </button>

              <div className="absolute left-0 mt-2 w-64 rounded-lg border bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  href="/work-permit-types/critical-skills"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Critical Skills Employment Permit
                </Link>
                <Link
                  href="/work-permit-types/general-employment"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  General Employment Permit
                </Link>
                <Link
                  href="/work-permit-types"
                  className="block px-4 py-2 text-sm font-medium hover:bg-gray-100"
                >
                  All Permit Types
                </Link>
              </div>
            </div>

            {/* Our Services */}
            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-medium hover:text-accent"
              >
                Our Services <ChevronDown size={14} />
              </button>

              <div className="absolute left-0 mt-2 w-56 rounded-lg border bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  href="/services/employers"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  For Employers
                </Link>
                <Link
                  href="/services/individuals"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  For Individuals
                </Link>
              </div>
            </div>

            <Link
              href="/free-assessment"
              className="text-sm font-medium hover:text-accent"
            >
              Free Assessment
            </Link>

            <Link
              href="/top-industries"
              className="text-sm font-medium hover:text-accent"
            >
              Top Industries
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a href="mailto:contact@EuConnekt.com" className="p-2 text-gray-700 hover:text-[#3465D3]">
              <Mail size={20} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61566165320346"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-700 hover:text-[#3465D3]"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/euconnekt/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-700 hover:text-[#E1306C]"
            >
              <Instagram size={20} />
            </a>

            <Link
              href="/contact"
              className="ml-3 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden space-y-4 pb-6 pt-4">
            <Link href="/how-we-work" className="block">
              How We Work
            </Link>
            <Link href="/work-permit-types" className="block">
              Work Permit Types
            </Link>
            <Link href="/services" className="block">
              Our Services
            </Link>
            <Link href="/free-assessment" className="block">
              Free Assessment
            </Link>
            <Link href="/top-industries" className="block">
              Top Industries
            </Link>
            <Link
              href="/contact"
              className="block rounded-md bg-accent px-4 py-2 text-white text-center"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
