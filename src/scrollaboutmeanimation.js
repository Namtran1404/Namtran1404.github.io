import React, { useState, useEffect } from 'react';
import './App.css'; // Import your CSS file with animations
import img from './avatar.jpg'
const ScrollAnimationComponent = () => {
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
    <div className={isScrolled ? 'animatedClassName' : 'regularClassName'}>
    <div className='about_me'>
    <div className='my_image'>
        <img src={img} alt='image'></img>
    </div>
    <div className='description'>
      <h1 class="fw-light text-white m-0">Not a front-end dev</h1>
      <br/>
      <h1 class="fw-light text-white m-0">Contact me</h1>
      <div className='info_content'>
        <a href="#" class="btn btn-primary">
          <i class="fab fa-facebook-f"></i> Facebook
        </a>

        <a href="#" class="btn btn-dark">
          <i class="fab fa-github"></i> GitHub
        </a>

        <a href="#" class="btn btn-primary">
          <i class="fab fa-linkedin-in"></i> LinkedIn
        </a>
      </div>
    </div>
</div>
</div>
  );
};

export default ScrollAnimationComponent;
