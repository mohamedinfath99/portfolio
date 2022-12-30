import React from "react";
import "./Experience.css";



const Experience = () => {
  return (
    <div className="experience" id='experience'>

      <div className="achievement">
        <div className="circle" style={{color: 'var(--orange)'}}>4 M</div>
        <span  style={{color: 'white'}}>years </span>
        <span>Experience</span>
      </div>

      <div className="achievement">
        <div className="circle" style={{color: 'var(--orange)'}}>3</div>
        <span  style={{color: 'white'}}>completed </span>
        <span>Projects</span>
      </div>

      <div className="achievement">
        <div className="circle" style={{color: 'var(--orange)'}}>-</div>
        <span  style={{color: 'white'}}>companies </span>
        <span>Work</span>
      </div>

    </div>
  );
};

export default Experience;
