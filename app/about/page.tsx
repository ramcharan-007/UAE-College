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
    description: "Emirates International College established in Dubai",
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
        <section className="relative py-20 bg-[#0d1b4c] overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1562774053-701939374585?w=2000&q=80')`,
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
                Since 2001, Emirates International College has been at the
                forefront of higher education in the Middle East, nurturing
                global citizens and industry leaders.
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
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-[#c9a227] font-semibold text-sm tracking-wider uppercase">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0d1b4c] mt-3 mb-6">
                  A Legacy of Excellence
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Emirates International College began with a vision—to bridge
                    the gap between traditional education and modern career
                    demands. What started as a mission to provide accessible,
                    high-quality learning has evolved into a platform where
                    ambition meets opportunity.
                  </p>
                  <p>
                    From our early days, we've believed in more than just
                    textbooks—we believe in transformation. Our journey has been
                    shaped by innovative educators, industry-aligned programmes,
                    and a diverse student community that inspires us daily.
                  </p>
                  <p>
                    Rooted in excellence and driven by progress, we continue to
                    grow—adapting to global trends, embracing digital learning,
                    and nurturing every learner's potential.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop"
                  alt="Campus"
                  className="rounded-2xl shadow-xl"
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
                  To be a globally recognized center of academic excellence,
                  innovation, and research, producing leaders who shape the
                  future of business, technology, and society across the Middle
                  East and beyond.
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
                  To provide transformative education that combines academic
                  rigor with practical experience, fostering critical thinking,
                  creativity, and ethical leadership in a diverse and inclusive
                  learning environment.
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

        {/* Timeline */}
        <section className="py-20 bg-[#0d1b4c]">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-[#c9a227] font-semibold text-sm tracking-wider uppercase">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-3">
                Key Milestones
              </h2>
            </motion.div>
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#c9a227]/30 hidden md:block" />
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`flex items-center gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}
                    >
                      <div className="bg-white/10 rounded-xl p-6">
                        <span className="text-[#c9a227] font-bold text-lg">
                          {milestone.year}
                        </span>
                        <h3 className="text-white font-semibold text-xl mt-1">
                          {milestone.title}
                        </h3>
                        <p className="text-white/70 mt-2">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:flex w-4 h-4 bg-[#c9a227] rounded-full border-4 border-[#0d1b4c]" />
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section id="leadership" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-[#c9a227] font-semibold text-sm tracking-wider uppercase">
                Meet Our Team
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0d1b4c] mt-3">
                Leadership
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((leader, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-2xl mb-4">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b4c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <p className="text-white text-sm">{leader.bio}</p>
                    </div>
                  </div>
                  <h3 className="font-serif font-bold text-[#0d1b4c]">
                    {leader.name}
                  </h3>
                  <p className="text-[#0d6d55] text-sm">{leader.role}</p>
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

        {/* Campus Section */}
        <section id="campus" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-[#c9a227] font-semibold text-sm tracking-wider uppercase">
                World-Class Facilities
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0d1b4c] mt-3">
                Our Campus
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Smart Classrooms",
                  image:
                    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop",
                },
                {
                  title: "Research Labs",
                  image:
                    "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop",
                },
                {
                  title: "Library",
                  image:
                    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
                },
                {
                  title: "Sports Complex",
                  image:
                    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
                },
                {
                  title: "Student Lounge",
                  image:
                    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
                },
                {
                  title: "Cafeteria",
                  image:
                    "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400&h=300&fit=crop",
                },
              ].map((facility, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group overflow-hidden rounded-2xl"
                >
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b4c] to-transparent flex items-end p-6">
                    <h3 className="text-white font-semibold text-lg">
                      {facility.title}
                    </h3>
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
