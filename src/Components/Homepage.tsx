import React, { useEffect } from 'react';
import HowItWorks from './Howitworks';
import Services from './Services';
import VideoBackground from './VideoBackground';

const Homepage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Runs once on mount

  return (
    <>
      <VideoBackground />
      <Services />
      <HowItWorks />
      
      
      
    </>
  );
};

export default Homepage;
