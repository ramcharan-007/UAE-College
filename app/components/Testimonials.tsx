"use client";

import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Al-Rashid",
    role: "MBA Graduate, 2024",
    country: "Saudi Arabia",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    quote:
      "Emirates International College transformed my career. The global exposure and industry connections helped me land a leadership role at a Fortune 500 company.",
    rating: 5,
    program: "Business Administration",
  },
  {
    id: 2,
    name: "Ahmed Hassan",
    role: "Computer Science, 2023",
    country: "Egypt",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    quote:
      "The cutting-edge curriculum and world-class faculty prepared me for the tech industry. I'm now working at a leading AI startup in Dubai.",
    rating: 5,
    program: "Information Technology",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Healthcare Management, 2024",
    country: "India",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    quote:
      "The practical approach to learning and extensive internship opportunities gave me the edge I needed in the competitive healthcare sector.",
    rating: 5,
    program: "Medical Sciences",
  },
  {
    id: 4,
    name: "James Okonkwo",
    role: "Finance Graduate, 2023",
    country: "Nigeria",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    quote:
      "The scholarship program made my dream of studying abroad a reality. The diverse community and excellent faculty exceeded all my expectations.",
    rating: 5,
    program: "Finance & Accounting",
  },
  {
    id: 5,
    name: "Maria Santos",
    role: "Design Graduate, 2024",
    country: "Philippines",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
    quote:
      "The creative environment and industry exposure helped me build a strong portfolio. I'm now running my own design studio in Dubai.",
    rating: 5,
    program: "Design & Media",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleTestimonials = 3;

  const next = () => {
    setCurrentIndex((prev) =>
      prev + 1 >= testimonials.length - visibleTestimonials + 1 ? 0 : prev + 1,
    );
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? testimonials.length - visibleTestimonials : prev - 1,
    );
  };

  return (
    <section className="py-20 bg-[#0d1b4c] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-[#c9a227]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0d6d55]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#c9a227] font-semibold text-sm tracking-wider uppercase">
            Student Voices
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mt-3 mb-4">
            Success Stories
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Hear from our global alumni who have transformed their careers and
            lives through education at International Center for Applied Studies & Research College
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * (100 / visibleTestimonials)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="min-w-full md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                >
                  {/* Quote Icon */}
                  <Quote className="w-10 h-10 text-[#c9a227] mb-4" />

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-[#c9a227] text-[#c9a227]"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-white/90 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#c9a227]"
                    />
                    <div>
                      <h4 className="text-white font-semibold">
                        {testimonial.name}
                      </h4>
                      <p className="text-white/60 text-sm">
                        {testimonial.role}
                      </p>
                      <p className="text-[#c9a227] text-xs">
                        {testimonial.country}
                      </p>
                    </div>
                  </div>

                  {/* Program Badge */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="text-xs bg-[#0d6d55] text-white px-3 py-1 rounded-full">
                      {testimonial.program}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 bg-white/10 hover:bg-[#c9a227] rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 bg-white/10 hover:bg-[#c9a227] rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials
              .slice(0, testimonials.length - visibleTestimonials + 1)
              .map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentIndex === index
                      ? "bg-[#c9a227] w-6"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
