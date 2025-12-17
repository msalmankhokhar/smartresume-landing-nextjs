'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiStar } from 'react-icons/hi';

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Chief Talent Officer',
      company: 'Microsoft',
      avatar: '/assets/icons/avatar.svg',
      rating: 5,
      quote: 'SmartResume&apos;s enterprise platform transformed our global hiring at scale. We&apos;ve reduced time-to-hire by 78% across 180 countries while maintaining our high talent bar.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'VP of Global Talent Acquisition',
      company: 'Goldman Sachs',
      avatar: '/assets/icons/avatar.svg',
      rating: 5,
      quote: 'The predictive analytics and bias elimination features are exceptional. We&apos;ve improved hiring quality by 65% while ensuring complete compliance with global regulations.'
    },
    {
      name: 'Emily Johnson',
      role: 'Head of Talent Strategy',
      company: 'Amazon',
      avatar: '/assets/icons/avatar.svg',
      rating: 5,
      quote: 'Processing 50,000+ applications daily was impossible before SmartResume. Their AI engine handles our enterprise volume while identifying top 1% candidates with 99% accuracy.'
    },
    {
      name: 'David Kim',
      role: 'Chief Human Resources Officer',
      company: 'JPMorgan Chase',
      avatar: '/assets/icons/avatar.svg',
      rating: 5,
      quote: 'The ROI was immediate and substantial. We&apos;ve saved $2.3M annually in recruiting costs while dramatically improving candidate experience and quality.'
    },
    {
      name: 'Lisa Thompson',
      role: 'Global Head of Recruitment',
      company: 'Deloitte',
      avatar: '/assets/icons/avatar.svg',
      rating: 5,
      quote: 'Enterprise-grade security, seamless integration with our existing systems, and unmatched AI accuracy. SmartResume delivers everything we need at Fortune 500 scale.'
    },
    {
      name: 'James Wilson',
      role: 'VP of People Operations',
      company: 'Tesla',
      avatar: '/assets/icons/avatar.svg',
      rating: 5,
      quote: 'Scaling from 100K to 500K employees required next-level hiring technology. SmartResume&apos;s enterprise platform made rapid, quality hiring possible.'
    }
  ];

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Fortune 500
            <span className="text-primary block">Global Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how the world&apos;s largest enterprises are transforming their talent acquisition 
            with SmartResume&apos;s AI-powered platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <HiStar key={i} className="text-yellow-400 w-5 h-5" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-gray-600 font-semibold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-primary font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-gray-600">Uptime</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">SOC 2</div>
            <div className="text-gray-600">Compliant</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
