import React, { useState, useEffect } from 'react';
import './App.css'; // Import your CSS file with animations
import img from './avatar.jpg';
import ProjectBox from './projectbox';
const ScrollAnimationComponent3 = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 100) { // You can adjust this value based on your need
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='project'>
        <h1 className="fw-light text-white m-0">My project</h1>
        <ProjectBox/>
    </div>
    
  );
};

export default ScrollAnimationComponent3;
