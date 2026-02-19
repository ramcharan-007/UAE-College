"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "Globally recognized degrees",
  "Flexible payment plans",
  "Scholarship opportunities",
  "Career placement support",
  "Multicultural campus",
  "Industry partnerships",
];

export default function CallToAction() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative bg-gradient-to-r from-[#0d1b4c] to-[#0d6d55] rounded-3xl overflow-hidden">
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <pattern
                id="grid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1" cy="1" r="1" fill="currentColor" />
              </pattern>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>

          {/* Gold accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c9a227] via-[#d4af37] to-[#c9a227]" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-8 md:p-12 lg:p-16">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block bg-[#c9a227]/20 text-[#c9a227] text-sm font-semibold px-4 py-1 rounded-full mb-6">
                Start Your Journey Today
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                Ready to Transform
                <span className="block text-[#c9a227]">Your Future?</span>
              </h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Join thousands of successful graduates who launched their
                careers from International Center for Applied Studies & Research College. Take the first step
                towards your dream today.
              </p>

              {/* Benefits Grid */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 text-white/90"
                  >
                    <CheckCircle
                      size={18}
                      className="text-[#c9a227] flex-shrink-0"
                    />
                    <span className="text-sm">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/apply"
                  className="btn-primary px-8 py-4 rounded-full text-lg flex items-center justify-center gap-2 group"
                >
                  Apply Now - Free Application
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white/50 text-white px-8 py-4 rounded-full text-lg flex items-center justify-center gap-2 hover:bg-white hover:text-[#0d1b4c] transition-colors"
                >
                  Talk to an Advisor
                </Link>
              </div>
            </motion.div>

            {/* Right Content - Application Form Preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-2xl"
            >
              <h3 className="font-serif font-bold text-[#0d1b4c] text-2xl mb-2">
                Quick Inquiry
              </h3>
              <p className="text-gray-600 mb-6">
                Get personalized guidance from our admissions team.
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0d6d55] focus:ring-1 focus:ring-[#0d6d55]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0d6d55] focus:ring-1 focus:ring-[#0d6d55]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0d6d55] focus:ring-1 focus:ring-[#0d6d55]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <div className="flex">
                    <select className="px-3 py-3 rounded-l-lg border border-r-0 border-gray-200 bg-gray-50 focus:outline-none focus:border-[#0d6d55]">
                      <option>+971</option>
                      <option>+966</option>
                      <option>+91</option>
                      <option>+44</option>
                      <option>+1</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="50 123 4567"
                      className="w-full px-4 py-3 rounded-r-lg border border-gray-200 focus:outline-none focus:border-[#0d6d55] focus:ring-1 focus:ring-[#0d6d55]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Program of Interest
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0d6d55] focus:ring-1 focus:ring-[#0d6d55]">
                    <option value="">Select a program</option>
                    <option>Business Administration (BBA/MBA)</option>
                    <option>Computer Science & IT</option>
                    <option>Medical Sciences</option>
                    <option>Finance & Accounting</option>
                    <option>Design & Media</option>
                    <option>Tourism & Hospitality</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-4 rounded-lg text-lg font-semibold"
                >
                  Get Free Consultation
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to our{" "}
                  <Link
                    href="/terms"
                    className="text-[#0d6d55] hover:underline"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-[#0d6d55] hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
