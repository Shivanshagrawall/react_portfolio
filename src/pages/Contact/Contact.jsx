import React from 'react'
import Navbar from '../../Components/Navbar'
import './Contact.css';
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoCall } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
const Contact = () => {
  // Contact Section
  const responseSubmitted=()=>{
    alert('Your Message is Submitted');
  }
  return (
    <div>
      <div className="contact_section">
        {/* Contact Heading */}
        <div className="contact_title">
          <h2>Get In <span> Touch </span></h2>
        </div>

        {/* Contact Deatils Section */}
        <div className="contact_deatils">
          <div className="contact_description">
            <h3>Contact Me</h3>
            <p>Let's connect and discuss how I can contribute to your project or business.</p>
            <div className="email_section">
              <div className="email_image">
                <HiOutlineMailOpen />
              </div>
              <div className="email">
                <p>Mail Me</p>
                <p>shivanshagrawal3007@gmail.com</p>
              </div>
            </div>
            <div className="call_section">
              <div className="call_image">
                <IoCall />
              </div>
              <div className="call">
                <p>Call Me</p>
                <p>+91 8840458752</p>
              </div>
            </div>
            <div className="image"></div>
          </div>

          {/* Contact Message Section */}
          <form action="https://formspree.io/f/xbljeorz" method="POST" className="contact_message">
            <div className="message_deatils">
              <input type="text" name="name" id="name" placeholder='Your Name' />
              <input type="text" name="email" id="email" placeholder='Your Email' />
              <input type="text" name="subject" id="subject" placeholder='Your Subject' />
            </div>
            <div className="message_content">
              <textarea name="message" id="message" cols="30" rows="10" placeholder='Your Message'></textarea>
            </div>
            <div className="send_message">
              <button type="submit" onClick={()=>{responseSubmitted()}}>Send Message <span><IoIosSend /></span> </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact