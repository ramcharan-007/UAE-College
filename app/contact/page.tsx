"use client";

import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import { useState } from "react";

const offices = [
  {
    location: "Dubai, UAE (Main Campus)",
    address:
      "Le Solarium Building, 10th Floor, 1017, Dubai Silicon Oasis, Dubai, UAE",
    phone: "+971 56 159 6222",
    email: "dubai@emiratesinternational.edu",
    hours: "Sun - Thu: 9:00 AM - 6:00 PM",
  },
  {
    location: "Abu Dhabi, UAE",
    address:
      "Al Maryah Island, Abu Dhabi Global Market Square, Tower 2, Office 1204",
    phone: "+971 2 123 4567",
    email: "abudhabi@emiratesinternational.edu",
    hours: "Sun - Thu: 9:00 AM - 6:00 PM",
  },
  {
    location: "London, UK",
    address: "241E High Street North, London, United Kingdom, E12 6SJ",
    phone: "+44 20 7123 4567",
    email: "london@emiratesinternational.edu",
    hours: "Mon - Fri: 9:00 AM - 5:00 PM GMT",
  },
  {
    location: "Hyderabad, India",
    address:
      "17-1-16/A, 6th Floor Pinnacle Towers, Santosh Nagar, Saidabad, Hyderabad-500059",
    phone: "+91 888 551 4426",
    email: "india@emiratesinternational.edu",
    hours: "Mon - Sat: 10:00 AM - 7:00 PM IST",
  },
];

const departments = [
  { name: "General Inquiries", email: "info@emiratesinternational.edu" },
  { name: "Admissions", email: "admissions@emiratesinternational.edu" },
  { name: "Student Affairs", email: "students@emiratesinternational.edu" },
  { name: "Finance & Fees", email: "finance@emiratesinternational.edu" },
  { name: "Career Services", email: "careers@emiratesinternational.edu" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

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
                Get in Touch
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mt-4 mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Have questions? We're here to help. Reach out to our team and
                we'll respond within 24 hours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 bg-[#faf9f7]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-serif font-bold text-[#0d1b4c] mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Fill out the form below and we'll get back to you shortly.
                  </p>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 bg-[#0d6d55] rounded-full flex items-center justify-center mx-auto mb-6">
                        <MessageCircle className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-[#0d1b4c] mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Thank you for reaching out. We'll respond within 24
                        hours.
                      </p>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            firstName: "",
                            lastName: "",
                            email: "",
                            phone: "",
                            subject: "",
                            message: "",
                          });
                        }}
                        className="btn-secondary px-6 py-2 rounded-full border-[#0d1b4c] text-[#0d1b4c]"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            placeholder="John"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0d6d55] focus:ring-1 focus:ring-[#0d6d55]"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            placeholder="Doe"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0d6d55] focus:ring-1 focus:ring-[#0d6d55]"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="john@example.com"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0d6d55] focus:ring-1 focus:ring-[#0d6d55]"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <div className="flex">
                            <select className="px-3 py-3 rounded-l-lg border border-r-0 border-gray-200 bg-gray-50 focus:outline-none focus:border-[#0d6d55]">
                              <option>+971</option>
                              <option>+966</option>
                              <option>+91</option>
                              <option>+44</option>
                              <option>+1</option>
                            </select>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="50 123 4567"
                              className="w-full px-4 py-3 rounded-r-lg border border-gray-200 focus:outline-none focus:border-[#0d6d55] focus:ring-1 focus:ring-[#0d6d55]"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0d6d55] focus:ring-1 focus:ring-[#0d6d55]"
                        >
                          <option value="">Select a subject</option>
                          <option value="admissions">Admissions Inquiry</option>
                          <option value="programs">Program Information</option>
                          <option value="fees">Fees & Scholarships</option>
                          <option value="visa">Visa & Immigration</option>
                          <option value="careers">Career Services</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          placeholder="How can we help you?"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0d6d55] focus:ring-1 focus:ring-[#0d6d55] resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn-primary py-4 rounded-lg flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send size={18} />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>

              {/* Contact Info Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-1 space-y-6"
              >
                {/* Quick Contact */}
                <div className="bg-[#0d1b4c] rounded-2xl p-6 text-white">
                  <h3 className="font-serif font-bold text-xl mb-6">
                    Quick Contact
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="tel:+971561596222"
                      className="flex items-center gap-3 hover:text-[#c9a227] transition-colors"
                    >
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                        <Phone size={18} />
                      </div>
                      <div>
                        <div className="text-sm text-white/70">Call Us</div>
                        <div className="font-medium">+971 56 159 6222</div>
                      </div>
                    </a>
                    <a
                      href="mailto:info@emiratesinternational.edu"
                      className="flex items-center gap-3 hover:text-[#c9a227] transition-colors"
                    >
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                        <Mail size={18} />
                      </div>
                      <div>
                        <div className="text-sm text-white/70">Email Us</div>
                        <div className="font-medium">
                          info@emiratesinternational.edu
                        </div>
                      </div>
                    </a>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                        <Clock size={18} />
                      </div>
                      <div>
                        <div className="text-sm text-white/70">
                          Office Hours
                        </div>
                        <div className="font-medium">Sun - Thu: 9AM - 6PM</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Department Contacts */}
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <h3 className="font-serif font-bold text-xl text-[#0d1b4c] mb-4">
                    Department Emails
                  </h3>
                  <ul className="space-y-3">
                    {departments.map((dept) => (
                      <li key={dept.name}>
                        <a
                          href={`mailto:${dept.email}`}
                          className="block p-3 rounded-lg hover:bg-[#faf9f7] transition-colors"
                        >
                          <div className="font-medium text-[#0d1b4c]">
                            {dept.name}
                          </div>
                          <div className="text-sm text-[#0d6d55]">
                            {dept.email}
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Links */}
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <h3 className="font-serif font-bold text-xl text-[#0d1b4c] mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="w-12 h-12 bg-[#0d1b4c] hover:bg-[#c9a227] text-white rounded-lg flex items-center justify-center transition-colors"
                      >
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-[#c9a227] font-semibold text-sm tracking-wider uppercase">
                Visit Us
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0d1b4c] mt-3">
                Our Global Offices
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {offices.map((office, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#faf9f7] rounded-2xl p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-serif font-bold text-[#0d1b4c] mb-4">
                    {office.location}
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin
                        size={16}
                        className="text-[#0d6d55] flex-shrink-0 mt-0.5"
                      />
                      <span className="text-gray-600">{office.address}</span>
                    </div>
                    <a
                      href={`tel:${office.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-3 text-gray-600 hover:text-[#0d6d55]"
                    >
                      <Phone size={16} className="text-[#0d6d55]" />
                      {office.phone}
                    </a>
                    <a
                      href={`mailto:${office.email}`}
                      className="flex items-center gap-3 text-gray-600 hover:text-[#0d6d55]"
                    >
                      <Mail size={16} className="text-[#0d6d55]" />
                      {office.email}
                    </a>
                    <div className="flex items-center gap-3">
                      <Clock size={16} className="text-[#0d6d55]" />
                      <span className="text-gray-600">{office.hours}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-96 bg-gray-200 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1783045768527!2d55.38215657538677!3d25.121454777761983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f65b0a0b0a0a1%3A0x0!2sDubai%20Silicon%20Oasis!5e0!3m2!1sen!2sae!4v1699000000000!5m2!1sen!2sae"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Emirates International College Location"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
