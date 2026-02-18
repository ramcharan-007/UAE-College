"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  Globe,
  BookOpen,
  Users,
  TrendingUp,
  Calendar,
} from "lucide-react";

const mainServices = [
  {
    name: "Online Courses",
    href: "/online-courses",
    icon: BookOpen,
    description: "Accredited programs delivered online",
  },
  {
    name: "HR Solutions",
    href: "/hr-solutions",
    icon: Users,
    description: "Talent management & workforce development",
  },
  {
    name: "Marketing & Strategy",
    href: "/marketing-strategy",
    icon: TrendingUp,
    description: "Business growth & brand consulting",
  },
  {
    name: "Education Fairs & Expo",
    href: "/education-fairs",
    icon: Calendar,
    description: "Global education events & exhibitions",
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar - Transparent */}
      <div
        className={`text-white py-2 text-sm hidden md:block transition-all duration-300 ${
          isScrolled ? "bg-[#0d1b4c]" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            {/* <a
              href="tel:+971561596222"
              className="flex items-center gap-2 hover:text-[#c9a227] transition-colors"
            >
              <Phone size={14} />
              <span>+971 56 159 6222</span>
            </a> */}
            <a
              href="mailto:info@icasr.ae"
              className="flex items-center gap-2 hover:text-[#c9a227] transition-colors"
            >
              <Mail size={14} />
              <span>info@icasr.ae</span>
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={14} />
              <span>Sharjah, UAE</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 hover:text-[#c9a227] transition-colors">
              <Globe size={14} />
              <span>EN</span>
              <ChevronDown size={12} />
            </button>
            {/* <Link
              href="/login"
              className="hover:text-[#c9a227] transition-colors"
            >
              Student Portal
            </Link> */}
          </div>
        </div>
      </div>

      {/* Main Header - Transparent */}
      <header
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg py-2"
            : "bg-white/10 backdrop-blur-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform ${
                  isScrolled
                    ? "bg-gradient-to-br from-[#0d1b4c] to-[#0d6d55]"
                    : "bg-white/20 backdrop-blur-sm"
                }`}
              >
                <GraduationCap className="text-white" size={28} />
              </div>
              <div className="hidden sm:block">
                <h1
                  className={`text-xl font-serif font-bold leading-tight transition-colors ${
                    isScrolled ? "text-[#0d1b4c]" : "text-white"
                  }`}
                >
                  Emirates International
                </h1>
                <p
                  className={`text-xs tracking-wider uppercase transition-colors ${
                    isScrolled ? "text-[#0d6d55]" : "text-white/80"
                  }`}
                >
                  International Center for Applied Studies & Research
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                href="/"
                className={`px-4 py-2 transition-colors font-medium whitespace-nowrap ${
                  isScrolled
                    ? "text-[#2d2d2d] hover:text-[#0d6d55]"
                    : "text-white hover:text-[#c9a227]"
                }`}
              >
                Home
              </Link>

              {mainServices.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 transition-colors font-medium flex items-center gap-1.5 text-sm whitespace-nowrap ${
                    isScrolled
                      ? "text-[#2d2d2d] hover:text-[#0d6d55]"
                      : "text-white hover:text-[#c9a227]"
                  }`}
                >
                  {/* <item.icon size={16} /> */}
                  {item.name}
                </Link>
              ))}

              <Link
                href="/about"
                className={`px-4 py-2 transition-colors font-medium ${
                  isScrolled
                    ? "text-[#2d2d2d] hover:text-[#0d6d55]"
                    : "text-white hover:text-[#c9a227]"
                }`}
              >
                About
              </Link>

              <Link
                href="/contact"
                className={`px-4 py-2 transition-colors font-medium ${
                  isScrolled
                    ? "text-[#2d2d2d] hover:text-[#0d6d55]"
                    : "text-white hover:text-[#c9a227]"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/apply"
                className={`px-6 py-2.5 rounded-full whitespace-nowrap text-sm font-semibold transition-all ${
                  isScrolled
                    ? "btn-primary"
                    : "bg-white text-[#0d1b4c] hover:bg-[#c9a227] hover:text-white"
                }`}
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors ${
                isScrolled ? "text-[#0d1b4c]" : "text-white"
              }`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <nav className="max-w-7xl mx-auto px-4 py-4">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-[#2d2d2d] font-medium border-b border-gray-100"
                >
                  Home
                </Link>

                {mainServices.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 py-3 border-b border-gray-100"
                  >
                    <div className="w-10 h-10 bg-[#0d1b4c]/10 rounded-lg flex items-center justify-center">
                      <item.icon size={20} className="text-[#0d1b4c]" />
                    </div>
                    <div>
                      <div className="font-medium text-[#2d2d2d]">
                        {item.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {item.description}
                      </div>
                    </div>
                  </Link>
                ))}

                <Link
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-[#2d2d2d] font-medium border-b border-gray-100"
                >
                  About
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-[#2d2d2d] font-medium border-b border-gray-100"
                >
                  Contact
                </Link>

                <div className="pt-4 flex flex-col gap-3">
                  <Link
                    href="/login"
                    className="btn-secondary py-3 rounded-full text-center"
                  >
                    Student Portal
                  </Link>
                  <Link
                    href="/apply"
                    className="btn-primary py-3 rounded-full text-center"
                  >
                    Get Started
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
