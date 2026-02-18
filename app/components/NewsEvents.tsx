"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, ArrowRight, Clock, User } from "lucide-react";

const newsItems = [
  {
    id: 1,
    category: "Admissions",
    title:
      "Spring 2026 Admissions Now Open - Early Bird Scholarships Available",
    excerpt:
      "Apply now for Spring 2026 intake and receive up to 30% scholarship on tuition fees. Limited seats available for international students.",
    image: "/images/Courses_1.jpg",
    date: "Jan 28, 2026",
    author: "Admissions Office",
    readTime: "3 min read",
  },
  {
    id: 2,
    category: "Events",
    title: "Annual Career Fair 2026 - Connect with 100+ Global Employers",
    excerpt:
      "Join us for the biggest career fair in the region featuring Fortune 500 companies, startups, and government organizations.",
    image: "/images/Fair-Event_UAE.jpg",
    date: "Jan 25, 2026",
    author: "Career Services",
    readTime: "4 min read",
  },
  {
    id: 3,
    category: "Achievement",
    title: "EIC Ranked Among Top 50 Universities in Middle East",
    excerpt:
      "Emirates International College achieves prestigious ranking in the latest QS Middle East University Rankings for 2026.",
    image: "/images/About_Story-01.jpg",
    date: "Jan 20, 2026",
    author: "Communications",
    readTime: "5 min read",
  },
  {
    id: 4,
    category: "Research",
    title: "New AI Research Lab Launched in Partnership with Tech Giants",
    excerpt:
      "State-of-the-art artificial intelligence research facility opens, backed by leading technology companies.",
    image: "/images/Courses_4.jpg",
    date: "Jan 15, 2026",
    author: "Research Department",
    readTime: "6 min read",
  },
];

const upcomingEvents = [
  {
    date: "Feb 5",
    title: "Virtual Open Day - Undergraduate Programs",
    time: "2:00 PM GST",
  },
  {
    date: "Feb 12",
    title: "MBA Information Session",
    time: "6:00 PM GST",
  },
  {
    date: "Feb 20",
    title: "International Student Webinar",
    time: "10:00 AM GST",
  },
];

export default function NewsEvents() {
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
            Stay Updated
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#0d1b4c] mt-3 mb-4">
            Latest News & Events
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Stay informed about campus activities, achievements, and important
            announcements from Emirates International College.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main News */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {newsItems.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-md card-hover group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#c9a227] text-[#0d1b4c] text-xs font-semibold px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {item.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {item.readTime}
                      </span>
                    </div>
                    <h3 className="font-serif font-bold text-[#0d1b4c] mb-2 line-clamp-2 group-hover:text-[#0d6d55] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {item.excerpt}
                    </p>
                    <Link
                      href={`/blog/${item.id}`}
                      className="inline-flex items-center gap-2 text-[#0d6d55] font-medium text-sm group-hover:text-[#c9a227] transition-colors"
                    >
                      Read More
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* View All Link */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-8"
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 btn-secondary px-6 py-3 rounded-full text-[#0d1b4c] border-[#0d1b4c]"
              >
                View All News
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>

          {/* Sidebar - Upcoming Events */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl p-6 shadow-md sticky top-24">
              <h3 className="font-serif font-bold text-xl text-[#0d1b4c] mb-6 flex items-center gap-2">
                <Calendar className="text-[#c9a227]" />
                Upcoming Events
              </h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 rounded-xl bg-[#faf9f7] hover:bg-[#0d1b4c] hover:text-white transition-colors group cursor-pointer"
                  >
                    <div className="text-center min-w-[60px]">
                      <div className="text-2xl font-bold text-[#c9a227]">
                        {event.date.split(" ")[0]}
                      </div>
                      <div className="text-xs text-gray-500 group-hover:text-white/70">
                        {event.date.split(" ")[1]}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm group-hover:text-white">
                        {event.title}
                      </h4>
                      <p className="text-xs text-gray-500 group-hover:text-white/70 mt-1">
                        {event.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="mt-8 p-6 bg-[#0d1b4c] rounded-xl">
                <h4 className="font-serif font-bold text-white mb-2">
                  Stay Informed
                </h4>
                <p className="text-white/70 text-sm mb-4">
                  Subscribe to our newsletter for updates.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#c9a227]"
                  />
                  <button
                    type="submit"
                    className="w-full btn-primary py-3 rounded-lg"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
