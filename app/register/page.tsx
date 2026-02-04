"use client";

import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Phone,
  ArrowRight,
  Check,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const programCategories = [
  "Business & Management",
  "Information Technology",
  "Healthcare & Medicine",
  "Engineering",
  "Hospitality & Tourism",
  "Arts & Design",
];

const steps = [
  { number: 1, title: "Personal Details" },
  { number: 2, title: "Academic Info" },
  { number: 3, title: "Account Setup" },
];

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryCode: "+971",
    dateOfBirth: "",
    nationality: "",
    educationLevel: "",
    programInterest: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
    subscribeNewsletter: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    // Redirect or show success
    window.location.href = "/login";
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#faf9f7] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0d1b4c] rounded-2xl mb-6">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#0d1b4c] mb-3">
              Create Your Account
            </h1>
            <p className="text-gray-600">
              Join Emirates International College and start your journey to
              success
            </p>
          </motion.div>

          {/* Progress Steps */}
          <div className="mb-10">
            <div className="flex items-center justify-center">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                        currentStep >= step.number
                          ? "bg-[#0d6d55] text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {currentStep > step.number ? (
                        <Check size={18} />
                      ) : (
                        step.number
                      )}
                    </div>
                    <span
                      className={`mt-2 text-sm ${
                        currentStep >= step.number
                          ? "text-[#0d1b4c] font-medium"
                          : "text-gray-500"
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-24 h-1 mx-2 rounded ${
                        currentStep > step.number
                          ? "bg-[#0d6d55]"
                          : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <form onSubmit={handleSubmit}>
              {/* Step 1: Personal Details */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-serif font-bold text-[#0d1b4c] mb-6">
                    Personal Information
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <div className="relative">
                        <User
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                          size={18}
                        />
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          placeholder="John"
                          className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0d6d55] focus:ring-1 focus:ring-[#0d6d55]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <div className="relative">
                        <User
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                          size={18}
                        />
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          placeholder="Doe"
                          className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0d6d55] focus:ring-1 focus:ring-[#0d6d55]"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={18}
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@example.com"
                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0d6d55] focus:ring-1 focus:ring-[#0d6d55]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="flex">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleInputChange}
                        className="px-3 py-3 rounded-l-lg border border-r-0 border-gray-200 bg-gray-50 focus:outline-none focus:border-[#0d6d55]"
                      >
                        <option value="+971">+971</option>
                        <option value="+966">+966</option>
                        <option value="+91">+91</option>
                        <option value="+44">+44</option>
                        <option value="+1">+1</option>
                      </select>
                      <div className="relative flex-1">
                        <Phone
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                          size={18}
                        />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="50 123 4567"
                          className="w-full pl-12 pr-4 py-3 rounded-r-lg border border-gray-200 focus:outline-none focus:border-[#0d6d55] focus:ring-1 focus:ring-[#0d6d55]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0d6d55] focus:ring-1 focus:ring-[#0d6d55]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nationality *
                      </label>
                      <select
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0d6d55] focus:ring-1 focus:ring-[#0d6d55]"
                      >
                        <option value="">Select nationality</option>
                        <option value="UAE">United Arab Emirates</option>
                        <option value="IN">India</option>
                        <option value="PK">Pakistan</option>
                        <option value="UK">United Kingdom</option>
                        <option value="US">United States</option>
                        <option value="EG">Egypt</option>
                        <option value="NG">Nigeria</option>
                        <option value="SA">Saudi Arabia</option>
                        <option value="OTHER">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Academic Information */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-serif font-bold text-[#0d1b4c] mb-6">
                    Academic Information
                  </h2>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Highest Education Level *
                    </label>
                    <select
                      name="educationLevel"
                      value={formData.educationLevel}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0d6d55] focus:ring-1 focus:ring-[#0d6d55]"
                    >
                      <option value="">Select education level</option>
                      <option value="highschool">
                        High School / Secondary
                      </option>
                      <option value="diploma">Diploma</option>
                      <option value="bachelor">Bachelor's Degree</option>
                      <option value="master">Master's Degree</option>
                      <option value="phd">PhD / Doctorate</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Program of Interest *
                    </label>
                    <select
                      name="programInterest"
                      value={formData.programInterest}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0d6d55] focus:ring-1 focus:ring-[#0d6d55]"
                    >
                      <option value="">Select program category</option>
                      {programCategories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="bg-[#faf9f7] rounded-lg p-6">
                    <h3 className="font-semibold text-[#0d1b4c] mb-3">
                      Why join Emirates International College?
                    </h3>
                    <ul className="space-y-2">
                      {[
                        "UK-accredited qualifications recognized globally",
                        "Industry partnerships for internships & placements",
                        "Flexible learning: Online, On-campus, or Blended",
                        "Scholarships available for eligible students",
                      ].map((benefit, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-gray-600"
                        >
                          <Check size={16} className="text-[#0d6d55]" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Step 3: Account Setup */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-serif font-bold text-[#0d1b4c] mb-6">
                    Set Up Your Account
                  </h2>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Create Password *
                    </label>
                    <div className="relative">
                      <Lock
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={18}
                      />
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        placeholder="Create a strong password"
                        className="w-full pl-12 pr-12 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0d6d55] focus:ring-1 focus:ring-[#0d6d55]"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                      Minimum 8 characters with uppercase, lowercase, and number
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Confirm Password *
                    </label>
                    <div className="relative">
                      <Lock
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={18}
                      />
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        required
                        placeholder="Confirm your password"
                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0d6d55] focus:ring-1 focus:ring-[#0d6d55]"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleInputChange}
                        required
                        className="mt-1 w-4 h-4 rounded border-gray-300 text-[#0d6d55] focus:ring-[#0d6d55]"
                      />
                      <span className="text-sm text-gray-600">
                        I agree to the{" "}
                        <Link
                          href="/terms"
                          className="text-[#0d6d55] hover:underline"
                        >
                          Terms & Conditions
                        </Link>{" "}
                        and{" "}
                        <Link
                          href="/privacy"
                          className="text-[#0d6d55] hover:underline"
                        >
                          Privacy Policy
                        </Link>{" "}
                        *
                      </span>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="subscribeNewsletter"
                        checked={formData.subscribeNewsletter}
                        onChange={handleInputChange}
                        className="mt-1 w-4 h-4 rounded border-gray-300 text-[#0d6d55] focus:ring-[#0d6d55]"
                      />
                      <span className="text-sm text-gray-600">
                        Subscribe to our newsletter for updates on programs,
                        events, and opportunities
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="btn-primary px-8 py-3 rounded-lg flex items-center gap-2"
                  >
                    Continue
                    <ArrowRight size={18} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.agreeTerms}
                    className="btn-primary px-8 py-3 rounded-lg flex items-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      "Creating Account..."
                    ) : (
                      <>
                        Create Account
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </motion.div>

          <p className="mt-8 text-center text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-[#0d6d55] font-semibold hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
