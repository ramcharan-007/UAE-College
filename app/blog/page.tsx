"use client";

import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Calendar, User, Clock, ArrowRight, Search, Tag } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title:
      "Cybersecurity – The Smartest Career Choice for a Safe and Successful Future",
    excerpt:
      "In today's fast-evolving digital era, every sector — from banking and healthcare to business and education — relies on technology. Cybercrime has become one of the biggest global challenges.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
    category: "Technology",
    date: "Oct 28, 2025",
    author: "Dr. Ahmed Hassan",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    title: "How Flexible Online Learning Can Transform Your Future",
    excerpt:
      "Discover how flexible online learning at Emirates International College empowers you to study at your own pace, balance work and personal life.",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
    category: "Education",
    date: "Sep 1, 2025",
    author: "Prof. Sarah Williams",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 3,
    title: "Exploring the Newest Online Professional Learning Trends",
    excerpt:
      "Discover how AI, mobile access, simulations, and flexible micro-courses are reshaping professional learning for 2025.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    category: "Trends",
    date: "Apr 30, 2025",
    author: "Mohammed Al-Rashid",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 4,
    title: "Building a Strong Career Path with Emirates International College",
    excerpt:
      "EIC offers flexible, globally recognized programs that equip you with real-world skills to succeed in today's dynamic job market.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop",
    category: "Career",
    date: "Apr 24, 2025",
    author: "Career Services",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 5,
    title: "How Online Education Can Fast-Track Your Career in Technology",
    excerpt:
      "Gain in-demand tech and business skills through flexible, accredited online courses that deliver real-world results.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    category: "Technology",
    date: "Apr 16, 2025",
    author: "Tech Department",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 6,
    title: "Unlock Global Opportunities Through Education at EIC",
    excerpt:
      "Discover flexible, high-quality programs at EIC designed to equip you with skills for global careers across diverse industries.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
    category: "Education",
    date: "Apr 10, 2025",
    author: "Admissions Team",
    readTime: "3 min read",
    featured: false,
  },
  {
    id: 7,
    title: "The Future of Business Education in the Middle East",
    excerpt:
      "Explore how business education is evolving in the Middle East and what it means for aspiring entrepreneurs and managers.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    category: "Business",
    date: "Mar 20, 2025",
    author: "Business Faculty",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 8,
    title: "Why Healthcare Professionals Choose EIC for Career Advancement",
    excerpt:
      "Healthcare professionals share their experiences on how EIC programs helped advance their careers in the medical field.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    category: "Healthcare",
    date: "Mar 15, 2025",
    author: "Healthcare Dept",
    readTime: "5 min read",
    featured: false,
  },
];

const categories = [
  { name: "All", count: blogPosts.length },
  {
    name: "Technology",
    count: blogPosts.filter((p) => p.category === "Technology").length,
  },
  {
    name: "Education",
    count: blogPosts.filter((p) => p.category === "Education").length,
  },
  {
    name: "Career",
    count: blogPosts.filter((p) => p.category === "Career").length,
  },
  {
    name: "Business",
    count: blogPosts.filter((p) => p.category === "Business").length,
  },
  {
    name: "Healthcare",
    count: blogPosts.filter((p) => p.category === "Healthcare").length,
  },
];

const popularTags = [
  "Technology",
  "Career",
  "Education",
  "Online Learning",
  "MBA",
  "Cybersecurity",
  "Healthcare",
  "Business",
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find((post) => post.featured);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-20 bg-[#0d1b4c]">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-[#c9a227] font-semibold text-sm tracking-wider uppercase">
                Insights & Updates
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mt-4 mb-6">
                Blog & News
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Stay informed with the latest news, insights, and updates from
                Emirates International College.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-12 bg-white border-b">
            <div className="max-w-7xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-8 items-center"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#c9a227] text-[#0d1b4c] text-xs font-semibold px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div>
                  <span className="text-[#0d6d55] text-sm font-medium uppercase tracking-wide">
                    {featuredPost.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0d1b4c] mt-2 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center gap-1">
                      <User size={14} />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <Link
                    href={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center gap-2 btn-primary px-6 py-3 rounded-full"
                  >
                    Read Article
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Blog Content */}
        <section className="py-16 bg-[#faf9f7]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Search */}
                <div className="relative mb-8">
                  <Search
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#0d6d55] focus:ring-1 focus:ring-[#0d6d55]"
                  />
                </div>

                {/* Category Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setActiveCategory(category.name)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        activeCategory === category.name
                          ? "bg-[#0d1b4c] text-white"
                          : "bg-white text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>

                {/* Posts Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  {filteredPosts
                    .filter(
                      (post) => !post.featured || activeCategory !== "All",
                    )
                    .map((post, index) => (
                      <motion.article
                        key={post.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-2xl overflow-hidden shadow-md card-hover group"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="bg-[#0d6d55] text-white text-xs font-medium px-3 py-1 rounded-full">
                              {post.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                            <span className="flex items-center gap-1">
                              <Calendar size={14} />
                              {post.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={14} />
                              {post.readTime}
                            </span>
                          </div>
                          <h3 className="font-serif font-bold text-[#0d1b4c] mb-3 line-clamp-2 group-hover:text-[#0d6d55] transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>
                          <Link
                            href={`/blog/${post.id}`}
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

                {filteredPosts.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-500">
                      No articles found matching your criteria.
                    </p>
                  </div>
                )}

                {/* Pagination */}
                <div className="flex justify-center gap-2 mt-12">
                  {[1, 2, 3].map((page) => (
                    <button
                      key={page}
                      className={`w-10 h-10 rounded-full font-medium ${
                        page === 1
                          ? "bg-[#0d1b4c] text-white"
                          : "bg-white text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button className="px-4 h-10 rounded-full bg-white text-gray-700 hover:bg-gray-100 font-medium">
                    Next
                  </button>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Categories */}
                <div className="bg-white rounded-2xl p-6 shadow-md mb-8">
                  <h3 className="font-serif font-bold text-xl text-[#0d1b4c] mb-4">
                    Categories
                  </h3>
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li key={category.name}>
                        <button
                          onClick={() => setActiveCategory(category.name)}
                          className={`flex justify-between items-center w-full px-4 py-2 rounded-lg text-left transition-colors ${
                            activeCategory === category.name
                              ? "bg-[#0d1b4c] text-white"
                              : "hover:bg-gray-100"
                          }`}
                        >
                          <span>{category.name}</span>
                          <span className="text-sm opacity-70">
                            ({category.count})
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Popular Tags */}
                <div className="bg-white rounded-2xl p-6 shadow-md mb-8">
                  <h3 className="font-serif font-bold text-xl text-[#0d1b4c] mb-4">
                    Popular Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                      <button
                        key={tag}
                        className="flex items-center gap-1 px-3 py-1.5 bg-[#faf9f7] text-gray-700 rounded-full text-sm hover:bg-[#0d1b4c] hover:text-white transition-colors"
                      >
                        <Tag size={12} />
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-[#0d1b4c] rounded-2xl p-6">
                  <h3 className="font-serif font-bold text-xl text-white mb-2">
                    Subscribe to Newsletter
                  </h3>
                  <p className="text-white/70 text-sm mb-4">
                    Get the latest articles delivered to your inbox.
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
