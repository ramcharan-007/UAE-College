"use client";

import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  CheckCircle,
  FileText,
  Calendar,
  DollarSign,
  GraduationCap,
  Globe2,
  Award,
  ArrowRight,
  Clock,
  Users,
  HelpCircle,
  Download,
} from "lucide-react";
import Link from "next/link";

const admissionSteps = [
  {
    step: 1,
    title: "Choose Your Program",
    description:
      "Browse our programs and select the one that aligns with your career goals.",
    icon: GraduationCap,
  },
  {
    step: 2,
    title: "Check Requirements",
    description: "Review the admission requirements for your chosen program.",
    icon: FileText,
  },
  {
    step: 3,
    title: "Submit Application",
    description:
      "Complete the online application form and upload required documents.",
    icon: CheckCircle,
  },
  {
    step: 4,
    title: "Application Review",
    description:
      "Our admissions team will review your application within 5-7 business days.",
    icon: Clock,
  },
  {
    step: 5,
    title: "Receive Offer",
    description:
      "Successful applicants will receive an offer letter via email.",
    icon: Award,
  },
  {
    step: 6,
    title: "Confirm & Enroll",
    description:
      "Accept your offer, pay the deposit, and begin your journey with us.",
    icon: Calendar,
  },
];

const requirements = {
  undergraduate: [
    "High school diploma or equivalent (minimum 60% aggregate)",
    "English proficiency (IELTS 5.5 / TOEFL 61 or equivalent)",
    "Valid passport copy",
    "Passport-sized photographs",
    "Statement of Purpose (500 words)",
    "Letters of Recommendation (2)",
  ],
  postgraduate: [
    "Bachelor's degree from an accredited institution",
    "Minimum GPA of 2.5/4.0 or equivalent",
    "English proficiency (IELTS 6.5 / TOEFL 79 or equivalent)",
    "Valid passport copy",
    "Resume/CV",
    "Statement of Purpose (750 words)",
    "Letters of Recommendation (2)",
    "Work experience (preferred for MBA)",
  ],
};

const scholarships = [
  {
    name: "Merit Scholarship",
    discount: "Up to 50%",
    criteria:
      "Outstanding academic performance (90%+ in previous qualification)",
    icon: Award,
  },
  {
    name: "Early Bird Scholarship",
    discount: "20%",
    criteria: "Applications submitted 3 months before deadline",
    icon: Clock,
  },
  {
    name: "International Student Grant",
    discount: "15%",
    criteria: "Students from partner countries",
    icon: Globe2,
  },
  {
    name: "Sibling Discount",
    discount: "10%",
    criteria: "Multiple family members enrolled",
    icon: Users,
  },
];

const tuitionFees = [
  {
    program: "Undergraduate Programs",
    domestic: "AED 35,000 - 50,000/year",
    international: "AED 40,000 - 55,000/year",
  },
  {
    program: "Postgraduate Programs",
    domestic: "AED 55,000 - 75,000/year",
    international: "AED 60,000 - 80,000/year",
  },
  {
    program: "Professional Courses",
    domestic: "AED 5,000 - 15,000",
    international: "AED 6,000 - 18,000",
  },
  {
    program: "Online Programs",
    domestic: "AED 4,000 - 12,000",
    international: "AED 5,000 - 15,000",
  },
];

const importantDates = [
  {
    intake: "Fall 2026",
    deadline: "June 30, 2026",
    classes: "September 1, 2026",
  },
  {
    intake: "Spring 2026",
    deadline: "November 30, 2025",
    classes: "January 15, 2026",
  },
  {
    intake: "Summer 2026",
    deadline: "April 15, 2026",
    classes: "May 15, 2026",
  },
];

export default function AdmissionsPage() {
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
                backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=2000&q=80')`,
              }}
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-[#c9a227] font-semibold text-sm tracking-wider uppercase">
                Join Our Community
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mt-4 mb-6">
                Admissions
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                Begin your journey to academic excellence. Learn about our
                admission process, requirements, and how to apply.
              </p>
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 btn-primary px-8 py-4 rounded-full text-lg"
              >
                Start Your Application
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Admission Process */}
        <section id="apply" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-[#c9a227] font-semibold text-sm tracking-wider uppercase">
                How to Apply
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0d1b4c] mt-3 mb-4">
                Admission Process
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our streamlined application process makes it easy to apply.
                Follow these simple steps to begin your journey.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {admissionSteps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative bg-[#faf9f7] rounded-2xl p-8 group hover:bg-[#0d1b4c] transition-colors"
                >
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#c9a227] rounded-full flex items-center justify-center font-bold text-[#0d1b4c]">
                    {item.step}
                  </div>
                  <item.icon className="w-12 h-12 text-[#0d6d55] group-hover:text-[#c9a227] mb-4 transition-colors" />
                  <h3 className="font-serif font-bold text-xl text-[#0d1b4c] group-hover:text-white mb-3 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white/70 transition-colors">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section id="requirements" className="py-20 bg-[#faf9f7]">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-[#c9a227] font-semibold text-sm tracking-wider uppercase">
                What You Need
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0d1b4c] mt-3 mb-4">
                Admission Requirements
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Undergraduate */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-[#0d1b4c] rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-7 h-7 text-[#c9a227]" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#0d1b4c]">
                    Undergraduate
                  </h3>
                </div>
                <ul className="space-y-3">
                  {requirements.undergraduate.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#0d6d55] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Postgraduate */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-[#0d6d55] rounded-xl flex items-center justify-center">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#0d1b4c]">
                    Postgraduate
                  </h3>
                </div>
                <ul className="space-y-3">
                  {requirements.postgraduate.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#0d6d55] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Download Brochure */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <button className="inline-flex items-center gap-2 btn-secondary px-6 py-3 rounded-full text-[#0d1b4c] border-[#0d1b4c]">
                <Download size={18} />
                Download Admission Guide (PDF)
              </button>
            </motion.div>
          </div>
        </section>

        {/* Scholarships */}
        <section id="scholarships" className="py-20 bg-[#0d1b4c]">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-[#c9a227] font-semibold text-sm tracking-wider uppercase">
                Financial Support
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-3 mb-4">
                Scholarships & Grants
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                We believe financial constraints should not limit your
                potential. Explore our scholarship opportunities.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {scholarships.map((scholarship, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-colors"
                >
                  <scholarship.icon className="w-12 h-12 text-[#c9a227] mb-4" />
                  <h3 className="text-xl font-serif font-bold text-white mb-2">
                    {scholarship.name}
                  </h3>
                  <div className="text-3xl font-bold text-[#c9a227] mb-3">
                    {scholarship.discount}
                  </div>
                  <p className="text-white/70 text-sm">
                    {scholarship.criteria}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tuition Fees */}
        <section id="fees" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-[#c9a227] font-semibold text-sm tracking-wider uppercase">
                Investment in Your Future
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0d1b4c] mt-3 mb-4">
                Tuition & Fees
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-x-auto"
            >
              <table className="w-full min-w-[600px] bg-[#faf9f7] rounded-2xl overflow-hidden">
                <thead>
                  <tr className="bg-[#0d1b4c] text-white">
                    <th className="px-6 py-4 text-left font-semibold">
                      Program Type
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      UAE Residents
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      International
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tuitionFees.map((fee, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 last:border-0"
                    >
                      <td className="px-6 py-5 font-medium text-[#0d1b4c]">
                        {fee.program}
                      </td>
                      <td className="px-6 py-5 text-gray-600">
                        {fee.domestic}
                      </td>
                      <td className="px-6 py-5 text-gray-600">
                        {fee.international}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-gray-500 text-sm mt-6"
            >
              * Fees are subject to change. Contact admissions for the most
              current information. Flexible payment plans available.
            </motion.p>
          </div>
        </section>

        {/* Important Dates */}
        <section className="py-20 bg-[#faf9f7]">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-[#c9a227] font-semibold text-sm tracking-wider uppercase">
                Plan Ahead
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0d1b4c] mt-3 mb-4">
                Important Dates
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {importantDates.map((date, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-md text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0d1b4c] rounded-full mb-4">
                    <Calendar className="w-8 h-8 text-[#c9a227]" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#0d1b4c] mb-4">
                    {date.intake}
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p>
                      <span className="font-medium">Application Deadline:</span>
                      <br />
                      {date.deadline}
                    </p>
                    <p>
                      <span className="font-medium">Classes Begin:</span>
                      <br />
                      {date.classes}
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
                Ready to Take the Next Step?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Start your application today and join our global community of
                learners.
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
                  Contact Admissions
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
