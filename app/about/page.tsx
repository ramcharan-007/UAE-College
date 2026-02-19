"use client";

import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  GraduationCap,
  Target,
  Eye,
  Heart,
  Award,
  Users,
  Globe2,
  BookOpen,
  Building,
  Trophy,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "We pursue the highest standards in education, research, and service to our community.",
  },
  {
    icon: Globe2,
    title: "Global Perspective",
    description:
      "We embrace diversity and prepare students to thrive in an interconnected world.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "We uphold ethical principles and foster a culture of honesty and transparency.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We believe in the power of partnership between students, faculty, and industry.",
  },
];

const milestones = [
  {
    year: "2001",
    title: "Foundation",
    description:
      "International Center for Applied Studies & Research College established in Dubai",
  },
  {
    year: "2005",
    title: "First Graduation",
    description: "First batch of 200 students graduated",
  },
  {
    year: "2010",
    title: "Global Accreditation",
    description: "Received AACSB and ABET accreditations",
  },
  {
    year: "2015",
    title: "Campus Expansion",
    description: "New state-of-the-art campus opened",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Launched hybrid learning platform",
  },
  {
    year: "2024",
    title: "Top 50 Ranking",
    description: "Ranked among top 50 universities in Middle East",
  },
];

const accreditations = [
  {
    name: "AACSB",
    description: "Association to Advance Collegiate Schools of Business",
  },
  {
    name: "ABET",
    description: "Accreditation Board for Engineering and Technology",
  },
  { name: "EQUIS", description: "European Quality Improvement System" },
  { name: "KHDA", description: "Knowledge and Human Development Authority" },
  { name: "CAA", description: "Commission for Academic Accreditation UAE" },
  { name: "QAA", description: "Quality Assurance Agency UK" },
];

const leadership = [
  {
    name: "Dr. Ahmed Al Maktoum",
    role: "Chancellor",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    bio: "20+ years in academic leadership across GCC region",
  },
  {
    name: "Prof. Sarah Williams",
    role: "Vice Chancellor - Academic Affairs",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
    bio: "Former Oxford professor with expertise in global education",
  },
  {
    name: "Dr. Mohammed Hassan",
    role: "Vice Chancellor - Research",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    bio: "Leading researcher in AI and sustainable technology",
  },
  {
    name: "Ms. Fatima Al Rashid",
    role: "Dean of Student Affairs",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    bio: "Passionate advocate for student success and well-being",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-40 bg-[#0d1b4c] overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{
                backgroundImage: `url('/images/About_Hero.jpg')`,
              }}
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-[#c9a227] font-semibold text-sm tracking-wider uppercase">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mt-4 mb-6">
                Shaping Tomorrow's Leaders
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                International Center for Applied Studies & Research College has
                been at the forefront of higher education in the Middle East,
                nurturing global citizens and industry leaders.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section id="story" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="text-[#c9a227] font-semibold text-sm tracking-wider uppercase">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0d1b4c] mt-3 mb-6">
                  Proven Excellence
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    International Center for Applied Studies & Research College
                    was established with a forward-thinking purpose—to connect
                    academic learning with real-world career opportunities. From
                    the beginning, our focus has been on making quality
                    education accessible, relevant, and aligned with the needs
                    of today&apos;s industries.
                  </p>
                  <p>
                    We believe education is more than the transfer of knowledge;
                    it is a journey of growth and transformation. Through
                    experienced educators, industry-relevant programmes, and a
                    supportive learning environment, we empower students to
                    develop the skills, confidence, and mindset needed to
                    succeed in a competitive global landscape.
                  </p>
                  <p>
                    Guided by innovation and driven by progress, Emirates
                    International College continues to evolve with changing
                    global trends. By embracing digital learning and practical
                    approaches to education, we are committed to nurturing every
                    learner&apos;s potential and helping them build meaningful,
                    successful futures.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="/images/About_Story-01.jpg"
                  alt="Campus"
                  className="rounded-2xl shadow-xl w-full h-auto object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-[#c9a227] rounded-xl p-6 text-[#0d1b4c]">
                  <div className="text-4xl font-bold">25+</div>
                  <div className="text-sm font-medium">Years of Excellence</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-[#faf9f7]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#0d1b4c] rounded-2xl p-8 md:p-12"
              >
                <div className="w-16 h-16 bg-[#c9a227]/20 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-[#c9a227]" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-white/80 leading-relaxed">
                  To become a globally respected institution that delivers
                  innovative, career-focused education, empowering future
                  leaders to excel in business, technology, and emerging
                  industries while making a meaningful impact on society locally
                  and internationally.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#0d6d55] rounded-2xl p-8 md:p-12"
              >
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-white/80 leading-relaxed">
                  To deliver high-quality, career-oriented education that blends
                  strong academic foundations with real-world learning,
                  empowering students to think critically, innovate confidently,
                  and lead responsibly in a global and inclusive learning
                  community.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-[#c9a227] font-semibold text-sm tracking-wider uppercase">
                What Drives Us
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0d1b4c] mt-3">
                Our Core Values
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-20 h-20 bg-[#0d1b4c] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-10 h-10 text-[#c9a227]" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#0d1b4c] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Accreditations */}
        <section id="accreditations" className="py-20 bg-[#faf9f7]">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-[#c9a227] font-semibold text-sm tracking-wider uppercase">
                Quality Assurance
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0d1b4c] mt-3 mb-4">
                Accreditations & Recognition
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our programs are recognized by leading international and
                regional accreditation bodies, ensuring the highest quality of
                education.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {accreditations.map((accreditation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4"
                >
                  <div className="w-16 h-16 bg-[#0d1b4c] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-8 h-8 text-[#c9a227]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0d1b4c]">
                      {accreditation.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {accreditation.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#0d1b4c] to-[#0d6d55]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Ready to Be Part of Our Story?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Join a community of ambitious learners and world-changers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/apply"
                  className="btn-primary px-8 py-4 rounded-full text-lg flex items-center justify-center gap-2"
                >
                  Apply Now
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg hover:bg-white hover:text-[#0d1b4c] transition-colors"
                >
                  Contact Us
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
