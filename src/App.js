import React, { useState } from 'react';
import ScrollAnimationComponent from './scrollaboutmeanimation';
import ScrollAnimationComponent2 from './experience';
import ScrollAnimationComponent3 from './scrollanimation3';
const Portfolio = () => {
  

  return (
    
    <div className='container'>
       
        <ScrollAnimationComponent/>
       
        <ScrollAnimationComponent2/>
        <ScrollAnimationComponent3/>
        
        
        <div className='projects'>

        </div>
        <div className='education'>

        </div>


    </div>
  );
};

export default Portfolio;