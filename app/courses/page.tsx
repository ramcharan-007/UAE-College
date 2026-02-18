"use client";

import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { useState, useMemo, useRef } from "react";
import {
  BookOpen,
  Search,
  Filter,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Award,
  Clock,
  Globe,
  ArrowRight,
  Monitor,
  Stethoscope,
  Briefcase,
  TrendingUp,
  Palette,
  Utensils,
  Leaf,
  Camera,
  Dumbbell,
  Sparkles,
} from "lucide-react";

// All courses data organized by category
const allCourses = {
  "IT & Analytics": [
    {
      title: "Data Management & Analysis Using Stata",
      description:
        "Master STATA—learn to clean, analyse & visualise data for research or policy. Hands-on, project-based & UK-certified.",
    },
    {
      title: "Digital Marketing & E-Commerce Fundamentals",
      description:
        "Master digital marketing & e-commerce. Build your store, run campaigns, and earn a UK-recognised certificate online.",
    },
    {
      title: "Digital Marketing",
      description:
        "Learn hands-on digital marketing skills—SEO, PPC, social media, content, email & analytics. Get certified by a UK-recognised college.",
    },
    {
      title: "Excel For Data Analysis",
      description:
        "Master Excel for real-world data analysis—clean, analyse, visualise, and model data. Earn a UK-recognised certificate online.",
    },
    {
      title: "ICT For Teachers",
      description:
        "Empower your teaching with ICT skills—create digital lessons, manage data, and engage students. UK-recognised certificate included.",
    },
    {
      title: "ICT-Enabled E-Teaching",
      description:
        "Master online teaching tools, LMS, content creation, and digital assessment. Earn a UK-recognised certificate in ICT-enabled e-teaching.",
    },
    {
      title: "International Business & Digital Marketing",
      description:
        "Learn global business & digital marketing skills—SEO, e-commerce, cross-cultural strategy. Earn a UK-recognised certificate online.",
    },
    {
      title: "Internet & Email Skills",
      description:
        "Build essential internet & email skills—browse safely, write professionally, use cloud tools. Earn a UK-recognised certificate online.",
    },
    {
      title: "Introduction To Microsoft Excel",
      description:
        "Learn Excel from scratch—data entry, formulas, charts, PivotTables & more. Get job-ready skills and a UK-recognised certificate online.",
    },
    {
      title: "Introduction To NVivo For Qualitative Data Analysis",
      description:
        "Learn to prepare and manage qualitative data for NVivo using Excel. Ideal for researchers. Earn a UK-recognised certificate online.",
    },
    {
      title: "Linux System Administration",
      description:
        "Master Linux system administration—install, secure, automate, and manage servers. Get certified with a UK-recognised online course.",
    },
    {
      title: "MySQL Server",
      description:
        "Master MySQL online. Learn SQL, database design, and security. Get hands-on experience and earn a UK-recognised certificate.",
    },
    {
      title: "New Age Office Technologies",
      description:
        "Master modern office tools like Microsoft 365, Slack, Notion & more. Boost productivity & earn a UK-recognised certificate online.",
    },
    {
      title: "PowerPoint Presentation",
      description:
        "Learn to design, animate & deliver stunning presentations using PowerPoint. Build real-world skills & earn a UK-recognised certificate.",
    },
    {
      title: "Social Media Marketing",
      description:
        "Create real campaigns, run ads & grow brands on top platforms. Master social media & earn a UK-recognised certificate online.",
    },
    {
      title: "Software Development",
      description:
        "Learn coding, web dev, Git, and databases from scratch. Build real apps and earn a UK-recognised certificate in software development.",
    },
    {
      title: "Spreadsheets With Microsoft Excel",
      description:
        "Master Excel for data, charts, PivotTables & automation. Build real-world spreadsheets & earn a UK-recognised certificate online.",
    },
    {
      title: "Web Development",
      description:
        "Learn HTML, CSS, and JavaScript & deploy real websites. Build your portfolio & earn a UK-recognised web development certificate online.",
    },
    {
      title: "Word Processing With Microsoft Word",
      description:
        "Master Microsoft Word for reports, letters & automation. Build job-ready skills & earn a UK-recognised certificate—fully online.",
    },
    {
      title: "Artificial Intelligence And Machine Learning",
      description:
        "Learn AI & ML from scratch with Python, real projects, and expert support. Gain job-ready skills and a UK-recognised certificate—fully online.",
    },
    {
      title: "Artificial Intelligence For Business",
      description:
        "Master AI for real business impact. Apply AI in marketing, HR, finance & operations through hands-on projects and earn a UK-recognised certificate.",
    },
    {
      title: "Business Intelligence & Analytics",
      description:
        "Master BI & analytics with Power BI, Tableau, and ML. Build dashboards, analyse data, and earn a UK-recognised certificate—fully online.",
    },
    {
      title: "Business Intelligence & Artificial Intelligence",
      description:
        "Master BI and AI together—build dashboards, apply ML models, and solve real business problems. Earn a UK-recognised certificate.",
    },
    {
      title: "Business-Oriented Computer Applications",
      description:
        "Learn to analyze qualitative data using NVivo. Code, visualize, and report insights through real projects. Get UK-certified—fully online.",
    },
    {
      title: "CCTV Management and Implementation",
      description:
        "Master CCTV systems online! Learn to design, install & manage surveillance solutions with UK-recognised certification.",
    },
    {
      title: "Computer Assembling and Repairing",
      description:
        "Learn to build, repair & maintain PCs with this online, beginner-friendly course. Get hands-on training & UK-certified completion.",
    },
    {
      title: "Computer Essentials",
      description:
        "Master basic computer skills—learn Word, Excel, internet use & safety. Beginner-friendly, online, and UK-certified.",
    },
    {
      title: "Computer Networking and Hardware Maintenance",
      description:
        "Launch your IT career—learn networking, PC maintenance & troubleshooting online. Beginner-friendly and UK-certified.",
    },
    {
      title: "Cyber Forensics",
      description:
        "Investigate cybercrime—learn forensic tools, evidence handling & malware analysis. 100% online, beginner-friendly, UK-certified.",
    },
    {
      title: "Cyber Security",
      description:
        "Start your cyber security journey—learn to defend systems, detect threats & respond to attacks. 100% online, beginner-friendly, UK-certified.",
    },
    {
      title: "Data Management and Analysis using NVivo",
      description:
        "Master NVivo—learn to code, analyse & visualise qualitative data for research and reporting. 100% online, hands-on & UK-certified.",
    },
    {
      title: "Data Management and Analysis using SPSS",
      description:
        "Master SPSS—learn to clean, analyse & visualise data for research or business insights. 100% online, project-based & UK-certified.",
    },
  ],
  "Banking Finance & Insurance": [
    {
      title: "Banking, Financial And Insurance Services",
      description:
        "Gain practical skills in banking, finance, and insurance. Learn online and earn a UK-recognised certificate with real-world case studies.",
    },
    {
      title: "Cash Management",
      description:
        "Master practical finance skills online. Learn cash management with real-world case studies and earn a UK-recognised certificate.",
    },
    {
      title: "Investment Analysis And Portfolio Management",
      description:
        "Learn investment strategies and portfolio management online. Gain job-ready skills with real data projects and earn a UK-recognised certificate.",
    },
    {
      title: "Accounting And Finance",
      description:
        "Master core accounting & finance skills—learn reporting, budgeting, and financial tools with real-world practice. 100% online, UK-certified.",
    },
    {
      title: "Accounting And Finance For Non Finance Professionals",
      description:
        "Master accounting & finance essentials—learn to read reports, plan budgets & make smart decisions. 100% online, UK-certified.",
    },
    {
      title: "Banking And Financial Management",
      description:
        "Master banking, finance, and risk skills with real-world tools and earn a UK-recognised certificate—fully online.",
    },
  ],
  "Management & Entrepreneurship": [
    {
      title: "Logistics and Supply Chain Management",
      description:
        "Learn logistics, inventory, and ERP tools online. Get UK-certified in Supply Chain Management.",
    },
    {
      title: "Monitoring And Evaluation",
      description:
        "Learn Monitoring & Evaluation online and earn a UK-certified certificate from London Technology College.",
    },
    {
      title: "Store Inventory Management",
      description:
        "Master stock control, warehouse ops, and inventory tools online. Get UK-certified in Stores & Inventory Management.",
    },
    {
      title: "Transport Management",
      description:
        "Learn fleet operations, route planning, and transport tech online. Get UK-certified in Transport Management.",
    },
    {
      title: "Business Management",
      description:
        "Learn business leadership, finance, and strategy online. Gain practical skills and a UK-certified Business Management certificate.",
    },
    {
      title: "Customer Care Management",
      description:
        "Master customer service, complaint handling, and CRM tools online. Earn a UK-certified Customer Care Management certificate.",
    },
    {
      title: "Disaster Management",
      description:
        "Learn disaster response, risk reduction, and recovery planning online. Earn a UK-certified Disaster Management certificate.",
    },
    {
      title: "Leadership For Police/Military",
      description:
        "Master operational leadership, crisis command, and team management online. Earn a UK-certified leadership certificate for uniformed services.",
    },
    {
      title: "Project Management",
      description:
        "Learn to lead projects with confidence. Master planning, budgeting, and execution online. Get UK-certified in Project Management.",
    },
    {
      title: "Records Management",
      description:
        "Learn to manage, protect, and organize records digitally and physically. Get UK-certified in Records Management online.",
    },
    {
      title: "Entrepreneurship",
      description:
        "Master the skills to start, grow, and scale your business. Learn online and earn a UK-certified Entrepreneurship certificate.",
    },
  ],
  "Sports & Fitness Management": [
    {
      title: "Sports Events Management",
      description:
        "Learn to plan, fund, and deliver successful sports events. Study online and earn a UK-recognised certificate in Sports Events Management.",
    },
    {
      title: "Sports Facility Management",
      description:
        "Learn to manage stadiums, arenas, and sports complexes with confidence. Study online and earn a UK-recognised certificate.",
    },
    {
      title: "Finance Management in Sports",
      description:
        "Learn sports finance online. Master budgeting, sponsorships, and strategy. Earn a UK-recognised Sports Finance certificate.",
    },
    {
      title: "Sports Data and Analysis",
      description:
        "Master sports finance and data analytics online. Earn a UK-recognised certificate and boost your career.",
    },
  ],
  "Beauty & Wellness": [
    {
      title: "Massage Therapy",
      description:
        "Master Swedish, deep tissue, and relaxation massage techniques online. Get certified with hands-on training and start your wellness career.",
    },
    {
      title: "Wellness & Spa Management",
      description:
        "Learn wellness business management, spa operations, and client care. Earn a UK-certified wellness certificate online.",
    },
  ],
  "Creative Arts & Design": [
    {
      title: "Motorcycle Design",
      description:
        "Design custom motorcycles from concept to CAD. Learn online with expert-led training and earn a UK-certified design qualification.",
    },
    {
      title: "New Age Jewellery Design Making",
      description:
        "Learn jewellery design and CAD modelling online. Craft trend-driven collections and earn a UK-certified jewellery design certificate.",
    },
    {
      title: "Fashion Design And Textile Management",
      description:
        "Learn fashion design, textile science, and merchandising online. Build a portfolio and earn a UK-certified fashion qualification.",
    },
  ],
  "Agribusiness Management": [
    {
      title: "Poultry Farming",
      description:
        "Master poultry farming—learn breeding, feeding, health & business planning. 100% online, UK-certified.",
    },
    {
      title: "Agriculture Farming",
      description:
        "Master modern, sustainable farming—learn soil, crop, and pest & irrigation management with real projects. 100% online, UK-certified.",
    },
    {
      title: "Agricultural Marketing",
      description:
        "Master agricultural marketing—learn to price, promote, and export agri-products using real case studies and digital tools. UK-certified.",
    },
    {
      title: "Aquaculture Farming",
      description:
        "Master aquaculture—learn to farm fish & seafood sustainably with expert guidance, real projects, and UK certification.",
    },
    {
      title: "Crop Production",
      description:
        "Master modern crop production—learn soil prep, seed tech, irrigation, pest control & more. 100% online, UK-certified.",
    },
    {
      title: "Livestock Management",
      description:
        "Learn livestock care, breeding, and farm business management. Earn a UK-certified certificate in Livestock Management.",
    },
    {
      title: "Agribusiness Economics",
      description:
        "Master agricultural economics, market analysis, and farm financial planning. Earn a UK-certified Agribusiness certificate.",
    },
  ],
  "Media & Entertainment": [
    {
      title: "New Media And Digital Journalism",
      description:
        "Master digital journalism online. Learn multimedia storytelling, SEO writing, and earn a UK-recognised Journalism certificate.",
    },
    {
      title: "Introduction To Photography",
      description:
        "Learn photography essentials online. Master camera skills, composition, and editing. Earn a UK-certified Photography certificate.",
    },
  ],
  "Tourism & Hospitality": [
    {
      title: "Food and Catering Technology",
      description:
        "Master safe, modern food service and event catering. Study online and earn a UK-recognised certificate in Food and Catering Technology.",
    },
    {
      title: "Front Office Management",
      description:
        "Learn front desk operations and customer service skills online. Earn a UK-recognised certificate in Front Office Management.",
    },
    {
      title: "Housekeeping",
      description:
        "Gain professional housekeeping skills for hotels, hospitals, and homes. Study online and earn a UK-recognised certificate in Housekeeping.",
    },
    {
      title: "Tourism and Hospitality Management",
      description:
        "Master hotel, travel, and guest service skills online. Earn a UK-recognised certificate in Tourism and Hospitality Management.",
    },
    {
      title: "Baking and Confectionery",
      description:
        "Master breads, cakes, and chocolates from home. Learn online and earn a UK-recognised certificate in Baking and Confectionery.",
    },
    {
      title: "Food and Beverage Management",
      description:
        "Master restaurant and catering operations online. Learn cost control, service, and menu planning—and earn a UK-recognised certificate.",
    },
  ],
  Medical: [
    {
      title: "Anaesthesia Fundamentals",
      description:
        "Build core skills in airway management, pharmacology, regional techniques, and perioperative patient care.",
    },
    {
      title: "Ancient Medicine",
      description:
        "Explore global healing traditions, from Ayurveda to Greek humours, linking historical practices to modern healthcare.",
    },
    {
      title: "Anxiety Disorder",
      description:
        "Train in diagnosis, treatment, and evidence-based care to support individuals with anxiety conditions.",
    },
    {
      title: "Basic Life Support (BLS)",
      description:
        "Train in CPR, AED use, airway management, and team resuscitation for emergency response.",
    },
    {
      title: "Basic Nutrition",
      description:
        "Learn core principles of human nutrition, linking diet to health, wellness, and informed lifestyle choices.",
    },
    {
      title: "Basics of Gynaecology & Obstetrics",
      description:
        "Cover reproductive health, pregnancy care, labour management, and common gynaecological disorders.",
    },
    {
      title: "Basics of Hypertension",
      description:
        "Explore risk factors, diagnosis, management, and prevention strategies to address high blood pressure effectively.",
    },
    {
      title: "Behaviour Change Skills",
      description:
        "Train in motivational interviewing, goal setting, and relapse prevention to support sustainable lifestyle changes.",
    },
    {
      title: "Blood Transfusion",
      description:
        "Cover principles, safety protocols, compatibility, and reactions to ensure safe and effective transfusion practices.",
    },
    {
      title: "Breast milk Provision for Preterm & Sick Neonates",
      description:
        "Train in lactation, safe expression, and NICU feeding support for preterm and sick neonates.",
    },
    {
      title: "Cancer Careers in Nursing",
      description:
        "Introduce key skills, roles, and opportunities in oncology nursing, preparing learners for cancer care specialisation.",
    },
    {
      title: "Cancer Nutrition",
      description:
        "Train in oncology-focused dietary strategies to support recovery, improve outcomes, and enhance patient quality of life.",
    },
    {
      title: "Cardiac Emergency",
      description:
        "Prepare to manage cardiac arrest, arrhythmias, and acute syndromes with rapid, life-saving interventions.",
    },
    {
      title: "Cardiac Nutrition",
      description:
        "Design heart-healthy dietary strategies for preventing and managing cardiovascular conditions effectively.",
    },
    {
      title: "Cardiopulmonary Physiotherapy",
      description:
        "Build skills in assessment, interventions, and evidence-based care for managing cardiac and respiratory conditions.",
    },
    {
      title: "Clinical Counselling",
      description:
        "Develop core skills in communication, diagnosis, and therapeutic techniques for mental health and social care practice.",
    },
    {
      title: "Clinical Imaging",
      description:
        "Train in diagnostic imaging, safety protocols, and interpretation skills to advance careers in medical radiology.",
    },
    {
      title: "Clinical Insulin Management",
      description:
        "Equip with skills in insulin therapy, glucose monitoring, and patient-centred diabetes care.",
    },
    {
      title: "Clinical Oncology",
      description:
        "Introduce cancer diagnosis, treatment, and palliative care, preparing learners for compassionate, evidence-based oncology practice.",
    },
    {
      title: "Communicable Diseases",
      description:
        "Train in prevention, management, and control of infections, antimicrobial resistance, and global health strategies.",
    },
    {
      title: "Congenital Heart Disease",
      description:
        "Cover diagnosis, management, and care of cardiac defects, preparing learners for pediatric and congenital cardiology practice.",
    },
    {
      title: "COVID-19 & Telemedicine Practice",
      description:
        "Train in pandemic care, remote healthcare delivery, and ethical telemedicine protocols.",
    },
    {
      title: "Critical Care Medicine",
      description:
        "Equip with skills in ICU care, ventilation, sepsis management, and end-of-life decision-making.",
    },
    {
      title: "Critical Care Nutrition",
      description:
        "Train in enteral and parenteral nutrition, energy assessment, and ICU-based nutritional support strategies.",
    },
    {
      title: "Cultural Competence",
      description:
        "Build awareness and practical skills to engage respectfully and effectively with diverse cultural backgrounds.",
    },
    {
      title: "Diabetes Mellitus",
      description:
        "Equip with skills in diagnosis, treatment, lifestyle management, and long-term care strategies.",
    },
    {
      title: "Diabetic Foot Care",
      description:
        "Train in assessment, prevention, and management of foot complications to reduce risks in diabetes.",
    },
    {
      title: "Diabetic Nutrition",
      description:
        "Equip with skills to create personalised dietary plans, manage complications, and improve outcomes in diabetes care.",
    },
    {
      title: "Digital Pathology",
      description:
        "Train in using digital systems for diagnosis, research, and collaboration in clinical and laboratory settings.",
    },
    {
      title: "ECG for Interpretation",
      description:
        "Train to analyze ECGs, identify arrhythmias, ischemia, and abnormalities for effective clinical decision-making.",
    },
    {
      title: "Embryology",
      description:
        "Explore human development from fertilisation to organ formation, linking theory with clinical cases and congenital anomalies.",
    },
    {
      title: "Emergency Medicine Leaders",
      description:
        "Develop leadership, communication, and decision-making skills for managing teams and crises in emergency care.",
    },
    {
      title: "Environmentally Sustainable Healthcare",
      description:
        "Train to apply eco-friendly practices, cut carbon footprints, and build climate-resilient health systems.",
    },
    {
      title: "Essentials of Cardiology",
      description:
        "Provide foundational knowledge in anatomy, diagnostics, and management of heart diseases with practical applications.",
    },
    {
      title: "Essentials of Infertility Evaluation",
      description:
        "Train in diagnostic protocols, imaging, and patient-centred approaches in fertility care.",
    },
    {
      title: "Essentials of IVF",
      description:
        "Cover IVF protocols, lab procedures, embryo transfer, and ART advancements, preparing professionals for fertility care.",
    },
    {
      title: "Exercise Prescription for Fitness and Health",
      description:
        "Train to design safe, evidence-based exercise programs tailored for diverse populations and health needs.",
    },
    {
      title: "Female Genital Mutilation (FGM)",
      description:
        "Equip with cultural, medical, and legal knowledge to prevent, manage, and advocate against FGM.",
    },
    {
      title: "Freedom to Speak Up",
      description:
        "Train in ethical responsibility, communication, and legal frameworks to raise concerns safely and effectively.",
    },
    {
      title: "Gastroenterology",
      description:
        "Provide training in diagnosis, management, and emerging research of GI disorders with practical, case-based learning.",
    },
    {
      title: "Gastrointestinal Nutrition",
      description:
        "Train in dietary strategies for GI disorders, liver and pancreatic diseases, and digestive health management.",
    },
    {
      title: "Genomics Education Programme",
      description:
        "Introduce DNA sequencing, personalised medicine, and ethical issues, preparing professionals to apply genomics in modern healthcare.",
    },
    {
      title: "Gynaecology and Obstetrics",
      description:
        "Cover fertility, pregnancy, gynaecological disorders, and reproductive health with practical, case-based clinical learning.",
    },
    {
      title: "Health Insurance",
      description:
        "Build knowledge in global and local coverage systems, regulations, risk management, and cost-effective healthcare planning.",
    },
    {
      title: "Healthcare Informatics",
      description:
        "Explore EHRs, AI, and digital systems to enhance decision-making, patient outcomes, and healthcare service delivery.",
    },
    {
      title: "Healthcare Quality Management",
      description:
        "Train in patient safety, clinical governance, and performance improvement to drive quality healthcare outcomes.",
    },
    {
      title: "Infection Prevention & Control",
      description:
        "Equip with practical skills in transmission control, disinfection, and global infection prevention strategies.",
    },
    {
      title: "Infection Prevention & Control for Nurses",
      description:
        "Train nurses in hygiene, outbreak management, and antibiotic stewardship to reduce HAIs and ensure safety.",
    },
    {
      title: "Influenza: Clinical Management & Prevention",
      description:
        "Train in diagnosis, treatment, vaccination, and outbreak control for seasonal and pandemic flu.",
    },
    {
      title: "Internal Medicine: Clinical Foundations & Practice",
      description:
        "Build skills in diagnosing and managing adult conditions across major organ systems with case-based learning.",
    },
    {
      title: "Introduction to Nutrition",
      description:
        "Build foundational knowledge of nutrients, digestion, metabolism, and diet across life stages with practical applications.",
    },
    {
      title: "Lifestyle & Wellness Nutrition",
      description:
        "Teach practical strategies in diet planning, weight management, and holistic health for sustainable lifestyle change.",
    },
    {
      title: "Lifestyle Medicine",
      description:
        "Train in evidence-based strategies like nutrition, exercise, stress, and sleep management to prevent chronic diseases.",
    },
    {
      title: "Maternal & Child Nutrition",
      description:
        "Build skills to support maternal wellbeing and child growth with evidence-based strategies.",
    },
    {
      title: "Mechanical Ventilation",
      description:
        "Equip with skills to manage ventilator settings, monitoring, and critical care scenarios.",
    },
    {
      title: "Medical Ethics",
      description:
        "Build knowledge in ethical principles, legal frameworks, and real-world dilemmas to guide professional clinical decisions.",
    },
    {
      title: "Medical Imaging 3D Modelling & 3D Printing",
      description:
        "Train to convert imaging data into 3D models for clinical and surgical use.",
    },
    {
      title: "Medical Law",
      description:
        "Explore consent, negligence, data protection, and healthcare rights, preparing professionals to navigate complex legal scenarios.",
    },
    {
      title: "Medical Tourism",
      description:
        "Explore global healthcare travel, industry drivers, ethics, marketing, and opportunities, linking patient care with international business.",
    },
    {
      title: "Medical Toxicology",
      description:
        "Train to assess, manage, and prevent poisonings with focus on antidotes, emergencies, and public health.",
    },
    {
      title: "Mental Health",
      description:
        "Build skills in understanding disorders, assessments, and treatments, preparing professionals to provide informed, compassionate care.",
    },
    {
      title: "Nephrology",
      description:
        "Provide in-depth knowledge of kidney function, renal diseases, and management strategies through case-based clinical learning.",
    },
    {
      title: "Nutrition and Weight Management Essentials",
      description:
        "Blend dietary science, metabolism, and behaviour strategies to create sustainable weight control plans.",
    },
    {
      title: "Obesity Management",
      description:
        "Train in evidence-based strategies to assess, prevent, and treat obesity through multidisciplinary interventions.",
    },
    {
      title: "Obesity Toolbox",
      description:
        "Offer practical training with real-world tools for assessing and managing obesity through nutrition, counselling, and activity planning.",
    },
    {
      title: "Paediatric Diabetes",
      description:
        "Train to diagnose, manage, and support children with diabetes using evidence-based care.",
    },
    {
      title: "Paediatric Emergencies",
      description:
        "Train to manage critical child conditions with rapid assessment, protocols, and evidence-based care.",
    },
    {
      title: "Paediatrics",
      description:
        "Provide a comprehensive foundation in child and adolescent healthcare, blending clinical knowledge with practical assessment and care skills.",
    },
    {
      title: "Pain Management",
      description:
        "Equip with evidence-based skills to assess and treat acute, chronic, and cancer-related pain.",
    },
    {
      title: "Paediatric Advanced Life Support (PALS)",
      description:
        "Train to manage paediatric emergencies with airway, shock, and resuscitation skills.",
    },
    {
      title: "Pulmonology",
      description:
        "Equip with skills to assess, diagnose, and manage acute and chronic respiratory conditions.",
    },
    {
      title: "Renal Nutrition",
      description:
        "Provide specialised training in dietary management for CKD, dialysis, and AKI, using case-based, UK-aligned learning.",
    },
    {
      title: "Reproductive Health",
      description:
        "Deliver core knowledge on family planning, maternal care, STIs, infertility, and adolescent health with a public health focus.",
    },
    {
      title: "Sport Nutrition",
      description:
        "Provide science-backed training on fuelling, hydration, and supplementation to optimise athletic performance, recovery, and health.",
    },
    {
      title: "Stroke Management",
      description:
        "Train to recognise, assess, and treat strokes, covering acute care, rehab, and prevention.",
    },
    {
      title: "Trauma Life Support",
      description:
        "Equip emergency professionals with vital skills in trauma assessment, airway care, shock response, and life-saving interventions.",
    },
    {
      title: "Vaccine Administration",
      description:
        "Train in safe, effective immunisation practices, covering techniques, safety, communication, and global standards.",
    },
    {
      title: "Ward Sister",
      description:
        "Equip senior nurses with leadership, management, and patient safety skills to excel in ward-based clinical roles.",
    },
    {
      title: "Weight Loss Nutrition",
      description:
        "Offer a practical, science-backed approach to fat loss, covering diet, exercise, and behaviour change for lasting results.",
    },
    {
      title: "Wellness Coaching",
      description:
        "Equip learners with science-backed tools in motivation, goal setting, and behaviour change to promote healthier lifestyles.",
    },
  ],
};

const categoryIcons: {
  [key: string]: React.ComponentType<{ size?: number; className?: string }>;
} = {
  "IT & Analytics": Monitor,
  "Banking Finance & Insurance": TrendingUp,
  "Management & Entrepreneurship": Briefcase,
  "Sports & Fitness Management": Dumbbell,
  "Beauty & Wellness": Sparkles,
  "Creative Arts & Design": Palette,
  "Agribusiness Management": Leaf,
  "Media & Entertainment": Camera,
  "Tourism & Hospitality": Utensils,
  Medical: Stethoscope,
};

const categoryColors: {
  [key: string]: { bg: string; light: string; text: string };
} = {
  "IT & Analytics": {
    bg: "bg-gradient-to-br from-blue-600 to-indigo-700",
    light: "bg-blue-50",
    text: "text-blue-600",
  },
  "Banking Finance & Insurance": {
    bg: "bg-gradient-to-br from-emerald-500 to-teal-600",
    light: "bg-emerald-50",
    text: "text-emerald-600",
  },
  "Management & Entrepreneurship": {
    bg: "bg-gradient-to-br from-violet-500 to-purple-600",
    light: "bg-violet-50",
    text: "text-violet-600",
  },
  "Sports & Fitness Management": {
    bg: "bg-gradient-to-br from-orange-500 to-amber-600",
    light: "bg-orange-50",
    text: "text-orange-600",
  },
  "Beauty & Wellness": {
    bg: "bg-gradient-to-br from-pink-500 to-rose-600",
    light: "bg-pink-50",
    text: "text-pink-600",
  },
  "Creative Arts & Design": {
    bg: "bg-gradient-to-br from-rose-500 to-red-600",
    light: "bg-rose-50",
    text: "text-rose-600",
  },
  "Agribusiness Management": {
    bg: "bg-gradient-to-br from-green-500 to-emerald-600",
    light: "bg-green-50",
    text: "text-green-600",
  },
  "Media & Entertainment": {
    bg: "bg-gradient-to-br from-indigo-500 to-blue-600",
    light: "bg-indigo-50",
    text: "text-indigo-600",
  },
  "Tourism & Hospitality": {
    bg: "bg-gradient-to-br from-amber-500 to-yellow-600",
    light: "bg-amber-50",
    text: "text-amber-600",
  },
  Medical: {
    bg: "bg-gradient-to-br from-red-500 to-rose-600",
    light: "bg-red-50",
    text: "text-red-600",
  },
};

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const filterScrollRef = useRef<HTMLDivElement>(null);

  const scrollFilters = (direction: "left" | "right") => {
    if (filterScrollRef.current) {
      const scrollAmount = 300;
      filterScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const categories = Object.keys(allCourses);
  const totalCourses = Object.values(allCourses).reduce(
    (acc, courses) => acc + courses.length,
    0,
  );

  const filteredCourses = useMemo(() => {
    let result: {
      [key: string]: (typeof allCourses)[keyof typeof allCourses];
    } = {};

    if (selectedCategory === "All") {
      result = { ...allCourses };
    } else {
      result = {
        [selectedCategory]:
          allCourses[selectedCategory as keyof typeof allCourses] || [],
      };
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      Object.keys(result).forEach((category) => {
        result[category] = result[category].filter(
          (course) =>
            course.title.toLowerCase().includes(query) ||
            course.description.toLowerCase().includes(query),
        );
        if (result[category].length === 0) {
          delete result[category];
        }
      });
    }

    return result;
  }, [selectedCategory, searchQuery]);

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const filteredCount = Object.values(filteredCourses).reduce(
    (acc, courses) => acc + courses.length,
    0,
  );

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-40 bg-[#0d6d55]">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white text-sm mb-6">
                <BookOpen size={16} />
                {totalCourses}+ Courses Available
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                Course Catalog
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
                Explore our comprehensive range of UK-accredited online courses
                across 10 specialised categories.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative shadow-2xl bg-white rounded-2xl">
                  <Search
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                    size={22}
                  />
                  <input
                    type="text"
                    placeholder="Search for courses, topics, or skills..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-14 pr-6 py-5 rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-[#c9a227]/50 border-0"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      ✕
                    </button>
                  )}
                </div>
                <p className="text-white/60 text-sm mt-3">
                  Try searching: "AI", "Healthcare", "Management", "Finance"
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-6 bg-white border-b shadow-sm sticky top-[72px] z-40">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-2 mb-3">
              <Filter size={18} className="text-[#0d6d55]" />
              <span className="text-sm font-medium text-gray-700">
                Filter by Category:
              </span>
            </div>
            <div className="relative flex items-center gap-2">
              {/* Left Navigation Button */}
              <button
                onClick={() => scrollFilters("left")}
                className="flex-shrink-0 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 hover:border-[#0d6d55] transition-all shadow-sm hover:shadow-md group"
                aria-label="Scroll left"
              >
                <ChevronLeft
                  size={20}
                  className="text-gray-500 group-hover:text-[#0d6d55]"
                />
              </button>

              {/* Scrollable Filter Container */}
              <div className="relative flex-1 overflow-hidden">
                {/* Left Fade Indicator */}
                <div className="absolute left-0 top-0 bottom-0 w-6 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
                {/* Right Fade Indicator */}
                <div className="absolute right-0 top-0 bottom-0 w-6 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

                <div
                  ref={filterScrollRef}
                  className="flex items-center gap-3 overflow-x-auto px-2 py-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                >
                  <button
                    onClick={() => setSelectedCategory("All")}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all shrink-0 ${
                      selectedCategory === "All"
                        ? "bg-linear-to-r from-[#0d6d55] to-[#0a5a46] text-white shadow-lg shadow-[#0d6d55]/30"
                        : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    All Courses ({totalCourses})
                  </button>
                  {categories.map((category) => {
                    const Icon = categoryIcons[category] || BookOpen;
                    const isSelected = selectedCategory === category;
                    return (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all inline-flex items-center gap-2 shrink-0 ${
                          isSelected
                            ? "bg-linear-to-r from-[#0d6d55] to-[#0a5a46] text-white shadow-lg shadow-[#0d6d55]/30"
                            : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200"
                        }`}
                      >
                        <Icon size={16} />
                        {category} (
                        {allCourses[category as keyof typeof allCourses]
                          ?.length || 0}
                        )
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Navigation Button */}
              <button
                onClick={() => scrollFilters("right")}
                className="flex-shrink-0 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 hover:border-[#0d6d55] transition-all shadow-sm hover:shadow-md group"
                aria-label="Scroll right"
              >
                <ChevronRight
                  size={20}
                  className="text-gray-500 group-hover:text-[#0d6d55]"
                />
              </button>
            </div>
          </div>
        </section>

        {/* Courses List */}
        <section className="py-12 bg-[#faf9f7]">
          <div className="max-w-7xl mx-auto px-4">
            {searchQuery && (
              <p className="text-gray-600 mb-6">
                Found{" "}
                <span className="font-semibold text-[#0d1b4c]">
                  {filteredCount}
                </span>{" "}
                courses matching "{searchQuery}"
              </p>
            )}

            <div className="space-y-8">
              {Object.entries(filteredCourses).map(([category, courses]) => {
                const Icon = categoryIcons[category] || BookOpen;
                const colors = categoryColors[category] || {
                  bg: "bg-gradient-to-br from-gray-500 to-gray-600",
                  light: "bg-gray-50",
                  text: "text-gray-600",
                };
                const isExpanded =
                  expandedCategories.includes(category) ||
                  selectedCategory !== "All";
                const displayCourses = isExpanded
                  ? courses
                  : courses.slice(0, 6);

                return (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  >
                    {/* Category Header */}
                    <div
                      className={`${colors.bg} px-6 py-5 flex items-center justify-between`}
                    >
                      <div className="flex items-center gap-3 text-white">
                        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                          <Icon size={22} />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold">{category}</h2>
                          <span className="text-white/80 text-sm">
                            {courses.length} courses available
                          </span>
                        </div>
                      </div>
                      {selectedCategory === "All" && courses.length > 6 && (
                        <button
                          onClick={() => toggleCategory(category)}
                          className="text-white/80 hover:text-white flex items-center gap-1 text-sm"
                        >
                          {isExpanded ? "Show Less" : "Show All"}
                          <ChevronDown
                            size={16}
                            className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Courses Grid */}
                    <div className="p-6">
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {displayCourses.map((course, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.03 }}
                            className="bg-white rounded-2xl border border-gray-100 hover:border-[#0d6d55] hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden"
                          >
                            {/* Card Header with Color */}
                            <div className={`${colors.bg} h-2`} />

                            <div className="p-5">
                              {/* Icon and Badge */}
                              <div className="flex items-start justify-between mb-4">
                                <div
                                  className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center shadow-lg`}
                                >
                                  <BookOpen size={22} className="text-white" />
                                </div>
                                <span className="bg-[#0d6d55]/10 text-[#0d6d55] text-xs font-semibold px-3 py-1 rounded-full">
                                  UK Certified
                                </span>
                              </div>

                              {/* Title */}
                              <h3 className="font-semibold text-[#0d1b4c] text-lg mb-3 group-hover:text-[#0d6d55] transition-colors line-clamp-2 min-h-[56px]">
                                {course.title}
                              </h3>

                              {/* Description */}
                              <p className="text-gray-500 text-sm mb-4 line-clamp-3 min-h-[60px]">
                                {course.description}
                              </p>

                              {/* Divider */}
                              <div className="border-t border-gray-100 pt-4">
                                {/* Features */}
                                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                                  <span className="flex items-center gap-1.5">
                                    <Globe
                                      size={14}
                                      className="text-[#0d6d55]"
                                    />
                                    100% Online
                                  </span>
                                  <span className="flex items-center gap-1.5">
                                    <Clock
                                      size={14}
                                      className="text-[#c9a227]"
                                    />
                                    Self-Paced
                                  </span>
                                  <span className="flex items-center gap-1.5">
                                    <Award
                                      size={14}
                                      className="text-[#0d6d55]"
                                    />
                                    Certificate
                                  </span>
                                </div>

                                {/* CTA Button */}
                                <Link
                                  href="/contact"
                                  className="w-full bg-[#0d1b4c] hover:bg-[#0d6d55] text-white text-sm font-medium py-3 rounded-xl transition-colors flex items-center justify-center gap-2 group-hover:gap-3"
                                >
                                  Enquire Now
                                  <ArrowRight
                                    size={16}
                                    className="transition-transform group-hover:translate-x-1"
                                  />
                                </Link>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {selectedCategory === "All" &&
                        courses.length > 6 &&
                        !isExpanded && (
                          <div className="text-center mt-6">
                            <button
                              onClick={() => toggleCategory(category)}
                              className="text-[#0d6d55] font-medium hover:underline inline-flex items-center gap-1"
                            >
                              View all {courses.length} courses
                              <ArrowRight size={16} />
                            </button>
                          </div>
                        )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {Object.keys(filteredCourses).length === 0 && (
              <div className="text-center py-16">
                <BookOpen size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  No courses found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#0d1b4c]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Ready to Start Learning?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Enroll in any of our {totalCourses}+ courses and earn a
                UK-recognised certificate.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/apply"
                  className="bg-[#c9a227] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#d4af37] transition-colors inline-flex items-center gap-2"
                >
                  Apply Now
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
