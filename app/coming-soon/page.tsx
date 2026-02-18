"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import {
  BookOpen,
  Users,
  TrendingUp,
  Calendar,
  CheckCircle,
  ArrowRight,
  Globe,
  Award,
  Clock,
  Mail,
  Bell,
  Sparkles,
  GraduationCap,
  Building2,
  Briefcase,
} from "lucide-react";

const currentFeatures = [
  {
    icon: BookOpen,
    title: "Online Courses",
    description:
      "159+ UK-accredited courses across IT, Healthcare, Business, and more. Learn at your own pace with expert support.",
    href: "/courses",
    color: "from-[#0d6d55] to-[#0a5a46]",
  },
  {
    icon: Users,
    title: "HR Solutions",
    description:
      "Complete workforce solutions including recruitment, training, payroll management, and talent development.",
    href: "/hr-solutions",
    color: "from-[#c9a227] to-[#a88820]",
  },
  {
    icon: TrendingUp,
    title: "Marketing & Strategy",
    description:
      "Strategic consulting services for business growth, brand development, and digital marketing excellence.",
    href: "/marketing-strategy",
    color: "from-[#2563eb] to-[#1d4ed8]",
  },
  {
    icon: Calendar,
    title: "Education Fairs",
    description:
      "Premier international education events connecting students with top universities from around the world.",
    href: "/education-fairs",
    color: "from-[#7c3aed] to-[#6d28d9]",
  },
];

const highlights = [
  { icon: GraduationCap, label: "159+ Courses", value: "UK Accredited" },
  { icon: Globe, label: "120+ Countries", value: "Global Reach" },
  { icon: Award, label: "35K+", value: "Graduates" },
  { icon: Building2, label: "100+", value: "Partner Universities" },
];

// Replace YOUR_SCRIPT_ID with your actual Google Apps Script deployment ID
// Instructions: See GOOGLE_SHEETS_SETUP.md
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxspiorDJbeZwK45tH_FLtWr86zZq6mlj6PM05UwI6VpPTaCmNAAKmAy-5g4m70Gloy/exec";

export default function ComingSoonPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const payload = {
        ...formData,
        timestamp: new Date().toISOString(),
        source: "Coming Soon Page",
      };

      // Submit to Google Sheets via Apps Script
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // With no-cors mode, we can't check response status
      // Assume success if no exception thrown
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", interest: "" });

      // Also send to email backup (optional)
      try {
        await fetch("/api/lead-capture", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } catch {
        // Email backup is optional, don't show error if it fails
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error("Form submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-32 md:py-40 bg-[#0d1b4c] overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{
                backgroundImage: `url('/images/Hero Page-02.jpg')`,
              }}
            />
          </div>
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-[#c9a227]/20 to-transparent rounded-full"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{ duration: 10, repeat: Infinity, delay: 2 }}
              className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-[#0d6d55]/20 to-transparent rounded-full"
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 rounded-full text-[#c9a227] text-sm font-medium mb-6">
                <Sparkles size={16} />
                <span>Coming Soon</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                This Page is
                <br />
                <span className="text-[#c9a227]">Under Construction</span>
              </h1>

              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
                We&apos;re working hard to bring you something amazing. In the
                meantime, explore our existing services or subscribe to get
                notified when we launch!
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
                  >
                    <item.icon className="w-6 h-6 text-[#c9a227] mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">
                      {item.label}
                    </div>
                    <div className="text-sm text-white/60">{item.value}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Notification Form Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#faf9f7] rounded-2xl p-8 md:p-10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#c9a227]/10 rounded-xl flex items-center justify-center">
                    <Bell className="w-6 h-6 text-[#c9a227]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-[#0d1b4c]">
                      Get Notified
                    </h2>
                    <p className="text-gray-600 text-sm">
                      Be the first to know when we launch
                    </p>
                  </div>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-[#0d6d55]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-[#0d6d55]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#0d1b4c] mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-600">
                      We&apos;ll notify you as soon as this page is ready.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#0d6d55] focus:border-transparent outline-none transition-all"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#0d6d55] focus:border-transparent outline-none transition-all"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#0d6d55] focus:border-transparent outline-none transition-all"
                        placeholder="+971 XX XXX XXXX"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Area of Interest
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) =>
                          setFormData({ ...formData, interest: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#0d6d55] focus:border-transparent outline-none transition-all bg-white"
                      >
                        <option value="">Select an option</option>
                        <option value="Online Courses">Online Courses</option>
                        <option value="HR Solutions">HR Solutions</option>
                        <option value="Marketing Services">
                          Marketing Services
                        </option>
                        <option value="Education Fairs">Education Fairs</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#0d6d55] text-white py-4 rounded-xl font-semibold hover:bg-[#0a5a46] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Mail size={18} />
                          Notify Me
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>

              {/* Right - Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-[#c9a227] font-semibold text-sm tracking-wider uppercase">
                  While You Wait
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0d1b4c] mt-3 mb-6">
                  Explore Our Current Services
                </h2>
                <p className="text-gray-600 mb-8">
                  We already offer a comprehensive range of educational and
                  professional services. Discover what&apos;s available now
                  while we prepare exciting new features for you.
                </p>

                <div className="space-y-4">
                  {[
                    "159+ UK-Accredited Online Courses",
                    "Professional HR & Recruitment Services",
                    "Strategic Marketing Consulting",
                    "International Education Fairs",
                    "Career Development Support",
                    "Global University Partnerships",
                  ].map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-[#0d6d55] shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Current Services Section */}
        <section className="py-16 bg-[#faf9f7]">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-[#c9a227] font-semibold text-sm tracking-wider uppercase">
                Available Now
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0d1b4c] mt-3 mb-4">
                Our Current Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Start your journey today with our existing world-class services
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={feature.href} className="block group">
                    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all h-full">
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                      >
                        <feature.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-[#0d1b4c] mb-2 group-hover:text-[#0d6d55] transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {feature.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-[#0d6d55] text-sm font-medium group-hover:gap-2 transition-all">
                        Explore <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-[#0d1b4c]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/courses"
                  className="block bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all group"
                >
                  <BookOpen className="w-10 h-10 text-[#c9a227] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Browse Courses
                  </h3>
                  <p className="text-white/70 text-sm mb-4">
                    Explore 159+ accredited courses
                  </p>
                  <span className="inline-flex items-center gap-1 text-[#c9a227] font-medium group-hover:gap-2 transition-all">
                    View Catalog <ArrowRight size={16} />
                  </span>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Link
                  href="/contact"
                  className="block bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all group"
                >
                  <Mail className="w-10 h-10 text-[#c9a227] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Contact Us
                  </h3>
                  <p className="text-white/70 text-sm mb-4">
                    Get in touch with our team
                  </p>
                  <span className="inline-flex items-center gap-1 text-[#c9a227] font-medium group-hover:gap-2 transition-all">
                    Send Message <ArrowRight size={16} />
                  </span>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  href="/about"
                  className="block bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all group"
                >
                  <Briefcase className="w-10 h-10 text-[#c9a227] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    About Us
                  </h3>
                  <p className="text-white/70 text-sm mb-4">
                    Learn about our mission
                  </p>
                  <span className="inline-flex items-center gap-1 text-[#c9a227] font-medium group-hover:gap-2 transition-all">
                    Our Story <ArrowRight size={16} />
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
