"use client";

import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import {
  Users,
  Briefcase,
  Target,
  Award,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Building2,
  GraduationCap,
  FileText,
  Shield,
  Clock,
  Globe,
  Phone,
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Talent Acquisition/Onboarding Support",
    description:
      "Comprehensive recruitment solutions designed to identify, attract, and onboard high-quality professionals who align with your organization's culture, vision, and long-term objectives.",
    features: [
      "C-Suite Recruitment",
      "Large-Scale Talent Acquisition",
      "Career Fair Recruitment Support",
      "Contract & Temporary Resource Allocation",
    ],
  },
  {
    icon: FileText,
    title: "Managed Payroll Solutions",
    description:
      "Comprehensive payroll solutions aligned with UAE Labour Law and regulations.",
    features: [
      "Payroll Disbursement Services",
      "WPS Regulatory Administration",
      "Leave and Benefit Policy Administration",
      "Tax Compliance Documentation & Reporting",
    ],
  },
  {
    icon: GraduationCap,
    title: "Employee Upskilling Initiatives",
    description:
      "Focused learning pathways that help employees acquire new skills, adapt to evolving industry demands, and maintain competitive advantage.",
    features: [
      "Emerging Leaders Programs",
      "Core Skills Enhancement",
      "Interpersonal Skills Development",
      "E-Learning Solutions",
    ],
  },
  {
    icon: Target,
    title: "HR Consulting",
    description:
      "Strategic advisory services designed to strengthen workforce effectiveness and align human resources with organizational goals.",
    features: [
      "HR Policy Development",
      "Competency Mapping",
      "Compensation & Benefits Strategy",
      "Organizational Design",
    ],
  },
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description:
      "Ensure organizational adherence to UAE labor laws and applicable international regulations through structured compliance frameworks.",
    features: [
      "Employment Contract Administration",
      "Immigration & Work Authorization Support",
      "Workplace Dispute Management",
      "HR Compliance Audits",
    ],
  },
  {
    icon: Building2,
    title: "HR Outsourcing",
    description:
      "Comprehensive management of HR functions that enables organizations to concentrate on core business priorities.",
    features: [
      "Comprehensive HR Outsourcing",
      "Functional HR Outsourcing",
      "Centralized HR Services",
      "Employee Support Desk",
    ],
  },
];

const industries = [
  "Banking & Finance",
  "Healthcare",
  "Information Technology",
  "Manufacturing",
  "Retail & FMCG",
  "Hospitality",
  "Construction",
  "Education",
];

const stats = [
  { value: "500+", label: "Companies Served" },
  { value: "25K+", label: "Placements Made" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Client Retention" },
];

const clients = [
  "Emirates NBD",
  "Dubai Healthcare",
  "Etisalat",
  "ADNOC",
  "Emaar Properties",
  "Jumeirah Group",
];

export default function HRSolutionsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-40 bg-gradient-to-br from-[#c9a227] to-[#a88820] overflow-hidden">
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
                <Users size={16} />
                Smart HR Solutions for Growing Businesses
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                HR Solutions
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                From recruitment to retirement, we empower organizations with
                strategic, end-to-end HR solutions built for long-term success.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-[#fff] text-[#c9a227] px-8 py-4 rounded-full font-semibold hover:bg-[#0d1b4c]/90 transition-colors inline-flex items-center gap-2"
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
                  <div className="text-4xl font-bold text-[#c9a227]">
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
                Smart HR Solutions for Growing Businesses
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From recruitment to retirement, we provide seamless, end-to-end
                HR solutions designed to help organizations grow and succeed.
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
                  <div className="w-14 h-14 bg-[#c9a227]/10 rounded-xl flex items-center justify-center mb-4">
                    <service.icon size={28} className="text-[#c9a227]" />
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

        {/* Industries Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-[#c9a227] font-semibold text-sm tracking-wider uppercase">
                  Industry Expertise
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0d1b4c] mt-3 mb-6">
                  Serving Diverse Industries
                </h2>
                <p className="text-gray-600 mb-8">
                  With over 15 years of experience, we have deep insight into
                  sector-specific HR complexities. Our tailored solutions
                  deliver talent and services precisely aligned with your
                  organizational requirements.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {industries.map((industry) => (
                    <div
                      key={industry}
                      className="flex items-center gap-2 p-3 bg-[#faf9f7] rounded-lg"
                    >
                      <CheckCircle size={16} className="text-[#0d6d55]" />
                      <span className="text-sm font-medium text-[#0d1b4c]">
                        {industry}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#0d1b4c] to-[#0a1538] rounded-2xl p-8 text-white"
              >
                <h3 className="text-2xl font-serif font-bold mb-6">
                  Why Partner With Us?
                </h3>
                <ul className="space-y-4">
                  {[
                    { icon: Clock, text: "Fast turnaround on all HR services" },
                    { icon: Globe, text: "Pan-UAE coverage with global reach" },
                    {
                      icon: Shield,
                      text: "100% compliance with UAE labor laws",
                    },
                    { icon: Award, text: "Award-winning HR service provider" },
                    {
                      icon: TrendingUp,
                      text: "Proven track record of success",
                    },
                  ].map((item) => (
                    <li key={item.text} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                        <item.icon size={20} className="text-[#c9a227]" />
                      </div>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 bg-[#c9a227] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#d4af37] transition-colors"
                >
                  Request Consultation
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-16 bg-[#faf9f7]">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl font-serif font-bold text-[#0d1b4c]">
                Trusted by Leading Organizations
              </h2>
            </motion.div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {clients.map((client, index) => (
                <motion.div
                  key={client}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-2xl font-bold text-gray-300 hover:text-gray-500 transition-colors"
                >
                  {client}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#0d1b4c]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Ready to Optimize Your HR Operations?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Let our HR experts help you build a stronger workforce. Get a
                free consultation today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-[#c9a227] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#d4af37] transition-colors inline-flex items-center gap-2"
                >
                  Schedule Consultation
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="tel:+971561596222"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors"
                >
                  +971 56 159 6222
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
