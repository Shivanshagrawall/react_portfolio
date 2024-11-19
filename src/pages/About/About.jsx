import React from 'react'
import Navbar from '../../Components/Navbar'
import './About.css'
import Info from '../../Components/Info'
import { MdDownload } from "react-icons/md";
import Statas from '../../Components/Statas';
import Skill from '../../Components/Skill';
import Experience from '../../Components/Experience';
import Education from '../../Components/Education';
const About = () => {
  // About Section
  return (
    <div>
      <div className="about_section">
        {/* Heading */}
        <div className="about_heading">
          <h1>About <span>Me</span></h1>
        </div>
        {/* Personal Info and Stats */}
        <div className="personal_info_and_stats">
          <div className="personal_info">
            <h4>Personal Infos</h4>
            <div className="Info_details">
              <Info />
            </div>
            <a className="cv" target='_blank' href='https://drive.google.com/file/d/12NraonoI71h8wzlHgy2zCFxmRs2HQgyf/view?usp=drivesdk'>
              <button className='cvbtn'>Download CV <span><MdDownload /></span></button>
            </a>
          </div>
          <div className="stats">
            <Statas />
          </div>
        </div>
        <div className="seperator"></div>
        {/* Skills Section */}
        <div className="skills">
          <div className="skills_heading">
            <h1>My  <span>Skills</span></h1>
          </div>
          <div className="skills_taken">
            <Skill />
          </div>
        </div>

        <div className="seperator"></div>
        {/* Experience and Education Section */}
        <div className="experiece_and_education_section">
          <div className="experience_and_education_heading">
            <h1>Experience <span>&</span> Education</h1>
          </div>
          <div className="experiences_and_education_content">
            <div className="experiences_section"><Experience /></div>
            <div className="education_section"><Education /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About