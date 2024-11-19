import React from 'react'
import Navbar from '../../Components/Navbar'
import { FaArrowRight } from "react-icons/fa";
import images from '../../assets/A._P._J._Abdul_Kalam.jpg';
import profile from '../../assets/Profile.jpg';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
  // Home Section
  return (
    <div>
      <div className="home section">
        {/* Image Section */}
        <div className="home_img">
          <img src={profile} alt="Profile Images" />
        </div>

        {/* Home Content Section */}
        <div className="home_content">
          <h1 className='home_title'>
            <span>I'm Shivansh Agrawal</span> <br /> Software Developer
          </h1>
          <div className="home_description">
            Passionate and dedicated aspiring software engineer with expertise in MERN stack. Focused on solving real-world problems through innovative web solutions and committed to achieving excellence in software development.
          </div>
            <Link to='/about' className='button_section'>
            <button className='more_about_me_button'>More About me <span><FaArrowRight /></span></button>
            </Link>
          
          {/* <div className="button_section">
            <button className='more_about_me_button'>More About me <span><FaArrowRight /></span></button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Home