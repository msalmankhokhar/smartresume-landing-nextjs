'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const stats = [
    {
      number: '75%',
      label: 'Time-to-Hire Reduction',
      description: 'Average improvement across Fortune 500 clients'
    },
    {
      number: '99.2%',
      label: 'AI Accuracy Rate',
      description: 'Industry-leading candidate matching precision'
    },
    {
      number: '2,500+',
      label: 'Enterprise Clients',
      description: 'Global companies trust our platform'
    },
    {
      number: '50M+',
      label: 'Profiles Processed',
      description: 'Analyzed by our enterprise AI engine daily'
    }
  ];

  return (
    <section id="how-it-works" ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Powering Enterprise Hiring Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join Fortune 500 companies who have transformed their talent acquisition 
            with SmartResume&apos;s enterprise AI platform
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 mb-8 font-medium">
            Trusted by leading companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-60">
            {/* Placeholder for company logos */}
            {['TechCorp', 'InnovateInc', 'GlobalSoft', 'FutureWorks', 'DataDriven', 'CloudFirst'].map((company) => (
              <div
                key={company}
                className="text-gray-400 font-bold text-lg lg:text-xl"
              >
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
