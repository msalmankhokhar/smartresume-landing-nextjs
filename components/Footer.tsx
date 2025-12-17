'use client';

import { motion } from 'framer-motion';
import { 
  FiTwitter, 
  FiLinkedin, 
  FiFacebook, 
  FiMail, 
  FiPhone, 
  FiMapPin 
} from 'react-icons/fi';
import Logo from './Logo';

export default function Footer() {
  const footerLinks = {    product: [
      { name: 'Enterprise Platform', href: '#platform' },
      { name: 'AI Engine', href: '#ai-engine' },
      { name: 'Analytics Suite', href: '#analytics' },
      { name: 'API & Integrations', href: '#integrations' },
    ],
    company: [
      { name: 'About SmartResume', href: '#about' },
      { name: 'Leadership Team', href: '#leadership' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press & Media', href: '#press' },
    ],
    resources: [
      { name: 'Enterprise Documentation', href: '#docs' },
      { name: 'Customer Success', href: '#success' },
      { name: 'Security & Compliance', href: '#security' },
      { name: 'ROI Calculator', href: '#roi' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Master Service Agreement', href: '#msa' },
      { name: 'Data Processing Agreement', href: '#dpa' },
      { name: 'Security Whitepaper', href: '#security-whitepaper' },
    ]
  };

  const socialLinks = [
    { icon: FiTwitter, href: '#', label: 'Twitter' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FiFacebook, href: '#', label: 'Facebook' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="invert">
                <Logo />
              </div>
            </div>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              The enterprise AI platform trusted by Fortune 500 companies to transform 
              talent acquisition at scale. Secure, compliant, and built for global teams.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <FiMail className="w-5 h-5" />
                <span>support@smartresumeltd.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="w-5 h-5" />
                <span>+1 (800) SMART-HR</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMapPin className="w-5 h-5" />
                <span>Global Headquarters: UK</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        {/* <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Stay Updated
              </h3>
              <p className="text-gray-300">
                Get the latest insights on AI recruitment and hiring best practices.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors duration-200"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 SmartResume. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">
                Built with ❤️ for better hiring
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
