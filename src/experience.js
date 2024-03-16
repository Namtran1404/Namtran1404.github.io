import React, { useState, useEffect } from 'react';
import './index.css'; // Import your CSS file with animations

const ScrollAnimationComponent2 = () => {
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
    <div className={isScrolled ? 'animatedClassName active' : 'animatedClassName'}>
     
        <div className='experience'>
        <h1 class="fw-light text-white m-0">Experience</h1>
        <h1 class="fw-light text-white m-0">Don't have any</h1>
        <h1 class="fw-light text-white m-0">Currently unemploy</h1>
      </div>
    </div>
  );
};

export default ScrollAnimationComponent2;
