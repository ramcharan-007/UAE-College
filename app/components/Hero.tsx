"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Users,
  TrendingUp,
  Calendar,
  CheckCircle,
  Play,
} from "lucide-react";

const stats = [
  { value: "100+", label: "Online Courses" },
  { value: "35K+", label: "Graduates Worldwide" },
  { value: "120+", label: "Countries Served" },
  { value: "98%", label: "Career Success Rate" },
];

const services = [
  {
    icon: BookOpen,
    title: "Online Courses",
    desc: "100+ accredited programs",
    href: "/online-courses",
    color: "from-[#0d6d55] to-[#0a5a46]",
  },
  {
    icon: Users,
    title: "HR Solutions",
    desc: "Complete workforce services",
    href: "/hr-solutions",
    color: "from-[#c9a227] to-[#a88820]",
  },
  {
    icon: TrendingUp,
    title: "Marketing & Strategy",
    desc: "Growth-driven consulting",
    href: "/marketing-strategy",
    color: "from-[#2563eb] to-[#1d4ed8]",
  },
  {
    icon: Calendar,
    title: "Education Fairs",
    desc: "Global expo events",
    href: "/education-fairs",
    color: "from-[#7c3aed] to-[#6d28d9]",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* College Photo Banner Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/Hero Page-01.jpg')`,
        }}
      />

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b4c]/90 via-[#0d1b4c]/75 to-[#0d1b4c]/50" />

      {/* Bottom Gradient for Stats Section */}
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-[#0d1b4c] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 pt-40 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm mb-6">
              <span className="w-2 h-2 bg-[#c9a227] rounded-full animate-pulse" />
              UAE&apos;s Premier Education & Professional Services Provider
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
              International Center for <br />
              <span className="text-[#c9a227]">Applied Studies</span> <br />&
              Research
            </h1>

            <p className="text-lg text-white/80 mb-8 max-w-xl">
              Advance your career with globally accredited online courses,
              strategic HR solutions, marketing expertise, and premier
              international education events designed to expand your global
              reach.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/online-courses"
                className="btn-primary px-8 py-4 rounded-full flex items-center justify-center gap-2 text-lg font-semibold"
              >
                Explore Courses
                <ArrowRight size={20} />
              </Link>
              <button className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/30 text-white rounded-full hover:bg-white/10 transition-all">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Play size={16} fill="white" />
                </div>
                Watch Our Story
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-[#0d6d55]" />
                UK Accredited
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-[#0d6d55]" />
                KHDA Approved
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-[#0d6d55]" />
                ISO Certified
              </div>
            </div>
          </motion.div>

          {/* Right Content - Service Cards Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <Link
                  href={service.href}
                  className={`block p-6 rounded-2xl bg-gradient-to-br ${service.color} hover:scale-105 transition-transform cursor-pointer`}
                >
                  <service.icon size={32} className="text-white mb-4" />
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {service.title}
                  </h3>
                  <p className="text-white/80 text-sm">{service.desc}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#c9a227]">
                {stat.value}
              </div>
              <div className="text-white/70 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
