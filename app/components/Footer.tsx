"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  ArrowUp,
  Send,
} from "lucide-react";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Online Courses", href: "/online-courses" },
  { name: "HR Solutions", href: "/hr-solutions" },
  { name: "Marketing & Strategy", href: "/marketing-strategy" },
  { name: "Education Fairs", href: "/education-fairs" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  { name: "Certificate Programs", href: "/online-courses" },
  { name: "Diploma Courses", href: "/online-courses" },
  { name: "Degree Programs", href: "/online-courses" },
  { name: "Corporate Training", href: "/hr-solutions" },
  { name: "Talent Acquisition", href: "/hr-solutions" },
];

const supportLinks = [
  { name: "Contact Us", href: "/contact" },
  { name: "Blog", href: "/blog" },
  { name: "Career Services", href: "/careers" },
  { name: "Student Support", href: "/support" },
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const offices = [
  {
    location: "Sharjah, UAE (Head Office)",
    address:
      "Business Center, Sharjah Publishing City Free Zone, Sharjah, United Arab Emirates",
    phone: "+971 56 159 6222",
    email: "info@icasr.ae",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0d1b4c] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/images/ICASR-ICON.svg"
                alt="ICASR Logo"
                width={56}
                height={56}
                className="w-14 h-14 object-contain"
              />
              <div>
                <h3 className="text-xl font-serif font-bold">ICASR</h3>
                <p className="text-[10px] text-white/70 tracking-wider uppercase leading-tight">
                  International Center for
                  <br />
                  Applied Studies & Research
                </p>
              </div>
            </Link>
            <p className="text-white/70 mb-6 leading-relaxed">
              International Center for Applied Studies & Research College offers
              flexible, globally recognized programs in business, technology,
              healthcare, and more. With expert-led instruction and a focus on
              practical skills, we prepare learners for success in today's
              dynamic world.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-[#c9a227] rounded-lg flex items-center justify-center transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-[#c9a227]">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#c9a227] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-[#c9a227]">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#c9a227] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-[#c9a227]">
              Support
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#c9a227] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Office Locations */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <h4 className="font-serif font-bold text-lg mb-8 text-center text-[#c9a227]">
            Our Office
          </h4>
          <div className="flex justify-center">
            {offices.map((office) => (
              <div
                key={office.location}
                className="p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors max-w-md text-center"
              >
                <h5 className="font-semibold mb-3">{office.location}</h5>
                <div className="space-y-2 text-sm text-white/70">
                  <p className="flex items-center justify-center gap-2">
                    <MapPin size={16} className="shrink-0" />
                    {office.address}
                  </p>
                  <a
                    href={`tel:${office.phone.replace(/\s/g, "")}`}
                    className="flex items-center justify-center gap-2 hover:text-[#c9a227]"
                  >
                    <Phone size={16} />
                    {office.phone}
                  </a>
                  <a
                    href={`mailto:${office.email}`}
                    className="flex items-center justify-center gap-2 hover:text-[#c9a227]"
                  >
                    <Mail size={16} />
                    {office.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 p-6 sm:p-8 bg-linear-to-r from-[#0d6d55] to-[#0d6d55]/80 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <h4 className="font-serif font-bold text-xl mb-2">
                Subscribe to Our Newsletter
              </h4>
              <p className="text-white/80 text-sm sm:text-base">
                Get the latest news, program updates, and exclusive offers.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-5 py-3 sm:py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#c9a227]"
                />
              </div>
              <button
                type="submit"
                className="btn-primary px-6 py-3 sm:py-4 rounded-lg flex items-center justify-center gap-2 shrink-0"
              >
                <Send size={18} />
                <span>Subscribe</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/60">
              © {new Date().getFullYear()} International Center for Applied
              Studies & Research College. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-white/60">
              <Link href="/terms" className="hover:text-[#c9a227]">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="hover:text-[#c9a227]">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="hover:text-[#c9a227]">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#c9a227] text-[#0d1b4c] rounded-full shadow-lg flex items-center justify-center hover:bg-[#d4af37] transition-colors z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
}
