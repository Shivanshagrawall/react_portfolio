import React from 'react'
import './Experience.css'
import { experience } from '../data'
const Experience = () => {
  return (
    // Experience Section
    <div className='experience_list'>
      {/* Experience Lists Item */}
      {experience.map((item) => {
        return (
          <div className="experience_item" key={item.id}>
            <div className='experience_icon'>{item.icon}</div>
            <div className="experience_year">{item.year}</div>
            <div className="experience_title">{item.title}</div>
            <div className="experience_desc">{item.desc}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Experience