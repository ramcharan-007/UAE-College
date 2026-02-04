"use client";

import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Users,
  Globe,
  Award,
  CheckCircle,
  ArrowRight,
  GraduationCap,
  Building2,
  Clock,
  Star,
  Ticket,
  MessageCircle,
} from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    title: "Dubai International Education Fair 2026",
    date: "March 15-16, 2026",
    location: "Dubai World Trade Centre",
    universities: "100+",
    countries: "25+",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    status: "Registration Open",
    featured: true,
  },
  {
    id: 2,
    title: "Abu Dhabi Study Abroad Expo",
    date: "April 22-23, 2026",
    location: "ADNEC Abu Dhabi",
    universities: "75+",
    countries: "20+",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80",
    status: "Coming Soon",
    featured: false,
  },
  {
    id: 3,
    title: "Hyderabad Education Connect",
    date: "May 10-11, 2026",
    location: "HICC Hyderabad",
    universities: "60+",
    countries: "15+",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80",
    status: "Coming Soon",
    featured: false,
  },
  {
    id: 4,
    title: "London UK Universities Fair",
    date: "June 5-6, 2026",
    location: "ExCeL London",
    universities: "50+",
    countries: "UK Focus",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80",
    status: "Coming Soon",
    featured: false,
  },
];

const features = [
  {
    icon: Building2,
    title: "100+ Partner Universities",
    description:
      "Meet representatives from top universities across UK, USA, Canada, Australia, and Europe.",
  },
  {
    icon: Award,
    title: "On-Spot Scholarships",
    description:
      "Exclusive scholarship opportunities available only at our education fairs.",
  },
  {
    icon: GraduationCap,
    title: "Instant Admissions",
    description:
      "Get conditional offers and on-spot admissions from participating institutions.",
  },
  {
    icon: MessageCircle,
    title: "Free Counseling",
    description: "One-on-one career guidance from expert education counselors.",
  },
  {
    icon: Globe,
    title: "Visa Guidance",
    description:
      "Learn about student visa requirements and immigration processes.",
  },
  {
    icon: Ticket,
    title: "Free Entry",
    description:
      "All our education fairs are completely free for students and parents.",
  },
];

const partnerCountries = [
  { name: "United Kingdom", universities: 35, flag: "🇬🇧" },
  { name: "United States", universities: 25, flag: "🇺🇸" },
  { name: "Canada", universities: 20, flag: "🇨🇦" },
  { name: "Australia", universities: 15, flag: "🇦🇺" },
  { name: "Germany", universities: 10, flag: "🇩🇪" },
  { name: "France", universities: 8, flag: "🇫🇷" },
  { name: "Netherlands", universities: 6, flag: "🇳🇱" },
  { name: "Ireland", universities: 5, flag: "🇮🇪" },
];

const stats = [
  { value: "25K+", label: "Students Attended" },
  { value: "100+", label: "Universities" },
  { value: "50+", label: "Events Organized" },
  { value: "15+", label: "Countries Represented" },
];

const testimonials = [
  {
    name: "Ahmed Al Mansoori",
    location: "Dubai, UAE",
    quote:
      "The education fair helped me find my dream university in the UK. I got an on-spot offer with a scholarship!",
  },
  {
    name: "Priya Sharma",
    location: "Mumbai, India",
    quote:
      "Amazing experience! Met counselors from 10+ universities and got all my questions answered in one day.",
  },
  {
    name: "James Wilson",
    location: "London, UK",
    quote:
      "As a parent, I found the fair extremely helpful in understanding options for my daughter's higher education.",
  },
];

export default function EducationFairsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-[#7c3aed] to-[#6d28d9] overflow-hidden">
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
                <Calendar size={16} />
                Global Education Events
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                Education Fairs & Expo
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Connect with 100+ universities from around the world at our
                premier education exhibitions. Discover opportunities, win
                scholarships, and get instant admissions – all for free!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="#events"
                  className="bg-white text-[#7c3aed] px-8 py-4 rounded-full font-semibold hover:bg-[#c9a227] hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  View Upcoming Events
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/register"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors inline-flex items-center gap-2"
                >
                  <Ticket size={18} />
                  Register Free
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
                  <div className="text-4xl font-bold text-[#7c3aed]">
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
              <span className="text-[#c9a227] font-semibold text-sm tracking-wider uppercase">
                Why Attend?
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0d1b4c] mt-3 mb-4">
                What You Get at Our Fairs
              </h2>
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
                  <div className="w-12 h-12 bg-[#7c3aed]/10 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon size={24} className="text-[#7c3aed]" />
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

        {/* Upcoming Events Section */}
        <section id="events" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-[#c9a227] font-semibold text-sm tracking-wider uppercase">
                Calendar
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0d1b4c] mt-3 mb-4">
                Upcoming Education Fairs
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Mark your calendars! Join us at these upcoming education events.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow ${
                    event.featured
                      ? "border-2 border-[#7c3aed]"
                      : "border border-gray-100"
                  }`}
                >
                  <div className="relative h-48">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    {event.featured && (
                      <span className="absolute top-4 left-4 bg-[#7c3aed] text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Featured Event
                      </span>
                    )}
                    <span
                      className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${
                        event.status === "Registration Open"
                          ? "bg-[#0d6d55] text-white"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {event.status}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#0d1b4c] mb-3">
                      {event.title}
                    </h3>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-[#7c3aed]" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-[#7c3aed]" />
                        {event.location}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1 text-sm">
                        <Building2 size={14} className="text-gray-400" />
                        <span>{event.universities} Universities</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Globe size={14} className="text-gray-400" />
                        <span>{event.countries} Countries</span>
                      </div>
                    </div>
                    <Link
                      href="/register"
                      className={`w-full py-3 rounded-lg text-center font-semibold transition-colors flex items-center justify-center gap-2 ${
                        event.status === "Registration Open"
                          ? "bg-[#7c3aed] text-white hover:bg-[#6d28d9]"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {event.status === "Registration Open" ? (
                        <>
                          Register Now
                          <ArrowRight size={16} />
                        </>
                      ) : (
                        "Get Notified"
                      )}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Countries Section */}
        <section className="py-16 bg-[#faf9f7]">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-[#c9a227] font-semibold text-sm tracking-wider uppercase">
                Global Reach
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0d1b4c] mt-3 mb-4">
                Partner Universities From
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {partnerCountries.map((country, index) => (
                <motion.div
                  key={country.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className="text-4xl mb-2">{country.flag}</div>
                  <h3 className="font-semibold text-[#0d1b4c]">
                    {country.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {country.universities} Universities
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-[#0d1b4c]">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-[#c9a227] font-semibold text-sm tracking-wider uppercase">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-3 mb-4">
                What Attendees Say
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-[#c9a227] fill-[#c9a227]"
                      />
                    ))}
                  </div>
                  <p className="text-white/90 mb-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-white/60">
                      {testimonial.location}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#7c3aed] to-[#6d28d9]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Don&apos;t Miss Your Chance!
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Register now for free and take the first step towards your
                global education journey.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/register"
                  className="bg-white text-[#7c3aed] px-8 py-4 rounded-full font-semibold hover:bg-[#c9a227] hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  Register for Free
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors"
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
