import React from 'react';
import './index.css'; // Import your CSS file for styling

const ProjectBox = () => {
  return (
    <div>
    <div className='project-box'>
      <h1 className="project-title">C# project</h1>
      <p className="project-description">use ASP.net to creat web app</p>
      <a href="https://github.com/your-github-username" className="github-link">GitHub Repository</a>
    </div>
    <div className='project-box'>
      <h1 className="project-title">Angular project</h1>
      <p className="project-description">create web using simple component</p>
      <a href="https://github.com/your-github-username" className="github-link">GitHub Repository</a>
    </div>
    <div className='project-box'>
      <h1 className="project-title">Java project</h1>
      <p className="project-description">use springboot</p>
      <a href="https://github.com/your-github-username" className="github-link">GitHub Repository</a>
    </div>


    </div>
    
    
  );
};

export default ProjectBox;
