'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const benefits = [
    'Enterprise-grade security & compliance',
    'Dedicated customer success team',
    'Custom integration & white-glove setup',
    'Advanced analytics & executive reporting',
    'Multi-tenant architecture & SSO',
    '24/7 priority support & SLA guarantee'
  ];

  return (
    <section id="pricing" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden"
        >
          {/* Background Decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center space-x-2 mb-6"
                >
                  <HiSparkles size={24} />                  <span className="font-medium text-sm uppercase tracking-wide opacity-90">
                    Enterprise Solution Ready
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                >
                  Scale Your Enterprise
                  <span className="block">Hiring Intelligence</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-xl mb-8 opacity-90 leading-relaxed"
                >
                  Join Fortune 500 companies who have transformed their talent acquisition
                  with our enterprise AI platform. Schedule a custom demo and discover
                  how SmartResume can revolutionize your hiring at scale.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4"
                >                  
                <motion.a
                  href={process.env.NEXT_PUBLIC_RECRUITER_PORTAL_SIGNUP_URL || 'https://recruiter.smartresumeltd.com/signup'}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors duration-200"
                >
                    <span>Sign Up Now</span>
                    <FiArrowRight />
                  </motion.a>

                </motion.div>
              </div>

              {/* Right Content - Benefits */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
              >                <h3 className="text-2xl font-bold mb-6">
                  Enterprise Demo Includes
                </h3>

                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="bg-white/20 rounded-full p-1">
                        <FiCheck className="w-4 h-4" />
                      </div>
                      <span className="opacity-90">{benefit}</span>
                    </motion.div>
                  ))}
                </div>                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="flex items-center justify-between text-sm opacity-75">
                    <span>Custom enterprise demo</span>
                    <span>ROI analysis included</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 pt-8 border-t border-white/20 flex flex-wrap items-center justify-center gap-8 text-sm opacity-75"
            >              <div className="flex items-center space-x-2">
                <FiCheck className="w-4 h-4" />
                <span>SOC 2 Type II Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiCheck className="w-4 h-4" />
                <span>Enterprise SSO Ready</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiCheck className="w-4 h-4" />
                <span>99.9% SLA Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiCheck className="w-4 h-4" />
                <span>24/7 Priority Support</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
