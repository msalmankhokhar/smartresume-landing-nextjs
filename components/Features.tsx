'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  HiSparkles, 
  HiLightningBolt, 
  HiShieldCheck, 
  HiChartBar, 
  HiUserGroup, 
  HiCog,
  HiDocumentText,
  HiSearch,
  HiChip
} from 'react-icons/hi';

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const features = [    {
      icon: HiChip,
      title: 'Enterprise AI Engine',
      description: 'Advanced machine learning algorithms analyze resumes with 99.2% accuracy, processing 10,000+ candidates simultaneously for Fortune 500 scale.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: HiSearch,
      title: 'Intelligent Talent Discovery',
      description: 'Proprietary matching algorithms identify top talent from millions of profiles, reducing time-to-fill by 75% for enterprise teams.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: HiLightningBolt,
      title: 'Automated Workflow Engine',
      description: 'Enterprise-grade automation handles screening, ranking, and initial assessments, processing 50,000+ applications daily.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: HiChartBar,
      title: 'Executive Dashboard & Analytics',
      description: 'Real-time recruitment intelligence with C-suite reporting, predictive hiring metrics, and ROI tracking across departments.',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: HiUserGroup,
      title: 'Enterprise Collaboration Suite',
      description: 'Advanced team coordination with role-based permissions, approval workflows, and integrated communication for global teams.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      icon: HiShieldCheck,
      title: 'Compliance & Bias Elimination',
      description: 'Enterprise-grade compliance tools ensure EEOC adherence while eliminating bias with certified fair hiring algorithms.',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: HiDocumentText,
      title: 'Enterprise System Integration',
      description: 'Native integrations with 200+ enterprise systems including Workday, SuccessFactors, and custom HRIS platforms.',
      color: 'text-teal-600',
      bgColor: 'bg-teal-50'
    },    {
      icon: HiCog,
      title: 'Enterprise Workflow Automation',
      description: 'Configure complex approval chains, custom scoring models, and automated decision workflows for multi-department coordination.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: HiSparkles,
      title: 'Predictive Hiring Intelligence',
      description: 'Machine learning models predict candidate success, tenure, and performance with 94% accuracy for strategic workforce planning.',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    }
  ];

  return (
    <section id="features" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >          <div className="flex items-center justify-center space-x-2 mb-4">
            <HiSparkles className="text-tertiary" size={24} />
            <span className="text-tertiary font-medium text-sm uppercase tracking-wide">
              Enterprise Platform
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Built for Enterprise Scale
            <span className="text-primary block">Trusted by Global Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our enterprise-grade AI platform processes millions of candidates daily, 
            powering recruitment for Fortune 500 companies worldwide with unmatched accuracy and scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`inline-flex p-4 rounded-xl ${feature.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`${feature.color} w-8 h-8`} />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Your Hiring?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of companies already using SmartResume to hire better, faster.
            </p>
            <motion.a
              href={process.env.NEXT_PUBLIC_JOBSEEKER_PORTAL_SIGNUP_URL || 'https://jobseeker.smartresumeltd.com/signup'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
            >
              Get Started
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
