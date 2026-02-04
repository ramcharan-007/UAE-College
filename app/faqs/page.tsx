"use client";

import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ChevronDown, Search, HelpCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqCategories = [
  { id: "general", name: "General", icon: "🎓" },
  { id: "admissions", name: "Admissions", icon: "📝" },
  { id: "programs", name: "Programs", icon: "📚" },
  { id: "fees", name: "Fees & Payment", icon: "💳" },
  { id: "international", name: "International Students", icon: "🌍" },
  { id: "support", name: "Student Support", icon: "🤝" },
];

const faqs = [
  {
    category: "general",
    question: "What courses do you offer?",
    answer:
      "We offer a wide range of undergraduate and postgraduate programs including Business Administration, Computer Science, Healthcare, Finance, Design, and Hospitality. We also have professional certificate courses and online learning options.",
  },
  {
    category: "general",
    question: "Are the courses 100% online?",
    answer:
      "We offer both on-campus and online programs. Many of our programs are available in a hybrid format, combining online coursework with on-campus practical sessions. Some professional courses are 100% online for maximum flexibility.",
  },
  {
    category: "general",
    question: "Are your courses accredited?",
    answer:
      "Yes, all our programs are fully accredited by recognized bodies including KHDA (Knowledge and Human Development Authority), CAA (Commission for Academic Accreditation UAE), AACSB, ABET, and QAA UK.",
  },
  {
    category: "admissions",
    question: "Who can apply for these courses?",
    answer:
      "Anyone with a high school diploma or equivalent can apply for undergraduate programs. For postgraduate programs, a bachelor's degree is required. Professional courses are open to working professionals seeking career advancement.",
  },
  {
    category: "admissions",
    question: "How do I apply?",
    answer:
      'Simply click "Apply Now" on our website, complete the online application form, upload your documents, and submit. Our admissions team will review your application and respond within 5-7 business days.',
  },
  {
    category: "admissions",
    question: "What documents are required for application?",
    answer:
      "Required documents include: academic transcripts, passport copy, passport-sized photographs, statement of purpose, and letters of recommendation. Additional documents may be required for specific programs.",
  },
  {
    category: "programs",
    question: "What is the course duration?",
    answer:
      "Undergraduate programs typically take 3-4 years, postgraduate programs take 1-2 years, and professional certificate courses range from 3 to 12 months depending on the program.",
  },
  {
    category: "programs",
    question: "Do I get a certificate after completion?",
    answer:
      "Yes, upon successful completion of your program, you will receive a recognized degree or certificate from Emirates International College, accredited by relevant national and international bodies.",
  },
  {
    category: "programs",
    question: "Are the certificates valid for jobs or further study?",
    answer:
      "Absolutely! Our certificates and degrees are recognized globally for employment and further education. Many of our graduates have successfully pursued careers at Fortune 500 companies or continued to top universities worldwide.",
  },
  {
    category: "fees",
    question: "What are the tuition fees?",
    answer:
      "Tuition fees vary by program. Undergraduate programs range from AED 35,000-55,000/year, postgraduate programs from AED 55,000-80,000/year, and professional courses from AED 5,000-15,000. Contact our admissions team for specific program fees.",
  },
  {
    category: "fees",
    question: "Are there scholarship opportunities?",
    answer:
      "Yes! We offer merit scholarships (up to 50% off), early bird discounts (20% off), international student grants (15% off), and sibling discounts (10% off). Contact our financial aid office for more details.",
  },
  {
    category: "fees",
    question: "Do you offer payment plans?",
    answer:
      "Yes, we offer flexible payment plans to help students manage their tuition fees. You can pay in installments throughout the academic year. Contact our finance office for customized payment arrangements.",
  },
  {
    category: "international",
    question: "Can international students apply?",
    answer:
      "Yes, students from any country are welcome to apply. We have students from over 50 countries, making our campus truly international and culturally diverse.",
  },
  {
    category: "international",
    question: "Do you provide visa support?",
    answer:
      "Yes, our international student services team provides comprehensive visa support including invitation letters, documentation guidance, and liaison with UAE immigration authorities.",
  },
  {
    category: "international",
    question: "Is accommodation available?",
    answer:
      "While we don't have on-campus housing, we help international students find suitable accommodation near the campus. We partner with several student housing providers offering safe and affordable options.",
  },
  {
    category: "support",
    question: "When can I start the course?",
    answer:
      "We have multiple intakes throughout the year - Fall (September), Spring (January), and Summer (May). Admissions are open year-round, so you can apply anytime.",
  },
  {
    category: "support",
    question: "Is there support during the course?",
    answer:
      "Yes, we provide comprehensive student support including academic advisors, tutors, career counselors, mental health services, and 24/7 online support through our student portal.",
  },
  {
    category: "support",
    question: "Can I study while working?",
    answer:
      "Yes, many of our programs are designed with working professionals in mind. We offer evening classes, weekend sessions, and flexible online options to accommodate work schedules.",
  },
];

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);

  const toggleQuestion = (index: number) => {
    setOpenQuestions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = faq.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const allFilteredFaqs = faqs.filter(
    (faq) =>
      searchQuery !== "" &&
      (faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())),
  );

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
                Got Questions?
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mt-4 mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                Find answers to common questions about admissions, programs,
                fees, and more.
              </p>

              {/* Search */}
              <div className="max-w-xl mx-auto relative">
                <Search
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#c9a227]"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 bg-[#faf9f7]">
          <div className="max-w-7xl mx-auto px-4">
            {searchQuery ? (
              /* Search Results */
              <div>
                <h2 className="text-2xl font-serif font-bold text-[#0d1b4c] mb-8">
                  Search Results ({allFilteredFaqs.length})
                </h2>
                {allFilteredFaqs.length > 0 ? (
                  <div className="space-y-4 max-w-4xl">
                    {allFilteredFaqs.map((faq, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-white rounded-xl shadow-md overflow-hidden"
                      >
                        <button
                          onClick={() => toggleQuestion(index)}
                          className="w-full flex items-center justify-between p-6 text-left"
                        >
                          <span className="font-semibold text-[#0d1b4c] pr-4">
                            {faq.question}
                          </span>
                          <ChevronDown
                            className={`text-[#0d6d55] transition-transform flex-shrink-0 ${
                              openQuestions.includes(index) ? "rotate-180" : ""
                            }`}
                            size={20}
                          />
                        </button>
                        {openQuestions.includes(index) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            className="px-6 pb-6"
                          >
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 mb-4">
                      No results found for "{searchQuery}"
                    </p>
                    <button
                      onClick={() => setSearchQuery("")}
                      className="text-[#0d6d55] font-medium hover:underline"
                    >
                      Clear search
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Category-based FAQs */
              <div className="grid lg:grid-cols-4 gap-8">
                {/* Categories Sidebar */}
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-2xl p-6 shadow-md sticky top-24">
                    <h3 className="font-serif font-bold text-xl text-[#0d1b4c] mb-4">
                      Categories
                    </h3>
                    <ul className="space-y-2">
                      {faqCategories.map((category) => (
                        <li key={category.id}>
                          <button
                            onClick={() => setActiveCategory(category.id)}
                            className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-left transition-colors ${
                              activeCategory === category.id
                                ? "bg-[#0d1b4c] text-white"
                                : "hover:bg-gray-100"
                            }`}
                          >
                            <span className="text-xl">{category.icon}</span>
                            <span className="font-medium">{category.name}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* FAQ List */}
                <div className="lg:col-span-3">
                  <h2 className="text-2xl font-serif font-bold text-[#0d1b4c] mb-8">
                    {faqCategories.find((c) => c.id === activeCategory)?.name}{" "}
                    Questions
                  </h2>
                  <div className="space-y-4">
                    {filteredFaqs.map((faq, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-white rounded-xl shadow-md overflow-hidden"
                      >
                        <button
                          onClick={() => toggleQuestion(index + 100)}
                          className="w-full flex items-center justify-between p-6 text-left"
                        >
                          <span className="font-semibold text-[#0d1b4c] pr-4">
                            {faq.question}
                          </span>
                          <ChevronDown
                            className={`text-[#0d6d55] transition-transform flex-shrink-0 ${
                              openQuestions.includes(index + 100)
                                ? "rotate-180"
                                : ""
                            }`}
                            size={20}
                          />
                        </button>
                        {openQuestions.includes(index + 100) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            className="px-6 pb-6"
                          >
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Still Have Questions CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <HelpCircle className="w-16 h-16 text-[#c9a227] mx-auto mb-6" />
              <h2 className="text-3xl font-serif font-bold text-[#0d1b4c] mb-4">
                Still Have Questions?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Can't find what you're looking for? Our team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary px-8 py-4 rounded-full text-lg"
                >
                  Contact Us
                </Link>
                <a
                  href="tel:+971561596222"
                  className="btn-secondary px-8 py-4 rounded-full text-lg border-[#0d1b4c] text-[#0d1b4c]"
                >
                  Call: +971 56 159 6222
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
