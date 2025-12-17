'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'jobseeker' | 'recruiter' | 'pricing' | 'technical';
}

const faqs: FAQItem[] = [
  // General
  {
    question: 'What is SmartResume?',
    answer: 'SmartResume is an AI-powered platform that helps job seekers create professional, ATS-optimized resumes and helps recruiters find and evaluate top talent efficiently. Our platform uses advanced AI technology to match candidates with opportunities and streamline the hiring process.',
    category: 'general',
  },
  {
    question: 'How does SmartResume work?',
    answer: 'SmartResume uses artificial intelligence to analyze job descriptions and resumes, providing intelligent matching, ATS optimization, and automated application tracking. Job seekers can create tailored resumes for each position, while recruiters can quickly find qualified candidates and manage their hiring pipeline.',
    category: 'general',
  },
  {
    question: 'Is SmartResume free to use?',
    answer: 'SmartResume offers both free and premium plans. Job seekers can create basic resumes for free, while premium features include unlimited resume versions, advanced ATS optimization, and priority support. Recruiters have access to different tiers based on their hiring needs.',
    category: 'general',
  },
  
  // Job Seekers
  {
    question: 'How do I create a resume on SmartResume?',
    answer: 'After signing up as a job seeker, you can create your profile and start building your resume using our intuitive builder. Simply fill in your details, work experience, education, and skills. Our AI will help optimize your content for ATS systems and suggest improvements to make your resume stand out.',
    category: 'jobseeker',
  },
  {
    question: 'What is ATS optimization and why is it important?',
    answer: 'ATS (Applicant Tracking System) is software used by most companies to screen resumes before they reach human recruiters. ATS optimization ensures your resume is formatted and contains keywords that these systems can easily read and rank highly. SmartResume automatically optimizes your resume for ATS compatibility, increasing your chances of getting noticed.',
    category: 'jobseeker',
  },
  {
    question: 'Can I create multiple versions of my resume?',
    answer: 'Yes! Premium users can create unlimited resume versions, allowing you to tailor your resume for different job applications. Each version can be customized with specific keywords, skills, and experiences relevant to the position you\'re applying for.',
    category: 'jobseeker',
  },
  {
    question: 'How do I track my job applications?',
    answer: 'SmartResume includes a built-in application tracker where you can monitor all your job applications, their status, upcoming interviews, and follow-up tasks. This helps you stay organized and never miss an opportunity.',
    category: 'jobseeker',
  },
  
  // Recruiters
  {
    question: 'How can SmartResume help my recruitment process?',
    answer: 'SmartResume streamlines your entire hiring workflow by aggregating candidates from multiple sources, using AI to match candidates with your job requirements, providing detailed candidate analytics, and automating communication. This saves time and helps you find the best talent faster.',
    category: 'recruiter',
  },
  {
    question: 'Can I post jobs on SmartResume?',
    answer: 'Yes, recruiters can post unlimited job openings on SmartResume. Your job postings will be visible to our community of job seekers, and our AI will automatically match and recommend qualified candidates based on your requirements.',
    category: 'recruiter',
  },
  {
    question: 'How does candidate matching work?',
    answer: 'Our AI analyzes job descriptions and candidate profiles to provide intelligent matching based on skills, experience, education, and other relevant factors. You\'ll receive a match score for each candidate, making it easy to identify the most qualified applicants quickly.',
    category: 'recruiter',
  },
  {
    question: 'Can I collaborate with my team on SmartResume?',
    answer: 'Yes, our team plans allow multiple recruiters to collaborate on the hiring process. You can share candidate profiles, leave notes, coordinate interviews, and manage your entire team\'s recruitment activities from one centralized platform.',
    category: 'recruiter',
  },
  
  // Pricing
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express) and debit cards. All payments are processed securely through our encrypted payment gateway.',
    category: 'pricing',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel your subscription at any time from your account settings. Your premium features will remain active until the end of your current billing period, and you won\'t be charged again.',
    category: 'pricing',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'We offer a 14-day money-back guarantee for new subscribers. If you\'re not satisfied with SmartResume, contact our support team within 14 days of your purchase for a full refund.',
    category: 'pricing',
  },
  {
    question: 'Are there any enterprise plans available?',
    answer: 'Yes, we offer custom enterprise solutions for large organizations with advanced features, dedicated support, and flexible pricing. Contact our sales team to discuss your specific requirements.',
    category: 'pricing',
  },
  
  // Technical
  {
    question: 'Is my data secure on SmartResume?',
    answer: 'Absolutely. We take data security very seriously. All data is encrypted in transit and at rest using industry-standard encryption. We comply with GDPR and other data protection regulations, and we never share your personal information with third parties without your explicit consent.',
    category: 'technical',
  },
  {
    question: 'Which file formats can I export my resume in?',
    answer: 'You can export your resume in multiple formats including PDF, Word (DOCX), and plain text. PDF is recommended for most applications as it preserves formatting across all devices and platforms.',
    category: 'technical',
  },
  {
    question: 'Can I import my existing resume?',
    answer: 'Yes, you can upload your existing resume in PDF or Word format, and our AI will automatically parse the information to populate your SmartResume profile. You can then edit and optimize it further.',
    category: 'technical',
  },
  {
    question: 'Is SmartResume mobile-friendly?',
    answer: 'Yes, SmartResume is fully responsive and works seamlessly on all devices including smartphones and tablets. You can create, edit, and manage your resumes or recruitment activities on the go.',
    category: 'technical',
  },
];

const categories = [
  { id: 'all', label: 'All Questions' },
  { id: 'general', label: 'General' },
  { id: 'jobseeker', label: 'For Job Seekers' },
  { id: 'recruiter', label: 'For Recruiters' },
  { id: 'pricing', label: 'Pricing & Billing' },
  { id: 'technical', label: 'Technical' },
];

function FAQAccordion({ faq, isOpen, onToggle }: { faq: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      initial={false}
      className="border border-gray-200 rounded-lg overflow-hidden bg-white"
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
      >
        <span className="font-semibold text-gray-900 pr-8">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <HiChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-4 text-gray-600 leading-relaxed">
          {faq.answer}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about SmartResume. Can&apos;t find what you&apos;re looking for? 
              Contact our support team.
            </p>
          </motion.div>
        </section>

        {/* Category Filter */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setOpenIndex(null); // Close all accordions when switching categories
                }}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        </section>

        {/* FAQ List */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            {filteredFaqs.map((faq, index) => (
              <FAQAccordion
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </motion.div>
        </section>

        {/* Contact CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-r from-primary to-purple-600 rounded-2xl p-8 text-center text-white"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Still have questions?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Our support team is here to help you get the most out of SmartResume
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Contact Support
            </button>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
