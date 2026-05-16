import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileSidebar = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 1. BACKDROP OVERLAY */}
          {/* Dimmed background that closes the sidebar when clicked */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black md:hidden"
            aria-hidden="true" 
          />

          {/* 2. SIDEBAR PANEL */}
          {/* Slides in from the left (-100% to 0) */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-y-0 left-0 z-50 w-64 bg-white p-5 shadow-xl dark:bg-gray-900 md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            {/* Header section inside sidebar containing the close button */}
            <div className="flex justify-end mb-6">
              <button 
                onClick={onClose} 
                className="p-2 text-gray-600 dark:text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Close navigation menu"
              >
                {/* Visual "X" Close Icon */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* 3. NAVIGATION LINKS */}
            {/* Replace these placeholder links with the actual routes/links used in AuraXam */}
            <nav className="flex flex-col space-y-4">
              <a 
                href="#home" 
                onClick={onClose} 
                className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors"
              >
                Home
              </a>
              <a 
                href="#about" 
                onClick={onClose} 
                className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors"
              >
                About
              </a>
              {/* Add other specific links here */}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileSidebar;
