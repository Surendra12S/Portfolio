import './About.css'
import { FaUserGraduate, FaLaptopCode } from "react-icons/fa6";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

function About() {



  return (
    <div className='about-container'>
      <div className="grid-container">
        <div className="grid-background" />
        <div className="grid-mask" />
        <h1>About Me</h1>

        <div className="introduction">
          <h2>
            I'm Surendra, a Full Stack Web Developer with a strong foundation in
            the MERN stack. I specialize in building responsive, scalable web applications
            and have a passion for clean, efficient code. I'm currently seeking opportunities
            to contribute to real-world projects and grow as a developer.
          </h2>
        </div>

        <div className='EduExpSection'>
          <div className="inner-box">
            <div className="eduContainer">

              <div className='eduIconContainer'>
                <FaUserGraduate className='EduIcon' />
                <h3>Education</h3>
              </div>
              <div className='EduDetailsDegree'>
                <p>B.Sc. in Computer Science - Andhra University</p>
                <p>[CGPA: 8.5/10]</p>
              </div>
              <div className='EduDetailsInter'>
                <p>Intermediate - Sri Chaitanya Junior College</p>
                <p>[Percentage: 82%]</p>
              </div>
              <div>
                <p>10th - Narayana EM School</p>
                <p>[CGPA: 9.2/10]</p>
              </div>

            </div>
          </div>

          <div className="expContainer">
            <div className="inner-box-two">
              <div className='ExpIconContainer'>
                <FaLaptopCode className='ExpIcon' />
                <h3>Experience</h3>
              </div>
              <p  >Completed a 6-month full stack development internship at CMS, Visakhapatnam</p>
              <p className='intrenship'>(Jan-Apr 2024)</p>
              <p>Completed a short-term Software Developer Internship at CMS Skill Center.</p>
              <p className='fresherPar' ><span className='ColorGradiant' >Fresher</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;

