"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Globe2,
  Award,
  Users,
  Briefcase,
  BookOpen,
  Building,
  Wifi,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Globally Accredited",
    description:
      "Our programs are recognized by leading international accreditation bodies including AACSB, ABET, and more.",
  },
  {
    icon: Globe2,
    title: "International Faculty",
    description:
      "Learn from world-renowned professors and industry experts from top universities across the globe.",
  },
  {
    icon: Users,
    title: "Diverse Community",
    description:
      "Join a vibrant campus with students from 50+ countries, fostering cross-cultural learning and networking.",
  },
  {
    icon: Briefcase,
    title: "Career Support",
    description:
      "Dedicated career services with 95% placement rate, connecting you with Fortune 500 companies.",
  },
  {
    icon: Building,
    title: "State-of-the-Art Campus",
    description:
      "Modern facilities including smart classrooms, research labs, and recreational centers in the heart of Dubai.",
  },
  {
    icon: Wifi,
    title: "Flexible Learning",
    description:
      "Hybrid learning options combining on-campus excellence with cutting-edge online education technology.",
  },
  {
    icon: BookOpen,
    title: "Research Excellence",
    description:
      "Engage in groundbreaking research with access to well-funded labs and industry partnerships.",
  },
  {
    icon: GraduationCap,
    title: "Scholarship Programs",
    description:
      "Generous scholarship opportunities making world-class education accessible to talented students.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#0d1b4c]/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0d6d55]/5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#c9a227] font-semibold text-sm tracking-wider uppercase">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#0d1b4c] mt-3 mb-6">
              Excellence Meets
              <span className="block text-[#0d6d55]">Global Opportunity</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              At Emirates International College, we combine academic rigor with
              real-world experience to prepare leaders for the global stage. Our
              commitment to excellence, innovation, and student success sets us
              apart.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-[#0d1b4c] rounded-xl text-white">
                <div className="text-4xl font-bold text-[#c9a227] mb-2">
                  95%
                </div>
                <div className="text-sm text-white/80">
                  Graduate Employment Rate
                </div>
              </div>
              <div className="p-6 bg-[#0d6d55] rounded-xl text-white">
                <div className="text-4xl font-bold text-[#c9a227] mb-2">
                  Top 50
                </div>
                <div className="text-sm text-white/80">
                  Regional University Ranking
                </div>
              </div>
              <div className="p-6 bg-gradient-to-r from-[#c9a227] to-[#d4af37] rounded-xl">
                <div className="text-4xl font-bold text-[#0d1b4c] mb-2">
                  200+
                </div>
                <div className="text-sm text-[#0d1b4c]/80">
                  Industry Partners
                </div>
              </div>
              <div className="p-6 border-2 border-[#0d1b4c] rounded-xl">
                <div className="text-4xl font-bold text-[#0d1b4c] mb-2">
                  $5M+
                </div>
                <div className="text-sm text-gray-600">Annual Scholarships</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-5 rounded-xl bg-[#faf9f7] hover:bg-white hover:shadow-lg transition-all group cursor-default"
              >
                <div className="w-12 h-12 bg-[#0d1b4c] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#0d6d55] transition-colors">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-serif font-bold text-[#0d1b4c] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
