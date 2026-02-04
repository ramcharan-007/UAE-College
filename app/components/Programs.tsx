"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Clock,
  Users,
  Star,
  ArrowRight,
  Laptop,
  Briefcase,
  Stethoscope,
  TrendingUp,
  Palette,
  Building2,
} from "lucide-react";

const programs = [
  {
    icon: Laptop,
    category: "Technology & Analytics",
    title: "Computer Science & IT",
    description:
      "Master cutting-edge technologies including AI, Machine Learning, Cybersecurity, and Full-Stack Development.",
    duration: "4 Years",
    students: "2,500+",
    rating: 4.9,
    courses: [
      "AI & Machine Learning",
      "Cybersecurity",
      "Data Science",
      "Web Development",
    ],
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: Briefcase,
    category: "Business & Management",
    title: "Business Administration",
    description:
      "Develop leadership skills and business acumen with our internationally accredited MBA and BBA programs.",
    duration: "3-4 Years",
    students: "3,200+",
    rating: 4.8,
    courses: ["MBA", "Marketing", "Finance", "Entrepreneurship"],
    color: "from-emerald-500 to-emerald-700",
  },
  {
    icon: Stethoscope,
    category: "Healthcare",
    title: "Medical Sciences",
    description:
      "Prepare for a rewarding healthcare career with comprehensive programs in nursing, pharmacy, and more.",
    duration: "4-5 Years",
    students: "1,800+",
    rating: 4.9,
    courses: ["Nursing", "Pharmacy", "Public Health", "Healthcare Management"],
    color: "from-red-500 to-red-700",
  },
  {
    icon: TrendingUp,
    category: "Finance & Banking",
    title: "Finance & Accounting",
    description:
      "Build expertise in financial management, banking, investment analysis, and corporate finance.",
    duration: "3 Years",
    students: "1,500+",
    rating: 4.7,
    courses: ["Accounting", "Banking", "Investment", "Risk Management"],
    color: "from-amber-500 to-amber-700",
  },
  {
    icon: Palette,
    category: "Creative Arts",
    title: "Design & Media",
    description:
      "Unleash your creativity with programs in graphic design, digital media, and visual communications.",
    duration: "3 Years",
    students: "900+",
    rating: 4.8,
    courses: ["Graphic Design", "UI/UX", "Animation", "Digital Marketing"],
    color: "from-purple-500 to-purple-700",
  },
  {
    icon: Building2,
    category: "Hospitality",
    title: "Tourism & Hospitality",
    description:
      "Enter the thriving hospitality industry with world-class training in hotel management and tourism.",
    duration: "3 Years",
    students: "1,200+",
    rating: 4.6,
    courses: [
      "Hotel Management",
      "Event Planning",
      "Tourism",
      "F&B Management",
    ],
    color: "from-teal-500 to-teal-700",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Programs() {
  return (
    <section className="py-20 bg-[#faf9f7] bg-pattern">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#c9a227] font-semibold text-sm tracking-wider uppercase">
            Our Academic Excellence
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#0d1b4c] mt-3 mb-4">
            World-Class Programs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our comprehensive range of internationally accredited
            programs designed to prepare you for global success.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
            >
              {/* Header with gradient */}
              <div
                className={`bg-gradient-to-r ${program.color} p-6 relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                    <program.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-white/80 text-sm font-medium">
                    {program.category}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white mt-1">
                    {program.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {program.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {program.courses.slice(0, 3).map((course, i) => (
                    <span
                      key={i}
                      className="text-xs bg-[#0d1b4c]/5 text-[#0d1b4c] px-3 py-1 rounded-full"
                    >
                      {course}
                    </span>
                  ))}
                  {program.courses.length > 3 && (
                    <span className="text-xs text-gray-500">
                      +{program.courses.length - 3} more
                    </span>
                  )}
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 py-4 border-t border-gray-100">
                  <div className="flex items-center gap-1.5 text-sm text-gray-500">
                    <Clock size={16} />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-gray-500">
                    <Users size={16} />
                    <span>{program.students}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-[#c9a227]">
                    <Star size={16} className="fill-current" />
                    <span className="font-semibold">{program.rating}</span>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={`/programs#${program.category.toLowerCase().replace(/\s+/g, "-")}`}
                  className="flex items-center justify-center gap-2 w-full py-3 mt-2 bg-[#0d1b4c] text-white rounded-lg font-medium group-hover:bg-[#0d6d55] transition-colors"
                >
                  Explore Program
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 btn-primary px-8 py-4 rounded-full text-lg"
          >
            View All Programs
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
