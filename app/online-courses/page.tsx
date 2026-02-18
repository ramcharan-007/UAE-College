"use client";

import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import {
  BookOpen,
  Clock,
  Globe,
  Award,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Monitor,
  FileText,
  Headphones,
} from "lucide-react";

const courseCategories = [
  { name: "All Courses", count: 159 },
  { name: "Medical", count: 85 },
  { name: "IT & Analytics", count: 33 },
  { name: "Management & Entrepreneurship", count: 11 },
  { name: "Agribusiness Management", count: 7 },
  { name: "Banking Finance & Insurance", count: 6 },
  { name: "Tourism & Hospitality", count: 6 },
  { name: "Sports & Fitness Management", count: 4 },
  { name: "Creative Arts & Design", count: 3 },
  { name: "Media & Entertainment", count: 2 },
  { name: "Beauty & Wellness", count: 2 },
];

const courses = [
  {
    id: 1,
    title: "Artificial Intelligence And Machine Learning",
    category: "IT & Analytics",
    duration: "6 Months",
    mode: "Online",
    level: "Certificate",
    accreditation: "UK Accredited",
    price: "Contact Us",
    rating: 4.9,
    students: 2500,
    image: "/images/Courses_1.jpg",
    featured: true,
    description:
      "Learn AI & ML from scratch with Python, real projects, and expert support. Gain job-ready skills and a UK-recognised certificate—fully online.",
  },
  {
    id: 2,
    title: "Digital Marketing & E-Commerce Fundamentals",
    category: "IT & Analytics",
    duration: "3 Months",
    mode: "Online",
    level: "Certificate",
    accreditation: "UK Accredited",
    price: "Contact Us",
    rating: 4.8,
    students: 3200,
    image: "/images/Courses_2.jpg",
    featured: true,
    description:
      "Master digital marketing & e-commerce. Build your store, run campaigns, and earn a UK-recognised certificate online.",
  },
  {
    id: 3,
    title: "Business Intelligence & Analytics",
    category: "IT & Analytics",
    duration: "4 Months",
    mode: "Online",
    level: "Certificate",
    accreditation: "UK Accredited",
    price: "Contact Us",
    rating: 4.7,
    students: 1800,
    image: "/images/Courses_3.jpg",
    featured: true,
    description:
      "Master BI & analytics with Power BI, Tableau, and ML. Build dashboards, analyse data, and earn a UK-recognised certificate—fully online.",
  },
  {
    id: 4,
    title: "Cyber Security",
    category: "IT & Analytics",
    duration: "6 Months",
    mode: "Online",
    level: "Certificate",
    accreditation: "UK Accredited",
    price: "Contact Us",
    rating: 4.9,
    students: 1500,
    image: "/images/Courses_4.jpg",
    featured: true,
    description:
      "Start your cyber security journey—learn to defend systems, detect threats & respond to attacks. 100% online, beginner-friendly, UK-certified.",
  },
  {
    id: 5,
    title: "Project Management",
    category: "Management & Entrepreneurship",
    duration: "4 Months",
    mode: "Online",
    level: "Diploma",
    accreditation: "UK Accredited",
    price: "Contact Us",
    rating: 4.8,
    students: 2100,
    image: "/images/Courses_5.jpg",
    featured: true,
    description:
      "Learn to lead projects with confidence. Master planning, budgeting, and execution online. Get UK-certified in Project Management.",
  },
  {
    id: 6,
    title: "Healthcare Quality Management",
    category: "Medical",
    duration: "6 Months",
    mode: "Online",
    level: "Certificate",
    accreditation: "UK Accredited",
    price: "Contact Us",
    rating: 4.9,
    students: 950,
    image: "/images/Courses_6.jpg",
    featured: false,
    description:
      "Healthcare Quality Management course trains professionals in patient safety, clinical governance, and performance improvement.",
  },
  {
    id: 7,
    title: "Banking And Financial Management",
    category: "Banking Finance & Insurance",
    duration: "6 Months",
    mode: "Online",
    level: "Certificate",
    accreditation: "UK Accredited",
    price: "Contact Us",
    rating: 4.8,
    students: 1200,
    image: "/images/Courses_1.jpg",
    featured: false,
    description:
      "Master banking, finance, and risk skills with real-world tools and earn a UK-recognised certificate—fully online.",
  },
  {
    id: 8,
    title: "Tourism and Hospitality Management",
    category: "Tourism & Hospitality",
    duration: "6 Months",
    mode: "Online",
    level: "Diploma",
    accreditation: "UK Accredited",
    price: "Contact Us",
    rating: 4.7,
    students: 800,
    image: "/images/Courses_2.jpg",
    featured: false,
    description:
      "Master hotel, travel, and guest service skills online. Earn a UK-recognised certificate in Tourism and Hospitality Management.",
  },
  {
    id: 9,
    title: "Sports Events Management",
    category: "Sports & Fitness Management",
    duration: "4 Months",
    mode: "Online",
    level: "Certificate",
    accreditation: "UK Accredited",
    price: "Contact Us",
    rating: 4.8,
    students: 650,
    image: "/images/Courses_3.jpg",
    featured: false,
    description:
      "Learn to plan, fund, and deliver successful sports events. Study online and earn a UK-recognised certificate.",
  },
];

const features = [
  {
    icon: Award,
    title: "UK & International Accreditation",
    description:
      "Earn globally recognized qualifications from leading UK awarding bodies",
  },
  {
    icon: Clock,
    title: "Flexible, Self-Paced Learning",
    description:
      "Study at your own pace with structured learning options that fit your schedule",
  },
  {
    icon: Users,
    title: "Industry-Expert Instructors",
    description:
      "Learn from experienced professionals with real-world expertise",
  },
  {
    icon: Headphones,
    title: "Dedicated Career Advisory",
    description:
      "Get personalized career guidance and placement assistance throughout your journey",
  },
  {
    icon: Monitor,
    title: "100% Online Learning",
    description:
      "Study from anywhere with our state-of-the-art learning platform",
  },
  {
    icon: FileText,
    title: "Placement Assistance",
    description: "Resume building, interview prep, and job placement support",
  },
];

const stats = [
  { value: "159+", label: "Online Courses" },
  { value: "35K+", label: "Students Enrolled" },
  { value: "98%", label: "Completion Rate" },
  { value: "4.9", label: "Average Rating" },
];

export default function OnlineCoursesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-40 bg-gradient-to-br from-[#0d6d55] to-[#0a5a46] overflow-hidden">
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white text-sm mb-6">
                <BookOpen size={16} />
                Access Education at Your Convenience
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                Online Courses
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Access 159+ globally accredited online courses tailored for
                students and working professionals. Gain recognized
                qualifications from the comfort of your home while advancing
                your career anywhere in the world.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/courses"
                  className="bg-white text-[#0d6d55] px-8 py-4 rounded-full font-semibold hover:bg-[#c9a227] hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  Browse Courses
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors inline-flex items-center gap-2"
                >
                  Contact Us
                  <ArrowRight size={18} />
                </Link>
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
                  <div className="text-4xl font-bold text-[#0d6d55]">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-[#faf9f7]">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-serif font-bold text-[#0d1b4c] mb-4">
                Why Learn With Us?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience world-class online education with comprehensive
                support at every step.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#0d6d55]/10 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon size={24} className="text-[#0d6d55]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0d1b4c] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-[#c9a227] font-semibold text-sm tracking-wider uppercase">
                Course Catalog
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0d1b4c] mt-3 mb-4">
                Popular Courses
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose from our extensive range of accredited online courses.
              </p>
            </motion.div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {courseCategories.map((cat) => (
                <button
                  key={cat.name}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-[#0d6d55] hover:text-white transition-colors"
                >
                  {cat.name} ({cat.count})
                </button>
              ))}
            </div>

            {/* Course Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="relative h-48">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    {course.featured && (
                      <span className="absolute top-4 left-4 bg-[#c9a227] text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                    <span className="absolute top-4 right-4 bg-white/90 text-[#0d1b4c] text-xs font-semibold px-3 py-1 rounded-full">
                      {course.level}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-[#0d6d55] font-medium bg-[#0d6d55]/10 px-2 py-1 rounded">
                        {course.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {course.accreditation}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#0d1b4c] mb-3 line-clamp-2">
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Globe size={14} />
                        {course.mode}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        <Star
                          size={14}
                          className="text-[#c9a227] fill-[#c9a227]"
                        />
                        <span className="text-sm font-medium">
                          {course.rating}
                        </span>
                        <span className="text-xs text-gray-500">
                          ({course.students} students)
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-xl font-bold text-[#0d1b4c]">
                        {course.price}
                      </span>
                      <Link
                        href={`/online-courses/${course.id}`}
                        className="text-[#0d6d55] font-semibold hover:underline flex items-center gap-1"
                      >
                        View Details
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/courses"
                className="btn-primary px-8 py-4 rounded-full inline-flex items-center gap-2"
              >
                View All Courses
                <ArrowRight size={18} />
              </Link>
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
                Ready to Start Your Learning Journey?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Enroll today and get access to world-class education from
                anywhere in the world.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/apply"
                  className="bg-[#c9a227] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#d4af37] transition-colors inline-flex items-center gap-2"
                >
                  Enroll Now
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors"
                >
                  Talk to an Advisor
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
