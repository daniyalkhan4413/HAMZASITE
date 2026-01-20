import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './navbar';
import Footer from './Components/Footer';

import Homepage from './Components/Homepage';
import AboutUsPage from './Components/Aboutus';
import ContactPage from './Components/Contactus';
import NotFoundPage from './Components/Notfound'; // 👉 Import 404 page


import './App.css';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Homepage /></PageWrapper>} />
         
         
          <Route path="/about" element={<PageWrapper><AboutUsPage /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
         
          {/* 👉 Catch-all route for 404 */}
          <Route path="*" element={<PageWrapper><NotFoundPage /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" }); // You can use 'smooth' if preferred
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default App;
