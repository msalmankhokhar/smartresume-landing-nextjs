'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import Logo from './Logo';
import Link from 'next/link';

type UserType = 'jobseeker' | 'recruiter';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userType, setUserType] = useState<UserType>('jobseeker');
  
  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Pricing', href: '#pricing' },
  ];

  const authLinks = {
    jobseeker: {
      login: process.env.NEXT_PUBLIC_JOBSEEKER_PORTAL_LOGIN_URL || 'https://jobseeker.smartresumeltd.com/login',
      signup: process.env.NEXT_PUBLIC_JOBSEEKER_PORTAL_SIGNUP_URL || 'https://jobseeker.smartresumeltd.com/signup',
    },
    recruiter: {
      login: process.env.NEXT_PUBLIC_RECRUITER_PORTAL_LOGIN_URL || 'https://recruiter.smartresumeltd.com/login',
      signup: process.env.NEXT_PUBLIC_RECRUITER_PORTAL_SIGNUP_URL || 'https://recruiter.smartresumeltd.com/signup',
    },
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* User Type Toggle */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setUserType('jobseeker')}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                  userType === 'jobseeker'
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Job Seeker
              </button>
              <button
                onClick={() => setUserType('recruiter')}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                  userType === 'recruiter'
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Recruiter
              </button>
            </div>

            <Link 
              href={authLinks[userType].login} 
              className="cursor-pointer text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Login
            </Link>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={authLinks[userType].signup}
                className="inline-block cursor-pointer bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
              >
                Sign Up
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-primary transition-colors duration-200"
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              <div className="pt-4 border-t border-gray-200 space-y-3">
                {/* Mobile User Type Toggle */}
                <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setUserType('jobseeker')}
                    className={`flex-1 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                      userType === 'jobseeker'
                        ? 'bg-white text-primary shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Job Seeker
                  </button>
                  <button
                    onClick={() => setUserType('recruiter')}
                    className={`flex-1 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                      userType === 'recruiter'
                        ? 'bg-white text-primary shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Recruiter
                  </button>
                </div>

                <Link 
                  href={authLinks[userType].login}
                  className="block w-full text-center text-gray-700 hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href={authLinks[userType].signup}
                  className="block w-full text-center bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
