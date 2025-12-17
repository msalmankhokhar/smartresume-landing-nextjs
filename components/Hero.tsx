'use client';

import { motion } from 'framer-motion';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import { HiSparkles, HiLightningBolt, HiShieldCheck } from 'react-icons/hi';

export default function Hero() {
  return (
    <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center space-x-2 mb-6"
          >
            <HiSparkles className="text-tertiary" size={20} />
            <span className="text-tertiary font-medium text-sm uppercase tracking-wide">
              AI-Powered Resume Intelligence
            </span>
          </motion.div>          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            The Future of
            <span className="text-primary block">Enterprise Hiring</span>
            <span className="text-secondary">is Here</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-600 mb-8 leading-relaxed"
          >
            SmartResume empowers enterprise teams with AI-driven recruitment intelligence.
            Reduce time-to-hire by 75%, eliminate bias, and discover exceptional talent
            with our advanced machine learning platform trusted by Fortune 500 companies.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <motion.a
              href={process.env.NEXT_PUBLIC_JOBSEEKER_PORTAL_SIGNUP_URL || 'https://jobseeker.smartresumeltd.com/signup'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 hover:bg-primary/90 transition-colors duration-200"
            >
              <span>Create Free Account</span>
              <FiArrowRight />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center space-x-6 text-sm text-gray-500"
          >
            <div className="flex items-center space-x-2">
              <HiLightningBolt className="text-tertiary" />
              <span>Enterprise-grade security</span>
            </div>
            <div className="flex items-center space-x-2">
              <HiShieldCheck className="text-tertiary" />
              <span>SOC 2 & GDPR Compliant</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Interactive Demo/Visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative bg-white rounded-2xl shadow-2xl p-8">
            {/* Mock Dashboard */}
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  Candidate Analysis
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-gray-500">AI Processing</span>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="space-y-4">
                {[
                  { label: 'Skills Match', percentage: 92, color: 'bg-green-500' },
                  { label: 'Experience Level', percentage: 85, color: 'bg-blue-500' },
                  { label: 'Culture Fit', percentage: 78, color: 'bg-purple-500' },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.8 + index * 0.2, duration: 0.8 }}
                  >
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">{item.label}</span>
                      <span className="text-gray-500">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.percentage}%` }}
                        transition={{ delay: 0.8 + index * 0.2, duration: 0.8 }}
                        className={`h-2 ${item.color} rounded-full`}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Recommendation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border border-green-200"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <HiSparkles className="text-green-600" size={16} />
                  <span className="text-green-800 font-medium text-sm">
                    AI Recommendation
                  </span>
                </div>
                <p className="text-green-700 text-sm">
                  Excellent candidate match! Strong technical skills and cultural alignment.
                  Recommend for interview.
                </p>
              </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-tertiary text-white p-3 rounded-full shadow-lg"
            >
              <HiSparkles size={20} />
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-secondary text-white p-3 rounded-full shadow-lg"
            >
              <HiLightningBolt size={20} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
