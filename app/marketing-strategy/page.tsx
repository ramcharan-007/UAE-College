"use client";

import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import {
  TrendingUp,
  Target,
  BarChart3,
  Megaphone,
  Palette,
  Globe,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Search,
  Users,
  Zap,
  MessageSquare,
  PieChart,
  Phone,
} from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Data-Driven Digital Marketing strategies designed to maximize reach, drive conversions, and optimize ROI across all platforms.",
    features: [
      "Social Media Strategy & Management",
      "SEM Optimization & PPC",
      "Marketing Automation & Email Campaigns",
      "Content Marketing & Brand Storytelling",
    ],
  },
  {
    icon: Palette,
    title: "Brand Strategy & Design",
    description:
      "Craft a distinctive brand identity that engages your audience and strengthens market presence.",
    features: [
      "Brand Identity Development & Positioning",
      "Visual Design, Logo, and Creative Assets",
      "Brand Guidelines, Standards & Documentation",
      "Rebranding & Brand Evolution Solutions",
    ],
  },
  {
    icon: Search,
    title: "SEO & Content",
    description:
      "Enhance your online presence and attract qualified traffic through expert SEO strategies.",
    features: [
      "Comprehensive Technical SEO Audit & Analysis",
      "Keyword Research, Strategy & Competitive Analysis",
      "Content Development & On-Page Optimization",
      "Link Building & Authority Enhancement Campaigns",
    ],
  },
  {
    icon: BarChart3,
    title: "Market Research",
    description:
      "In-depth market analysis to gain actionable insights on customers, competitors, and trends.",
    features: [
      "Competitive Landscape Analysis & Benchmarking",
      "Customer Insights & Behavior Research",
      "Market Sizing, Segmentation & Opportunity Assessment",
      "Trend Forecasting & Emerging Market Insights",
    ],
  },
  {
    icon: Lightbulb,
    title: "Business Strategy",
    description:
      "Expert strategic consulting to drive sustainable growth and long-term business success.",
    features: [
      "Go-to-Market Planning & Execution",
      "Business Model Design & Innovation",
      "Growth Strategy Development & Execution",
      "Strategic Alliances & Partnership Development",
    ],
  },
  {
    icon: PieChart,
    title: "Analytics & Insights",
    description:
      "Transform data into actionable insights with our analytics solutions.",
    features: [
      "Marketing Analytics Implementation & Setup",
      "Custom Performance Dashboards & Reporting Tools",
      "ROI Measurement, Tracking & Optimization",
      "Customer Journey Mapping & Analysis",
    ],
  },
];

const caseStudies = [
  {
    client: "Luxury Real Estate Group",
    industry: "Real Estate",
    result: "320% increase in qualified leads",
    description:
      "Comprehensive digital marketing strategy for a premium property developer in Dubai.",
  },
  {
    client: "FinTech Startup",
    industry: "Financial Services",
    result: "5x growth in user acquisition",
    description:
      "Brand positioning and growth marketing for a UAE-based payment solution.",
  },
  {
    client: "Healthcare Network",
    industry: "Healthcare",
    result: "150% increase in appointments",
    description:
      "Local SEO and content strategy for a chain of medical centers.",
  },
];

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "150%", label: "Avg. ROI Increase" },
  { value: "50+", label: "Active Clients" },
  { value: "12+", label: "Industry Awards" },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "Understanding your business, goals, and target audience",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Developing a customized marketing and growth plan",
  },
  {
    step: "03",
    title: "Execution",
    description: "Implementing campaigns with precision and creativity",
  },
  {
    step: "04",
    title: "Optimization",
    description: "Continuous improvement based on data and insights",
  },
];

export default function MarketingStrategyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-40 bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white text-sm mb-6">
                <TrendingUp size={16} />
                Full-Spectrum Marketing Solutions
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                Marketing & Strategy
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                We provide end-to-end marketing solutions, from strategic brand
                development to targeted digital campaigns, designed to
                accelerate your business growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-[#2563eb] px-8 py-4 rounded-full font-semibold hover:bg-[#c9a227] hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  Contact Us
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="tel:+971561596222"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors inline-flex items-center gap-2"
                >
                  <Phone size={18} />
                  Call Us Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-[#2563eb]">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-[#faf9f7]">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-[#c9a227] font-semibold text-sm tracking-wider uppercase">
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0d1b4c] mt-3 mb-4">
                Full-Spectrum Marketing Solutions
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From brand strategy to digital execution, we offer comprehensive
                marketing services to fuel your growth.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-[#2563eb]/10 rounded-xl flex items-center justify-center mb-4">
                    <service.icon size={28} className="text-[#2563eb]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0d1b4c] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <CheckCircle
                          size={14}
                          className="text-[#0d6d55] shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-[#c9a227] font-semibold text-sm tracking-wider uppercase">
                Our Approach
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0d1b4c] mt-3 mb-4">
                How We Deliver Results
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl font-bold text-[#2563eb]/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-[#0d1b4c] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 bg-[#0d1b4c]">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-[#c9a227] font-semibold text-sm tracking-wider uppercase">
                Success Stories
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-3 mb-4">
                Real Results for Real Clients
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.client}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <div className="text-sm text-[#c9a227] font-medium mb-2">
                    {study.industry}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {study.client}
                  </h3>
                  <p className="text-white/70 text-sm mb-4">
                    {study.description}
                  </p>
                  <div className="bg-[#2563eb] rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">
                      {study.result}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Ready to Accelerate Your Growth?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Let&apos;s discuss how we can help you achieve your marketing
                and business goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-[#2563eb] px-8 py-4 rounded-full font-semibold hover:bg-[#c9a227] hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  Start Your Project
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors"
                >
                  Request Proposal
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
