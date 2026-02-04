"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  BookOpen,
  Users,
  TrendingUp,
  Calendar,
  ArrowRight,
  CheckCircle,
  Globe,
  Award,
  Target,
  Briefcase,
} from "lucide-react";

const services = [
  {
    id: "online-courses",
    icon: BookOpen,
    title: "Online Courses",
    subtitle: "Learn Anywhere, Anytime",
    description:
      "Access 50+ globally accredited online courses designed for working professionals and students. Earn recognized qualifications from the comfort of your home.",
    highlights: [
      "UK & International Accreditation",
      "Flexible Self-Paced Learning",
      "Industry-Expert Instructors",
      "Career Support & Placement",
    ],
    stats: { value: "50+", label: "Courses Available" },
    href: "/online-courses",
    color: "bg-gradient-to-br from-[#0d6d55] to-[#0a5a46]",
    bgColor: "bg-[#0d6d55]/5",
    borderColor: "border-[#0d6d55]/20",
  },
  {
    id: "hr-solutions",
    icon: Users,
    title: "HR Solutions",
    subtitle: "Complete Workforce Management",
    description:
      "End-to-end HR services including talent acquisition, payroll management, employee training, and organizational development tailored for UAE businesses.",
    highlights: [
      "Talent Acquisition & Recruitment",
      "Payroll & Compliance Management",
      "Employee Training Programs",
      "HR Consulting & Strategy",
    ],
    stats: { value: "500+", label: "Companies Served" },
    href: "/hr-solutions",
    color: "bg-gradient-to-br from-[#c9a227] to-[#a88820]",
    bgColor: "bg-[#c9a227]/5",
    borderColor: "border-[#c9a227]/20",
  },
  {
    id: "marketing-strategy",
    icon: TrendingUp,
    title: "Marketing & Strategy",
    subtitle: "Grow Your Business",
    description:
      "Strategic marketing consultancy and brand development services to help businesses scale in the competitive UAE and global markets.",
    highlights: [
      "Digital Marketing Campaigns",
      "Brand Strategy & Identity",
      "Market Research & Analysis",
      "Growth Consulting",
    ],
    stats: { value: "200+", label: "Projects Delivered" },
    href: "/marketing-strategy",
    color: "bg-gradient-to-br from-[#2563eb] to-[#1d4ed8]",
    bgColor: "bg-[#2563eb]/5",
    borderColor: "border-[#2563eb]/20",
  },
  {
    id: "education-fairs",
    icon: Calendar,
    title: "Education Fairs & Expo",
    subtitle: "Connect Globally",
    description:
      "Premier education exhibitions connecting students with top universities and institutions from around the world. Explore opportunities across 50+ countries.",
    highlights: [
      "100+ University Partners",
      "Scholarship Opportunities",
      "On-Spot Admissions",
      "Free Career Counseling",
    ],
    stats: { value: "25K+", label: "Students Connected" },
    href: "/education-fairs",
    color: "bg-gradient-to-br from-[#7c3aed] to-[#6d28d9]",
    bgColor: "bg-[#7c3aed]/5",
    borderColor: "border-[#7c3aed]/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#c9a227] font-semibold text-sm tracking-wider uppercase">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#0d1b4c] mt-3 mb-4">
            Comprehensive Solutions for Your Success
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From education to workforce development, we provide end-to-end
            solutions to help individuals and organizations achieve their goals.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className={`rounded-2xl border ${service.borderColor} ${service.bgColor} overflow-hidden`}
            >
              <div
                className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}
              >
                {/* Content Side */}
                <div
                  className={`p-8 lg:p-12 ${index % 2 === 1 ? "md:order-2" : ""}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center`}
                    >
                      <service.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-[#0d1b4c]">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                    {service.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <CheckCircle
                          size={16}
                          className="text-[#0d6d55] shrink-0"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-[#0d1b4c] font-semibold hover:text-[#0d6d55] transition-colors group"
                  >
                    Learn More
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>

                {/* Stats/Visual Side */}
                <div
                  className={`${service.color} p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}
                >
                  <div className="text-center text-white">
                    <div className="text-6xl lg:text-7xl font-bold mb-2">
                      {service.stats.value}
                    </div>
                    <div className="text-white/80 text-lg mb-8">
                      {service.stats.label}
                    </div>

                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 bg-white text-[#0d1b4c] px-6 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors"
                    >
                      Explore {service.title}
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-8 p-6 bg-white rounded-2xl shadow-lg">
            <div className="flex items-center gap-3">
              <Globe size={24} className="text-[#0d6d55]" />
              <span className="text-gray-700">Serving 120+ Countries</span>
            </div>
            <div className="flex items-center gap-3">
              <Award size={24} className="text-[#c9a227]" />
              <span className="text-gray-700">UK Accredited</span>
            </div>
            <div className="flex items-center gap-3">
              <Target size={24} className="text-[#2563eb]" />
              <span className="text-gray-700">98% Success Rate</span>
            </div>
            <div className="flex items-center gap-3">
              <Briefcase size={24} className="text-[#7c3aed]" />
              <span className="text-gray-700">Industry Partners</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
