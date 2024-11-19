import React from 'react'
import './Education.css'
import { education } from '../data'
const Education = () => {
  return (
    // Education Section
    <div className='education_list'>
      {education.map((item) => {
        // Education Section Items
        return (
          <div className="education_item" key={item.id}>
            <div className='education_icon'>{item.icon}</div>
            <div className="education_year">{item.year}</div>
            <div className="education_title">{item.title}</div>
            <div className="education_desc">{item.desc}</div>
            <div className="education_marks">{item.marks}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Education