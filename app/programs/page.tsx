"use client";

import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Clock,
  Users,
  Star,
  ArrowRight,
  Search,
  Filter,
  Laptop,
  Briefcase,
  Stethoscope,
  TrendingUp,
  Palette,
  Building2,
  BookOpen,
  GraduationCap,
  Globe2,
  Award,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const categories = [
  { id: "all", name: "All Programs", count: 100 },
  { id: "undergraduate", name: "Undergraduate", count: 35 },
  { id: "postgraduate", name: "Postgraduate", count: 25 },
  { id: "professional", name: "Professional Courses", count: 30 },
  { id: "online", name: "Online Programs", count: 10 },
];

const programs = [
  {
    id: 1,
    icon: Laptop,
    category: "undergraduate",
    field: "Technology & Analytics",
    title: "Bachelor of Computer Science",
    description:
      "Master cutting-edge technologies including AI, Machine Learning, and Full-Stack Development.",
    duration: "4 Years",
    students: "800+",
    rating: 4.9,
    level: "Undergraduate",
    mode: "On Campus",
    fee: "AED 45,000/year",
  },
  {
    id: 2,
    icon: Briefcase,
    category: "undergraduate",
    field: "Business & Management",
    title: "Bachelor of Business Administration",
    description:
      "Develop leadership skills and business acumen with our internationally accredited BBA program.",
    duration: "4 Years",
    students: "1,200+",
    rating: 4.8,
    level: "Undergraduate",
    mode: "On Campus",
    fee: "AED 40,000/year",
  },
  {
    id: 3,
    icon: Briefcase,
    category: "postgraduate",
    field: "Business & Management",
    title: "Master of Business Administration (MBA)",
    description:
      "Transform your career with our globally ranked MBA program featuring industry immersion.",
    duration: "2 Years",
    students: "600+",
    rating: 4.9,
    level: "Postgraduate",
    mode: "Hybrid",
    fee: "AED 75,000/year",
  },
  {
    id: 4,
    icon: Laptop,
    category: "postgraduate",
    field: "Technology & Analytics",
    title: "Master of Data Science",
    description:
      "Become a data expert with advanced analytics, machine learning, and big data technologies.",
    duration: "2 Years",
    students: "300+",
    rating: 4.8,
    level: "Postgraduate",
    mode: "On Campus",
    fee: "AED 65,000/year",
  },
  {
    id: 5,
    icon: Stethoscope,
    category: "undergraduate",
    field: "Healthcare",
    title: "Bachelor of Nursing",
    description:
      "Prepare for a rewarding healthcare career with comprehensive nursing education and clinical training.",
    duration: "4 Years",
    students: "500+",
    rating: 4.9,
    level: "Undergraduate",
    mode: "On Campus",
    fee: "AED 50,000/year",
  },
  {
    id: 6,
    icon: TrendingUp,
    category: "undergraduate",
    field: "Finance & Banking",
    title: "Bachelor of Finance",
    description:
      "Build expertise in financial management, investment analysis, and corporate finance.",
    duration: "4 Years",
    students: "700+",
    rating: 4.7,
    level: "Undergraduate",
    mode: "On Campus",
    fee: "AED 42,000/year",
  },
  {
    id: 7,
    icon: Palette,
    category: "undergraduate",
    field: "Creative Arts",
    title: "Bachelor of Graphic Design",
    description:
      "Unleash your creativity with programs in graphic design, UI/UX, and visual communications.",
    duration: "3 Years",
    students: "400+",
    rating: 4.8,
    level: "Undergraduate",
    mode: "On Campus",
    fee: "AED 38,000/year",
  },
  {
    id: 8,
    icon: Building2,
    category: "undergraduate",
    field: "Hospitality",
    title: "Bachelor of Hospitality Management",
    description:
      "Enter the thriving hospitality industry with world-class training in hotel and tourism management.",
    duration: "4 Years",
    students: "450+",
    rating: 4.6,
    level: "Undergraduate",
    mode: "On Campus",
    fee: "AED 40,000/year",
  },
  {
    id: 9,
    icon: Laptop,
    category: "professional",
    field: "Technology & Analytics",
    title: "Cybersecurity Professional Certificate",
    description:
      "Learn ethical hacking, network security, encryption, and risk management techniques.",
    duration: "6 Months",
    students: "1,500+",
    rating: 4.9,
    level: "Professional",
    mode: "Online",
    fee: "AED 8,000",
  },
  {
    id: 10,
    icon: TrendingUp,
    category: "professional",
    field: "Finance & Banking",
    title: "Financial Analysis Certificate",
    description:
      "Master financial modeling, valuation techniques, and investment analysis.",
    duration: "4 Months",
    students: "800+",
    rating: 4.7,
    level: "Professional",
    mode: "Online",
    fee: "AED 6,000",
  },
  {
    id: 11,
    icon: Briefcase,
    category: "professional",
    field: "Business & Management",
    title: "Project Management Professional",
    description:
      "Gain PMP-aligned skills in project planning, execution, and leadership.",
    duration: "3 Months",
    students: "1,200+",
    rating: 4.8,
    level: "Professional",
    mode: "Online",
    fee: "AED 5,000",
  },
  {
    id: 12,
    icon: Laptop,
    category: "online",
    field: "Technology & Analytics",
    title: "Full Stack Web Development",
    description:
      "Learn HTML, CSS, JavaScript, React, Node.js, and MongoDB for modern web development.",
    duration: "6 Months",
    students: "2,000+",
    rating: 4.9,
    level: "Professional",
    mode: "100% Online",
    fee: "AED 7,500",
  },
];

export default function ProgramsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPrograms = programs.filter((program) => {
    const matchesCategory =
      activeCategory === "all" || program.category === activeCategory;
    const matchesSearch =
      program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.field.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-[#0d1b4c] overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{
                backgroundImage: `url('/images/Hero Page-02.jpg')`,
              }}
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-[#c9a227] font-semibold text-sm tracking-wider uppercase">
                Academic Excellence
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mt-4 mb-6">
                Our Programs
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Discover internationally accredited programs designed to prepare
                you for global success across diverse industries.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Key Stats */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: BookOpen, value: "100+", label: "Programs Offered" },
                {
                  icon: GraduationCap,
                  value: "15,000+",
                  label: "Alumni Worldwide",
                },
                { icon: Globe2, value: "50+", label: "Countries Represented" },
                { icon: Award, value: "6", label: "Accreditations" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-10 h-10 text-[#0d6d55] mx-auto mb-3" />
                  <div className="text-3xl font-bold text-[#0d1b4c]">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16 bg-[#faf9f7]">
          <div className="max-w-7xl mx-auto px-4">
            {/* Filters */}
            <div className="flex flex-col lg:flex-row gap-6 mb-12">
              {/* Search */}
              <div className="relative flex-1">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search programs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0d6d55] focus:ring-1 focus:ring-[#0d6d55]"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-5 py-3 rounded-full font-medium transition-colors ${
                      activeCategory === category.id
                        ? "bg-[#0d1b4c] text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {category.name}
                    <span className="ml-2 text-sm opacity-70">
                      ({category.count})
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Programs Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPrograms.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover group"
                >
                  {/* Header */}
                  <div className="bg-[#0d1b4c] p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10 flex justify-between items-start">
                      <div>
                        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-3">
                          <program.icon className="w-6 h-6 text-[#c9a227]" />
                        </div>
                        <span className="text-white/70 text-xs uppercase tracking-wide">
                          {program.field}
                        </span>
                        <h3 className="text-lg font-serif font-bold text-white mt-1">
                          {program.title}
                        </h3>
                      </div>
                      <span className="bg-[#c9a227] text-[#0d1b4c] text-xs font-semibold px-3 py-1 rounded-full">
                        {program.level}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {program.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-3 mb-4 text-sm">
                      <span className="flex items-center gap-1 text-gray-500">
                        <Clock size={14} />
                        {program.duration}
                      </span>
                      <span className="flex items-center gap-1 text-gray-500">
                        <Users size={14} />
                        {program.students}
                      </span>
                      <span className="flex items-center gap-1 text-[#c9a227]">
                        <Star size={14} className="fill-current" />
                        {program.rating}
                      </span>
                    </div>

                    {/* Mode & Fee */}
                    <div className="flex justify-between items-center py-4 border-t border-gray-100">
                      <span className="text-xs bg-[#0d6d55]/10 text-[#0d6d55] px-3 py-1 rounded-full">
                        {program.mode}
                      </span>
                      <span className="text-[#0d1b4c] font-semibold text-sm">
                        {program.fee}
                      </span>
                    </div>

                    {/* CTA */}
                    <Link
                      href={`/programs/${program.id}`}
                      className="flex items-center justify-center gap-2 w-full py-3 mt-2 bg-[#0d1b4c] text-white rounded-lg font-medium group-hover:bg-[#0d6d55] transition-colors"
                    >
                      View Details
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* No Results */}
            {filteredPrograms.length === 0 && (
              <div className="text-center py-20">
                <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  No programs found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0d1b4c] mb-6">
                Not Sure Which Program is Right for You?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Our academic advisors are here to help you find the perfect
                program that aligns with your career goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary px-8 py-4 rounded-full text-lg flex items-center justify-center gap-2"
                >
                  Talk to an Advisor
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/apply"
                  className="btn-secondary px-8 py-4 rounded-full text-lg border-[#0d1b4c] text-[#0d1b4c]"
                >
                  Apply Now
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
