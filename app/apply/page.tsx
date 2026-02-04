"use client";

import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  User,
  Mail,
  Phone,
  GraduationCap,
  FileText,
  Upload,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const steps = [
  { id: 1, title: "Personal Info" },
  { id: 2, title: "Program Selection" },
  { id: 3, title: "Documents" },
  { id: 4, title: "Review & Submit" },
];

const programs = [
  { value: "bba", label: "Bachelor of Business Administration" },
  { value: "bcs", label: "Bachelor of Computer Science" },
  { value: "bnursing", label: "Bachelor of Nursing" },
  { value: "bfinance", label: "Bachelor of Finance" },
  { value: "bdesign", label: "Bachelor of Graphic Design" },
  { value: "bhospitality", label: "Bachelor of Hospitality Management" },
  { value: "mba", label: "Master of Business Administration" },
  { value: "mds", label: "Master of Data Science" },
  { value: "cyber", label: "Cybersecurity Professional Certificate" },
  { value: "pmp", label: "Project Management Professional" },
];

const intakes = [
  { value: "fall2026", label: "Fall 2026 (September)" },
  { value: "spring2026", label: "Spring 2026 (January)" },
  { value: "summer2026", label: "Summer 2026 (May)" },
];

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    dob: "",
    program: "",
    intake: "",
    education: "",
    transcript: null as File | null,
    passport: null as File | null,
    sop: null as File | null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string,
  ) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, [field]: e.target.files[0] });
    }
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-[#faf9f7] py-20">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-24 h-24 bg-[#0d6d55] rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <CheckCircle className="w-12 h-12 text-white" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#0d1b4c] mb-4">
                Application Submitted!
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Thank you for applying to Emirates International College. We
                have received your application and will review it within 5-7
                business days. You will receive an email confirmation shortly.
              </p>
              <div className="bg-white rounded-2xl p-6 shadow-md mb-8">
                <h2 className="font-semibold text-[#0d1b4c] mb-2">
                  Application Reference
                </h2>
                <p className="text-2xl font-mono text-[#0d6d55]">
                  EIC-{Date.now().toString().slice(-8)}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="btn-primary px-8 py-3 rounded-full flex items-center justify-center gap-2"
                >
                  Return to Home
                </Link>
                <Link
                  href="/programs"
                  className="btn-secondary px-8 py-3 rounded-full border-[#0d1b4c] text-[#0d1b4c]"
                >
                  Explore Programs
                </Link>
              </div>
            </motion.div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#faf9f7]">
        {/* Hero */}
        <section className="relative py-16 bg-[#0d1b4c]">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                Apply Now
              </h1>
              <p className="text-white/80 max-w-xl mx-auto">
                Complete your application in just a few minutes. No application
                fee.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Progress Steps */}
        <section className="py-8 bg-white border-b sticky top-16 z-30">
          <div className="max-w-3xl mx-auto px-4">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                      currentStep >= step.id
                        ? "bg-[#0d6d55] text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {currentStep > step.id ? (
                      <CheckCircle size={20} />
                    ) : (
                      step.id
                    )}
                  </div>
                  <span
                    className={`ml-2 hidden sm:block text-sm font-medium ${
                      currentStep >= step.id
                        ? "text-[#0d1b4c]"
                        : "text-gray-400"
                    }`}
                  >
                    {step.title}
                  </span>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-8 sm:w-16 lg:w-24 h-1 mx-2 rounded ${
                        currentStep > step.id ? "bg-[#0d6d55]" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-12">
          <div className="max-w-3xl mx-auto px-4">
            <form onSubmit={handleSubmit}>
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                {/* Step 1: Personal Info */}
                {currentStep === 1 && (
                  <>
                    <h2 className="text-2xl font-serif font-bold text-[#0d1b4c] mb-6">
                      Personal Information
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <div className="relative">
                          <User
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
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
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
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
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
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
                        <div className="relative">
                          <Phone
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                            size={18}
                          />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            placeholder="+971 50 123 4567"
                            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0d6d55] focus:ring-1 focus:ring-[#0d6d55]"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Country of Residence *
                        </label>
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0d6d55] focus:ring-1 focus:ring-[#0d6d55]"
                        >
                          <option value="">Select country</option>
                          <option value="uae">United Arab Emirates</option>
                          <option value="sa">Saudi Arabia</option>
                          <option value="in">India</option>
                          <option value="pk">Pakistan</option>
                          <option value="eg">Egypt</option>
                          <option value="ng">Nigeria</option>
                          <option value="uk">United Kingdom</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Date of Birth *
                        </label>
                        <input
                          type="date"
                          name="dob"
                          value={formData.dob}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0d6d55] focus:ring-1 focus:ring-[#0d6d55]"
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Step 2: Program Selection */}
                {currentStep === 2 && (
                  <>
                    <h2 className="text-2xl font-serif font-bold text-[#0d1b4c] mb-6">
                      Program Selection
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Choose Your Program *
                        </label>
                        <div className="relative">
                          <GraduationCap
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                            size={18}
                          />
                          <select
                            name="program"
                            value={formData.program}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0d6d55] focus:ring-1 focus:ring-[#0d6d55]"
                          >
                            <option value="">Select a program</option>
                            {programs.map((program) => (
                              <option key={program.value} value={program.value}>
                                {program.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Intake *
                        </label>
                        <select
                          name="intake"
                          value={formData.intake}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0d6d55] focus:ring-1 focus:ring-[#0d6d55]"
                        >
                          <option value="">Select intake</option>
                          {intakes.map((intake) => (
                            <option key={intake.value} value={intake.value}>
                              {intake.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Previous Education *
                        </label>
                        <select
                          name="education"
                          value={formData.education}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0d6d55] focus:ring-1 focus:ring-[#0d6d55]"
                        >
                          <option value="">Select highest qualification</option>
                          <option value="highschool">
                            High School Diploma
                          </option>
                          <option value="bachelors">Bachelor's Degree</option>
                          <option value="masters">Master's Degree</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                {/* Step 3: Documents */}
                {currentStep === 3 && (
                  <>
                    <h2 className="text-2xl font-serif font-bold text-[#0d1b4c] mb-6">
                      Upload Documents
                    </h2>
                    <div className="space-y-6">
                      {[
                        {
                          name: "transcript",
                          label: "Academic Transcript",
                          required: true,
                        },
                        {
                          name: "passport",
                          label: "Passport Copy",
                          required: true,
                        },
                        {
                          name: "sop",
                          label: "Statement of Purpose",
                          required: false,
                        },
                      ].map((doc) => (
                        <div key={doc.name}>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {doc.label} {doc.required && "*"}
                          </label>
                          <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-[#0d6d55] transition-colors">
                            <input
                              type="file"
                              id={doc.name}
                              accept=".pdf,.jpg,.jpeg,.png"
                              onChange={(e) => handleFileChange(e, doc.name)}
                              className="hidden"
                            />
                            <label
                              htmlFor={doc.name}
                              className="cursor-pointer"
                            >
                              {formData[doc.name as keyof typeof formData] ? (
                                <div className="flex items-center justify-center gap-2 text-[#0d6d55]">
                                  <CheckCircle size={24} />
                                  <span>
                                    {
                                      (
                                        formData[
                                          doc.name as keyof typeof formData
                                        ] as File
                                      ).name
                                    }
                                  </span>
                                </div>
                              ) : (
                                <>
                                  <Upload className="w-10 h-10 text-gray-400 mx-auto mb-2" />
                                  <p className="text-gray-600">
                                    Click to upload or drag and drop
                                  </p>
                                  <p className="text-gray-400 text-sm mt-1">
                                    PDF, JPG, PNG (max 5MB)
                                  </p>
                                </>
                              )}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Step 4: Review */}
                {currentStep === 4 && (
                  <>
                    <h2 className="text-2xl font-serif font-bold text-[#0d1b4c] mb-6">
                      Review Your Application
                    </h2>
                    <div className="space-y-6">
                      <div className="bg-[#faf9f7] rounded-xl p-6">
                        <h3 className="font-semibold text-[#0d1b4c] mb-4">
                          Personal Information
                        </h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-500">Name:</span>
                            <p className="font-medium">
                              {formData.firstName} {formData.lastName}
                            </p>
                          </div>
                          <div>
                            <span className="text-gray-500">Email:</span>
                            <p className="font-medium">{formData.email}</p>
                          </div>
                          <div>
                            <span className="text-gray-500">Phone:</span>
                            <p className="font-medium">{formData.phone}</p>
                          </div>
                          <div>
                            <span className="text-gray-500">Country:</span>
                            <p className="font-medium capitalize">
                              {formData.country}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#faf9f7] rounded-xl p-6">
                        <h3 className="font-semibold text-[#0d1b4c] mb-4">
                          Program Details
                        </h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-500">Program:</span>
                            <p className="font-medium">
                              {
                                programs.find(
                                  (p) => p.value === formData.program,
                                )?.label
                              }
                            </p>
                          </div>
                          <div>
                            <span className="text-gray-500">Intake:</span>
                            <p className="font-medium">
                              {
                                intakes.find((i) => i.value === formData.intake)
                                  ?.label
                              }
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#faf9f7] rounded-xl p-6">
                        <h3 className="font-semibold text-[#0d1b4c] mb-4">
                          Documents
                        </h3>
                        <div className="space-y-2 text-sm">
                          {["transcript", "passport", "sop"].map((doc) => (
                            <div key={doc} className="flex items-center gap-2">
                              {formData[doc as keyof typeof formData] ? (
                                <>
                                  <CheckCircle
                                    className="text-[#0d6d55]"
                                    size={16}
                                  />
                                  <span className="capitalize">{doc}:</span>
                                  <span className="font-medium">
                                    {(
                                      formData[
                                        doc as keyof typeof formData
                                      ] as File
                                    )?.name || "Not uploaded"}
                                  </span>
                                </>
                              ) : (
                                <span className="text-gray-400 capitalize">
                                  {doc}: Not uploaded
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="terms"
                          required
                          className="mt-1"
                        />
                        <label
                          htmlFor="terms"
                          className="text-sm text-gray-600"
                        >
                          I confirm that all information provided is accurate
                          and complete. I agree to the{" "}
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
                          </Link>
                          .
                        </label>
                      </div>
                    </div>
                  </>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-[#0d1b4c] transition-colors"
                    >
                      <ArrowLeft size={18} />
                      Previous
                    </button>
                  ) : (
                    <div />
                  )}

                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="btn-primary px-8 py-3 rounded-lg flex items-center gap-2"
                    >
                      Next Step
                      <ArrowRight size={18} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary px-8 py-3 rounded-lg flex items-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Application
                          <ArrowRight size={18} />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </motion.div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
